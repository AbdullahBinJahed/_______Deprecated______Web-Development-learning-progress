var genreList = new Array("Yuri", "Comedy", "Isekai", "Fantasy",
  "Rom-com", "Action");

var text = "";
for (i = 0; i < genreList.length; i++)
{
  text += "I Love " + genreList[i] + "\n";
}
alert(text);