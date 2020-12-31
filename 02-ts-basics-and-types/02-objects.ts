// typescript will infer types
// best way to define, let ts infer
const person = {
	name: 'Gary',
	age: 31,
};

// delcarative
// you can do this, but above is better
const person1: {
	name: string;
	age: number;
} = {
	name: 'Gary',
	age: 31,
};
console.log(person);
