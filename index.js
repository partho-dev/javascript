// write a program which greets each other, make sure the time between 2nd greet and 1st greet is 1 second and 3rd with 2nd is 2 sec
// Write the same using both promise & callback

const greet1 = function(name){
    return new Promise((res, rej)=>{
        setTimeout(() => {
            (res(`Hello ${name}, good morning`))
        }, 1000);
    })
}

const greet2 = function(name){
    return new Promise((res, rej)=>{
        setTimeout(() => {
            (res(`Hello ${name}, good morning`))
        }, 2000);
    })
}

const greet3 = function(name){
    return new Promise((res, rej)=>{
        setTimeout(() => {
            (res(`Hello ${name}, good morning`))
        }, 3000);
    })
}

const greet4 = function(name){
    return new Promise((res, rej)=>{
        setTimeout(() => {
            (res(`Hello ${name}, good morning`))
        }, 4000);
    })
}

// greet1("John").then((data)=>{
//     console.log(data)
//     return greet2("Doe")
// }).then((data)=>{
//     console.log(data)
//     return greet3("Norem")
// }).then((data)=>{
//     console.log(data)
//     return greet4("Brinton")
// }).then((data)=>{
//     console.log(data)
// })

//async await method
//Need to create a function
const greetings = async()=>{
    try {
        console.log(await greet1("Sam"))
        console.log(await greet2("Harry"))
        console.log(await greet3("Jack"))
        console.log(await greet4("Joe"))
    } catch (error) {
        console.log(error)
    }
}

greetings()