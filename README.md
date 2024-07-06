# Conceprs related to fundaments abd building block of JS

## Few daily revise Javascript (JS) concepts

1. Get the data from input search and click enter or submmit button and get that data shown on the page and then delete that data.
2. Image slider
3. Enable reminder or notification
4. Select radio buttton and provide the message as textElement as correct or wrong
5. Random password generator

## Important concepts
6. random number = Math.random()
    1. random() generates the number between 0 & 1 [0 is called min number & 1 is called max number]
    2. to generate number between 0 & 255 - Math.floor(Math.random()*255)
    3. to generate number between 1 & 255 - Math.floor(Math.random() * 255) +1
    4. to generate number between 50 & 255 - Math.floor(Math.random() * (255-50) )+50
7. To convert one string to array - string.split(“”)
8. To convert one array to string -array.join(“”)
9. To take the last element from array = array.slice(-1)

## Important JS concepts:

### Add items into DOM.

If items added into DOM as ul & li
1. first create element for ul outside the eventlistener block 
2. create element of li inside the eventlistener block
3. then everytime we click, we will create an li element and add the search value as a textContent to li
4. then append the li to ul and then ul to li
To count the li element = ul.children.length
To Delete li from ul = e.target.parentNode.remove()

### How to make one word in different color in a line in JS
<h4 class="h4-2">Status - <span class="active"> Active </span>  </h4>

We want the Active word to be in Green color
1. first create a span element 
```
let ActiveSpan = document.createElement('span')
```
2. Now, add the textContent to that span
```
Activespan.textContent = 'Active'
```
3. Now add a class into that
```
Activespan.classList.add('active')
``` 
4. Now, write the line, without the Active text
```
secondh4.textContent = "Status - "
```
5. Now, append the span into that
```
secondh4.appendChild(Activespan)
```


### How to Add items on the DOM by pressing "Enter" key on the keyboard
1. Create one searchbox - `let searchBox = document.querySelector(".search-box")`
2. Remember - The enter keyboard event can be fired using the event name `keyup` & it works only for `searchbox` which is `focused` 
3. It **does not** work with any button like `submit` or `any click event`
4. So, dont run the event on the button, but only on the search box

```
    searchBox.addEventListener("keyup",(e)=>{
    // console.log(e)
    if(e.key==="Enter"){
        e.preventDefault()
        let value = searchBox.value
        let key = document.createElement("p")
        key.innerHTML = value
        document.body.appendChild(key)
        searchBox.value = ""
    }
})
```
<img width="239" alt="DOM-Enter" src="https://github.com/partho-dev/javascript/assets/150241170/2ca338ca-22a4-4b0f-adb0-42c51b31ad7d">



### How to Add items into DOM from an input box by clicking Submit Button
1. First add all of them into an array
2. input box - Search : 
```
    <input class="searchBar" type="search" name="items" id=“”> 
    <input class="submit" type="submit" value="Submit">

```
3. Here, on the search bar - name is important as this will be the key for the array.
4. Once you click on submit, it should push the value of search into the array.
```
    let content = []
    submit.addEventListener("click", ()=>{
    if(searchBar.value.length > 0 ){  
    content.push({items:searchBar.value}) }})
```
**Note** : Dont use the event listener on the search, untill you want to impliment the add of contents into Array by pressing enter on keyboard

5. Now, need to create a function which adds content into the DOM from the array
6. run map() or forEach() on the array and populate the loop.
```
    const addItems = ()=>{ 
    clutter = "" 
    content.forEach((elem, index)=>{    
    clutter+=`<h5> ${elem.items} </h5> <button class="deleteBtn" data-index="${index}" > Delete </button>`
    })
    bodySection.innerHTML = clutter}

```
7. Now add this function to the submit event lister, so that it immediately shows the content on the DOM once the contents are added into the Array
```
let content = []
submit.addEventListener("click", ()=>{
    if(searchBar.value.length > 0 ){  
    content.push({items:searchBar.value})addItems() 
    }})

```

8. Delete the items from DOM
    1. Make sure while you do forEach, add index also as a params along with elem
    2. find the index of the item (on the HTML, give this data-index = “${index}”)// Delete items - Add the functionality on the entire Div and check if the click has class same as delBtn
    ```
        body.addEventListener("click", (e)=>{
        if(e.target.className == "delBtn"){    
            let indexItem = e.target.dataset.index    
            items.splice(indexItem,1)    
            addItems()  
            }})

    ```

9. 