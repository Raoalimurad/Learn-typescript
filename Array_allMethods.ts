let fruits:string[]=["apple","mango","grapes","banana"];

 ////modify and delete in array:

 fruits[0]="lemon";///modify
 console.log(fruits);
 //// delete method
delete fruits[0];

 console.log(fruits);


 ////sort method of array:
 let fruit1:string[]=["apple","mango","grapes","banana"]
 console.log(fruit1.sort());


//  reverse method in array
let fruit2:string[]=["apple","mango","grapes","banana"]
console.log(fruit2.reverse());

/////pop method in array
let names:string[]=["ali","murad","faizan","zonha"];
names.pop()
console.log(names)

/////push method in array
let name1:string[]=["ali","murad","faizan","zonha"];
name1.push("nabeel")
console.log(name1)


////shift method in array 
let name2:string[]=["ali","murad","faizan","zonha"];
name2.shift();
console.log(name2)


//////unshift method in array 
let name3:string[]=["ali","murad","faizan","zonha"];
name3.unshift("neha")
console.log(name3)



////////concat method in array 
let name4:string[]=["ali","murad","faizan","zonha"];
let fnam=name4.concat("alishaba ","faheem")
console.log(fnam)

////slice method in array
let a:string[]=["ali","murad","faizan","zonha"];
let b= a.slice(0,3)///start index and end index
console.log(b)


/////splice method in array
let x:string[]=["ali","murad","faizan","zonha"];
x.splice(1,0,"fraha","rimsha");///staring index ,how many delete,new values
console.log(x)


////indexof method in array


let x1:string[]=["ali","murad","faizan","zonha"];
console.log(x1.indexOf("murad",0))////name serach using index,start from

// some method in array

let ages=[10,14,16,49,24]
let store= ages.some(checkAdult)
function checkAdult(age){
    return age>=18;
}
console.log(store)

// every method in array
let age=[10,14,16,49,24]
let stores= ages.every(checkAdults)
function checkAdults(age){
    return age>=18;
}
console.log(stores)























