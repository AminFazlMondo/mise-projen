import { Project, javascript } from 'projen';
import { Testing } from 'projen/lib/testing';
import { Mise, MiseFile } from '../src';
import { testNodeProject, testProject } from './test-utils';

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

describe('autoDiscover', () => {
  // Testing.synth can only run once per project, so cache the result.
  const cache = new WeakMap<Project, string>();
  const toml = (project: Project): string => {
    if (!cache.has(project)) {
      cache.set(project, (Testing.synth(project)['mise.toml'] as string | undefined) ?? '');
    }
    return cache.get(project)!;
  };

  test('is a no-op for projects without a node package', () => {
    const project = testProject();

    project.with(new Mise());

    expect(toml(project)).not.toMatch(/node|pnpm|yarn|bun/);
  });

  test('discovers node and pnpm from a node project', () => {
    const project = testNodeProject({
      packageManager: javascript.NodePackageManager.PNPM,
      pnpmVersion: '10',
      minNodeVersion: '20.0.0',
    });

    project.with(new Mise());

    expect(toml(project)).toMatch(/node = \[.*"20\.0\.0".*\]/);
    expect(toml(project)).toMatch(/pnpm = \[.*"10".*\]/);
  });

  test.each([
    javascript.NodePackageManager.YARN_CLASSIC,
    javascript.NodePackageManager.YARN_BERRY,
  ])('discovers yarn version for %s', (packageManager) => {
    const project = testNodeProject({ packageManager });

    project.with(new Mise());

    expect(toml(project)).toMatch(/yarn = \[/);
  });

  test('discovers bun version', () => {
    const project = testNodeProject({
      packageManager: javascript.NodePackageManager.BUN,
      bunVersion: '1.2.0',
    });

    project.with(new Mise());

    expect(toml(project)).toMatch(/bun = \[.*"1\.2\.0".*\]/);
  });

  test('warns and adds no package manager tool for npm', () => {
    const project = testNodeProject({
      packageManager: javascript.NodePackageManager.NPM,
      minNodeVersion: '22.0.0',
    });
    const warn = jest.spyOn(project.logger, 'warn');

    project.with(new Mise());

    expect(warn).toHaveBeenCalledWith(expect.stringContaining('No package manager'));
    expect(toml(project)).toContain('node');
    expect(toml(project)).not.toMatch(/pnpm|yarn|bun/);
  });

  test('does not add node when minNodeVersion is unset', () => {
    const project = testNodeProject({ packageManager: javascript.NodePackageManager.NPM });

    project.with(new Mise());

    expect(toml(project)).not.toContain('node');
  });

  test('autoDiscover: false skips discovery', () => {
    const project = testNodeProject({
      packageManager: javascript.NodePackageManager.PNPM,
      pnpmVersion: '10',
      minNodeVersion: '20.0.0',
    });

    project.with(new Mise({ autoDiscover: false }));

    expect(MiseFile.of(project)).toBeDefined();
    expect(toml(project)).not.toMatch(/node|pnpm/);
  });

  test('explicit config merges with discovered tools', () => {
    const project = testNodeProject({
      packageManager: javascript.NodePackageManager.PNPM,
      pnpmVersion: '10',
    });

    project.with(new Mise({ config: { tools: { python: ['3.12'] } } }));

    expect(toml(project)).toMatch(/pnpm = \[.*"10".*\]/);
    expect(toml(project)).toMatch(/python = \[.*"3\.12".*\]/);
  });
});
