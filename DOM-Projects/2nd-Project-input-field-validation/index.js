var h3 = document.querySelector("h3")
var form = document.querySelector(".form")
var text1 = document.querySelector(".text-1")
var text2 = document.querySelector(".text-2")

var inputs = document.querySelectorAll('input[type="text"]')


form.addEventListener("submit", (event)=>{
    event.preventDefault();

    // This checks if any of the fields are empty and gives a generic message 

    // if(text1.value.length === 0 || text2.value.length === 0
    // if(text1.value.trim().length === 0 || text2.value.trim().length === 0){
    //     h3.textContent = "Error"
    //     h3.style.color = "red"
    // }else{
    //     h3.textContent = ""
    //     h3.style.color = "black"
    // }

// This checks the specific field which is empty and gives the error accordingly 

// if(text1.value.length === 0){
//     h3.textContent="1st field is empty"
//     h3.style.color = "red"
// }else if(text2.value.length === 0){
//     h3.textContent="2nd field is empty"
//     h3.style.color = "red"
// } else{
//     h3.textContent = ""
//     h3.style.color = "black"
// }

// using foreach has some limitations, just keep the 1st field empty and 2nd field with value

// inputs.forEach(
//     (item, index)=>{if(item.value.length===0){
//     h3.textContent = `Error on Position:${index +1}`
//     h3.style.color = "red"
    
// }else{
//     h3.textContent = ""
//     h3.style.color = "black"
// }
// })

// To overcome the foreach limitations, we will use for loop
for(let i=0; i<inputs.length; i++){
    if(inputs[i].value.length === 0 || inputs[i].value.trim() === "" ){
        // h3.textContent = `input on box ${inputs[i].value.indexOf("i")+1} is empty`
        h3.textContent = `input on box ${i + 1} is empty`
        // h3.textContent = "Error, some field is missing"
        h3.style.color = "red"
        break;
    }else{
        h3.textContent = "All fields are filled"
        h3.style.color = "green"
    }
}
})



