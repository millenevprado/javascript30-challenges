const canvas = document.getElementById('draw');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.strokeStyle = '#BADA55';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 70;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

const draw = (e) => {
  if (!isDrawing) return; // stop the function from running when they are not moused down

  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  context.beginPath();
  // start from
  context.moveTo(lastX, lastY);
  // go to
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  if (context.lineWidth >= 100 || context.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    context.lineWidth++;
  } else {
    context.lineWidth--;
  }
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)
