const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//if i try to concat the both array by push then its not go according to us other than that its take the whole array as an element which we are try to push()
//for example
/*
marvel_heros.push(dc_heros)
console.log(marvel_heros) // output=> [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
*/
//**so to avoid this condition we use concat */

const allHeros =marvel_heros.concat(dc_heros) //concat give new array not like push() which alter in existing array
console.log("1st Output", allHeros)

//we have better method than concat to do concatination are "spread method" its uses by ...
const all_New_Heros = [...dc_heros,...marvel_heros] //on using '...'dot array element are spread 
console.log("2nd output", all_New_Heros)

// situation => 
    //some time this happen in array which are given are present in multiple level inside array are array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //inside the flat we need to pass an level of depth(prefer to specifies the number) in number or we can just put infinity
console.log("3rd output ",real_another_array)

//for converting other datatype into an array
  //we can also ask for is that array or not
  console.log(Array.isArray("Mridul"))
  console.log(Array.from("Mridul")) //to convert into an array

  //intersting case for interview
  console.log(Array.from({name : "Mridul"})) //its give empty array because not able to convert

  //if we want to make array of given variable
  let score1 = 100
  let score2 = 200
  let score3 = 300

  console.log(Array.of(score1,score2,score3))