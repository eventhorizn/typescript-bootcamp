// input types aren't the only type
// return type as well
// you should let ts infer the return type
function add(n1: number, n2: number): number {
	return n1 + n2;
}

// no return type: 'void'
function printResult(num: number): void {
	console.log('Result: ' + num);
}

printResult(add(5, 12));

// undefined IS a type
let someVal: undefined;

// functions can't be defined as undefined, but as void
function printResultUnd(num: number): undefined {
	console.log('Result: ' + num);
	return;
}
