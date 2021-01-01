namespace StaticMethodProperty {
	class Department {
		static fiscalYear = 2020;

		protected employees: string[] = [];

		constructor(private readonly id: string, public name: string) {
			//console.log(this.fiscalYear); // can't do this
		}

		// static method
		static createEmployee(name: string) {
			return { name: name };
		}

		describe(this: Department) {
			console.log(`Department: (${this.id}) ${this.name}`);
		}

		addEmployee(employee: string) {
			this.employees.push(employee);
		}

		printEmployeeInfo() {
			console.log(this.employees.length);
			console.log(this.employees);
		}
	}

	const employee1 = Department.createEmployee('Max');
	console.log(employee1, Department.fiscalYear);
}
