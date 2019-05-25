 var pla1 = prompt('Player One : Enter your name, you will be Green');
 var pla1Col = 'rgb(19, 158, 17)'

 var pla2 = prompt('Player Two : Enter your name, you will be Yellow');
 var pla2Col = 'rgb(224, 221, 26)'

var game_on = true;
var table = $('table tr');

function reportWin(rowNum,colNum) {
  console.log("You won at thi r,c");
  console.log(rowNum);
  console.log(colNum);
}

function changeCol(rowInd,colInd,col){
  return table.eq(rowInd).find('td').eq(colInd).find('button').css('background-color',col);
}

function returnColor(rowInd,colInd) {
  return table.eq(rowInd).find('td').eq(colInd).find('button').css('background-color');
}

function checkBottom(colInd) {
  var colRep = returnColor(5,colInd);
  for (var row = 5 ; row > -1; row--) {
    colRep = returnColor(row,colInd);
    if(colRep === 'rgb(128, 128, 128)'){
      return row;
    }
  }
}

function matchCheck(one,two,three,four) {
  return (one === two && one === three && one === four && one !== 'rgb(128, 128, 128)' && one !== undefined);
}

function hori() {
  for (var i = 0; i < 6 ; i++) {
    for (var j = 0; j < 4; j++) {
      if (matchCheck(returnColor(i,j),returnColor(i,j+1),returnColor(i,j+2),returnColor(i,j+3))) {
        console.log('horiz');
        reportWin(i,j);
        return true;
      }
      else {
        continue;
      }
    }
  }
}

function veri() {
  for (var j = 0; j < 7 ; j++) {
    for (var i = 0; i < 3; i++) {
      if (matchCheck(returnColor(i,j),returnColor(i+1,j),returnColor(i+2,j),returnColor(i+3,j))) {
        console.log('veriz');
        reportWin(i,j);
        return true;
      }
      else {
        continue;
      }
    }
  }
}

function diag() {
  for (var j = 0; j < 5 ; j++) {
    for (var i = 0; i < 7; i++) {
      if (matchCheck(returnColor(i,j),returnColor(i+1,j+1),returnColor(i+2,j+2),returnColor(i+3,j+3))) {
        console.log('diag');
        reportWin(i,j);
        return true;
      }
      else if (matchCheck(returnColor(i,j),returnColor(i-1,j+1),returnColor(i-2,j+2),returnColor(i-3,j+3))) {
        console.log('diag');
        reportWin(i,j);
        return true;
      }
      else {
        continue;
      }
    }
  }
}

function gameEnd(winningPlayer) {
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 7; row++) {
      $('h3').fadeOut('fast');
      $('h2').fadeOut('fast');
      $('h1').text(winningPlayer+" has won! Refresh your browser to play again!").css("fontSize", "50px")
    }
  }
}

var currentPlayer = 1;
var currentName = pla1;
var currentColor = pla1Col;

$('h3').text(pla1 + " it is your turn, pick a column to drop!!")

$('.board button').on('click',function() {
  var  col = $(this).closest('td').index();
  var bottomAvail = checkBottom(col);

  changeCol(bottomAvail,col,currentColor);

  if(hori() || veri() || diag()) {
    gameEnd(currentName);
  }

  currentPlayer = currentPlayer * -1;

  if(currentPlayer === 1){
    currentName = pla1;
    $('h3').text(currentName + " it is your turn.");
    currentColor = pla1Col;
  }
  else {
      currentName = pla2;
      $('h3').text(currentName + " it is your turn.");
      currentColor = pla2Col;
  }
})
