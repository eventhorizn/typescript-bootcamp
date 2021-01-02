namespace InterfaceFunctionType {
	//type AddFn = (a: number, b: number) => number;
	interface AddFn {
		(a: number, b: number): number;
	}

	let add: AddFn;

	add = (n1: number, n2: number) => {
		return n1 + n2;
	};

	// some objects can just implement named
	// others will need both

	interface Named {
		readonly name?: string;
		outputName?: string; //optional property
	}

	// interfaces can extend other interfaces
	// can extend multiple, comma separated
	interface Greetable extends Named {
		greet(phrase: string): void;
	}

	// can implement multiple interfaces
	class Person implements Greetable {
		name?: string;
		age = 31;

		// optional parameter
		constructor(n?: string) {
			if (n) {
				this.name = n;
			}
		}

		greet(phrase: string): void {
			if (this.name) {
				console.log(`${phrase} ${this.name}`);
			} else {
				console.log('Hi');
			}
		}
	}

	// use interface as type
	let user1: Greetable;

	// implementing our interface
	user1 = new Person('Gary');
	user1.greet('Hi there I am');

	let user2: Greetable;
	user2 = new Person();
	user2.greet('Hi');
}
