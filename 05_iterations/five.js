//for each function loop
//this is most used loop

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (val)    // in this val every value of array come one by one and foreach are have so much info about array already just like length and man other
// {
    
// })

//by arrow function declration
// coding.forEach((val)=>{
//     console.log(val)
// })


//we can also pass function in foreach
// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)      //we can pass only function refrence



//in for each not only item value are present other than that array index and whole array are also have
// coding.forEach((val ,index, arr)=>{
//     console.log(val, index, arr)
// })


// iteration on array which having an object ex=> [{}, {}, {}]

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName)
})
