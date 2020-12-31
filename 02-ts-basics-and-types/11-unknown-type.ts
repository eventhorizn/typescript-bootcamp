let userInput: unknown;
let userName: string;

// can put any type
userInput = 5;
userInput = 'Gary';

// but it's different to 'any'
// this doesn't work
//userName = userInput;

// this does
// needs an extra type check
// unknown is a better choice over any
// requires you to type check it
if (typeof userInput === 'string') {
	userName = userInput;
}
