//tuple is a typed array and pre defined length and type for each index
// let arry:[string,number,boolean]=["rao",19,true,"helloo"] access error beacuse we have already defined the type and lenght of arry
// like this / let arry:[string,number,boolean]
var arr = ["rao", 19, true];
console.log(arr);
// another exapmple of tuple
var student;
student = ["hkl", 19, false, { name: 'ali', fname: "shahid pervaiz" }];
console.log(student);
console.log(student[3].fname); ////here i access fname in object
