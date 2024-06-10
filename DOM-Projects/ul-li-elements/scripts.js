let searchBox = document.querySelector(".searchBox")
let searchBotton = document.querySelector(".searchBtn")

let body = document.querySelector(".bodyFld")
let p = document.createElement("p")

let ul = document.createElement("ul")
// let li = document.createElement("li")

searchBotton.addEventListener("click", (e)=>{
  e.preventDefault()
  let value = searchBox.value
  if(value.trim() !== ""){
  let li = document.createElement("li")
  li.textContent = value
  //Create a Delete btn
  let delBtn = document.createElement("button")
  delBtn.textContent = "Delete"
  delBtn.classList.add("delbottnClass")
  li.appendChild(delBtn)
  ul.appendChild(li)
  body.appendChild(ul)
  count()
  searchBox.value = ""
  }
})

// Delete the li 
body.addEventListener("click", (e)=>{
  if(e.target.classList == "delbottnClass" ){
    e.target.parentNode.remove()
    count()
  }
})

let count = () =>{
  p.textContent = ul.children.length
}

body.appendChild(p)