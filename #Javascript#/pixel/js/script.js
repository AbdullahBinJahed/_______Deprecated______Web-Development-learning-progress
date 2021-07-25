function draw()
{
  var drawing = document.getElementById("surface");
  var con = drawing.getContext("2d");
  var original = document.getElementById("original");

  CANV_WIDTH = 200;
  CANV_HEIGHT = 200;

  //draw the original on the canvas
  con.drawImage(original, 0, 0);

  //get the image data
  imgData = con.getImageData(0, 0, 200, 200);

  //loop through image data
  for (row = 0; row < CANV_HEIGHT; row++)
  {
    for (col = 0; col < CANV_WIDTH; col++)
    {
      //find current pixel
      index = (col + (row * imgData.width)) * 4; //I don't get this formula *sad ABJ noises*

      //separate into color values
      r = imgData.data[index];
      g = imgData.data[index + 1];
      b = imgData.data[index + 2];
      a = imgData.data[index + 3];

      //manipulate color values
      r -= 20;
      g += 50;
      b -= 30;
      a = a;

      //manage boundary conditions
      if (r > 255)
        r = 255;
      if (r < 0)
        r = 0;
      if (g > 255)
        g = 255;
      if (g < 0)
        g = 0;
      if (b > 255)
        b = 255;
      if (b < 0)
        b = 0;
      if (a > 255)
        a = 255;
      if (a < 0)
        a = 0;

      //return new values to data
      imgData.data[index] = r;
      imgData.data[index + 1] = g;
      imgData.data[index + 2] = b;
      imgData.data[index + 3] = a;
    } //end col loop
  } //end row loop

  //draw new image onto canvas
  con.putImageData(imgData, 0, 0);
}