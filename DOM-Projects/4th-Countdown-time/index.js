let startBtn = document.querySelector(".sttBtn")
let resetBtn = document.querySelector(".rstBtn")
let h1 = document.querySelector("h1")

let count = 0
let startCount
startBtn.addEventListener("click", ()=>{
 if(startBtn.textContent == "Start"){
    // startBtn.textContent = "Stop"
    startCount = setInterval(() => {
        h1.innerHTML = count++
        startBtn.textContent = "Stop"
        startBtn.style.color = "red"
        resetBtn.style.backgroundColor = "red"


    }, 1000);
 }else{
    clearInterval(startCount)
    startBtn.textContent="Start"
    startBtn.style.color = "green"

 }
    
})

resetBtn.addEventListener("click", ()=>{
    clearInterval(startCount)
    startBtn.textContent = "Start"
    count = 0
    h1.innerHTML = count
})