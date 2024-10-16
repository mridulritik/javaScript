function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


/***************Function with object and array**************/

//in this condition we understand that when the user use shopping cart then the amount of number of item its sends to cart its not known
//so in this situation we use `Rest Operator` its just look like spread ...dot its only difference is where wee can use that

function calculateCartPrice(num1){ //its return only one
    return num1
}
function calculateCartPrice(...num1){ // here we use `Rest operator ` then its take any amount of argument and make it into array
    return num1                   //output => [ 200, 300, 400, 800 ] in array      
}
// console.log(calculateCartPrice(200, 300, 400,800))


// ==> function with object
const user = {
    Name: "mridul",
    Price: 299
}
const user2 = {
    Name: "Hitesh",
    Price: 199
}
function valueKart(anyUser){
       return    `${anyUser.Name} is a user and there course price are ${anyUser.Price}`
}

console.log(valueKart(user))
console.log(valueKart(user2))

console.log(valueKart({  // we can directly pass object
    Name: "hi",
    Price: 399
}))

// ==> function with array

const myArray = [200,400,500]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArray))
console.log(returnSecondValue([200,400,500])) //we can directly pass array