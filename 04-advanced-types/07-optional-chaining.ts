namespace OptionalChaining {
	const fetchedUserData = {
		id: 'u1',
		name: 'Gary',
		job: { title: 'CEO', description: 'My own company' },
	};

	console.log(fetchedUserData.job.title);

	// If we are fetching the above from a db...we may not be certain if stuff is set

	const fetchedUserData2 = {
		id: 'u1',
		name: 'Gary',
		job: { title: 'CEO', description: 'My own company' },
	};

	// makes sure object exists before continuing
	console.log(fetchedUserData2?.job?.title);
}
