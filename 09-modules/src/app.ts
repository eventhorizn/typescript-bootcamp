import { ProjectInput } from './components/project-input.js';
import { ProjectList } from './components/project-list.js';

// all have to be in same namespace
new ProjectInput();
new ProjectList('active');
new ProjectList('finished');
