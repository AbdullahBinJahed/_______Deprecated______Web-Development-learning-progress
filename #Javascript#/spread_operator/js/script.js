function addNumbers(x, y, z)
{
  return x + y + z;
}

let numbers = [1, 2, 3];
console.log(addNumbers(...numbers));

let num1 = [5, ...numbers, 6];
console.log(num1);