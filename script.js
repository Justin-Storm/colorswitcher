const body = document.querySelector('body');
const rgbtext = document.getElementById('output');


function red() {
  body.style.backgroundColor = "red";
  rgbtext.innerHTML = 'rgb(255, 0, 0)';
}
function green() {
  body.style.backgroundColor = "limegreen";
  rgbtext.innerHTML = 'rgb(0, 255, 0)';
}
function blue() {
  body.style.backgroundColor = "blue";
  rgbtext.innerHTML = 'rgb(0, 0, 255)';
}

function random() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  const rgbcode = `rgb(${red}, ${green}, ${blue})`;

  body.style.backgroundColor = rgbcode;
  rgbtext.innerHTML = rgbcode;
}

document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();

  rgbtext.innerHTML = `rgb(${document.getElementById('red-value').value}, ${document.getElementById('green-value').value}, ${document.getElementById('blue-value').value})`;

  body.style.backgroundColor = `rgb(${document.getElementById('red-value').value}, ${document.getElementById('green-value').value}, ${document.getElementById('blue-value').value})`;

});
