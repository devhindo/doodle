console.log("content script loaded");
document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "[") {
        document.body.style.border = "5px solid red";
    }
})


console.log("init canvas with ctrl + [");
const canvas = document.createElement('canvas');
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.pointerEvents = 'none';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;
let coord = { x: 0, y: 0 };



function logMouseCoordinates(e: MouseEvent) {
    console.log(`Mouse coordinates: ${e.clientX}, ${e.clientY}`);
    triggerMouseHold(e);
}


var isMouseDown = false;
var isDrawing = false;

function handleMouseDown(e: MouseEvent) {
    console.log("Mouse down");
    isMouseDown = true;
    isDrawing = true;
}

function handleMouseUp(e: MouseEvent) {
    console.log("Mouse up");
    isMouseDown = false;
}

function triggerMouseHold(e: MouseEvent) {
    if (isMouseDown) {
        console.log("Mouse hold");
    }
}

document.addEventListener('mouseup', handleMouseUp);

document.addEventListener('mousedown', handleMouseDown);

document.addEventListener('mousemove', logMouseCoordinates);

const rect = canvas.getBoundingClientRect();

canvas.addEventListener("mousemove", (event: MouseEvent) => {
    if (!isDrawing) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    ctx!.strokeStyle = "blue";
    ctx?.lineTo(x, y);
    ctx?.stroke();
});

canvas.addEventListener("mouseleave", () => {
    isDrawing = false;
});