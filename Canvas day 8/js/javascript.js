
document.addEventListener('DOMContentLoaded', function() {

  const canvas = document.querySelector('#draw');
  const ctx = canvas.getContext('2d');

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  window.onresize = function() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
  }

  ctx.strokeStyle = '#BADA55';
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';

  let drawing = false;
      lastX = 0,
      lastY = 0,
      hue = 0,
      lWidth = true;

  function draw(e) {

    if(!drawing) return;

    ctx.beginPath();
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if (hue >= 360) {hue = 0};
    if (ctx.lineWidth >= 200 || ctx.lineWidth <= 1) {
      lWidth = !lWidth
    }
    if (lWidth) {
      ctx.lineWidth++
    } else {
      ctx.lineWidth--
    }


  }

  canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]
  });
  canvas.addEventListener('mouseup', () => drawing = false);
  canvas.addEventListener('mouseout', () => drawing = false);
  canvas.addEventListener('mousemove', draw);

})
