/////use regular expression to to replace all words in a string;
let text="Rao ia very nice very awaose very intelligent very and so very";
console.log(text.replace("very","good"))///its change only one which it found first



let regex=/very/g/////this is regular expression
console.log(text.replace(regex,"good"))///check its change this world globally

let regex1=/[v]/g
console.log(text.replace(regex1,"g"))
///cheatsheet
// /./ is for any value    . ver
// /d/ for digit       7arry
// /[a-z]/ between them words