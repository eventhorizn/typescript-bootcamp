namespace TypeGuards {
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

	function add(a: Combinable, b: Combinable) {
		// 1. 'typeof' checking
		if (typeof a === 'string' || typeof b === 'string') {
			return a.toString() + b.toString();
		}

		return a + b;
	}

	type UnknownEmployee = Employee | Admin;

	// 2. 'in' type guard
	function printEmployeeInformation(emp: UnknownEmployee) {
		console.log(`Name: ${emp.name}`);

		// confirming if the property exists in object
		if ('privileges' in emp) {
			console.log(`Privileges: ${emp.privileges}`);
		}

		if ('startDate' in emp) {
			console.log(`Start Date: ${emp.startDate}`);
		}
	}

	printEmployeeInformation(el);

	class Car {
		drive() {
			console.log('Driving...');
		}
	}

	class Truck {
		drive() {
			console.log('Driving a truck...');
		}

		loadCargo(amount: number) {
			console.log('Loading cargo... ' + amount);
		}
	}

	type Vehicle = Car | Truck;

	const v1 = new Car();
	const v2 = new Truck();

	function useVehicle(vehicle: Vehicle) {
		vehicle.drive();

		// 3. 'instanceof' guard
		if (vehicle instanceof Truck) {
			vehicle.loadCargo(1000);
		}
	}

	useVehicle(v1);
	useVehicle(v2);
}
