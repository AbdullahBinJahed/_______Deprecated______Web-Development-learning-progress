//building a constructor
function Woman(pName, pAge)
{
  this.name = pName;
  this.age = pAge;
  this.talk = function()
  {
    text = "Hi! My name is " + this.name;
    text += " and I'm " + this.age;
    alert(text);
  }; // end talk method
} // end Woman class def

function main()
{
  //build two Women
  womanA = new Woman("Sakura Adachi", 15);

  womanB = new Woman("Atsuka Adachi", 36);
  womanB.name = "Hougetsu Shimamura";
  womanB.age = 16;

  //have 'em talk
  womanA.talk();
  womanB.talk();
} // end main

main();