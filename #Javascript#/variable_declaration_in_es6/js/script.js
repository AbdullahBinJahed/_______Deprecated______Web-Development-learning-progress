"use strict"; //strict mode will throw an error if variables are not declared

//let keyword lets you create a variable that only has a meaning in a block {}
let x = 5;
{
  let x = 6;
  console.log(x);
}
console.log(x);

// const keyword lets you create a constant whose value can't change
const y = 12;
//y = 10  // will throw an error
console.log(y);