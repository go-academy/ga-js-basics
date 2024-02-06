function initArrow(){
    console.log("Hello, i'm a function...");   
    arrowFunc();
    console.log(arrowFuncParams(5,5));
}

var init = function(){
    
    console.log("Hello, i'm called from a variable..i'm still a function..");
}

var student = {
    id : '1',
    name : 'bob',
    doSomething : function(){
        console.log("i am " + this.name + "and i can do something..");
    }
}

// () => {}
var arrowFunc = () => {
    console.log("Hello from arrowFunc");
}

var arrowFuncParams = (a,b) => {return a+b;}