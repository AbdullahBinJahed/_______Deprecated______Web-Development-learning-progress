function draw()
{
  var canvas = document.getElementById("surface");
  if (canvas.getContext)
  {
    var con = canvas.getContext('2d');
    con.fillStyle = "rgb(255, 0, 0)";
    con.fillRect(50, 50, 50, 50); // param(x, y, width, height) from top-left of the screen
  }
}