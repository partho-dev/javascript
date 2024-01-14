let h1 = document.querySelector("h1")
let buttonStart = document.querySelector(".start")
let buttonStop = document.querySelector(".stop")
let buttonReset = document.querySelector(".reset")


// what we should not do 
buttonStart.addEventListener("click", ()=>{
  let countdown = 0 /* never declare the initial value inside the callback function to prevent getting reset*/
  /*SetTimeout should not be used in this case*/
  setTimeout(()=>{
    h1.innerHTML=`${countdown}`
    countdown++ 
    }, 1000)
})


// What is the correct way of doing 
/*Start the countdown by clicking on Start button*/
let count = 0
let timer 
buttonStart.addEventListener("click", ()=>{
  // let count = 0
  timer = setInterval(()=>{
  h1.innerHTML=`${count}`
  count++
}, 1000)
})

/*Stop the countdown by clicking on Stop button*/
buttonStop.addEventListener("click", ()=>{
  clearInterval(timer)
})

/*Reset the countdown by clicking on Reset button*/
buttonReset.addEventListener("click", ()=>{
  count=0
  h1.innerHTML=`${count}`
})


/*
Lets do the same code without clicking on any button, just by pressing a keyborad key
By pressing enter key, control the start and rest of the counter
*/
document.addEventListener("keyup" , (e)=>{
  if(e.key==="Enter"){
    /*Clear any existing counter*/
    clearInterval(timer)
    count=0
    /*And start the count from begining*/
    h1.innerHTML=`${count}`
    timer = setInterval(()=>{
      h1.innerHTML=`${count}`
      count++
    }, 1000)
  }
})



