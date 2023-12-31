//fine the largest number in an array

var num = [-1, 3, 7, 2, 8,10,12, 0.1]

let bigNum = 0;
// for (let i = 0; i<num.length; i++){
//     if(num[i]>bigNum){
//         bigNum = num[i]
//         document.querySelector("h2").innerText=bigNum
//     }
// }

// num.forEach((elem)=>{if(elem>bigNum){
//     bigNum=elem;
//     document.querySelector("h2").innerText=bigNum
// }})

for (let i = 0; i<num.length; i++){
    if(num[i]>bigNum){
        bigNum = num[i]
        // document.querySelector("h2").innerText=bigNum
    }
}
console.log(bigNum)