var drawing;
var con;
var adachi;
var angle = 0;
CANV_WIDTH = 200;
CANV_HEIGHT = 200;
SPR_WIDTH = 40;
SPR_HEIGHT = 50;

function init()
{
  drawing = document.getElementById("surface");
  con = drawing.getContext("2d");
  adachi = document.getElementById("adachi");
  setInterval(draw, 25);
}

function draw()
{
  //clear background
  con.fillStyle = "white";
  con.fillRect(0, 0, CANV_WIDTH, CANV_HEIGHT);

  //draw border
  con.strokeStyle = "red";
  con.lineWidth = "5";
  con.strokeRect(0, 0, CANV_WIDTH, CANV_HEIGHT);

  //change the rotation angle
  angle += .20;
  if (angle > Math.PI * 2)
    angle = 0;

  //start a new transformation system
  con.save();
  con.translate(100, 100);
  con.rotate(angle);

  //draw the image
  con.drawImage(adachi, SPR_WIDTH / -2, SPR_HEIGHT / -2, SPR_WIDTH, SPR_HEIGHT);
  con.restore();
}