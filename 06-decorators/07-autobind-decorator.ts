namespace AutoBindDecorator {
	function Logger(logString: string) {
		console.log('Logger Factory');
		return function (constructor: Function) {
			console.log(logString);
			console.log(constructor);
		};
	}

	/// Can't be returned
	function Log(target: any, propertyName: string) {
		console.log('Property decorator');
		console.log(target, propertyName);
	}

	// CAN be returned
	function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
		console.log('Accessor decorator');
		console.log(target);
		console.log(name);
		console.log(descriptor);
	}

	// CAN be returned
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

	// Can't be returned
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

	function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
		const originalMethod = descriptor.value;
		const adjDescriptor: PropertyDescriptor = {
			configurable: true,
			enumerable: false,
			get() {
				const boundFn = originalMethod.bind(this);
				return boundFn;
			},
		};

		return adjDescriptor;
	}

	class Printer {
		message = 'This works';

		@AutoBind
		showMessage() {
			console.log(this.message);
		}
	}

	const p = new Printer();

	const button = document.querySelector('button')!;
	// typical 'this' fix
	//button.addEventListener('click', p.showMessage.bind(p));

	button.addEventListener('click', p.showMessage);
}
