var output;

function chorus()
{
  var text = "...and they all go marching down <br />";
  text += "to the ground <br />";
  text += "to get out <br />";
  text += "of the rain. <br />";
  text += " <br />";
  text += "boom boom boom boom boom boom boom boom <br /><br />";
  output.innerHTML += text;
}

function verse1()
{
  var text = "The ants go marching 1 by 1 hurrah, hurrah <br />";
  text += "The ants go marching 1 by 1 hurrah, hurrah <br />";
  text += "The ants go marching 1 by 1 <br />";
  text += " The little one stops to suck his thumb <br /><br />";
  output.innerHTML += text;
}

function verse2()
{
  var text = "The ants go marching 2 by 2 hurrah, hurrah <br />";
  text += "The ants go marching 2 by 2 hurrah, hurrah <br />";
  text += "The ants go marching 2 by 2 <br />";
  text += " The little one stops to tie his shoe <br /><br />";
  output.innerHTML += text;
}

function makeSong()
{
  output = document.getElementById("output");
  output.innerHTML = "";
  verse1();
  chorus();
  verse2();
  chorus();
}