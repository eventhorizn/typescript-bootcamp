function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
	const originalMethod = descriptor.value;
	const adjDescriptor: PropertyDescriptor = {
		configurable: true,
		enumerable: false,
		get() {
			const boundFn = originalMethod.bind(this);
			return boundFn;
		},
	};

	return adjDescriptor;
}

// This class is rendering our web page
// So it looks like we are doing lots of stuff in TS we would
// probably NOT do in TS usually (styling, showing elements)
class ProjectInput {
	templateElement: HTMLTemplateElement;
	hostElement: HTMLDivElement;
	element: HTMLFormElement;
	titleInputElement: HTMLInputElement;
	descriptionInputElement: HTMLInputElement;
	peopleInputElement: HTMLInputElement;

	constructor() {
		this.templateElement = document.getElementById(
			'project-input'
		)! as HTMLTemplateElement;
		this.hostElement = document.getElementById('app')! as HTMLDivElement;

		// references the code between the template tags
		const importedNode = document.importNode(
			this.templateElement.content,
			true
		);

		this.element = importedNode.firstElementChild as HTMLFormElement;
		this.element.id = 'user-input';

		this.titleInputElement = this.element.querySelector(
			'#title'
		) as HTMLInputElement;
		this.descriptionInputElement = this.element.querySelector(
			'#description'
		) as HTMLInputElement;
		this.peopleInputElement = this.element.querySelector(
			'#people'
		) as HTMLInputElement;

		this.configure();
		this.attach();
	}

	@AutoBind
	private submitHandler(event: Event) {
		event.preventDefault();
		console.log(this.titleInputElement.value);
	}

	private configure() {
		this.element.addEventListener('submit', this.submitHandler);
	}

	private attach() {
		this.hostElement.insertAdjacentElement('afterbegin', this.element);
	}
}

const prjInput = new ProjectInput();
