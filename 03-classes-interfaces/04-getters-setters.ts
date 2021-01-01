namespace GetterSetter {
	class Department {
		protected employees: string[] = [];

		constructor(private readonly id: string, public name: string) {}

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

	class AccountingDepartment extends Department {
		private lastReport: string;

		get mostRecentReport() {
			if (this.lastReport) {
				return this.lastReport;
			}
			throw new Error('No report found.');
		}

		set mostRecentReport(value: string) {
			if (!value) {
				throw new Error('Please pass in a valid value');
			}
			this.addReport(value);
		}

		constructor(id: string, private reports: string[]) {
			super(id, 'Accounting');

			if (reports[0]) {
				this.lastReport = reports[0];
			} else {
				this.lastReport = '';
			}
		}

		addEmployee(name: string) {
			if (name === 'Gary') {
				return;
			}
			this.employees.push(name);
		}

		addReport(text: string) {
			this.reports.push(text);
			this.lastReport = text;
		}

		getReports() {
			console.log(this.reports);
		}
	}

	const accounting = new AccountingDepartment('d1', []);
	accounting.addEmployee('Gary');
	accounting.addEmployee('Rowe');

	accounting.addReport('Something Went Wrong');
	console.log(accounting.mostRecentReport);

	accounting.mostRecentReport = 'New Report';
	console.log(accounting.mostRecentReport);
}
