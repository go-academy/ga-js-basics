

function callArrays(){
    //doIterators();
    //basicArrayFunctions();
    doObjectArray();
}

function doIterators(){

    const arr = [1,2,3,4,5];
    //please examine all the prototypes of Array.
    console.log("printing arr", arr); 
        
    //for each iterates over the array and passes the
    //current item to a callback function
    //which can be used by an arrow function
    //Note : iterators are always read only !
    arr.forEach(item => {
      console.log(item);
    });

    console.log("pushing 6");
    //push, pop
    arr.push(6);

    arr.forEach(item => {
      console.log(item);
    });

    console.log("popping ");
    //push, pop
    arr.pop();

    console.log("disaster...");
    arr.forEach(item => {
      console.log(item);
      arr[0] = 0;
    });

    console.log("array is ", arr);

}

function basicArrayFunctions() {

    const arr = [1,2,3,4,5];

    //What does map do ?
    //create new array from existing one by applying a function to each one of the elements of the first array
    
    //map Syntax
    // var new_array = arr.map(function callback(element, index, array) {
    //     // Return value for new_array
    // }[Object, thisArg])

    var double = arr.map(item => item*2);
    console.log("doubly double is", double);
    
    //what does filter do ?
    //the filter() method takes each element in an array and it 
    //applies a conditional statement against it. 
    //If this conditional returns true, the element gets pushed to the output array.
    // If the condition returns false, the element does not get pushed to the output array\

    const evens = arr.filter(item => item % 2 === 0);
    console.log(evens); // [2, 4]

    //reduce
    numArr = [5,10,15,20];
    //index 0 - 5
    //total = 5
    //index 1 - 10
    //total - 15....50
    const sum = numArr.reduce((total, index) => total + index);
    console.log(sum);
}

function doObjectArray(){
  
  const students = [
    { name: 'Hari', grade: 96 },
    { name: 'Bob', grade: 84 },
    { name: 'Alex', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Bobo', grade: 90 }
  ];

  students.forEach(item => {
      if (item.grade >=65){
        console.log("Top Grade Student : ", item);
      }
  });

  students.filter(item=>{item.grade>65}).forEach(item =>{console.log("Name :",item.name)});

  //the above 1 liner is equivalent to the below code
  var arr = students.filter(s => s.grade>65);
  arr.forEach(student=>{console.log(student.name)});

  //other simple example of using map to generate a true/false array
  console.log("map array ",students.map(item=>{ return item.grade>65}));

}

//use filter and get only the objecs where the grade  > 66