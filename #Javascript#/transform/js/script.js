function draw()
{
  var drawing = document.getElementById("surface");
  var con = drawing.getContext("2d");
  var goofyPic = document.getElementById("goofyPic");

  con.save();
  con.translate(100, 100);
  con.rotate(Math.PI / 4);
  con.scale(3.0, 1.5);
  con.drawImage(goofyPic, -25, -25, 50, 50);
  con.restore();

  //draw a rectangle using the ordinary coordinate system
  con.strokeStyle = "red";
  con.lineWidth = "5";
  con.strokeRect(0, 0, 200, 200);

}