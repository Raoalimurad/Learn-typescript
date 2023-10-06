////intersection is a combination of types 
type personInfo ={
    name:string,
    age:number
}
type officalDetail={
    email:string,
    status:string

}
type person=personInfo & officalDetail;

let person:person ={
   name:"rao ali murad",
   age:17,
   email:'raoalimurad@',
   status:"software engreeing",
}
console.log(person)