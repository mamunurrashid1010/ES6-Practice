// Javascript ES6
// class example

// class
class car {
    constructor(name,model){
        this.name=name;
        this.model=model;
    }

    sum(a,b){
        return a+b;
    }
    sub(a,b){
        return a-b;
    }
};

// object
const obj=new car("BMW","M154");

document.write("<br> Javascript ES6 class example:<br>");
document.write("Name: "+obj.name+" Model: "+obj.model);
document.write(" <br>The sum is: "+obj.sum(10,30));
document.write(" <br>The sub is: "+obj.sub(30,10));
