// object Singelton [means with the help of constructor]
const tinderUser = new Object() //this is declaration of singleton object
const newtinder ={}  //this is declration of non singleton object
//console.log(newtinder) //there is no internal changes in both method of declaration



//adding key and value in object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

//here are the representation of nested object
const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName:{
            firstName: "Mridul",
            lastName : "Tiwari"
        }
    }
}

//value accessed by dot notation
console.log(regularUser.fullName.userFullName.firstName)

//method of merging an Object [we use assign() method and also Spread(...) method like array]
const obj1 ={1: "a" , 2: "b"}
const obj2 ={3: "a", 4: "b"}
const testobj3 = Object.assign(obj1 , obj2) //thats the way to use assign
//in this assign for better practices we put empty {} as a source to open to add other obj in future just like but its optional
const obj3 = Object.assign({} ,obj1 , obj2) //because the assign syntax are => `const returnedTarget = Object.assign(target, source);` 
console.log(obj3)
        //=>But mostly we use Spread method for merging of an object
const obj4 ={...obj1,...obj2} 
console.log(obj4)




//=> Handling Object under an array its mostly get when we fetch data from api
const user = [
    {
        id : "123abc",
        email: "a@hotgmail.com"
    },
    {
        id : "123abc",
        email: "a@hotgmail.com"
    },
    {
        id : "123abc",
        email: "a@hotgmail.com"
    }
]
console.log(user[0].email) //this is way to access it

console.log(tinderUser)
//there are some more operation on obeject we are going to gothrough
console.log(Object.keys(tinderUser)) //this is used to collect the whole key of object and its return in array
console.log(Object.values(tinderUser)) //same as key for value

console.log(Object.entries(tinderUser)) //by this every key value pair are become the element of array buts its less in use

console.log(tinderUser.hasOwnProperty('isLoggedIn')) //its used to find that the object have the property or not and its give value in boolean
