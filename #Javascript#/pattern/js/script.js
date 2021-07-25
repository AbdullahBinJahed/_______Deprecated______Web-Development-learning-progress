function draw()
{
  var drawing = document.getElementById("surface");
  var con = drawing.getContext("2d");
  var texture = document.getElementById("texture");

  pFill = con.createPattern(texture, "repeat");
  con.fillStyle = pFill;
  con.fillRect(10, 150, 190, 150);

  con.font = "40px sans-serif";
  con.fillText("Pattern!", 20, 80);

  con.strokeStyle = pFill;
  con.lineWidth = 5;
  con.strokeRect(10, 10, 180, 100);
}