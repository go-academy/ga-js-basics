/* Note on 'this'
** “this” always refers to an object.
** “this” refers to an object which calls the function it contains.
**  In the global context ,“this” refers to either window object or is undefined if the ‘strict mode’ is used.
*/
function callBindApplyCall(){

    car = { 
        registrationNumber: "GA12345",
        brand: "Toyota",
        displayDetails: function(){
            console.log(this.registrationNumber + " " + this.brand);
            //the scope of this here is within the car {}
        }
    }

    //the scope of this here is within the callBindApplyCall()
    
    car.displayDetails();
    
    var myCarDetails = car.displayDetails();
    //myCarDetails(); //this will not work as this is now referring to the global obj

    //The bind() method creates a new function where “this” refers to the 
    //parameter in the parenthesis in the below case “car”. 
    //This way the bind() method enables calling a function with a specified “this” value.
    var myCarDetails = car.displayDetails.bind(car);
    myCarDetails();

    //TODO: try passing parameters to the binded function, something like the below
    ///var myCarDetails = car.displayDetails.bind(car, "Vivian"); //you have to accept a parameter in displayDetails(owner)

    altoCar = { 
        registrationNumber: "KA3422",
        brand: "Alto",
    }

    function displayDetails(ownerName) {

        console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
    }
   
    displayDetails.apply(altoCar, ["Vivian"]); // Vivian, this is your car: GA12345 Toyota
    displayDetails.call(altoCar, "Vivian"); // Vivian, this is your car: GA12345 Toyota
   
    //Note : 
    //that when using the apply() function the parameter must be placed in an array. 
    //Call() accepts both an array of parameters and a parameter itself. 
    //Both are great tools for borrowing functions in JavaScript.

}



//TODO : PRACTISE THE BELOW

// var func = function() {
//     console.log(this)
// }.bind(1);
// func();


// var func = function() {
//     console.log(this)
// }.bind(1);
 

// var obj = {
//     callFun : func
//  }
// obj.callFun.func();

// function checkFun(a, b, c){
//     console.log(this);
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// checkFun.call(1,2,3,4);