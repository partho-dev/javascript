// In an array of numbers and strings, only add those members which are not strings

var value = [ 1, "a", 2, 3, 4, "apple", 5]
var num = value.filter((elem)=>{
    if(typeof elem == "number"){
        return elem
    }
})

// Now use reduce function to add all the numbers
// var sum = 0
// num.forEach((elem)=>{
//     return sum = sum + elem
// })

// console.log(sum)

var total = num.reduce((acc, elem)=>{
    return acc + elem
}, 0)

console.log(total)