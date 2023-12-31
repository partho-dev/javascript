/*write a JS function that accepts a string as a parameter and converts the 
first letters of each word of the string in Upper case.*/

var str = "hello how are you?"
var arr = str.split(" ")
// console.log(arr)
var upper = arr.map((elem)=>{
    return elem.charAt(0).toUpperCase()+elem.slice(1)
})

console.log(upper.join(" "))
