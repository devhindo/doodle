console.log("content script loaded");

var isCanvasActive = false;

document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (!isCanvasActive && event.ctrlKey && event.key === "[") {
        document.body.style.border = "5px solid red";
        initCanvas();
    }
});

document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (isCanvasActive && event.ctrlKey && event.key === "]") {
        document.body.style.border = "none";
        isCanvasActive = false;
        terminateCanvas();
    }
});

function terminateCanvas() {
    console.log("terminate canvas with ctrl + [");
    canvas.remove();
}

var canvas: HTMLCanvasElement;
var context: CanvasRenderingContext2D | null;

function initCanvas() {
    isCanvasActive = true;
    console.log("init canvas with ctrl + [");
    canvas = document.createElement('canvas');
    canvas.id = "canvas";
    document.body.appendChild(canvas);
    context = canvas.getContext('2d');
    context?.fillRect(50,50,200,200);

    
    
}

function resizeCanvas() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}

window.addEventListener('resize', resizeCanvas);



function logMouseCoordinates(e: MouseEvent) {
    //console.log(`Mouse coordinates: ${e.clientX}, ${e.clientY}`);
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
