"use strict"

function basicInfo(name, age)
{
  /*return {
    name : name,
    age : age
  };*/
  return { name, age };
}

//console.log(basicInfo("Sakura Adachi", 17));
/*
let msg = {
  //concise syntax of es6
  body() {
    return `Hi Adachi`;
  }
}
console.log(msg.body());
*/

let msg = {
  'sakura adachi'() {
    return `Konnichiwa`;
  }
}

console.log(msg['sakura adachi']());