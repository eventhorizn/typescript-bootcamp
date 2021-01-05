/// <reference path="models/drag-drop.ts" />
/// <reference path="models/project.ts" />
/// <reference path="state/project-state.ts" />
/// <reference path="util/validation.ts" />
/// <reference path="decorators/autobind.ts" />
/// <reference path="components/project-input.ts" />
/// <reference path="components/project-list.ts" />
// Above is how you include code from other files

// all have to be in same namespace
namespace App {
	new ProjectInput();
	new ProjectList('active');
	new ProjectList('finished');
}
