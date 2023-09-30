//////There are two types of variable scope 
// local_scope
// global_scope



// global variables


let fname="rao ali murad";

console.log(fname)/////global varibale



function printName(){
    
    console.log(fname)////accessing in a function
}
printName();





// local varibels

function lastName(){
    let sirName='Ahsan raza';
    console.log(sirName)/////only access in this block of code
}
// console.log(sirName) cannot access beacaue its is local give error