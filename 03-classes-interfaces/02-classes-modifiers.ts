namespace Modifiers {
	class Department {
		//private name: string;
		// js doesn't use 'private'
		private employees: string[] = [];

		// shorthand initilalization
		constructor(private readonly id: string, public name: string) {
			//this.name = name;
		}

		describe(this: Department) {
			console.log(`Department: (${this.id}) ${this.name}`);
		}

		addEmployee(employee: string) {
			//this.id = 'd2'; readonly, can't do this
			this.employees.push(employee);
		}

		printEmployeeInfo() {
			console.log(this.employees.length);
			console.log(this.employees);
		}
	}

	const accounting = new Department('d1', 'Accounting');
	accounting.addEmployee('Gary');
	accounting.addEmployee('Rowe');

	accounting.describe();
	accounting.printEmployeeInfo();
}
