function processForm() {
  //grab input from form
  var txtNormal = document.getElementById("txtNormal");
  var pwd = document.getElementById("pwd");
  var hidden = document.getElementById("hidden");
  var txtArea = document.getElementById("txtArea");
  var normal = txtNormal.value;
  var password = pwd.value;
  var secret = hidden.value;
  var bigText = txtArea.value;
  //create output
  var result = "";
  result += "<dl> \n";
  result += "  <dt>normal<\/dt> \n";
  result += "  <dd>" + normal + "<\/dd> \n";
  result += " \n";
  result += "  <dt>password<\/dt> \n";
  result += "  <dd>" + password + "<\/dd> \n";
  result += " \n";
  result += "  <dt>secret<\/dt> \n";
  result += "  <dd>" + secret + "<\/dt> \n";
  result += "   \n";
  result += "  <dt>big text<\/dt> \n";
  result += "  <dd>" + bigText + "<\/dt> \n";
  result += "<\/dl> \n";
  var output = document.getElementById("output");
  output.innerHTML = result;
} // end function