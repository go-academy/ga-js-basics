//'use strict';
//JS engine will not tolerate the use of variables before they are declared

//variable hoisting demo
function testHoisting(params){
    a = 10; //this is global
    var b = 10; //this is local
}

function callMe(){
    //testHoisting();
    //console.log("a's value is :", a);
    //console.log("b's value is :", b);
    //linebyLineInterP();
    //variableAssigments();
    //console.log("msg is ",msg);
    //console.log("i is ",i);
    //console.log("pi is ", pi);
    hoisted();
}

//simple line by line interpretation
function linebyLineInterP(){
    //console.log("In line by line..");
    // var msg;
    // console.log(msg);
    // msg = "Hello Boring World";
    //console.log(bob);
    //bebo = "Hello World";
}

//var is function scope
//const is always immutable
//let is block level scope 

function variableAssigments(){
    let msg = "message";
    i=10;
    const pi=3.44;
}

//function hosting demo
//hoisted();
function hoisted(){
    console.log("This function is hoisted..");
}

//func();
var func = function(){
    console.log("This is not hoisted..");
}

// //program (binary code)
// //0xdfdf 0xdfdf0xdfdf0xdfdf0xdfdf0xdfdf0xdfdf

// //process
// //code    //instructions ?
// //data    //variables etc
// //stack   //function calls, return values 
// //heap    //heap memory for dynamic allocation
// //pointer

// {
//     x = 1;
//     y = 2;
//     new Object();
//     return (x*x)
// }

// //x*y -->expression evaluaton 
// //y
// //x

