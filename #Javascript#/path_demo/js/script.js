function draw()
{
  var drawing = document.getElementById("surface");
  var con = drawing.getContext("2d");

  con.strokeStyle = "red";
  con.fillStyle = "blue";
  con.lineWidth = 5;

  con.beginPath();
  con.moveTo(100, 100);
  con.lineTo(200, 200);
  con.lineTo(200, 100);
  con.lineTo(100, 100);
  con.closePath();
  con.stroke();
  con.fill();
}