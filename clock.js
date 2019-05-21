var second = document.querySelector('.second-hand');
var minute = document.querySelector('.minute-hand');
var hour = document.querySelector('.hour-hand');

function trans(){
  var now = new Date();

  var sec = now.getSeconds();
  var secDeg = ((sec/60)*360)-90;
  second.style.transform = `rotate(${secDeg}deg)`;

  var min = now.getMinutes();
  var minDeg = ((min/60)*360) + ((sec/60)*6)-90;
  minute.style.transform = `rotate(${minDeg}deg)`;

  var hou = now.getHours();
  var houDeg = ((hou/12)*360) + ((min/60)*30)-90;
  hour.style.transform = `rotate(${houDeg}deg)`;
}

setInterval(trans,1000);
