// js way to do 'enums'
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

const personEnum = {
	name: 'Gary',
	age: 31,
	hobbies: ['Sports', 'Cooking'],
	role: ADMIN,
};

if (personEnum.role === ADMIN) {
	console.log('is admin');
}

// TS enums
// can assign a number, string, etc
enum Role {
	ADMIN = 5,
	READ_ONLY,
	AUTHOR,
}

const personEnumTs = {
	name: 'Gary',
	age: 31,
	hobbies: ['Sports', 'Cooking'],
	role: Role.ADMIN,
};

if (personEnumTs.role === Role.ADMIN) {
	console.log('is admin');
}
