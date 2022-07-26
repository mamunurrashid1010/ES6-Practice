// javascript ES6

// Array.from()
// The Array.from() method returns an Array object from any object with a length property or any iterable object.
var string="ABCDEF";
var arr=Array.from(string); // [A,B,C,D,E,F]
document.write("<br>"+arr+"<br>");


// Array keys()
// The keys() method returns an Array Iterator object with the keys of an array.
var fruits=["Orange","mango","Banana","Apple"];
var keys=fruits.keys();
for (let x of keys) {
    text += x + "<br>";
}

// Array find()
// The find() method returns the value of the first array element that passes a test function.
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}