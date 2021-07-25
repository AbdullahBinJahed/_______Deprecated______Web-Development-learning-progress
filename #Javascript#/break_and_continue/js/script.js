document.write(" break: ");
for (i = 0; i <= 100; i++)
{
  if (i == 10)
  {
    //break the loop
    break;
  }
  document.write(" " + i);
}

document.write(" continue: ");

for (i = 0; i <= 100; i++)
{
  if (i == 10)
  {
    //return to loop
    continue;
  }
  document.write(" " + i);
}