var isCanvasActive = false;

var color: string;

chrome.storage.sync.get(['color'], function(result) {
    color = result.color;
});

var size: number;


chrome.storage.sync.get(['size'], function(result) {
    size = result.size;
});

document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (!isCanvasActive && event.ctrlKey && event.key === "[") {
        //document.body.style.border = "5px solid red";
        initCanvas();
    }
});

document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (isCanvasActive && ((event.ctrlKey && event.key === "]") || event.key == "Escape")) {
        //document.body.style.border = "none";
        isCanvasActive = false;
        terminateCanvas();
    }
});

function terminateCanvas() {
    canvas.remove();
}

var canvas: HTMLCanvasElement;
var context: CanvasRenderingContext2D | null;

function initCanvas() {
    isCanvasActive = true;
    canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    document.body.appendChild(canvas);
    // make canvas on entire window
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '999999';
    context = canvas.getContext('2d', {willReadFrequently: true});
    resizeCanvas();
    //canvas.style.border = '5px solid green';
    
    context!.strokeStyle = color;
    context!.lineWidth = size;
    context!.lineCap = 'round';
}




function resizeCanvas() {
    if(!isCanvasActive) return;
    console.log("resize canvas fired");
    var canvasContent = context?.getImageData(0,0,canvas.width,canvas.height);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context?.putImageData(canvasContent!,0,0);
    console.log("resize canvas");
}
window.addEventListener('resize', resizeCanvas);




var isMouseDown = false;
var isDrawing = false;


function getColor() {
    chrome.storage.sync.get(['color'], function (result) {
        color = result.color;
    });
}

chrome.storage.onChanged.addListener((changes, namespace) => {
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
        if(key === 'color') {
            color = newValue;
        }
        if(key === 'size') {
            size = newValue;
        }
    };
});


function startDrawing(e: MouseEvent) {
    if (!isCanvasActive) return;
    isDrawing = true;
    draw(e);
}

function stopDrawing() {
    if (!isCanvasActive) return;
    isDrawing = false;
    context?.beginPath();
}

function draw(e: MouseEvent) {
    if (!isCanvasActive || !isDrawing) return;
    context?.lineTo(e.clientX, e.clientY);
    context!.strokeStyle = color;
    context!.lineWidth = size;
    context?.stroke();
    context?.beginPath();
    context?.moveTo(e.clientX, e.clientY);

}


document.addEventListener('mouseup', stopDrawing);

document.addEventListener('mousedown', startDrawing);

document.addEventListener('mousemove', draw);

