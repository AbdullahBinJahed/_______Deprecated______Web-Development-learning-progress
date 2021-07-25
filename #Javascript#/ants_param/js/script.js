function makeSong()
{
  var output = document.getElementById("output");

  output.innerHTML = "";

  output.innerHTML += verse(1);
  output.innerHTML += chorus();
  output.innerHTML += verse(2);
  output.innerHTML += chorus();
}

function chorus()
{
  var result = "-and they all came marching down, <br />";
  result += "to the ground, to get out, of the rain. <br />";
  result += "boom boom boom boom <br />";
  result += "boom boom boom boom <br />";
  result += "<br />";
  return result;
}

function verse(verseNumber)
{
  var distraction = "";

  if (verseNumber == 1)
  {
    distraction = "suck his thumb";
  }
  else if (verseNumber == 2)
  {
    distraction = "tie his shoe";
  }
  else
  {
    distraction = "there's a problem here...";
  }

  var result = "The ants go marching ";
  result += verseNumber + " by " + verseNumber + ", ";
  result += "hurrah, hurrah <br />";
  result += "The ants go marching ";
  result += verseNumber + " by " + verseNumber + ", ";
  result += "hurrah, hurrah <br />";
  result += "The ants go marching ";
  result += verseNumber + " by " + verseNumber + "<br />";
  result += "The little one stops to ";
  result += distraction + "<br /> <br />";

  return result;
}