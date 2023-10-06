////rest opreator using function 
function sum(a, b) {
    var otherNum = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        otherNum[_i - 2] = arguments[_i];
    }
    var store = 0; // Initialize store to 0
    for (var i = 0; i < otherNum.length; i++) {
        store += otherNum[i]; // Add each value to store
        console.log(store);
    }
    console.log(a + b + store);
}
sum(1, 2, 4, 21);
