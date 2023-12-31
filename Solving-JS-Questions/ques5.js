// duplicate([1, 2, 3, 4, 5]) // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

//Normal Way
var arr = [1, 2, 3, 4]
var newArr =arr.concat(arr)
console.log(newArr)


//Function way
function duplicate(arr){
    return arr.concat(arr)
}

console.log(duplicate([4, 5, 9]))