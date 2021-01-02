namespace InterfacesWithClass {
	interface Greetable {
		name: string;

		greet(phrase: string): void;
	}

	// can implement multiple interfaces
	class Person implements Greetable {
		name: string;
		age = 31;

		constructor(n: string) {
			this.name = n;
		}

		greet(phrase: string): void {
			console.log(`${phrase} ${this.name}`);
		}
	}

	// use interface as type
	let user1: Greetable;

	// implementing our interface
	user1 = new Person('Gary');
	user1.greet('Hi there I am');
}
