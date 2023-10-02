////continue
for (var i = 0; i <= 10; i++) {
    if (i == 3) {
        console.log("this is number".concat(i));
        continue;
    }
    console.log("Number is ".concat(i));
}
// break 
for (var i = 0; i <= 10; i++) {
    if (i == 3) {
        console.log("this is number".concat(i));
        break;
    }
    console.log("Number is ".concat(i));
}
