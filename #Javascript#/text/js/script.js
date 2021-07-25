function draw()
{
  var drawing = document.getElementById("surface");
  var con = drawing.getContext("2d");

  //clear background
  con.fillStyle = "white";
  con.fillRect(0, 0, 200, 200);

  //draw font in red
  con.fillStyle = "red";
  con.font = "20pt sans-serif";
  con.fillText("Canvas Rocks!", 5, 100 - 50);
  con.strokeText("Canvas Rocks!", 5, 130 - 50);
}