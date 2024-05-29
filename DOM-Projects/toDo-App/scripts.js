let input = document.querySelector(".input")
let submit = document.querySelector(".submit")
let completebtn = document.querySelector(".complete")

let body = document.querySelector(".body")

let items = []

submit.addEventListener("click", ()=>{
    if(input.value.trim().length > 0) {
        items.push(input.value)
        addItems()
        input.value = ""
    }
})

let addItems = ()=>{
    clutter = ""
    items.forEach((elem, index)=>{
        clutter+= `<div class="list">
        <p> ${elem} </p>
        <button class="delBtn" data-index="${index}" > Delete </button>
        <button class="complete" data-index="${index}" > Completed </button>

        </div>`
    })
    body.innerHTML = clutter
}

// Delete items 
body.addEventListener("click", (e)=>{
if(e.target.className == "delBtn")
{
    let indexItem = +e.target.dataset.index
    items.splice(indexItem, 1)
    addItems()
}
})

//Completed items -- Change the BGC
body.addEventListener("click", (e)=>{
    if(e.target.className == "complete") {
        e.target.style.backgroundColor = "green"
    }
})