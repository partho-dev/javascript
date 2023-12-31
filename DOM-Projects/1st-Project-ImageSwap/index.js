var image1 = document.querySelector(".image1")
var image2 = document.querySelector(".image2")

var image1SRC = image1.src
// console.log(image1)
// console.log(typeof image1)
// console.log(image1SRC)
var image2SRC = image2.src

var btn = document.querySelector("button")

btn.addEventListener("click", ()=>{
    // console.log("Btn Clicked")
    if(image1.src == image1SRC){
        image1.src = image2SRC
        image2.src = image1SRC
    }else {
        image1.src = image1SRC
        image2.src = image2SRC
    }
})
