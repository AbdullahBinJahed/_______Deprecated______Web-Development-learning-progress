var drawing;
var con;

function draw()
{
  drawing = document.getElementById("surface");
  con = drawing.getContext("2d");

  con.strokeStyle = "black";
  con.lineWidth = "5";
  con.beginPath();
  con.moveTo(10, 190);
  con.quadraticCurveTo(100, 10, 190, 190); //param(controlPointX, controlPointY, endPointX, endPointY);
  con.stroke();
  con.closePath();

  //mark beginning and end with blue
  drawDot(10, 190, "blue");
  drawDot(190, 190, "blue");

  //mark control points with red
  drawDot(100, 10, "red");
}

function drawDot(x, y, color)
{
  con.fillStyle = color;
  con.beginPath();
  con.arc(x, y, 5, 0, 2 * Math.PI, true);
  con.fill();
  con.closePath();
}