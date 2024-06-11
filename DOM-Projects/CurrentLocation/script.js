let currentLocation = document.querySelector(".location")


    /** 
    1. There is an inbuild browser method called navigator and it has many properties
    2. we will use "geolocation" & its properties "getCurrentPosition"
    3. But this getCurrentPosition also expects two call back functions as two parameters
        a. 1st parameter for successfull fetching the current location
        b. 2nd parameter for unsuccessful fetching of the current location
    */

currentLocation.addEventListener("click", ()=>{

    // We will create two function which we would pass inside the getCurrentPosition
    //if the location is found as success

    let gotLocation = (position)=>{
        // This will give the lat & long of the user 
        // we can use that to do some activity like showing the temperature 
        console.log(position)
    }


    // If the location is not found
    let failedLocation = ()=>{
        console.log("Failed to get the location")
    }

    // navigator.geolocation.getCurrentPosition(()=>{}, ()=>{})

    navigator.geolocation.getCurrentPosition(gotLocation, failedLocation)
})