const body = document.getElementById('body');
const text = document.getElementById('text');

function red() {
    body.style.background = "red";
    text.innerHTML = 'rgb(255, 0, 0)';
}

function green() {
    body.style.background = "limegreen";
    text.innerHTML = 'rgb(0, 255, 0)';
}

function blue() {
    body.style.background = "blue";
    text.innerHTML = 'rgb(0, 0, 255)';
}

function random() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const randomColor = `rgb(${red}, ${green}, ${blue})`;

    body.style.background = randomColor;
    text.innerHTML = randomColor;
}
