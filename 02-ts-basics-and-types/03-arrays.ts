const personArr = {
	name: 'Gary',
	age: 31,
	hobbies: ['Sports', 'Cooking'],
};

// array of strings
let favoriteActivities: string[];
//favoriteActivities = ['Sports', 1]; // won't work
// instead: let favoriteActivities: any[];

for (const hobby of personArr.hobbies) {
	console.log(hobby.toUpperCase()); // you get autocompletion
}
