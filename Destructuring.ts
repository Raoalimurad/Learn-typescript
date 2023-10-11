
let arr=["Ali Murad",19,"raoalimurad52@gmail.com"];
let [fname,,email]=arr /////array desctructuring 
console.log(email,fname)


//////object destructing
let obj1={
    fnames:"rao",
    lname:"ali",
    hobbies:["cricket","football"]
}
let {fnames,lname,hobbies}=obj1
console.log(hobbies[0])