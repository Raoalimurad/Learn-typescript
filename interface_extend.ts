interface person{
    name:string,
    age:number
}

interface teacher extends person {
    email:string
}
interface principle extends teacher{
    id:boolean
}
let student:person={
    name:"rao ali murad",
    age:19,
    
}
let teacher:teacher={
    name:"rao",
    age:50,
    email:"raoalimurad52@gmail.com"
}
let principle:principle={
    name:"rao",
    age:50,
    email:"raoalimurad52@gmail.com",
    id:true
}