namespace UsefulDecorator {
	function Logger(logString: string) {
		console.log('Logger Factory');
		return function (constructor: Function) {
			console.log(logString);
			console.log(constructor);
		};
	}

	// Meta in the fact that you can include this and
	// do some interesting things w/ it
	// Angular uses this a lot. We're creating things
	// with a tool that we expose to other devs.
	function WithTemplate(template: string, hookId: string) {
		console.log('With Template Factory');
		return function (constructor: any) {
			const hookEl = document.getElementById(hookId);
			const p = new constructor();
			if (hookEl) {
				hookEl.innerHTML = template;
				hookEl.querySelector('h1')!.textContent = p.name;
			}
		};
	}

	// Multiple Decorators
	// Which order do they exectute?
	// Factory fucntions are top down
	// Inner functions in factories are bottom up
	@Logger('LOGGING - PERSON')
	@WithTemplate('<h1>My Person Object</h1>', 'app')
	class Person {
		name = 'Gary';

		constructor() {
			console.log('Creating person object...');
		}
	}

	const pers = new Person();
	console.log(pers);
}
