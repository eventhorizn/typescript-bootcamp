// So we are locked in to just using numbers, obviously
function add(input1: number, input2: number) {
	const result = input1 + input2;

	return result;
}

// but what if we want to allow multiple types?
function addUnion(input1: number | string, input2: number | string) {
	let result;
	if (typeof input1 === 'number' && typeof input2 === 'number') {
		result = input1 + input2;
	} else {
		result = input1.toString() + input2.toString();
	}

	return result;
}

const combinedAges = addUnion(15, 10);
console.log(combinedAges);

const combinedNames = addUnion('Gary', 'Hake');
console.log(combinedNames);
