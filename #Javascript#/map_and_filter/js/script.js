var numbers = [2, 3, 4, 5, 7]
//map function returns an array
var squareNumbers = numbers.map((x) => { return x * x; });
console.log(squareNumbers);

//filter function returns an array based on a condition
var newNumbers = numbers.filter(x => x % 2 == 0);
console.log(newNumbers);

const students = [
  { name: 'Adachi', grade: 96 },
  { name: 'Shimamura', grade: 84 },
  { name: 'Yachiro', grade: 100 },
  { name: 'ABJ', grade: 65 },
  { name: 'JMS', grade: 90 }
      ];

const goodStudents = students.filter(stu => stu.grade > 80);
console.log(goodStudents);
for (let x of goodStudents)
  console.log(`name: ${x.name}, grade: ${x.grade}`);


const input = [1, 2, 3, 4];
const sum = input.reduce((result, item) => result + item, 0);
console.log(sum);


