function disp1()
{
  console.log("From disp1");
}

const disp2 = () =>
{
  console.log("From disp2");
}

disp1();
disp2();


function msg1()
{
  return "msg 1";
}

const msg2 = () => "msg 2";
console.log(msg1());
console.log(msg2());


function add1(x, y)
{
  return x + y;
}

const add2 = (x, y) => x + y;

console.log(add1(6, 9));
console.log(add2(6, 9));

var students = [
    {
      id: 101,
      name: 'Sakura Adachi',
      gpa: 4.85
    },
    {
      id: 102,
      name: 'Hougetsu Shimamura',
      gpa: 4.00
    },
    {
      id: 103,
      name: 'Abdullah Bin Jahed',
      gpa: 2.65
    },
    {
      id: 104,
      name: 'Jonayed Mohiuddin',
      gpa: 3.85
    }
  ];
  
  function studentNames1()
  {
    return students.filter(function(x)
    {
      return x.gpa > 3;
    }).map(function(y)
    {
      return y.name;
    });
  }
  //10 line code in 1 line
  const studentNames2= () => students.filter(x => x.gpa > 3).map(y => y.name);
  
  console.log(studentNames1());
  console.log(studentNames2());