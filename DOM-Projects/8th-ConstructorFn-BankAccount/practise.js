//create a constructor fn
function BankAccount(name, balance=0){
    this.customerName = name
    this.bankBal = balance
    this.bankAcc = Date.now()

    this.deposite = (amount)=>{
        this.bankBal += amount
    }
}

// var parthoAcc = new BankAccount("Partho", 1000)
// parthoAcc.deposite(1000)


var form = document.querySelector(".form")
var cName = document.querySelector(".name")
var balance = document.querySelector(".balance")
var btn = document.querySelector("button")
var p = document.querySelector("p")

let account = []
form.addEventListener("submit", (e)=>{
    e.preventDefault()
   let newAcc = new BankAccount(cName.value, +balance.value)
   p.innerHTML += `Name is: ${cName.value} & Balance is: ${balance.value}, AccNo: ${newAcc.bankAcc} <br> `
    account.push(newAcc)
    cName.value = " "
    balance.value = " "
})

var depositeform = document.querySelector(".depositeForm")
var accNum = document.querySelector(".account")
var money = document.querySelector(".money")
var moneydeposite = document.querySelector(".moneydeposite")


depositeform.addEventListener("submit", (e)=>{
    e.preventDefault()
    account.filter((elem)=>{ if(elem.bankAcc === +accNum.value){
        // console.log(elem)
        elem.deposite(+money.value)
        moneydeposite.textContent = `Name: ${elem.customerName} Account no: ${elem.bankAcc}, Current Balance = ${elem.bankBal}`
        accNum.value = ""
        money.value = ""
    }
    })
})
// console.log(account)

// var newArr = [{name:"Partho", age:40},
//             {name:"John", age:41},
//             {name:"Doe", age:42}]

// var latest = newArr.filter((elem)=>{if(elem.age===40){
//     elem.age = 45
//     console.log(elem)
// }})

