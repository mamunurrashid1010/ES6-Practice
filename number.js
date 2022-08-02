/*
Javascript ES6
Number Methods:
    ES6 added 2 new methods to the Number object:
    1. Number.isInteger()
    2. Number.isSafeInteger()

 */

// The Number.isInteger() method returns true if the argument is an integer
var checkInt=Number.isInteger(10); //true
    checkInt=Number.isInteger(10.12);  //false
if (checkInt==true)
    document.write('<br>Integer Number');
else
    document.write('Not Integer');



// Number.isSafeInteger() Method
// A safe integer is an integer that can be exactly represented as a double precision number.
// The Number.isSafeInteger() method returns true if the argument is a safe integer.

var safeInteger=Number.isSafeInteger(10); //return true
    safeInteger=Number.isSafeInteger(12345678901234567890); //return false
if (safeInteger==true)
    document.write('<br>Safe Integer');
else
    document.write('Not Safe Integer');


// isFinite() Method
// The global isFinite() method returns false if the argument is Infinity or NaN. Otherwise it returns true.
var finiteNumber=isFinite(10/0); //return false
    finiteNumber=isFinite(10/1); //return true

// isNaN() Method
// The global isNaN() method returns true if the argument is NaN. Otherwise it returns false
var checkNull=isNaN("hello"); //return true