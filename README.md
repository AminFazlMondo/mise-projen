# mise-projen

Add [mise](https://mise.jdx.dev) support to any [projen](https://projen.io) project via a `constructs` mixin.

`Mise` generates and maintains a `mise.toml` file, and lets multiple components/plugins each contribute a fragment of configuration (tools, tasks, env, settings, ...) that gets deep-merged into a single file.

## Installation

```sh
pnpm add -D mise-projen
```

`constructs` and `projen` are peer dependencies and must already be present in your project.

## Usage

Apply the mixin to any projen project with `project.with(...)`:

```ts
import { cdk } from 'projen';
import { Mise } from 'mise-projen';

const project = new cdk.JsiiProject({
  // ...
});

project.with(new Mise({
  config: {
    tools: {
      node: ['24'],
      pnpm: ['11'],
    },
  },
}));
```

Configure the mixin before applying it, or apply several `Mise` mixins to the same project - all contributions are merged:

```ts
const mise = new Mise();
mise.addTools({ node: '24', pnpm: ['11', '10'] });
mise.merge({ env: [{ FOO: 'bar' }] });

project.with(mise);
```

### `MiseFile`

`Mise.applyTo()` is backed by `MiseFile`, the component that actually owns the generated `mise.toml`. Use it directly for a non-mixin API, or to reach into a project that already has mise configured:

```ts
import { MiseFile } from 'mise-projen';

const miseFile = MiseFile.ensure(project);
miseFile.addTools({ python: '3.12' });
miseFile.merge({ tasks: { build: { run: 'pnpm build' } } });
```

`MiseFile.of(project)` returns the existing instance (or `undefined` if none exists yet); `MiseFile.ensure(project, options)` gets or creates it.

## Configuration typing

Configuration fragments are typed against `MiseTomlSchema`, generated from mise's own [JSON schema](https://mise.jdx.dev/schema/mise.json), so `config`/`merge()` give you autocomplete and type checking for the full `mise.toml` shape.

## API Reference

See [API.md](./API.md) for the full generated API reference.
