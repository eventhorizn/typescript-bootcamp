namespace DiscriminatedUnions {
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
}
