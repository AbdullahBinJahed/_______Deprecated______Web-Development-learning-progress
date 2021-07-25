function checkName()
{
  var name = prompt("What is your name?");

  switch (name)
  {
    case "ABJ":
      alert("Welcome master");
      break;

    case "Adachi":
      alert("Adachi, Genki ?");
      break;

    case "Jonayed":
      alert("Ore no aibō wa dō shimasu ka?");
      break;

    default:
      alert("Do I know you?");
      break;
  }
}