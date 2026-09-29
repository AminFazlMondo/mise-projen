import { Project, javascript } from 'projen';

export function testProject(): Project {
  return new Project({ name: 'test-project' });
}

export function testNodeProject(options: Partial<javascript.NodeProjectOptions> = {}): javascript.NodeProject {
  return new javascript.NodeProject({
    name: 'test-node-project',
    defaultReleaseBranch: 'main',
    ...options,
  });
}
