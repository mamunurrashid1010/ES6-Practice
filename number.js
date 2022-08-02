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