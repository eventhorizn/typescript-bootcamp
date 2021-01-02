namespace Singleton {
	// abstract classes can't be instantiated
	abstract class Department {
		protected employees: string[] = [];

		constructor(protected readonly id: string, public name: string) {}

		// Abstract
		abstract describe(this: Department): void;

		addEmployee(employee: string) {
			this.employees.push(employee);
		}

		printEmployeeInfo() {
			console.log(this.employees.length);
			console.log(this.employees);
		}
	}

	class ITDepartment extends Department {
		admins: string[];

		constructor(id: string, admins: string[]) {
			super(id, 'IT');
			this.admins = admins; // this has to come after super
		}

		describe() {
			console.log(`IT Department - ID: ${this.id}`);
		}
	}

	class AccountingDepartment extends Department {
		private lastReport: string;
		private static instance: AccountingDepartment;

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

		private constructor(id: string, private reports: string[]) {
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

		describe() {
			console.log(`Accounting Department - ID: ${this.id}`);
		}

		static getInstance() {
			if (this.instance) {
				return this.instance;
			}

			this.instance = new AccountingDepartment('d1', []);
			return this.instance;
		}
	}

	const itDept = new ITDepartment('d2', ['Gary']);
	itDept.addEmployee('Gary');
	itDept.addEmployee('Rowe');

	//const accounting = new AccountingDepartment('d1', []);
	const accounting = AccountingDepartment.getInstance();
	accounting.addEmployee('Gary');
	accounting.addEmployee('Rowe');

	accounting.addReport('Something Went Wrong');
	console.log(accounting.mostRecentReport);

	accounting.mostRecentReport = 'New Report';
	console.log(accounting.mostRecentReport);
}
