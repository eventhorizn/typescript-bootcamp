namespace IndexProperties {
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

	const userInputElement = document.getElementById(
		'user-input'
	) as HTMLInputElement;

	userInputElement.value = 'Hi there';

	// If we are not sure if it will be null or not
	const userInputelement2 = document.getElementById('user-input');

	if (userInputelement2) {
		(userInputelement2 as HTMLInputElement).value = 'Hi there';
	}

	// I don't know the property name, or the amount of properties
	// I DO know the property will be a string, as will it's value
	interface ErrorContainer {
		//id: string; // has to be a string due to index type
		[key: string]: string;
	}

	const errorBag: ErrorContainer = {
		email: 'Not a valid Email',
		username: 'Must start with a capital character',
	};
}
