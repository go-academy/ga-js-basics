const asyncFunc = async() => {

}

//Note that calling an async function will always return a Promise. Take a look at this:
const test = asyncFunc();
console.log(test);

//Running the above in the browser console, we see that the asyncFunc returns a promise.
//Let's really break down some code now. Consider the little snippet below:

const asyncFunc1 = async () => {
	const response = await fetch(resource);
   	const data = await response.json();
}

//The async keyword is what we use to define async functions as I mentioned above. But how about await ? Well, it stalls JavaScript from assigning fetch to the response variable until the promise has been resolved. Once the promise has been resolved, the results from the fetch method can now be assigned to the response variable.
//The same thing happens on line 3. The .json method returns a promise, and we can use await still to delay the assigning until the promise is resolved.

const asyncFunc3 = async () => {
	const response = await fetch(resource);
   	const data = await response.json();
}

console.log(1);
cosole.log(2);

asyncFunc().then(data => console.log(data));

console.log(3);
console.log(4);

//output
// 1
// 2
// 3
// 4
// data returned by asyncFunc