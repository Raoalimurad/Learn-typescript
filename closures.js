function sum(a) {
    var b = 10;
    function inner() {
        var sum = a + b;
        console.log("the sum of two values is ".concat(sum));
    }
    return inner;
}
var add = sum(15);
add();
/////another example
function outerFunction() {
    var outerVar = 'I am from the outer function';
    function innerFunction() {
        console.log(outerVar); // innerFunction "closes over" outerVar
    }
    return innerFunction; // We return the inner function itself
}
var closureFunction = outerFunction(); // closureFunction is now a closure
closureFunction(); // When we call closureFunction, it can still access outerVar
