function draw()
{
  var drawing = document.getElementById("surface");
  var con = drawing.getContext("2d");

  con.strokeStyle = "green";
  con.fillStyle = "rgba(255, 0, 0, 0.5)";
  con.lineWidth = "5";

  //half-circle stroked
  con.beginPath();
  con.arc(220, 140, 50, 0, Math.PI, false); //param(centerX, centerY, radius, beginningAngle, endingAngle, drawingDirection"false for clockwise");
  con.closePath();
  con.stroke();

  //full circle filled
  con.beginPath();
  con.arc(220, 220, 50, 0, Math.PI * 2, true);
  con.closePath();
  con.fill();

  //another circle just for testing
  con.strokeStyle = "red";
  con.beginPath();
  con.arc(100, 100, 50, Math.PI / 2, Math.PI, false);
  con.stroke();
  con.closePath();
}