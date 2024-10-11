//Singleton => its form when we make an object from constructor [if we define with literal singleton not form]
// Object.create {this method to make an object with constructor but we will talk on later about that}

const mySym = Symbol("Key")


//Object literals ==>
    const jsUser = {          //in object we have control over defining key and value not like Array
        name : "Mridul",      //by default key understand as an String
        "full name" : "Mridul Tiwari",    //is this does not access by first method of acces of value
        age : 18,
        [mySym] : "mykey1",  //to declare symbol as key we define the symbol in bracket
        email : "mridul@google.com",
        isLogedin : false,
        lastLoginDay : ["monday", "saturday"]
    } 

    // to access the object value we have two method
    // 1st => (buts its perfect to use)
    console.log(jsUser.name)

    //2nd => we use this because not always we can access the value with 1st one (refer to line number 7 for more detail)
    console.log(jsUser["full name"])
    console.log(jsUser["name"]) //in this we need declare as string by double quote [" "]

    

//**somethig interseting happen if using an symbol datatype in object */ for interview
// QUS=> How to declare symbol in object as a key( refer line  12)
console.log(jsUser[mySym])
console.log(jsUser)

//BASIC
 //to change the vlaue in object
 console.log(jsUser.email = "mridul@mridulritik.com")

 //if we want to freeze the object means its able to change further

 //Object.freeze(jsUser)  //**rememer the syntax */
 jsUser.email = "mridul@ritik.com"
 console.log(jsUser)   //the changes not propogated after freeze



 //How to inclue function in object
 jsUser.greeting = function(){
    console.log("hello js user")
 }

 //if we want to refference the object in function
 jsUser.greetingTwo = function(){
    console.log(`hello js user ${this.name} ` ) //we use string interpolation
 }

 console.log(jsUser.greeting())
 console.log(jsUser.greeting)  //in function does not execute its only give return back
 console.log(jsUser.greetingTwo()) //in this we refer name