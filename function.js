/////this is simple function
function print() {
    console.log("hello world");
}
print();
///////function with parameter
function sum(num1, num2) {
    console.log(num1 + num2);
}
;
sum(10, 12); ////passing arguments
// function with default parameters
function hello(fname, lname) {
    if (lname === void 0) { lname = "murad"; }
    console.log(fname + lname);
}
hello("rao ali murad"); ///giving one argument it another is default
// function with return
//we use return because if we need to use the function with another logics so we can use
function sum1(num1, num2) {
    return (num1 + num2);
}
;
var store = sum1(30, 20); //////here store the value in variable
console.log(store);
