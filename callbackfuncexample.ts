const dosomething2=(email,pass,callback)=>{
    setTimeout(() => {
        callback(email)
    }, 1000);
}
let userVideo=(baj,cb)=>{
    setTimeout(() => {
      cb(['video1','video2','video3','video4','video5'])
    }, 3000);
}

dosomething2("raoalimurad",123,(emal)=>{
    console.log(emal)
   userVideo(emal,(videos)=>{
       console.log(videos)   
   })
})