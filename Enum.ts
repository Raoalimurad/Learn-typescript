////enum is a user defined datatype:
///enum is a fixed set of values:
//You should use enum types any time you need to represent a fixed set of constants.

enum days{
    mon,tues,wed,thurs,fri,sat,sun
}
let whichDay:days=days.mon;////get value 
let anotherDay:days=days["tues"]///another way
console.log(anotherDay)




console.log(whichDay)
///another example:
enum month{
    jan=1,feb=12,mar,April
}
let months:month;
months=month.jan
console.log(months)
months=month.mar
console.log(months)



