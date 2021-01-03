namespace Generics {
	// Array's are generics until declared
	// Array<T>
	// const names: any[] = [];
	// couldn't do: const names: Array = [];
	const names: Array<string> = ['Gary', 'Rowe'];
	names[0].split(' '); // allows us to know what type elements are

	// tells us promise resolves to string
	const promise: Promise<string> = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('This is done');
		}, 2000);
	});

	promise.then((data) => {
		data.split(' ');
	});
}
