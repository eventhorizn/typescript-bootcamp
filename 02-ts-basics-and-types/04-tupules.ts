const personTup = {
	name: 'Gary',
	age: 31,
	hobbies: ['Sports', 'Cooking'],
	role: [2, 'author'],
};

// could run this code
personTup.role.push('admin');
personTup.role[1] = 10;

// normally we don't declare like this
// unless we want to define a tupule
const personTup2: {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string]; // tupule type
} = {
	name: 'Gary',
	age: 31,
	hobbies: ['Sports', 'Cooking'],
	role: [2, 'author'],
};

// this still works. exception that is allowed
personTup2.role.push('admin');
//personTup2.role[1] = 10; // fails

// this fails even though push works
//personTup2.role = [0, 'admin', 'user'];
