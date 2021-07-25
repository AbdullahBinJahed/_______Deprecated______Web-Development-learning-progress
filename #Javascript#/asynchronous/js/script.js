const taskOne = () =>
{
  console.log("Task 1");
}

const dataLoading = () =>
{
  console.log("Task 2. Data Loaded");
}

const taskTwo = () =>
{
  setTimeout(dataLoading, 3000);
}

const taskThree = () =>
{
  console.log("Task 3");
}

const taskFour = () =>
{
  console.log("Task 4");
}

const taskFive = () =>
{
  console.log("Task 5");
}

taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();