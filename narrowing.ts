
// the process of refining types to more specific types than declared is called narrowing.

let a:string|number
a=50;////narrowing
console.log(a)
a="ali";
console.log(a)


function takeType(a:string|number){
    if(typeof a=="string"){
        console.log(a.toUpperCase())
    }else{
        console.log(a+10)
    }
}
takeType(20)
takeType("raoalimurad")