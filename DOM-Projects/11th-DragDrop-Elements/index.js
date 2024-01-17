// what you want to drag 
let draggables = document.querySelectorAll(".draggable")

// where do you want to DOMStringMap, for two Ways, its good to select both the contaoners 
let containers = document.querySelectorAll(".container")

// Now, apply evet lister to the element that needs to be dragged 
draggables.forEach((draggable)=>{
  draggable.addEventListener("dragstart", ()=>{
    // console.log("Started")
    draggable.classList.add("dragging") /*Add a class to style while dragging*/

  })
  //To remove the style on the element once the drap is done
  draggable.addEventListener("dragend", ()=>{
    draggable.classList.remove("dragging")
  })
})

//Now, we have to think of drag over and drop on containers
containers.forEach((container)=>{
  container.addEventListener("dragover", (e)=>{
    // console.log("dragover")
    e.preventDefault() /*This is used to enable the + icon to drop */
    console.log(e.clientY)
    //with this we need to find the position of mouse
    // This will drop the element to the container, but at the bottom, without giving the luxury to select the position to drop
    container.appendChild(document.querySelector(".dragging"))
  
  })
})
