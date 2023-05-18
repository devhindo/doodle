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
    // make canvas on entire window
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    //canvas.style.zIndex = '999999';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.border = '5px solid green';
    context = canvas.getContext('2d');
    context!.strokeStyle = getColor(); // TODO: get color from `index.ts`
    context!.lineWidth = 5;
    context!.lineCap = 'round';
}



function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);




var isMouseDown = false;
var isDrawing = false;


function getColor(): string | CanvasGradient | CanvasPattern {
    var color: string | CanvasGradient | CanvasPattern;

    chrome.storage.sync.get(['color'], function(result) {
        console.log('Value currently is (get)' + result.color);
        color = result.color;
        console.log('before returning selected color');
        return result.color;
        return color;
    });
    console.log('returning blue as fetching the color failed');
    return 'yellow';
}



function startDrawing(e: MouseEvent) {
    if (!isCanvasActive) return;
    isDrawing = true;
    draw(e);
    console.log("start drawing");
}

function stopDrawing() {
    if (!isCanvasActive) return;
    isDrawing = false;
    context?.beginPath();
    console.log("stop drawing");
}

function draw(e: MouseEvent) {
    if (!isCanvasActive || !isDrawing) return;
    console.log('current color is ' + context!.strokeStyle);
    console.log('current color is (getcolor) ' + getColor());

    context?.lineTo(e.clientX, e.clientY);
    context?.stroke();
    context?.beginPath();
    context?.moveTo(e.clientX, e.clientY);

}


document.addEventListener('mouseup', stopDrawing);

document.addEventListener('mousedown', startDrawing);

document.addEventListener('mousemove', draw);

