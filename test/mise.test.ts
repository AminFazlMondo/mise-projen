import { Project } from 'projen';
import { Testing } from 'projen/lib/testing';
import { Mise, MiseFile } from '../src';

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

test('fileName option is honored by MiseFile and the Mise mixin', () => {
  const project = testProject();

  project.with(new Mise({ fileName: 'custom-mise.toml', config: { tools: { node: ['24'] } } }));

  const snapshot = Testing.synth(project);
  expect(snapshot['custom-mise.toml']).toContain('node');
  expect(snapshot['mise.toml']).toBeUndefined();
});

test('merge preserves existing values for keys left undefined in the fragment', () => {
  const project = testProject();
  const miseFile = new MiseFile(project, { config: { tools: { node: ['24'] }, minVersion: '2024.1.1' } });

  miseFile.merge({ minVersion: undefined, tools: { pnpm: ['11'] } });

  const snapshot = Testing.synth(project);
  const toml = snapshot['mise.toml'] as string;
  expect(toml).toContain('min_version = "2024.1.1"');
  expect(toml).toContain('node');
  expect(toml).toContain('pnpm');
});

test('merge overwrites scalar fields with the latest value', () => {
  const project = testProject();
  const miseFile = new MiseFile(project, { config: { minVersion: '2024.1.1' } });

  miseFile.merge({ minVersion: '2025.1.1' });

  const snapshot = Testing.synth(project);
  expect(snapshot['mise.toml']).toContain('min_version = "2025.1.1"');
});

test('applyTo is a no-op for constructs the mixin does not support', () => {
  const project = testProject();
  const unsupported = project.node.children[0];
  const mixin = new Mise({ config: { tools: { node: ['24'] } } });

  expect(mixin.supports(unsupported)).toBe(false);
  expect(() => mixin.applyTo(unsupported)).not.toThrow();
  expect(MiseFile.of(project)).toBeUndefined();
});
