namespace Interfaces {
	interface Person {
		name: string;
		age: number;

		greet(phrase: string): void;
	}

	// use interface as type
	let user1: Person;

	// implementing our interface
	user1 = {
		name: 'Gary',
		age: 31,
		greet(phrase: string) {
			console.log(`${phrase} ${this.name}`);
		},
	};

	user1.greet('Hi there I am');
}
