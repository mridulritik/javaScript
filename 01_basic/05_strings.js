const name = "mridul"
const repoCount = 50

// this is the old method to cocatinate the String *********************
console.log(name + repoCount + " hello")   // its does't recommend to use

// Current time we use `string interpolation`(with backtick ${})
console.log(`hello my name is ${name} and my repocount is ${repoCount}`)

/* more ways to declare string (in obj) but in previous method they also auto convert into sting
  with obj
*/

const gameName = new String("Mridul_Tiwari")

// string are used here as an obj so we sol we use apply multiple method on in it like 'CharAt'

console.log(gameName[0]) //output is 'j'

//++++++++ To see more method ++++++++
console.log(gameName.__proto__)
//some more example of using method on string  *** we dont need to use proto before using method***
console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))

console.log(gameName.indexOf('i'))

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const url = "www.mridulritik.com%20profile"
//it is use to replace which with for
console.log(url.replace('%20', '-'))

//it is used to find present or not
console.log(url.includes('sundar'))

// we also use trim method which remove spaces from string at start and end 

console.log(gameName.trim())

// we can convert string into an array by split method `split(seprator)`

console.log(gameName.split('_'))
