//How would you check if a number is an integer

// Normal way: 
var num = 12
num%1 === 0? console.log("integer") : console.log("not an integer" )

// Without ternary 
if(num % 1 == 0){
    console.log("integer")
}else{
    console.log("not an integer" )
}

// with funtion
function integerCheck(num){
    return num%1 === 0? console.log("integer") : console.log("not an integer" )
}

integerCheck(13.9)