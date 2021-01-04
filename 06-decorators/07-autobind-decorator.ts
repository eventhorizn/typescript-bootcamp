namespace AutoBindDecorator {
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
