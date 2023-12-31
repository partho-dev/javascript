var alltab = document.querySelector("#all")
var hometab = document.querySelector("#home")
var abouttab = document.querySelector("#about")
var contacttab = document.querySelector("#contact")

var hometext = document.querySelector(".hometxt")
var abouttext = document.querySelector(".abouttxt")
var contacttext = document.querySelector(".contacttxt")

    hometext.style.display = "block"
    abouttext.style.display = "block"
    contacttext.style.display = "block"

alltab.addEventListener("click", ()=>{
    hometext.style.display = "block"
    abouttext.style.display = "block"
    contacttext.style.display = "block"
})

hometab.addEventListener("click", ()=>{
    hometext.style.display = "block"
    abouttext.style.display = "none"
    contacttext.style.display = "none"
    // hometab.style.backgroundColor="green"
})

abouttab.addEventListener("click", ()=>{
    hometext.style.display = "none"
    abouttext.style.display = "block"
    contacttext.style.display = "none"
})

contacttab.addEventListener("click", ()=>{
    hometext.style.display = "none"
    abouttext.style.display = "none"
    contacttext.style.display = "block"
})