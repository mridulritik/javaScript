// this and arrow function in Js
const user={
    username:"mridul",
    price:999,
    welcomeMessage: function(){
        console.log( `${this.username}, welcome to website` ) // thsi is used for current context
        console.log(this) //its give object which there current context
    }
}

user.welcomeMessage()
user.username= "ritik"
user.welcomeMessage()


console.log(this) //here its give empty object because we are on node environment output=>{} but on browser this will give an window bcz this is an current context in browser

// function chai() {
//    let username = "hitesh"
//     console.log(this) //this we have some global context of function in this situation
//     console.log(this.user) //but we can not use this in an function for accessing the value output=>undefined

// }
// chai()

const chai = function(){
    let username = "hitesh"
    console.log(username)
}

// this is arrow function==>
const chai2 =()=>{
    let username = "hitesh" //this is basic arrow function
    console.log(username)
}

// const addTwo =(num1 , num2)=>{
//     return num1 + num2        //basic
// }

// implicit return ==>
const addTwo =(num1 , num2)=>( num1 + num2 ) //if we doesnt use curly bracket then we dont need to write return its work on one line of code
//bracket are not compulsory
console.log(addTwo(2,4))
// by using implicit return aur bracket benifit is that we return object in function ==>
const add =(num1 , num2)=>( {  //we need to wrap object in paranthesis
    username: "hitesh"
})
console.log(add())