namespace GenericClasses {
	// extends makes sure we can only use this on base types, not objects
	class DataStorage<T extends string | number | boolean> {
		private data: T[] = [];

		addItem(item: T) {
			this.data.push(item);
		}

		removeItem(item: T) {
			if (this.data.indexOf(item) === -1) {
				return;
			}
			this.data.splice(this.data.indexOf(item), 1);
		}

		getItems() {
			return [...this.data];
		}
	}

	const textStorage = new DataStorage<string>();
	textStorage.addItem('Gary');
	textStorage.addItem('Rowe');
	textStorage.removeItem('Gary');

	console.log(textStorage.getItems());

	// flexible and still strongly typed
	const numberStorage = new DataStorage<number>();

	// this doesn't really work b/c objects are by reference
	// const objStorage = new DataStorage<object>();
	// objStorage.addItem({ name: 'Gary' });
	// objStorage.addItem({ name: 'Rowe' });
	// objStorage.removeItem({ name: 'Gary' });
	// console.log(objStorage.getItems());
}
