//expoosed to the outside world..
//gVar variable and globalScope function is both global scope
var gVar = 10;

//this is a global function
function globalScope() {
    this.lVar = "Hello"; //This variable is only accessible inside this scope
    console.log("gVar value is ",gVar);
    gVar++;
    console.log("lVar value is ",lVar);
    console.log("lVar value is ",this.lVar); //this ?
    console.log("this kya hai  ? ",this); //this ?
}

//this is a global function
function globalScope2() {
    globalScope();
    this.lVar = "Hello2"; //This variable is only accessible inside this scope
    console.log("gVar value is2 ",gVar);
    gVar++;
    console.log("lVar value is ",lVar);
    console.log("lVar value is ",this.lVar); //this ?
    console.log("this kya hai  ? ",this); //this ?
}

//closure --? (--) //anonymous
//self invoking function
//everything inside a closure is local scope..
(function(){
    var lVarScope = 10;
    this.lVar = 0;

    console.log("Script is Loaded...");
    var $this = this;
    bob=function(){
        console.log("I'm still here...somehow magically..", this);
        console.log($this===this);
        console.log("this.lVar",this.lVar);
    };
    console.log("this.bob",this.bob());
})(); //immdiately invoking function