// Javascript ES6
// Maps example

// Creates a new Map object
const fruits=new Map();

// set map value
fruits.set("apple",200);
fruits.set("orange",180);
fruits.set("banana",100);
fruits.set("mango",80);

// Map.get(), the get() method gets the value of a key in a Map
var orangePrice=fruits.get("orange");

// Map.size, the size property returns the number of elements in a Map
fruits.size;

// Map.delete(), The delete() method removes a Map element.
fruits.delete("apple");

// Map.clear(), clear() method removes all the elements from a Map
fruits.clear();

// Map.has(), The has() method returns true if a key exists in a Map
fruits.has("apple");

// Maps are Objects, typeof returns object
typeof fruits;

// instanceof Map returns true
fruits instanceof Map;

document.getElementById('demo').innerText="Orange price: "+orangePrice;


// map create and print example
const age=new Map();
age.set("kamal",32);
age.set('noman',25);
age.set('turjoy',33);

document.write("<br>Map print value:<br>");
// Map.forEach(), The forEach() method invokes a callback for each key/value pair in a Map
age.forEach(function (value,key) {
   document.write("Name: "+key +" Age: "+ value+"<br>");
});


