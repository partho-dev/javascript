// use the map method and create a new array with multiple of 5 
const input0 = [1, 2, 3, 4, 5];

let newInput0 = input0.map((elem)=>{return elem*5})
console.log(newInput0)


// sum every positive element 
const input1 = [1, -4, 12, 0, -3, 29, -150];

let newInput1 = input1.filter((num)=>{return num > 0}).reduce((prev, current)=>{return prev+current}, 0)
console.log(newInput1)

