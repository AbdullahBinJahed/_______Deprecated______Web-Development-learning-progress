function draw()
{
  var drawing = document.getElementById("surface");
  var con = drawing.getContext("2d");

  //build a linear gradient
  lGrad = con.createLinearGradient(50, 0, 50, 200); //param(x1, y1,x2, y2);

  lGrad.addColorStop(0, "#FF0000");
  lGrad.addColorStop(.5, "#00FF00");
  lGrad.addColorStop(1, "#0000FF");

  con.fillStyle = lGrad;
  con.fillRect(0, 0, 100, 200);

  //build a radial gradient
  rGrad = con.createRadialGradient(150, 100, 0, 150, 100, 100); //param(beginX, beginY, beginRadius, endX, endY, endRadius);
  rGrad.addColorStop(0, "#FF0000");
  rGrad.addColorStop(.5, "#00FF00");
  rGrad.addColorStop(1, "#0000FF");

  con.fillStyle = rGrad;
  con.fillRect(100, 0, 200, 200);
}