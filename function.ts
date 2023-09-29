/////this is simple function
function print(){
  console.log("hello world");
}
print();

///////function with parameter

function sum(num1:number,num2:number)/////passing parameter
{
   console.log(num1+num2) 
};
sum(10,12)////passing arguments


// function with default parameters
function hello(fname:string,lname:string="murad")////default
{
    console.log(fname+lname)
}


hello("rao ali ");///giving one argument it another is default







// function with return
//we use return because if we need to use the function with another logics so we can use


function sum1(num1:number,num2:number)
{
    return (num1+num2) 
};
let store= sum1(30,20)//////here store the value in variable
console.log(store)



