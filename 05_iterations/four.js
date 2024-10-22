// for in 

//with for of we dont iterate object but we do with for in and also for in can be use with other.

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for(const key in myObject){
    console.log(`${key} shortcut for ${myObject[key]}`)    //myobject[key] is for giving an value of object
}


//:=> Can we use for in on array
const programming = ["js", "rb", "py", "java", "cpp"]
for(const key in programming){
    console.log(`${key}`)         //In for in key are give the index of array not like for of which give value of array
    console.log(`${programming[key]}`) //by this we get value
}



// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);     
// }                   /**map are not iterable in for in */