//callback and higher order function

function square(x)
{
  console.log(`square of ${x} is ${x * x}`);
}

const cube = x =>
{
  console.log(`cube of ${x} is ${x * x * x}`);
}

// const y = square;
// y(5);

function higherOrderFunction (num, callback)
{
  callback(num);
}

higherOrderFunction(6, square);
higherOrderFunction(6, cube);

/////////////////////////////////////
//        callback function        //
/////////////////////////////////////

const taskOne = (callback) =>
{
  console.log("Task 1");
  callback();
}

const taskTwo = (callback) =>
{
  setTimeout(() =>
  {
    console.log("Task 2. Data Loaded");
    callback();
  }, 3000);
}

const taskThree = (callback) =>
{
  console.log("Task 3");
  callback();
}

const taskFour = (callback) =>
{
  console.log("Task 4");
  callback();
}

const taskFive = () =>
{
  console.log("Task 5");
}

taskOne(() =>
{
  taskTwo(() =>
  {
    taskThree(() =>
    {
      taskFour(() =>
      {
        taskFive();
      });
    });
  });
});