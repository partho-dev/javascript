//Write a JS function to clone an array.

// var arr = [1, 2, "a", 4]
// var clonedArr = [...arr]
// console.log(clonedArr)

// method1 

function clonedArr(arr){
    return [...arr]

}
console.log(clonedArr([1, 2, "a", 4, "b"]))

// method2 

function clonedpushArray(arr){
    var newArray = []
    arr.forEach((elem)=>{
        newArray.push(elem)
    })
    return newArray
}

console.log(clonedpushArray([1, 2, "a", 4, "b", "c"]))