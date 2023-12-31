// How to check if an object is an array or not?Provide some code 

// Notes : we can not use typeof Headers, because typeof[] & typeof{} both gives the output as object 

// There is a method called isArray for Array constructor, we can use that 

Array.isArray([])
//true

Array.isArray({})
//falsse




//  Solution starts here 

// 1st we will console log the function body 
function checkobj(elem){
     console.log(Array.isArray(elem))
    
}

checkobj([])
checkobj({})

/*then we will return the function, so we have to console log the function call, 
because return takes the code to the place where it was called  */ 

function obj(elem){
    return Array.isArray(elem)
}

console.log(obj([]))
console.log(obj({}))