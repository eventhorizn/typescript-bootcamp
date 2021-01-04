namespace DecoratorFactory {
	// Can now pass in custom params
	// The inner function always has to reference
	// the function that is being called
	// So, a factory allows you to customize
	function Logger(logString: string) {
		return function (constructor: Function) {
			console.log(logString);
			console.log(constructor);
		};
	}

	@Logger('LOGGING - PERSON')
	class Person {
		name = 'Gary';

		constructor() {
			console.log('Creating person object...');
		}
	}

	const pers = new Person();
	console.log(pers);
}
