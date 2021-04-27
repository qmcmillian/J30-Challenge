const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = 'BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 25;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

const draw = (event) => {
  if (!isDrawing) {
    return; // stops function from running when they are not moused down.
  }
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath(lastX,lastY);
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  lastX = event.offsetX;
  lastY = event.offsetY;
  hue++;
}

canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  lastX = event.offsetX;
  lastY = event.offsetY;
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false );
canvas.addEventListener('mouseout', () => isDrawing = false);


