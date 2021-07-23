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
var msg = () => 'done'
console.log(msg());

function* fibonacci()
{
  let [curr, prev] = [0, 1];
  while (true)
  {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (let n of fibonacci())
{
  if (n >= 1000)
    break;
  console.log(n);
}