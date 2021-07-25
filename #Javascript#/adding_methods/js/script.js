//create the woman object
var woman = new Object();

//add some properties
woman.name = "Sayu";
woman.age = 16;

//create a method
woman.talk = function()
{
  unImportantWord = "My name is " + this.name;
  unImportantWord += " and I'm " + this.age;
  alert(unImportantWord);
};

woman.talk();