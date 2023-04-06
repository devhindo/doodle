const colorSelector = document.getElementById('color-selector') as HTMLInputElement;

colorSelector.addEventListener('input', () => {
    const selectedColor = colorSelector.value;
});

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

const context = canvas.getContext('2d');
if(context) context.lineWidth = 5;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

document.addEventListener('mousemove', (event) => {
    if(isDrawing && context) {
        context.strokeStyle = (document.getElementById('color-selector') as HTMLInputElement).value;
        context.beginPath();
        context.moveTo(lastX, lastY);
        context.lineTo(event.clientX, event.clientY);
        context.stroke();
        lastX = event.clientX;
        lastY = event.clientY;
    }
});

document.addEventListener('mouseup', () => {
    isDrawing = false;
  });
