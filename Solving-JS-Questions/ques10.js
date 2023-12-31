//write a JS function to get the number of occurances of each letter in specific string
// apple = a:1, p:2, l:1, e:1

function occ(str){

    var obj = {};
    str.split("").forEach((elem)=>{
        if(obj.hasOwnProperty(elem) === false){
                obj[elem] = 1
            }else{
                obj[elem] ++
            }
    })
    return obj
}

console.log(occ("apple"))