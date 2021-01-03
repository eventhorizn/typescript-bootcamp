namespace IntersectionTypes {
	// allow us to combine types
	type Admin = {
		name: string;
		privileges: string[];
	};

	type Employee = {
		name: string;
		startDate: Date;
	};

	// Combining the types
	// Similar to interface inheritance
	// We can do this exact same thing w/ interfaces
	type ElevatedEmployee = Admin & Employee;

	const el: ElevatedEmployee = {
		name: 'Gary',
		privileges: ['create-server'],
		startDate: new Date(),
	};

	// Can use them w/ any type

	type Combinable = string | number;
	type Numeric = number | boolean;

	// types they have in common
	// above is combination
	type Universal = Combinable & Numeric;
}
