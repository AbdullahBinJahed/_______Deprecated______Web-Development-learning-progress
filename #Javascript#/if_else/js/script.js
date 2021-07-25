function checkName()
{
  lblOutput = document.getElementById("lblOutput");
  txtInput = document.getElementById("txtInput");

  username = txtInput.value;
  if (username == "Tim Berners-Lee")
  {
    lblOutput.innerHTML = "Thanks for inventing HTML";
  }
  else
  {
    lblOutput.innerHTML = "Do I know you?";
  }
}