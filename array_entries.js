/*
    Javascript ES6
    Object entries() function example
 */


// entries()
// Create an Array Iterator, and then iterate over the key/value pairs
const fruits=["Orange","Mango","banana","Apple"];
const fruit=fruits.entries();

for(let x of fruit){
    document.write(x);
}