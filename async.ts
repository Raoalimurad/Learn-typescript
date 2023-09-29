
// JavaScript is synchronous by default: every line of code is executed one after the other, and each task must wait for the previous one to be completed before moving to the next. In the above example, the first line of code, One , will be logged first, followed by the second line, Two , and the third line, Three .


console.log("first")
console.log("secound")
console.log("third")
setTimeout(()=>{
    console.log("fourth")///aschronus function of javascript it will excuted after completed his given time
},1000)
console.log('five')
