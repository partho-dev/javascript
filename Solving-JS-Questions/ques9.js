//write a JS function that returns a passed string with letters in alphabatical order
//apple == > aelpp [Alphabatically arranged]

// var word = "Apple"
// var orderedWord = word.split("").sort().join("")

// console.log(orderedWord)

function alphabaticalOrder(stn){
    return stn.split("").sort().join("")
}
console.log(alphabaticalOrder("Apple"))
console.log(alphabaticalOrder("Partho"))