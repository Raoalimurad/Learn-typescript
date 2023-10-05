////enum is a user defined datatype:
///enum is a fixed set of values:
//You should use enum types any time you need to represent a fixed set of constants.
var days;
(function (days) {
    days[days["mon"] = 0] = "mon";
    days[days["tues"] = 1] = "tues";
    days[days["wed"] = 2] = "wed";
    days[days["thurs"] = 3] = "thurs";
    days[days["fri"] = 4] = "fri";
    days[days["sat"] = 5] = "sat";
    days[days["sun"] = 6] = "sun";
})(days || (days = {}));
var whichDay = days.mon; ////get value 
var anotherDay = days["tues"]; ///another way
console.log(anotherDay);
console.log(whichDay);
///another example:
var month;
(function (month) {
    month[month["jan"] = 1] = "jan";
    month[month["feb"] = 12] = "feb";
    month[month["mar"] = 13] = "mar";
    month[month["April"] = 14] = "April";
})(month || (month = {}));
var months;
months = month.jan;
console.log(months);
months = month.mar;
console.log(months);
