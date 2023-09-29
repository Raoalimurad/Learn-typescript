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
