function order()
{
  //get variables
  var chkPepperoni = document.getElementById("chkPepperoni");
  var chkMushroom = document.getElementById("chkMushroom");
  var chkSausage = document.getElementById("chkSausage");
  var output = document.getElementById("output");
  var result = "<ul> \n";
  if (chkPepperoni.checked)
    result += "<li>" + chkPepperoni.value + "</li> \n";
  if (chkMushroom.checked)
    result += "<li>" + chkMushroom.value + "</li> \n";
  if (chkSausage.checked)
    result += "<li>" + chkSausage.value + "</li> \n";
  result += "</ul> \n"
  output.innerHTML = result;
}