var add = document.querySelector(".add")
var remove = document.querySelector(".remove")
var ul = document.querySelector("ul")
console.log(ul.outerText)
var input = document.querySelector("input")
var p = document.querySelector("p")

var li
add.addEventListener("click", ()=>{
    if(input.value.length !== 0){
        li = document.createElement("li")
        li.textContent = input.value
        ul.appendChild(li)
        input.value = " "
        p.textContent = `Outertext is: ${ul.outerText}`
    }
})

// there is a bug to fix, it just removes the last list only 

remove.addEventListener("click", ()=>{
    // console.log(ul.value)
    if(ul.innerText !==0){
        ul.removeChild(li)}

    // while(ul.lastChild){
    //     ul.removeChild(ul.lastChild)
    // }
    
})