namespace InterfaceExtension {
	// some objects can just implement named
	// others will need both

	interface Named {
		readonly name: string;
	}

	// interfaces can extend other interfaces
	// can extend multiple, comma separated
	interface Greetable extends Named {
		// can set read only on interface
		readonly name: string;

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
