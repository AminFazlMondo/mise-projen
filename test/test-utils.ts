import { Project } from 'projen';

export function testProject(): Project {
  return new Project({ name: 'test-project' });
}
