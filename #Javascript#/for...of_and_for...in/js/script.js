// the for...of statement iterates over values
var array1 = [1, 2, 3, 4];

for (let element of array1)
{
  element += 1;
  console.log(element);
}

var array2 = [['a', 1],
              ['b', 2],
              ['c', 3]];

for (let elem1 of array2)
  console.log(elem1);
for (let [key, value] of array2)
  console.log(key);

// no idea what the fuck is this
(function()
{
  for (const argument of arguments)
  {
    console.log(argument);
  }
})("abj", "jms", "sakura");

(function(x, y)
{
  console.log(x + y);
})(3, 5);

// function generator
function* foo()
{
  yield 1;
  yield 2;
  yield 3;
};

for (const o of foo())
{
  console.log(o);
  if (o == 2)
    break;
}
var msg = () => `done`;
console.log(msg());

//for...in loop is an easy way to check the properties of an object
var obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}
// or
let women = {
  name : "Adachi",
  age : 17,
  lover : `Shimamura`
}

for (let x in women)
{
  console.log(`${x} : ${women[x]}`);
}