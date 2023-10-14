var student = /** @class */ (function () {
    function student(myName) {
        this.name = myName;
    }
    student.prototype.hello = function () {
        console.log("welcome to ".concat(this.name));
    };
    return student;
}());
var a = new student("Rao Ali Murad");
console.log(a.name);
a.hello();
/////
var teacher = /** @class */ (function () {
    function teacher(name, age) {
        this.name = name;
        this.age = age;
        this.hobbies = ["cricker", "football"];
    }
    /////in this class we also use method
    teacher.prototype.salary = function (salary) {
        console.log("".concat(this.name, " salary is ").concat(salary));
    };
    return teacher;
}());
////making object of a class
var teacher1 = new teacher("Rao Ali Murad", 19);
console.log(teacher1);
console.log(teacher1.name);
console.log(teacher1.age);
console.log(teacher1.hobbies[0]);
teacher1.salary(2000);
/////////you can make more object of the class
var teacher2 = new teacher("Babar", 30);
console.log(teacher2);
console.log(teacher2.name);
console.log(teacher2.age);
console.log(teacher2.hobbies[1]);
teacher2.salary(200000);
