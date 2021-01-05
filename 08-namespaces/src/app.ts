/// <reference path="components/project-input.ts" />
/// <reference path="components/project-list.ts" />
// Above is how you include code from other files

// all have to be in same namespace
namespace App {
	new ProjectInput();
	new ProjectList('active');
	new ProjectList('finished');
}
