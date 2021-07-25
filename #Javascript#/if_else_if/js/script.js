function checkName() {
  lblOutput = document.getElementById("lblOutput");
  txtInput = document.getElementById("txtInput");

  userName = txtInput.value;

  if (userName == "Tim Berners-Lee") {
    lblOutput.innerHTML = "Thanks for inventing HTML!";
  } else if (userName == "Al Gore") {
    lblOutput.innerHTML = "Thanks for inventing the Internet";
  } else if (userName == "Hakon Wium Lie") {
    lblOutput.innerHTML = "Thanks for inventing CSS";
  } else {
    lblOutput.innerHTML = "Do I know you?";
  } // end if
} // end function