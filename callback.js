var dosomething = function (callback) {
    console.log("do something bhii");
    callback(); /////call to callback function
};
var dosomething1 = function () {
    console.log("this is call back function");
};
// dosomething(dosomething1)////passing function as a reference
dosomething(dosomething1()); ////now calling to function
///call back fucntion wo function hotty han jin ko hum dosry function ko as a argument pass karty han
var dosomething2 = function (email, pass, callback) {
    setTimeout(function () {
        callback(email);
    }, 1000);
};
var userVideo = function (baj, cb) {
    setTimeout(function () {
        cb(['video1', 'video2', 'video3', 'video4', 'video5']);
    }, 3000);
};
dosomething2("raoalimurad", 123, function (emal) {
    console.log(emal);
    userVideo(emal, function (videos) {
        console.log(videos);
    });
});
