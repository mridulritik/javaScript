//for of

// {"","",""}
// [{},{},{}]

const arr=[1, 2, 3, 4, 5, 6]
for (const element of arr) {
    // console.log(element)     //in this loop get throughout each element of given loop
}

for(const i of arr){
    // console.log(i*3)
}

/**we can also apply for of loop on string  or on anything we want**/

const greeting = "Hello World"
for(const greet of greeting){
    if(greet == " "){
        continue
        
    }else{
    console.log(greet)
    }            // h e l l o  w o r l d
}

// Maps

const map = new Map()
map.set("IN","India")
map.set("USA","united states of america")
map.set("FR","france")
map.set("FR","france")      //its not shown in output bcz ***map always have an unique value And its present in same order in which we order they present 


// console.log(map)

//checking of for loop on to map
for(const [key,value] of map){
    // console.log(key)      //by this indivisual key value come in array 
    console.log(key, ":-", value)   //by this we got indivisual key and value
}

//checking of for loop on Object     13:00
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);              //object are not iterable with this method but map are.
    
// }