let search = document.querySelector(".search")
let secondSection = document.querySelector(".section2")
let deleteBtn = document.querySelector(".ri-delete-bin-6-line")

search.addEventListener("focus", ()=>{
        secondSection.style.opacity = 0.4
})

secondSection.addEventListener("click", ()=>{
    secondSection.style.opacity = 1
})


let arr = []

function secondSectionFn(){
    let clutter = ""
    arr.forEach((elem, index) => {
        clutter+=`<div class="content">
        <h1> ${elem} </h1> <i class="ri-delete-bin-6-line deleteBtn"></i>
    </div>`
    })
    secondSection.innerHTML = clutter == "" ? "TYPE SOMETHING" : clutter

    let deletBotn = document.querySelectorAll(".deleteBtn")
    deletBotn.forEach((elem, index)=>{
    elem.addEventListener("click", ()=>{
        arr.splice(index, 1);
        // console.log(`clicked on ${elem} on position ${index+1}`)
        secondSectionFn()

    })
})
}
search.addEventListener("keyup", (e)=>{
    // console.log(e)
    if(e.target.value.length !== 0 && e.key=="Enter"){
        arr.push(e.target.value)
        secondSectionFn()
        e.target.value = ""
    }
})