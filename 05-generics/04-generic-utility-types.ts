namespace GenericUtilityTypes {
	interface CourseGoal {
		title: string;
		description: string;
		completeUntil: Date;
	}

	// 1. Partial
	// Parital says all the properties are optional
	function createCourseGoal(
		title: string,
		description: string,
		date: Date
	): CourseGoal {
		let courseGoal: Partial<CourseGoal> = {};
		courseGoal.title = title;
		courseGoal.description = description;
		courseGoal.completeUntil = date;

		return courseGoal as CourseGoal;
	}

	// 2. Readonly
	const names: Readonly<string[]> = ['Gary', 'Katie'];
	//names.push('Rowe'); // won't let me in ts
}
