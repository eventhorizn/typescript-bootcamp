namespace ThisParam {
	class Department {
		name: string;

		constructor(name: string) {
			this.name = name;
		}

		// protects us from 'this' issues
		describe(this: Department) {
			console.log(`Department: ${this.name}`);
		}
	}

	const accounting = new Department('Accounting');

	accounting.describe();

	// Fun with 'this'
	//const acctCopy = { describe: accounting.describe };

	// describe can't be called this way
	//acctCopy.describe(); // returns undefined

	// Now it works
	const acctCopy = { name: 'Dummy', describe: accounting.describe };

	// describe can't be called this way
	acctCopy.describe(); // returns undefined
}
