namespace ClassDecorators {
	// A decorater is just a function
	// We use a capital for decorators
	// Differentiates from regular function
	function Logger(constructor: Function) {
		console.log('Logging...');
		console.log(constructor);
	}

	// Decorators receive arguments
	// Decorators execute when the class is DEFINED
	// Not when it is instantiated
	@Logger
	class Person {
		name = 'Gary';

		constructor() {
			console.log('Creating person object...');
		}
	}

	const pers = new Person();
	console.log(pers);
}
