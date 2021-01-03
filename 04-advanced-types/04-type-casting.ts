namespace TypeCasting {
	interface Bird {
		type: 'bird';
		flyingSpeed: number;
	}

	interface Horse {
		type: 'horse';
		runningSpeed: number;
	}

	type Animal = Bird | Horse;

	function moveAnimal(animal: Animal) {
		let speed;

		switch (animal.type) {
			case 'bird':
				speed = animal.flyingSpeed;
				break;
			case 'horse':
				speed = animal.runningSpeed;
				break;
		}
		console.log(`Moving with speed: ${animal}`);
	}

	moveAnimal({ type: 'bird', flyingSpeed: 10 });

	//const paragraph = document.querySelector('p'); // knows it's a paragraph
	const paragraph = document.getElementById('message-output'); // doesn't
	// 1. First way to typecast
	// const userInputElement = <HTMLInputElement>(
	// 	document.getElementById('user-input')!
	// );

	// 2. Second way
	// Type casting tells typescript the element will not be null
	const userInputElement = document.getElementById(
		'user-input'
	) as HTMLInputElement;

	userInputElement.value = 'Hi there';

	// If we are not sure if it will be null or not
	const userInputelement2 = document.getElementById('user-input');

	if (userInputelement2) {
		(userInputelement2 as HTMLInputElement).value = 'Hi there';
	}
}
