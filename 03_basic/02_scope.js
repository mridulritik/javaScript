//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

// ==> scope in node and in window are different

// nested scopes

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username)   //it sble access because two() are inside one( ) so the varaible of one are work as a global varaiablee for function two()
             //here is some intro of closure property are the inner function can access outer function but closure are more to understand which understand later
    }
    // console.log(website) //it give error because the website variable scope end in two() function 
    two()
}

one()


// ==> same case in if else

if (true) {
    const username = "hitesh"
    if (username=== "hitesh") {
        const website =" youtube"
        console.log(username + website)
    }
    //console.log(website)   //this is error because website scope are end in second level of if
}
//console.log(username)   //this is error because username scope are end


//+++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++
addOne(3)
function addOne(num) {
    return num +1    //in this type of declaration we can access the function any where or before the initialisation
}
addOne(1)

//one more technique to declare are holding function in an varaible
 // ==>  /* addTwo(3) its give error*/
const addTwo = function(num){
    return num+2  //in thi type of declaration we can access function after the functionn intialisation 
}
addTwo(1)