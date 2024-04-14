let searchBox = document.querySelector(".searchBox")
let submitBtn = document.querySelector(".submitBtn")
let section = document.querySelector(".section")
let singleBox = document.querySelector(".singleBox")

let items = []

submitBtn.addEventListener("click", ()=>{
    let searchValue = searchBox.value.trim()
    if(searchValue.length>0){
        items.push({item: searchValue})
        searchBox.value = ""
    }
    addItemsFn()
})

searchBox.addEventListener("keyup", (e)=>{
    if(e.key === "Enter" && e.target.value.trim().length>0){
        items.push({item: e.target.value})
        searchBox.value = ""
    }
    addItemsFn()
})

let addItemsFn = ()=>{
    clutter = ""
    items.forEach((elem, index)=>{
            clutter+=`<div class="singleBox">
            <p> ${elem.item} </p>
            <input data-index="${index}" class="deleteBtn" type="button" value="Delete">
        </div>`
    })
    section.innerHTML = clutter
}

section.addEventListener("click", (e)=>{
    // console.log(e)
    if(e.target.className === "deleteBtn"){
        let index = e.target.dataset.index
        items.splice(index, 1)
    }
    addItemsFn()
})
