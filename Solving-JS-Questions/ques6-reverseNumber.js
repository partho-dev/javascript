//Write a JS function that reverse a number

// method1 
var num = 85 // need to make it 58
/*
Need to first convert the number to string.
Because, the string has a reverse method
once the reverse is completed, we can get the string back to number
*/
var strNum = num.toString()
console.log(Number(strNum.split("").reverse().join("")))

// Method2 
function reverseNum(number){
    return Number(number.toString().split("").reverse().join("")) 
}
console.log(reverseNum(98))

// Method3
var number = 765
// we can use these two concept here 
// console.log(number%10)
// console.log(num = Math.floor(number/10))

let reverse = 0
while(number > 0){
    reverse = reverse*10 + (number%10)
    number = Math.floor(number/10)
}
console.log(reverse)

// Understand the cocept 

// number = 765 
// 765 > 0
// reverse = 0*10 + (765%10) = 0+5 = 5
// number = 76

// 76>0
// reverse = 5*10+6 = 56
// number = 7
