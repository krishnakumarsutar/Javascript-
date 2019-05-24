const inputs = document.querySelectorAll('.controls input');
let suffix;

inputs.forEach(input => input.addEventListener('click',update));
inputs.forEach(input => input.addEventListener('mousemove',update));

function update(){
  suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
