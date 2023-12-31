//write a JS function that checks whether a passed string is palindrome or not

//  radar == > radar
// noon == > noon

function checkPalidrome(word){
    if(word === word.split("").reverse().join("")){
        console.log(`${word} is palidrome`)
    }else{
        console.log("Not a palidrome")
    }
}

checkPalidrome("Partho")
checkPalidrome("noon")