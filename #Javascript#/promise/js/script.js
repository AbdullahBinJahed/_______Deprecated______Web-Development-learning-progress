console.log("Sakura");

const promise1 = new Promise((resolve, reject) =>
{
  setTimeout(() =>
  {
    resolve("completed promise 1");
  }, 3000);
});

const promise2 = new Promise((resolve, reject) =>
{
  setTimeout(() =>
  {
    resolve("completed promise 2");
  }, 1500);
})
// console.log(promise1);
// promise1.then(response =>
// {
//   console.log(response);
// }).catch((err) =>
// {
//   console.log(err);
// });

Promise.race([promise1, promise2]).then((res) =>
{
  console.log(res);
})

console.log("Adachi");

//////////////////////////////
////// Promise chaining //////
//////////////////////////////

const taskOne = () =>
{
  return new Promise((resolve, reject) =>
  {
    resolve("Task 1 is completed");
  });
}

const taskTwo = () =>
{
  return new Promise((resolve, reject) =>
  {
    setTimeout(() =>
    {
      resolve("Task 2 is completed");
    }, 2000);
  });
}

const taskThree = () =>
{
  return new Promise((resolve, reject) =>
  {
    setTimeout(() =>
    {
      reject("Task 3 is not completed");
    }, 3000);
  });
}

const taskFour = () =>
{
  return new Promise((resolve, reject) =>
  {
    resolve("Task 4 is completed");
  });
}

taskOne()
.then((res) => console.log(res))
.then(taskTwo)
.then(res => console.log(res))
.then(taskThree)
.then(res => console.log(res))
.then(taskFour)
.then(res => console.log(res))
.catch((err) => console.log(err));