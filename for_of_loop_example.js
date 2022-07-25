// Javascript ES6
// for/of loop example


document.write("For/of loop example:<br>");

//  array example-1
var data=["kamal","jamal","noman","niloy"];
for (let x of data){
    document.write(x+"<br>");
}

// array example-2
document.write("<br>Example-2:<br>");
var country=["Bangladesh","India","Nepal","Pakistan"];
for(let name of country){
    document.write(name+"<br>");
}

// string example-3
document.write("<br>Example-3:<br>");
var myString="Hello";
for (let x of myString){
    document.write(x+"<br>");
}