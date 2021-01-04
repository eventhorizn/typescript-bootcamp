namespace PropertyDecorators {
	// 0. Class Decorator
	function Logger(logString: string) {
		console.log('Logger Factory');
		return function (constructor: Function) {
			console.log(logString);
			console.log(constructor);
		};
	}

	// 1. Property Decorator
	function Log(target: any, propertyName: string) {
		console.log('Property decorator');
		console.log(target, propertyName);
	}

	// 2. Accessor Decorator
	function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
		console.log('Accessor decorator');
		console.log(target);
		console.log(name);
		console.log(descriptor);
	}

	// 3. Method Decorator
	function Log3(
		target: any,
		name: string | Symbol,
		descriptor: PropertyDescriptor
	) {
		console.log('Method decorator');
		console.log(target);
		console.log(name);
		console.log(descriptor);
	}

	function Log4(target: any, name: string | Symbol, position: number) {
		console.log('Parameter decorator');
		console.log(target);
		console.log(name);
		console.log(position);
	}

	@Logger('LOGGING - PERSON')
	class Product {
		@Log
		title: string;
		private _price: number;

		@Log2
		set price(val: number) {
			if (val > 0) {
				this._price = val;
			} else {
				throw new Error('Invalid price - should be positive');
			}
		}

		constructor(t: string, p: number) {
			this.title = t;
			this._price = p;
		}

		@Log3
		getPriceWithTax(@Log4 tax: number) {
			return this.price * (1 + tax);
		}
	}
}
