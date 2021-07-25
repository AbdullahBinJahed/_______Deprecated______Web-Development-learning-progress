function getPassword()
{
  var correct = "Adachi";
  var guess = "";

  while (guess != correct)
  {
    guess = prompt("Password?");
  }

  alert("You may proceed");
}

function threeTries()
{
  var correct = "Adachi";
  var guess = "";
  var keepGoing = true;
  var tries = 0;

  while (keepGoing)
  {
    guess = prompt("Passwoord?");
    if (guess == correct)
    {
      alert("You may proceed");
      keepGoing = false;
    }
    else
    {
      tries++;
      if (tries >= 3)
      {
        alert("Too many tries. Launching missiles...");
        keepGoing = false;
        self.close();
        /*  #Alternative#
        window.open('','_parent',''); 
        window.close();
        */
      }
    }
  }
}