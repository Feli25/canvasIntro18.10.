var canvas = document.getElementById('example');
var ctx = canvas.getContext('2d');

function degreeToRadians(degree){
  return degree*2*Math.PI/360
}
function drawPacman (x, y, radius, color="black"){
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.arc(x, y, radius, degreeToRadians(320), degreeToRadians(30), true)
  ctx.lineTo(x, y)
  ctx.fill()
}
drawPacman(50, 100, 40, "yellow")

canvas.onclick = function(event) {
  console.log(event)
  drawPacman(event.offsetX, event.offsetY, 10, "chartreuse")
}

function drawGrid (size){
  ctx.strokeStyle = "red"
  ctx.fillStyle = "black"
  ctx.globalAlpha = 0.5
  var fontSize = (5+0.3*size)
  ctx.font = fontSize+"px sans-serif"
  for (var x = size; x < canvas.width; x+=size) {
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, canvas.height)
    ctx.stroke()
    ctx.textAlign = "center"
    ctx.fillText(x, x, fontSize)
  }
  for (var y = size; y < canvas.height; y+=size) {
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(canvas.width, y)
    ctx.stroke()
    ctx.textAlign = "left"
    ctx.fillText(y, 0, y)
  }
}
drawGrid(20)

ctx.globalAlpha = 1;
var img = new Image();
img.src = "images/shopping.png"
img.onload = function (){
  ctx.drawImage(img, 100, 100, 400, 400)
}
