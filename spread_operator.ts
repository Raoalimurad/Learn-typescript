// spread operator with array
let arr=["Ali","Murad","Rehman"];
let arr1=["yellow","black","pink"];
let  updateArray=[...arr,...arr1];////here ...spreadOperator is use
console.log(updateArray)

///spread operator with object
let student1={
    name:"rao ali murad",
    email:'raoalimurad@52',
    id:20

}
let student2={
    ...student1,
    hobbies:["cricket","hockey"]
}
console.log(student2);
