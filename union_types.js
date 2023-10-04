////union types
//union hum ak variable ki multiple type define karny kalia use karty hy
var information = "pakistan";
information = 30;
information = true; /////you can see we have given multiple type to variable
function print(id) {
    if (typeof id === "string") {
        console.log(id.toLowerCase());
    }
    else {
        console.log("this is number");
    }
}
print("RAO ALI MURAD");
print(50);
