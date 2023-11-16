// write a program which greets each other, make sure the time between 2nd greet and 1st greet is 1 second and 3rd with 2nd is 2 sec
// Write the same using callback

const greet1 = function(name, cb){
    setTimeout(() => {
        console.log(`Hello ${name}, good morning`)
    }, 1000);
    cb()
}

const greet2 = function(name, cb){
    setTimeout(() => {
        console.log(`Hello ${name}, good morning`)
    }, 2000);
    cb()
}

const greet3 = function(name, cb){
    setTimeout(() => {
        console.log(`Hello ${name}, good morning`)
    }, 3000);
    cb()
}

const greet4 = function(name){
    setTimeout(() => {
        console.log(`Hello ${name}, good morning`)
    }, 4000);
}

// call the callback
greet1("Mark", ()=>{
    greet2("John", ()=>{
        greet3("Partho", ()=>{
            greet4("Leia")
        })
    })
})
