namespace GenericFunction {
	function merge(objA: object, objB: object) {
		return Object.assign(objA, objB);
	}

	const mergedObj = merge({ name: 'Gary' }, { age: 31 });

	// can't access this
	//mergedObj.age;

	function mergeGen<T, U>(objA: T, objB: U) {
		return Object.assign(objA, objB);
	}

	const mergedObjGen = mergeGen({ name: 'Gary' }, { age: 31 });
	console.log(mergedObjGen.age);

	// you can be specific about the objects you are passing in
	// not really needed, it's just wordy for no benefit
	// Use TS's type inference
	const mergedObjGen2 = mergeGen(
		{ name: 'Gary', hobbies: ['Sports'] },
		{ age: 30 }
	);
	console.log(mergedObjGen2);

	// Implementing constraints
	// this 'works' but 30 isn't added to object
	// we really want to say 'this input needs to be an object'
	const mergeObjGen3 = mergeGen({ name: 'Gary', hobbies: ['Sports'] }, 30);

	// constraints
	// can use any constraint you want
	function mergeGen2<T extends object, U extends object>(objA: T, objB: U) {
		return Object.assign(objA, objB);
	}

	// this is an issue now
	//const mergeObjGen4 = mergeGen2({ name: 'Gary', hobbies: ['Sports'] }, 30);

	// Another generic Function example
	// Using an interface
	interface Lengthy {
		length: number;
	}

	function countAndPrint<T extends Lengthy>(element: T): [T, string] {
		let descriptionText = 'Got no value.';

		if (element.length === 1) {
			descriptionText = 'Got 1 element';
		} else if (element.length > 0) {
			descriptionText = `go ${element.length} elements`;
		}
		return [element, descriptionText];
	}

	console.log(countAndPrint('Hi there'));

	console.log(countAndPrint(['Sports', 'Cooking']));

	console.log(countAndPrint([]));

	// Doesn't work
	//console.log(countAndPrint(1));

	// 'keyof' constraint
	function extractAndConvert<T extends object, U extends keyof T>(
		obj: T,
		key: U
	) {
		return 'Value: ' + obj[key];
	}

	// this is a problem since our object doesn't have a name key
	//console.log(extractAndConvert({}, 'name'));
	console.log(extractAndConvert({ name: 'Gary' }, 'name'));
}
