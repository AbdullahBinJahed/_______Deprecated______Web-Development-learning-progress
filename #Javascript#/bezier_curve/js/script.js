var drawing;
var con;

function draw()
{
  drawing = document.getElementById("surface");
  con = drawing.getContext("2d");

  con.strokeStyle = "black";
  con.lineWidth = "5";
  con.beginPath();
  con.moveTo(10, 10);
  con.bezierCurveTo(100, 10, 100, 190, 190, 190); //param(controlPoint1X, controlPoint1Y, controlPoint2X, controlPoint2Y, endingPointX, endingPointY);
  con.stroke();
  con.closePath();

  //mark beginning and end with blue
  drawDot(10, 10, "blue");
  drawDot(190, 190, "blue");

  //mark control points with red
  drawDot(100, 10, "red");
  drawDot(100, 190, "red");
}

function drawDot(x, y, color)
{
  con.fillStyle = color;
  con.beginPath();
  con.arc(x, y, 5, 0, Math.PI * 2, true);
  con.fill();
  con.closePath();
}