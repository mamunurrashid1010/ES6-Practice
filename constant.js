/*
    ES6
    constant example
 */


function test() {
    var value=100;
    document.getElementById('demo').innerHTML="value is:"+value;
    //here value is 100
    {
        const value=50;
        document.getElementById('demo').innerHTML="value is:"+value;
        //here value is 50;
    }
}

test();