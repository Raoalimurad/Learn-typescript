var obj1 = {
    name: "Raoalimurad",
    fname: "shahid pervaiz",
    age: 19,
    hobbies: ["cricket", "football", "coding"]
};
console.log(obj1); ////access complete object
////now access his individul property
console.log(obj1.name);
console.log(obj1.age);
console.log(obj1.hobbies[0]); ///acess array value in a object
///////function in a object 
var obj2 = {
    salary: function () { return 10000; },
    greetName: function (a, b) {
        return console.log("this is ".concat(a, " and ").concat(b));
    }
};
obj2.greetName("rao", "ali");
console.log(obj2.salary());
