/// <reference types="chrome" />
/*var canvas = document.createElement('canvas');
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '9999';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');
*/

const colorSelector = document.getElementById('color-selector') as HTMLInputElement;
var color = colorSelector.value;

colorSelector.addEventListener('input', (event: Event) => {
    const selectedColor = (event.target as HTMLInputElement).value;
    console.log(`Selected color is ${selectedColor}`);
    color = selectedColor;
});

chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
    console.log(tabs[0].url);
    console.log("hindooooooooooooooooooooooo");
});
/*
var isDrawing = false;
var lastX = 0;
var lastY = 0;

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);

canvas.addEventListener('mousedown', startDrawing);
function startDrawing(e: MouseEvent) {
    isDrawing = true;
    lastX = e.clientX;
    lastY = e.clientY;
}

function draw(e: MouseEvent) {
    if(!ctx) return;
    if (!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    lastX = e.clientX;
    lastY = e.clientY;
}

function stopDrawing() {
    isDrawing = false;
}

canvas.addEventListener('mousedown', function (event) {
    isDrawing = true;
    lastX = event.offsetX;
    lastY = event.offsetY;
});

canvas.addEventListener('mousemove', function (event) {
    if(!ctx) return;
    if (isDrawing) {
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        lastX = event.offsetX;
        lastY = event.offsetY;
    }
});

canvas.addEventListener('mouseup', function (event) {
    isDrawing = false;
});
/*
/*
chrome.tabs.executeScript({
    code: `

    `
});

function initDrawing() {

}
*/