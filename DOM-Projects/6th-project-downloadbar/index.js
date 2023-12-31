var btn = document.querySelector("button")
var movingbar = document.querySelector(".moving")
var p = document.querySelector("p")


btn.addEventListener("click", ()=>{
    let count = 0
    let progress = setInterval(()=>{
        movingbar.style.backgroundColor = "green"
        // movingbar.style.width = 20%
        movingbar.style.width = `${count}%`
        count++
        if(count === 100){
            clearInterval(progress)
        }
        if(count >0 && count <100){
            p.textContent = "Downloading..."
            p.style.color = "white"
        }else if(count === 100){
            p.textContent = "Download Completed"
        }
    }, 100)
})