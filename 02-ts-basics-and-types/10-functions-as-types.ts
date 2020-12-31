function add(n1: number, n2: number): number {
	return n1 + n2;
}

function printResult2(num: number): void {
	console.log('Result: ' + num);
}

let combineValues;
combineValues = add; // combine values in 'any'

// this works b/c it works in js
console.log(combineValues(8, 8));

// this is a start, but not far enough
let combValues: Function;
combValues = add;
combValues = printResult2; // this works

// function types are types that describe a function
let combValuesFunc: (a: number, b: number) => number;
combValuesFunc = add;
//combValuesFunc = printResult2; // doesn't work

// Callbacks
// void means we will ignore any return
function addAndHandler(n1: number, n2: number, cb: (num: number) => void) {
	const result = n1 + n2;

	cb(result);
}

// the return won't do anything since it's a void function
addAndHandler(10, 20, (result) => {
	console.log(result);
	return result;
});
