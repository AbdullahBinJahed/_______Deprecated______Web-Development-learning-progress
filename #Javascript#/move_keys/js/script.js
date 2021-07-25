//move based on keyboard input
var drawing;
var con;
var adashima;
CANV_WIDTH = 200;
CANV_HEIGHT = 200;
SPR_WIDTH = 63.25;
SPR_HEIGHT = 50;
var x = 0;
var y = 100;
var dx = 0;
var dy = 0;
var currentKey;

function init()
{
  drawing = document.getElementById("surface");
  con = drawing.getContext("2d");
  adashima = document.getElementById("adashima");
  document.onkeydown = updateKeys;
  setInterval(draw, 50);
}

function updateKeys(e)
{
  currentKey = e.keyCode;

  if (currentKey == K_LEFT)
    dx = -5;
  if (currentKey == K_RIGHT)
    dx = 5;
  if (currentKey == K_UP)
    dy = -5;
  if (currentKey == K_DOWN)
    dy = 5;

  if (currentKey == K_SPACE)
  {
    dx = 0;
    dy = 0;
  }
}

function draw()
{
  //clear background
  con.clearRect(0, 0, CANV_WIDTH, CANV_HEIGHT);

  currentKey = null;

  //move the element
  x += dx;
  y += dy;

  //check for boundaries
  wrap();

  //draw the image
  con.drawImage(adashima, x, y, SPR_WIDTH, SPR_HEIGHT);

  //draw a rectangle
  con.strokeStyle = "red";
  con.lineWidth = "5";
  con.strokeRect(0, 0, CANV_WIDTH, CANV_HEIGHT);
}

function wrap()
{
  if (x > CANV_WIDTH)
    x = 0;
  if (x < 0)
    x = CANV_WIDTH;
  if (y > CANV_HEIGHT)
    y = 0;
  if (y < 0)
    y = CANV_HEIGHT;
}

//keyboard constants
K_LEFT = 37;
K_RIGHT = 39;
K_UP = 38;
K_DOWN = 40;
K_SPACE = 32;