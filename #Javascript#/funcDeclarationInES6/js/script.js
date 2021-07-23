//####################//
// Default parameters //
//####################//

function add(a, b = 1)
{
  return a + b;
}
// the parameter’s default value will be overwritten if the function passes a value explicitly
console.log("sum : " + add(4));

//#################//
// Rest Parameters //
//#################//

function fun(cond, ...params)
{
  cond == true ? console.log("length : "+params.length) : ""
}
fun();
fun(true, 5, 3, 8, 3); // only this will print
fun(5, 6, 7);

function sumAll(...args)
{
  let sum = 0;
  
  for (let arg of args)
    sum += arg;
  /*
  for (let i = 0; i < args.length; i++)
    sum += args[i];
  */
  return sum;
}

console.log( sumAll(1) );
console.log( sumAll(1, 2) ); 
console.log( sumAll(1, 2, 3, 4) );

let arr1 = [1, 2, 6];
let arr2 = [3, 3, 9];
// the spread syntax can be used to merge arrays
console.log(Math.max(...arr1, ...arr2));

var f = function() { return "hello" }
console.log(f());

//#####################################//
// Lambda Expression or Arrow function //
//#####################################//

var foo = (x,y) => x + y;
alert( foo(6, 9) );

var msg = () =>
{
  console.log("function invoked");
}
msg();

//#####################//
// Generator functions //
//#####################//

function* rainbow()
{
  // the asterisk marks this as a generator 
  yield 'red';
  yield 'orange';
  yield 'yellow';
  yield 'green';
  yield 'blue';
  yield 'indigo';
  yield 'violet';
}
for (let color of rainbow())
{
  console.log(color);
}

function* ask()
{
  const name = yield "What is your name?";
  const anime = yield "What is your favorite anime?";
  return `${name}'s favorite anime is ${anime}`;
}
const it = ask();
console.log(it.next());
console.log(it.next('Sakura'));
console.log(it.next('AdaShima'));