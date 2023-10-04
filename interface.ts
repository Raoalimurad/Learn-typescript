/////Interface basically define properties methods and events which are the member of interface


interface student{
    name:string,
    age:number,
    gender:string,
    guess:boolean,
    greet:()=>void
    hobbies:string[]
    socialMedia:{
        s1:string
    }
    
}
let student1:student={
    name:"Rao ali murad",
    age:19,
    gender:"Male",
    guess:true,
    greet:()=>{
        console.log("hello divs")
    },
    hobbies:["cricket","full stack developer"],
    socialMedia:{
        s1:"youtube",
    }

}

console.log(student1.name)