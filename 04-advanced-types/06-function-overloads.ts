namespace FunctionOverloads {
	type Admin = {
		name: string;
		privileges: string[];
	};

	type Employee = {
		name: string;
		startDate: Date;
	};

	type ElevatedEmployee = Admin & Employee;

	const el: ElevatedEmployee = {
		name: 'Gary',
		privileges: ['create-server'],
		startDate: new Date(),
	};

	type Combinable = string | number;
	type Numeric = number | boolean;
	type Universal = Combinable & Numeric;

	// Better way, function overload
	function add(a: number, b: number): number;
	function add(a: string, b: string): string;
	function add(a: Combinable, b: Combinable) {
		if (typeof a === 'string' || typeof b === 'string') {
			return a.toString() + b.toString();
		}

		return a + b;
	}

	// type Combinable
	// can't access object methods due to that
	const result = add(1, 5);
	const name = add('Gary', 'Hake') as string; // way around that
	// function overload above
	// with the overloads, we get the appropriate return type
}
