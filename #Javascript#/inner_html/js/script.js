function sayHi()
{
  txtName = document.getElementById("txtName");
  divOutput = document.getElementById("divOutput");

  name = txtName.value;

  divOutput.innerHTML = "<em>" + name + "</em>";
  divOutput.innerHTML += " is a very nice name.";
}