import { Project } from 'projen';
import { Testing } from 'projen/lib/testing';
import { Mise, MiseFile } from '../src/mise';

function testProject(): Project {
  return new Project({ name: 'test-project' });
}

test('creates a mise.toml file', () => {
  const project = testProject();
  new MiseFile(project, { config: { tools: { node: ['24'] } } });

  const snapshot = Testing.synth(project);
  expect(snapshot['mise.toml']).toContain('[tools]');
  expect(snapshot['mise.toml']).toContain('node');
});

test('merge deep-merges configuration fragments', () => {
  const project = testProject();
  const miseFile = new MiseFile(project, { config: { tools: { node: ['24'] } } });

  miseFile.merge({ tools: { pnpm: ['11'] }, env: [{}] });

  const snapshot = Testing.synth(project);
  expect(snapshot['mise.toml']).toContain('node');
  expect(snapshot['mise.toml']).toContain('pnpm');
});

test('addTools normalizes single versions and merges with existing tools', () => {
  const project = testProject();
  const miseFile = new MiseFile(project, { config: { tools: { node: ['24'] } } });

  miseFile.addTools({ node: '22', pnpm: ['11', '10'] });

  const snapshot = Testing.synth(project);
  const toml = snapshot['mise.toml'] as string;
  expect(toml).toMatch(/node = \[.*"24".*"22".*\]/);
  expect(toml).toMatch(/pnpm = \[.*"11".*"10".*\]/);
});

test('addTools de-duplicates repeated versions', () => {
  const project = testProject();
  const miseFile = new MiseFile(project, { config: { tools: { node: ['24'] } } });

  miseFile.addTools({ node: '24' });

  const snapshot = Testing.synth(project);
  const toml = snapshot['mise.toml'] as string;
  expect(toml.match(/24/g)).toHaveLength(1);
});

test('MiseFile.of finds the existing instance and MiseFile.ensure reuses it', () => {
  const project = testProject();
  const miseFile = new MiseFile(project);

  expect(MiseFile.of(project)).toBe(miseFile);
  expect(MiseFile.ensure(project)).toBe(miseFile);
});

test('MiseFile.ensure creates an instance when none exists', () => {
  const project = testProject();

  expect(MiseFile.of(project)).toBeUndefined();
  const miseFile = MiseFile.ensure(project, { config: { tools: { node: ['24'] } } });
  expect(MiseFile.ensure(project)).toBe(miseFile);
});

test('constructing a second MiseFile on the same project throws', () => {
  const project = testProject();
  new MiseFile(project);

  expect(() => new MiseFile(project)).toThrow();
});

test('Mise mixin supports projects only', () => {
  const mixin = new Mise();
  const project = testProject();

  expect(mixin.supports(project)).toBe(true);
});

test('applying a Mise mixin creates mise.toml', () => {
  const project = testProject();

  project.with(new Mise({ config: { tools: { node: ['24'] } } }));

  const snapshot = Testing.synth(project);
  expect(snapshot['mise.toml']).toContain('node');
});

test('applying multiple Mise mixins merges into a single mise.toml', () => {
  const project = testProject();

  project.with(
    new Mise({ config: { tools: { node: ['24'] } } }),
    new Mise({ config: { tools: { pnpm: ['11'] } } }),
  );

  const snapshot = Testing.synth(project);
  const toml = snapshot['mise.toml'] as string;
  expect(toml).toContain('node');
  expect(toml).toContain('pnpm');
  expect(MiseFile.of(project)).toBeDefined();
});

test('Mise.addTools/merge configure the mixin before it is applied', () => {
  const project = testProject();
  const mixin = new Mise();
  mixin.addTools({ node: '24', pnpm: ['11', '10'] });
  mixin.merge({ env: [{}] });

  project.with(mixin);

  const snapshot = Testing.synth(project);
  const toml = snapshot['mise.toml'] as string;
  expect(toml).toMatch(/node = \[.*"24".*\]/);
  expect(toml).toMatch(/pnpm = \[.*"11".*"10".*\]/);
});
