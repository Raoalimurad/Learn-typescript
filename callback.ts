const dosomething=(callback)=>{
    console.log("do something bhii")
    callback()/////call to callback function
}

const dosomething1=()=>{
    console.log("this is call back function")
}

// dosomething(dosomething1)////passing function as a reference
dosomething(dosomething1())////now calling to function

///call back fucntion wo function hotty han jin ko hum dosry function ko as a argument pass karty han


