function draw()
{
  var drawing = document.getElementById("surface");
  var con = drawing.getContext("2d");

  //clear background
  con.fillStyle = "white";
  con.fillRect(0, 0, 200, 200);

  //draw font in red
  con.fillStyle = "red";
  con.font = "18pt sans-serif";

  //add shadows
  con.shadowOffsetX = 3;
  con.shadowOffsetY = 3;
  con.shadowColor = "gray";
  con.shadowBlur = 5;
  con.fillText("Canvas Rocks!", 5, 100);
}