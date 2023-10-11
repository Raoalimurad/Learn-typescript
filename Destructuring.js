var arr = ["Ali Murad", 19, "raoalimurad52@gmail.com"];
var fname = arr[0], email = arr[2]; /////array desctructuring 
console.log(email, fname);
//////object destructing
var obj1 = {
    fnames: "rao",
    lname: "ali",
    hobbies: ["cricket", "football"]
};
var fnames = obj1.fnames, lname = obj1.lname, hobbies = obj1.hobbies;
console.log(hobbies[0]);
