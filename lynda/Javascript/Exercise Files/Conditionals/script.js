var a = 5;
var b = 5;
var theNumbersMatch;

if ( a == b ) {
    theNumbersMatch = true;
} else {
    theNumbersMatch = false;
}

console.log("The numbers match: " + theNumbersMatch);
var a = 5;
var b = "5";

var theNumbersMatch; 
// this will test strict equality of the variables
if ( a === b ) {
    theNumbersMatch = true;
} else {
    theNumbersMatch = false;
}

console.log("The numbers match: " + theNumbersMatch);
