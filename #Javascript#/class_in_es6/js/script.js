import {Student} from './Student.js'

let s1 = new Student(69, "Sakura Adachi");
console.log(s1);
console.log(`name: ${s1.name}`);

s1.studentName = "Hougetsu Shimamura";
console.log(`name: ${s1.name}`);
console.log(s1.studentInfo);