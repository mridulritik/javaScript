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