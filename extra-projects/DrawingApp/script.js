
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('drawing-canvas');
    const ctx = canvas.getContext('2d');
    const colorPicker = document.getElementById('color');
    const brushSize = document.getElementById('size');
    const sizeValue = document.getElementById('size-value');
    const eraserBtn = document.getElementById('eraser');
    const clearBtn = document.getElementById('clear');
    const pencilBtn = document.getElementById('pencil');
    const saveBtn = document.getElementById('save');


    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);


    function resizeCanvas() {
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    let isDrawing = false;
    let currentColor = colorPicker.value;
    let currentSize = brushSize.value;

    brushSize.addEventListener('input', function() {
        currentSize = this.value;
        sizeValue.textContent = currentSize;
    });

    colorPicker.addEventListener('input', function() {
        currentColor = this.value;
        ctx.globalCompositeOperation = 'source-over';
    });

    eraserBtn.addEventListener('click', function() {
        ctx.globalCompositeOperation = 'destination-out';
    });

    pencilBtn.addEventListener('click', function () {
        ctx.globalCompositeOperation = 'source-over';
    });

    clearBtn.addEventListener('click', function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    saveBtn.addEventListener('click', function () {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'drawing.png';
        link.click();
    });

    function startDrawing(e) {
        isDrawing = true;
        draw(e);
    }

    function stopDrawing() {
        isDrawing = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!isDrawing) return;

        ctx.lineWidth = currentSize;
        ctx.lineCap = 'round';

        let x, y;
        if (e.type.includes('touch')) {
            const rect = canvas.getBoundingClientRect();
            x = e.touches[0].clientX - rect.left;
            y = e.touches[0].clientY - rect.top;
        } else {
            x = e.offsetX;
            y = e.offsetY;
        }

        ctx.strokeStyle = ctx.globalCompositeOperation === 'destination-out' ? 'rgba(0,0,0,1)' : currentColor;

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }

    
    canvas.addEventListener('touchstart', function(e) {
        e.preventDefault();
        startDrawing(e);
    });

    canvas.addEventListener('touchmove', function(e) {
        e.preventDefault();
        draw(e);
    });

    canvas.addEventListener('touchend', stopDrawing);
});
