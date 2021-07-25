var count = 0;

document.addEventListener("keypress", function(event)
{
  var pressedKey = event.key;
  document.querySelector("p").innerHTML = "You have pressed " + pressedKey;
});

document.querySelector("textarea").addEventListener("keypress", function(event)
{
  count++;
});
var time = 0;
setInterval(function()
{
  time++;
  document.querySelector("h1").innerHTML = "Time : " + time;
  if (time % 10 == 0)
  {
    document.querySelector("h6").innerHTML = "You have pressed " + count + " keys.";
  }
}, 1000);