namespace Inheritance {
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

	// Can only inherit from one class
	class ITDepartment extends Department {
		admins: string[];

		constructor(id: string, admins: string[]) {
			super(id, 'IT');
			this.admins = admins; // this has to come after super
		}
	}

	class AccountingDepartment extends Department {
		constructor(id: string, private reports: string[]) {
			super(id, 'Accounting');
		}

		addReport(text: string) {
			this.reports.push(text);
		}

		getReports() {
			console.log(this.reports);
		}
	}

	const itDept = new ITDepartment('d2', ['Gary']);

	itDept.addEmployee('Gary');
	itDept.addEmployee('Rowe');

	console.log(itDept);

	const accounting = new AccountingDepartment('d1', []);

	accounting.addReport('Something Went Wrong');
	accounting.addEmployee('Gary');
	accounting.addEmployee('Rowe');

	accounting.describe();
	accounting.printEmployeeInfo();
}
