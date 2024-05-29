let daysCount = 0

let firsth4 = document.querySelector(".h4-1")
let secondh4 = document.querySelector(".h4-2")
let thirdh4 = document.querySelector(".h4-3")
let fourthh4 = document.querySelector(".h4-4")
let renewBtn = document.querySelector(".renewBtn")



let updateStatus = () =>{
  if(daysCount>0){
    firsth4.textContent = `Ends in ${daysCount} Days`
    let Activespan = document.createElement('span');
    Activespan.textContent = 'Active';
    Activespan.classList.add('active');
    secondh4.textContent = "Status - "
    secondh4.appendChild(Activespan)
    thirdh4.style.display = "none"
    fourthh4.style.display = "none"
    renewBtn.style.display = "none"
  }else{
    firsth4.style.display = "none"
    secondh4.style.display = "none"
    thirdh4.style.display = "block"
    fourthh4.style.display = "block"
    renewBtn.style.display = "block"
  }
}

updateStatus()

renewBtn.addEventListener("click", ()=>{
  if(daysCount==0){
    daysCount++
    updateStatus()
  }
})