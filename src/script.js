"use strict";
exports.__esModule = true;
var colorSelector = document.getElementById('color-selector');
colorSelector.addEventListener('input', function () {
    var selectedColor = colorSelector.value;
});
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);
var context = canvas.getContext('2d');
if (context)
    context.lineWidth = 5;
var isDrawing = false;
var lastX = 0;
var lastY = 0;
document.addEventListener('mousemove', function (event) {
    if (isDrawing && context) {
        context.strokeStyle = document.getElementById('color-selector').value;
        context.beginPath();
        context.moveTo(lastX, lastY);
        context.lineTo(event.clientX, event.clientY);
        context.stroke();
        lastX = event.clientX;
        lastY = event.clientY;
    }
});
document.addEventListener('mouseup', function () {
    isDrawing = false;
});
