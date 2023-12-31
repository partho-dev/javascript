// Given a string, reverse each word in the sentense
var stng = "Hello How are you?"
/*
1. first we will need to convert the string into an array, so that we can loop
2. To convert the sentense string into an array we can use split(" ") on the basis of space
3. Now. we got the array with 4 elements inside the array
4. Now its easy to loop in that items
5. we will use map, so that we can store all the in a new variable 
6. return word.split("").reverse().join("")
7. first we are doing split on the basis of nothing to break all the words into a string
8. then we will reverse that and later again we will join them to make it a string
*/

var splitstn = stng.split(" ")

var savedresult = splitstn.map((word)=>{
    return word.split("").reverse().join("")
})

console.log(savedresult.join(" "))

// Output 

// "Hello How are you?" becomes  olleH woH era ?uoy 