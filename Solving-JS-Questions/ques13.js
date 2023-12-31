//Loop an array of objects and remove all objects which dont have genders value male

var arr = [
    {name: "Partho", gender:"male" }, 
    {name: "Parthi", gender:"female" }, 
    {name: "John", gender:"male" }
]

var newList = arr.filter((elem)=>{
    if(elem.gender == "male"){
        return elem
    }
})

console.log(newList)