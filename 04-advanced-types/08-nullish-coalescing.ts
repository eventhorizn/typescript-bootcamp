namespace NullishCoalescing {
	// maybe you don't know if something is null or not
	const userInput = null;

	// has issues. if userInput is '', or undefined it's still 'falsy'
	const storedData = userInput || 'DEFAULT';

	// is null or undefined
	const storedData2 = userInput ?? 'DEFAULT';
}
