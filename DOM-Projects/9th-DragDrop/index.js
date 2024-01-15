let fromBox = document.querySelector(".from")
let toBox = document.querySelector(".to")

let dragElement = document.querySelectorAll(".dragelement")
// let wrapper = document.querySelectorAll(".wrapper")

dragElement.forEach((elem)=>{
  elem.addEventListener("dragstart", (e)=>{
      let selected = e.target
      // console.log(selected)

      toBox.addEventListener("dragover", (e)=>{
          e.preventDefault()
      })

      toBox.addEventListener("drop", (e)=>{
          toBox.appendChild(selected)
          selected = null
      })

      fromBox.addEventListener("dragover", (e)=>{
        e.preventDefault()
    })

    fromBox.addEventListener("drop", (e)=>{
        fromBox.appendChild(selected)
        selected = null
    })
  })
})

