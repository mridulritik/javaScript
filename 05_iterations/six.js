// here we use cases of Filter

const coding =["js", "ruby", "java", "python", "cpp"]
// coding.forEach((code)=> console.log(code))

coding.forEach((item)=>{
    console.log(item)            //forEach doesnt return any thing ever
})

// So for this to return the value we  use filter() instead of forEach

const myNums = [1,2,3,4,5,6,7,8,9,10]
let num = myNums.filter((num)=> num>4) // its return value
console.log(num)

//how to write same functionality with forEach()
const newNums = []
myNums.forEach((item)=>{
    if(item>4){
       newNums.push(item)
    }
})
console.log(newNums)

//for practice of filter

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//  let bk = books.filter((bk)=> bk.publish > 1998)
//  console.log(bk)
 bk = books.filter((bk)=> bk.genre=="Science")
 console.log(bk)