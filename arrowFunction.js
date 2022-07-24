// Javascript ES6
// Arrow function example
// Arrow function: Arrow functions allows a short syntax for writing function expressions.
// You don't need the function keyword, the return keyword, and the curly brackets.

//arrow function
const sum=(x,y)=>{
    return x+y;
}

var sub=(x,y)=>{
    return x-y;
}

var mul=(x,y)=>{
    return x*y;
}

//function call
var summation=sum(10,20);
document.getElementById('demo').innerText="The summation is: "+summation;

var subtraction=sub(50,10);
document.getElementById('demo').innerText="The subtraction is: "+subtraction;

var multiplication=mul(10,10);
document.getElementById('demo').innerText="The multiplication is: "+multiplication;