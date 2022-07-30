// Javascript ES6
// String operation


// 1. String.includes() function
// The includes() method returns true if a string contains a specified value, otherwise false
let text = "Hello world, welcome to the universe.";
let result=text.includes("welcome");
if(result==true){
    document.write("<br>Word includes");
}
else {
    document.write("<br>not includes");
}


// 2.String.startsWith()
// The startsWith() method returns true if a string begins with a specified value, otherwise false
let text1="Hello world, welcome to the universe.";
let result1= text1.startsWith("Hello");
if(result1==true){
    document.write("<br>True");
}
else {
    document.write("<br>False");
}