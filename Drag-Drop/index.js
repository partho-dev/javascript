// 1. WHat needs to be dragged 
let numbers = document.querySelectorAll(".dragelement")
// console.log(numbers)

// 2. where the drag to happen 
let dragplace = document.querySelectorAll(".conntainer")
// console.log(dragplace)

/* To Know the element size and position in refernec to the view port*/
let conntainer = document.querySelector(".conntainer")
let rect = conntainer.getBoundingClientRect()
console.log(rect)

numbers.forEach((elem)=>{
  elem.addEventListener("dragstart", ()=>{
    elem.classList.add("dragging")
  })
  elem.addEventListener("dragend", ()=>{
    elem.classList.remove("dragging")
  })
})


dragplace.forEach((elem)=>{
  elem.addEventListener("dragover", (e)=>{
  e.preventDefault()
  // console.log(e)
  const afterElement = getDragafterElement(elem, e.clientY)
  let draggable = document.querySelector(".dragging")
  // elem.appendChild(draggable)
  afterElement == null ? elem.appendChild(draggable) : elem.insertBefore(draggable, afterElement)
  })
})

/* *^^^^ Upto this, the drap and drop would work perfectly, but the drop will happen always at the end
* But if there is a requirement to place the elemnt in between two other elements, then it needs the below process */

function getDragafterElement(container, y){
  let dragableElement = [...container.querySelectorAll(".dragelement:not(.dragging)")]
  return dragableElement.reduce((closest_element_from_mouse, element_inside_containers)=>{
    const box = element_inside_containers.getBoundingClientRect()
    // console.log(box)
    let middle_of_box = box.top+box.height/2
    const mouse_distance_middle_of_element = y - middle_of_box /*Distance of middle of element from the mouse position in reference from the container top | If the mouse is above element, the output is negative */
    return (mouse_distance_middle_of_element < 0 && mouse_distance_middle_of_element > closest_element_from_mouse ) ? {mouse_distance_middle_of_element , element:element_inside_containers } : closest_element_from_mouse
  }, {mouse_distance_middle_of_element: Number.NEGATIVE_INFINITY}).element
}

// let num = [1, 2, 4]
// let latest = num.reduce((sum, prev)=>{
//   return sum+prev
// }, 0)

// console.log(latest)


