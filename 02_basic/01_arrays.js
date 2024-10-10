//Array
const myArr = [0, 1, 2, 3, 4, 5] //in JS array datatype  are doesn't neccessory to be same and that should be resizable

//Accessing of array should be like this
console.log("1st output=>", myArr[1])//in this we put an index number of Element

//Representation of an Array
//1st
const myHero = ["shaktiman", "Nagraj"]
//2nd using new keyword
const myArr2 = new Array(1, 2, 3, 4, 5) //In that representation we are not using an Bracket

//*************Array Method***************

//1st ==>

//for adding value in array "at a last point"
myArr.push(6)
myArr.push("Mridul")
console.log("2st output=>" ,myArr)
// for removing an value from last
myArr.pop() //we does not need to pass anything
console.log("3rd output=>", myArr)

//2nd ==>

//for Adding value on first of array *(bt some people says its worst to use it because of shifting of whole array)
myArr.unshift(9)
console.log("4th output=>", myArr)
//for removing value on first of array
myArr.shift() //we dont need to pass value just like pop
console.log("5th output=>", myArr)

//3rd ==>

//for checking value are present in array or not
console.log("6th output==>", myArr.includes(9)) //its output is in boolean expression(True or False)

//4th ==>

//to find index
console.log("7th output==>", myArr.indexOf(3)) //if value not present its give value "-1"

//5th ==>
console.log("8th output==>", myArr.join()) //its covert array into string with the comma(,)

//6th ==>
// slice, splice
console.log("9th output=>")

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //its not include last index of array and its perform changes on deep coppy of array

console.log(myn1);
console.log("B ", myArr);

console.log("difference between slice and splice are splice changes in oringinal array")//comment

const myn2 = myArr.splice(1, 3) //its include last index and its perform changes on original array
console.log("C ", myArr);
console.log(myn2);