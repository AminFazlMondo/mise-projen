import { Testing } from 'projen/lib/testing';
import { MiseFile } from '../src';
import { testProject } from './test-utils';

test('creates a mise.toml file', () => {
  const project = testProject();
  new MiseFile(project, { config: { tools: { node: ['24'] } } });

  const snapshot = Testing.synth(project);
  expect(snapshot['mise.toml']).toContain('[tools]');
  expect(snapshot['mise.toml']).toContain('node');
});

test('fileName option is honored', () => {
  const project = testProject();
  new MiseFile(project, { fileName: 'custom-mise.toml', config: { tools: { node: ['24'] } } });

  const snapshot = Testing.synth(project);
  expect(snapshot['custom-mise.toml']).toContain('node');
  expect(snapshot['mise.toml']).toBeUndefined();
});

test('merge deep-merges configuration fragments', () => {
  const project = testProject();
  const miseFile = new MiseFile(project, { config: { tools: { node: ['24'] } } });

  miseFile.merge({ tools: { pnpm: ['11'] }, env: [{}] });

  const snapshot = Testing.synth(project);
  expect(snapshot['mise.toml']).toContain('node');
  expect(snapshot['mise.toml']).toContain('pnpm');
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
