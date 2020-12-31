function add(n1: number, n2: number, showResult: boolean, phrase: string) {
	const result = n1 + n2;

	if (showResult) {
		console.log(phrase + result);
	} else {
		return result;
	}
}

// Working w/ Numbers, Strings, & Booleans
// Assings type based on what the variable is set as
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

// TypeScript does 'Type Inference'
const numInfer = 5;
//let numberBad: number = 5; //bad practice
let numberGood: number;
numberGood = 5; // good practice

// This actually produces a compile error!
// It still produces your js file (but you can change that)
add(number1, number2, printResult, resultPhrase);
