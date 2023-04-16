import * as chrome from 'chrome';
chrome.tabs.e
var canvas = document.createElement('canvas');
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '9999';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

var ctx = canvas.getContext('2d');

var isDrawing = false;
var lastX = 0;
var lastY = 0;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);

function startDrawing(e) {
    isDrawing = true;
    lastX = e.clientX;
    lastY = e.clientY;
}

function draw(e) {
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