function sum(a:number){
    let b=10
    function inner(){
        let sum=a+b
        console.log(`the sum of two values is ${sum}`)
    }
    return inner;
}
let add= sum(15)
add()


/////another example
function outerFunction() {
    let outerVar = 'I am from the outer function';
  
    function innerFunction() {
      console.log(outerVar); // innerFunction "closes over" outerVar
    }
  
    return innerFunction; // We return the inner function itself
  }
  
  const closureFunction = outerFunction(); // closureFunction is now a closure
  
  closureFunction(); // When we call closureFunction, it can still access outerVar
  