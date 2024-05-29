let products = document.querySelector(".products")
let cart = document.querySelector(".ri-shopping-cart-2-line")
let CartContainer = document.querySelector(".cartContainer")
let Category = document.querySelector(".category")


let productList = [
    {image:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnVybml0dXJlfGVufDB8fDB8fHww" , title:"1st Item" , description:"Desc1" ,price:12},
    {image:"https://plus.unsplash.com/premium_photo-1681980019667-96baeb36fc33?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D" , title:"2nd Item" , description:"Desc2" ,price:123},
    {image:"https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D" , title:"3rd Item" , description:"Desc3" ,price:21},
    {image:"https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D" , title:"4th Item" , description:"Desc4" ,price:23},
    {image:"https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D" , title:"5th Item" , description:"Desc5" ,price:123},
    {image:"https://images.unsplash.com/photo-1503602642458-232111445657?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D" , title:"6th Item" , description:"Desc6" ,price:12},
    {image:"https://images.unsplash.com/photo-1503602642458-232111445657?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D" , title:"6th Item" , description:"Desc6" ,price:12},
]

let clutter = ""
productList.forEach((elem, index)=>{
    clutter+=`<div class="box">
    <div data-index = ${index} class="image">
        <img src=" ${elem.image} " alt="">
    </div>
    <div class="descr">
        <div class="title">
            <h3> ${elem.title} </h3>
            <h6> ${elem.description} </h6>
            <h3> ${elem.price} </h3>
        </div>
     <div class="addbtn">
        <i data-index=${index} class="ri-add-line"></i>
     </div>
    </div>
</div>`
})

products.innerHTML = clutter

let isCartOPen = false 
cart.addEventListener("click", ()=>{
    if(!isCartOPen){
        CartContainer.style.opacity = 1
        Category.style.opacity=0.1
    }else{
        CartContainer.style.opacity=0
        Category.style.opacity=1
    }
    isCartOPen = !isCartOPen
})

let cartBox = [ ]
products.addEventListener("click", (e)=>{
    if(e.target.className == "ri-add-line"){
        // console.log(e.target.dataset.index)
        // console.log(e.target)
        // console.log( productList[e.target.dataset.index].title, productList[e.target.dataset.index].price  )
        // productList[e.target.dataset.index].title
        // productList[e.target.dataset.index].price
        cartBox.push(productList[e.target.dataset.index])
        // console.log(cartBox)

        clutter = ""
        cartBox.forEach((elem)=>{
            clutter+= ` <div class="items">
            <p> ${elem.title} </p>
            <p> ${elem.price}</p>
        </div>`
        })

        CartContainer.innerHTML = clutter

    }
})