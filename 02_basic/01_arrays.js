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