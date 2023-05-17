document.body.style.border = "5px solid red";

document.addEventListener("keydown", (event: KeyboardEvent) => {
    if(event.ctrlKey && event.key === "[") {
        console.log("init canvas");
        initCanvas();
        
    }
})

function initCanvas() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    
    function startDrawing(e: MouseEvent) {
      isDrawing = true;
      lastX = e.clientX;
      lastY = e.clientY;
    }
    
    function draw(e: MouseEvent) {
      if (!isDrawing) return;
      if(!ctx) return;
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
    
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
}


