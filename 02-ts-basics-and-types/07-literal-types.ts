// but what if we want to allow multiple types?
function combine(
	input1: number | string,
	input2: number | string,
	resultType: 'as-number' | 'as-text' // literals
) {
	let result;
	if (
		(typeof input1 === 'number' && typeof input2 === 'number') ||
		resultType === 'as-number'
	) {
		result = +input1 + +input2;
	} else {
		result = input1.toString() + input2.toString();
	}

	return result;
}

const combinedAges1 = combine(15, 10, 'as-number');
console.log(combinedAges1);

const combineStringAges = combine('15', '10', 'as-number');

const combinedNames1 = combine('Gary', 'Hake', 'as-text');
console.log(combinedAges1);

// with the literal above
// this fails
//const combinedNames2 = combine('Gary', 'Hake', 'as-tet');
