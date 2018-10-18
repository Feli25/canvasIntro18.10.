var canvas = document.getElementById('example');
var ctx = canvas.getContext('2d');

function degreeToRadians(degree){
  return degree*2*Math.PI/360
}
function drawPacman (x, y, radius){
  ctx.beginPath()
  ctx.arc(x, y, radius, degreeToRadians(320), degreeToRadians(30), true)
  ctx.lineTo(x, y)
  ctx.fill()
}
drawPacman(50, 100, 40)

canvas.onclick = function(event) {
  console.log(event)
  drawPacman(event.offsetX, event.offsetY, 10)
}


