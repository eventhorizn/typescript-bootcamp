import { ProjectInput } from './components/project-input';
import { ProjectList } from './components/project-list';

// all have to be in same namespace
new ProjectInput();
new ProjectList('active');
new ProjectList('finished');
