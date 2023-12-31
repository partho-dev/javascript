var h1 = document.querySelector("h1")
var btn = document.querySelector("button")
btn.style.backgroundColor="green"
btn.style.color="white"

let count = 0
let timer
btn.addEventListener("click", ()=>{
    if(btn.innerText === "Start"){
        timer= setInterval(()=>{
            count++
            h1.innerText = count
            btn.innerText = "Stop"
            btn.style.backgroundColor="Red"
            btn.style.color="white"
            }, 1000)
    }else{
        clearInterval(timer)
        btn.innerText = "Start"
        btn.style.backgroundColor="green"
        btn.style.color="white"
        h1.innerText = " "
    }

})