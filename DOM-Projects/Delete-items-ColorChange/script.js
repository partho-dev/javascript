let productList = [
    {image:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnVybml0dXJlfGVufDB8fDB8fHww" , title:"1st Item" , description:"Desc1" ,price:12, isPopular:true},
    {image:"https://plus.unsplash.com/premium_photo-1681980019667-96baeb36fc33?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D" , title:"2nd Item" , description:"Desc2" ,price:123, isPopular:true},
    {image:"https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D" , title:"3rd Item" , description:"Desc3" ,price:21, isPopular:false},
    {image:"https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D" , title:"4th Item" , description:"Desc4" ,price:23, isPopular:false},
    {image:"https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D" , title:"5th Item" , description:"Desc5" ,price:123, isPopular:false},
    {image:"https://images.unsplash.com/photo-1503602642458-232111445657?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D" , title:"6th Item" , description:"Desc6" ,price:12, isPopular:true},
    {image:"https://images.unsplash.com/photo-1503602642458-232111445657?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D" , title:"6th Item" , description:"Desc6" ,price:12, isPopular:true},
]
// function to change the color 
const bgc = function(){
    return `rgba( ${(Math.random()*255).toFixed()}, ${(Math.random()*255).toFixed()}, ${(Math.random()*255).toFixed()},0.5 )`
}

let products = document.querySelector(".productList")
let popularProductsContainer = document.querySelector(".popularProductsContainer")
let singleProduct = document.querySelector(".singleProduct")
let main = document.querySelector(".main")
let inputBox = document.querySelector(".inputBox")
let displayiTems = document.querySelector(".displayiTems")

const productListFn = function() {
    let clutter = ""
productList.forEach((elem)=>{
    clutter+=`<div class="singleProduct" style="background-color:${bgc()}" >
    <div class="imgage">
        <img src="${elem.image}" alt="">
    </div>
    <div class="desc">
        <h6> ${elem.title} </h6>
    </div>
</div>`
})

products.innerHTML = clutter
}

productListFn()

const polularProductsFn = function(){
    let clutter = ""
    productList.forEach((elem)=>{
        if(elem.isPopular === true){
            clutter+= `<div class="singleProduct" style="background-color: ${bgc()}">
                <div class="imgage">
                    <img src=" ${elem.image} " alt="">
                </div>
                <div class="desc">
                    <h6> ${elem.title} </h6>
                    <h6> ${elem.price} </h6>
                </div>
            </div>`
        }
    })
    popularProductsContainer.innerHTML += clutter
}
polularProductsFn()


// Change BG colors 
// main.style.backgroundColor = bgc()
// singleProduct.style.backgroundColor = bgc()

// Place the Values on circle 

let textBox = []

const addiTems = ()=>{
    let clutter = ""
    textBox.forEach((elem, index)=>{
        clutter+=`<div class="circle" style="background-color: ${bgc()}"  >
        <h5> ${elem.name}  </h5>
        <i data-index=${index} class="delete ri-recycle-fill"></i>
    </div>`
    })
    displayiTems.innerHTML = clutter
}
addiTems()

//Delete the items
displayiTems.addEventListener("click", (e)=>{
    if(e.target.classList.contains("delete")){
        const index = e.target.dataset.index
        textBox.splice(index,1)
        addiTems()
    }
})

// Add functionality 
inputBox.addEventListener("keyup", (e)=>{
    if(e.key=="Enter" && e.target.value.length>0){
        textBox.push({name:e.target.value})
        e.target.value = ""
        addiTems()
    }
})