namespace IndexProperties {
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
