// In this type of declaration js automatically define the variable type

const score = 400
console.log(score)

//but in js we also  forcely describe the variable type by using 'NEW' keyword
const balance = new Number(400)
console.log(balance) // =>So in this we are defining an data type

/* 
We are also have some prototype in Number just like an string
*/

//{

// just like first one is `toString()`
console.log(balance.toString()) //=> its convert number into String
//By this we can also apply string __proto__ on Number

//just example `.length` is string proto
console.log(balance.toString().length)

// }

//{

// Second one is toFixed()
console.log(balance.toFixed(2)) //this providing an precision value output is 400.00
console.log(balance.toFixed(1)) //output 400.0
//}

// third one is toPrecision(--in this we value between 01 to 21--)
const number = 12.8345
console.log(number.toPrecision(2))  // its only focused on value 2 and other decimal if the round off
// its return string

// fourth is toLocalString() for reprsentaion standard of number
const otherNumber = 1000000000
console.log(otherNumber.toLocaleString()) //by default is in US standard
console.log(otherNumber.toLocaleString('en-IN')) //for IN standard


// ++++++++++++++++++++ Maths ++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); return absolute value whether its +ve & -ve => +ve
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)