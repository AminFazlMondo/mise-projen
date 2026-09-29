import { Testing } from 'projen/lib/testing';
import { Mise, MiseFile } from '../src';
import { testProject } from './test-utils';

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

test('fileName option is honored by the Mise mixin', () => {
  const project = testProject();

  project.with(new Mise({ fileName: 'custom-mise.toml', config: { tools: { node: ['24'] } } }));

  const snapshot = Testing.synth(project);
  expect(snapshot['custom-mise.toml']).toContain('node');
  expect(snapshot['mise.toml']).toBeUndefined();
});

test('applyTo is a no-op for constructs the mixin does not support', () => {
  const project = testProject();
  const unsupported = project.node.children[0];
  const mixin = new Mise({ config: { tools: { node: ['24'] } } });

  expect(mixin.supports(unsupported)).toBe(false);
  expect(() => mixin.applyTo(unsupported)).not.toThrow();
  expect(MiseFile.of(project)).toBeUndefined();
});
