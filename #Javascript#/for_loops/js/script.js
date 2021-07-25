var output;

function init()
{
  output = document.getElementById("output");
}

function count()
{
  output.innerHTML = "";

  for (i = 1; i <= 10; i++)
  {
    output.innerHTML += i + "<br />";
  }
}

function back()
{
  output.innerHTML = "";

  for (i = 10; i > 0; i--)
  {
    output.innerHTML += i + "<br />";
  }
}

function byFive()
{
  output.innerHTML = "";

  for (i = 5; i <= 25; i += 5)
  {
    output.innerHTML += i + "<br />";
  }
}