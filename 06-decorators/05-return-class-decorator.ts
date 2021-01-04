namespace ReturnClassWithDecorator {
	function Logger(logString: string) {
		console.log('Logger Factory');
		return function (constructor: Function) {
			console.log(logString);
			console.log(constructor);
		};
	}

	// Now this decorator won't fire until we instantiate
	function WithTemplate(template: string, hookId: string) {
		console.log('With Template Factory');
		return function <T extends { new (...args: any[]): { name: string } }>(
			originalConstructor: T
		) {
			// returning a new class
			return class extends originalConstructor {
				constructor(..._: any[]) {
					super();
					console.log('Rendering Template');
					const hookEl = document.getElementById(hookId);
					const p = new originalConstructor();
					if (hookEl) {
						hookEl.innerHTML = template;
						hookEl.querySelector('h1')!.textContent = this.name;
					}
				}
			};
		};
	}

	@Logger('LOGGING - PERSON')
	@WithTemplate('<h1>My Person Object</h1>', 'app')
	class Person {
		name = 'Gary';

		constructor() {
			console.log('Creating person object...');
		}
	}

	// so now we don't fire our decorator until we instantiate
	const pers = new Person();
	console.log(pers);
}
