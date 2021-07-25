var goofyPic = new Image();
    goofyPic.src = "images/andyGoofy.gif";
    goofyPic.onload = draw;
    function draw()
    {
      var drawing = document.getElementById("drawing");
      var con = drawing.getContext("2d");
      con.drawImage(goofyPic, 60, 70, 90, 90, 0, 0, 150, 150);
    }