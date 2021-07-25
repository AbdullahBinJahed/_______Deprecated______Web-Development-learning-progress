function checkTemp()
{
  var temp = prompt("What temperature is it outside?");
  temp = parseInt(temp);

  if (temp < 60)
  {
    //less than 60
    if (temp < 32)
    {
      //less than 32
      alert("It's freezing!");
    }
    else
    {
      //between 32 and 60
      alert("It's cold.");
    } //end freezing if
  }
  else
  {
    //We're over 60
    if (temp < 75)
    {
      //between 60 and 75
      alert("It's cool.");
    }
    else
    {
      //temp is higher than 75
      if (temp > 90)
      {
        //over 90
        alert("It's really hot.");
      }
      else
      {
        //between 75 and 90
        alert("It's warm");
      } //end 'over 90' if
    } //end 'over 75' if
  } //end 'over 60' if
} //end function