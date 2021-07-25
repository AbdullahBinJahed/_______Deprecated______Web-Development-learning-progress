function testRegex()
{
  var regex = document.getElementById("txtRegex").value;
  var working = document.getElementById("txtWork").value;
  var output = document.getElementById("output");
  if (working.match(regex))
  {
    output.style.backgroundColor = "#AAFFAA";
    output.innerHTML = "It's a match! ";
  } else
  {
    output.style.backgroundColor = "#FFAAAA";
    output.innerHTML = "Not a match";
  }
}
/*   Regular Expression  (Regex)
  
  . = Any character except new line "\n"
  ^ = Beginning of string
  $ = End of string
  [characters] = Any of a list of characters
  [char-range] = Any character in the range
  \d = Any single numerical digit
  \b = A word boundary
  + = One or more occurrences of the previous character
  * = Zero or more occurrences of the previous character
  {digit} = Repeat preceding character digit times
  {min, max} = Repeat preceding character at least min but not more than max times
  (pattern segment) = Store results in pattern memory returned with code
  \1 = First pattern in the string; \2 represents the second and so on
  $1 = First pattern stored in a special variable
*/