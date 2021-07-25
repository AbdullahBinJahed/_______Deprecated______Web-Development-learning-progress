document.querySelector("#checkButton").addEventListener("click", function()
{
  var num = document.querySelector("#nameField").value;

  try
  {
    num < 5 ? _throw("input is too low") : num > 10 ? _throw("input is too high") : ""
    isNaN(num) ? _throw("not a number") : ""
  } catch (e)
  {
    alert(e);
  }
});

function _throw(m)
{
  throw m;
}