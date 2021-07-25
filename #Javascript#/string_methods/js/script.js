var text = new String;
text = prompt("Please enter some text");

alert("I'll shout it out");
alert(text.toUpperCase());

alert("Now in lowercase...");
alert(text.toLowerCase());

alert("The first 'a' is at letter...");
alert(text.indexOf("a"));

alert("The first three letters are...");
alert(text.substring(0, 3));