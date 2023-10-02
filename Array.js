var array = ["Mango", "Apple", "Orange", "Banana"];
console.log(array); ///its print complete name
console.log(array[0]); //acess array value using form index
console.log(array[1]);
console.log(array[2]);
// now print array Complete value using for loap
for (var i = 0; i < array.length; i++) {
    console.log("the value of index ".concat(i, " is ").concat(array[i]));
}
