var h1 = document.querySelector("h1");
h1.addEventListener("mouseover", function()
{
  h1.classList.add("myClass");
});
h1.addEventListener("mouseout", function()
{
  h1.classList.remove("myClass");
});

document.querySelectorAll("button")[0].addEventListener("click", adachi);

function adachi()
{
  alert("Adachi is the best");
}

document.querySelectorAll("button")[1].addEventListener("click", function()
{
  alert("Nandabashaaaaa");
});