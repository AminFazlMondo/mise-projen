# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MiseFile <a name="MiseFile" id="mise-projen.MiseFile"></a>

The `mise.toml` file for a project, and the merge point for every `Mise` mixin applied to it.

Only one `MiseFile` is allowed per project. Use `MiseFile.ensure()` to get
the existing instance or create one, and `merge()`/`addTools()` to
contribute configuration from multiple places - similar to how projen's
`TypescriptConfig` lets several components shape a single `tsconfig.json`.

#### Initializers <a name="Initializers" id="mise-projen.MiseFile.Initializer"></a>

```typescript
import { MiseFile } from 'mise-projen'

new MiseFile(scope: IConstruct, options?: MiseOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.IConstruct</code> | *No description.* |
| <code><a href="#mise-projen.MiseFile.Initializer.parameter.options">options</a></code> | <code><a href="#mise-projen.MiseOptions">MiseOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="mise-projen.MiseFile.Initializer.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `options`<sup>Optional</sup> <a name="options" id="mise-projen.MiseFile.Initializer.parameter.options"></a>

- *Type:* <a href="#mise-projen.MiseOptions">MiseOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.MiseFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#mise-projen.MiseFile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#mise-projen.MiseFile.postProjectCreation">postProjectCreation</a></code> | Called once, right after `postSynthesize()`, only when the project is created for the first time. |
| <code><a href="#mise-projen.MiseFile.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#mise-projen.MiseFile.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#mise-projen.MiseFile.projectCreation">projectCreation</a></code> | Called once, right after `synthesize()`, only when the project is created for the first time. |
| <code><a href="#mise-projen.MiseFile.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#mise-projen.MiseFile.addTools">addTools</a></code> | Adds (or extends) dev tools managed by mise. |
| <code><a href="#mise-projen.MiseFile.merge">merge</a></code> | Deep-merges the given configuration fragment into the current mise configuration. |

---

##### `toString` <a name="toString" id="mise-projen.MiseFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="mise-projen.MiseFile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="mise-projen.MiseFile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postProjectCreation` <a name="postProjectCreation" id="mise-projen.MiseFile.postProjectCreation"></a>

```typescript
public postProjectCreation(initProject: InitProject): void
```

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="mise-projen.MiseFile.postProjectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `postSynthesize` <a name="postSynthesize" id="mise-projen.MiseFile.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="mise-projen.MiseFile.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `projectCreation` <a name="projectCreation" id="mise-projen.MiseFile.projectCreation"></a>

```typescript
public projectCreation(initProject: InitProject): void
```

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="mise-projen.MiseFile.projectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `synthesize` <a name="synthesize" id="mise-projen.MiseFile.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addTools` <a name="addTools" id="mise-projen.MiseFile.addTools"></a>

```typescript
public addTools(tools: {[ key: string ]: string | string[]}): void
```

Adds (or extends) dev tools managed by mise.

*Example*

```typescript
mise.addTools({ node: '24', pnpm: ['11', '10'] });
```


###### `tools`<sup>Required</sup> <a name="tools" id="mise-projen.MiseFile.addTools.parameter.tools"></a>

- *Type:* {[ key: string ]: string | string[]}

---

##### `merge` <a name="merge" id="mise-projen.MiseFile.merge"></a>

```typescript
public merge(config: MiseTomlSchema): void
```

Deep-merges the given configuration fragment into the current mise configuration.

Objects are merged key by key, arrays are concatenated and de-duplicated, and
any other value overwrites the previous one.

###### `config`<sup>Required</sup> <a name="config" id="mise-projen.MiseFile.merge.parameter.config"></a>

- *Type:* <a href="#mise-projen.MiseTomlSchema">MiseTomlSchema</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.MiseFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#mise-projen.MiseFile.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#mise-projen.MiseFile.ensure">ensure</a></code> | Returns the `MiseFile` instance attached to the given project, creating one if it doesn't already exist. |
| <code><a href="#mise-projen.MiseFile.of">of</a></code> | Returns the `MiseFile` instance already attached to the given project, if any. |

---

##### `isConstruct` <a name="isConstruct" id="mise-projen.MiseFile.isConstruct"></a>

```typescript
import { MiseFile } from 'mise-projen'

MiseFile.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="mise-projen.MiseFile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="mise-projen.MiseFile.isComponent"></a>

```typescript
import { MiseFile } from 'mise-projen'

MiseFile.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="mise-projen.MiseFile.isComponent.parameter.x"></a>

- *Type:* any

---

##### `ensure` <a name="ensure" id="mise-projen.MiseFile.ensure"></a>

```typescript
import { MiseFile } from 'mise-projen'

MiseFile.ensure(scope: IConstruct, options?: MiseOptions)
```

Returns the `MiseFile` instance attached to the given project, creating one if it doesn't already exist.

###### `scope`<sup>Required</sup> <a name="scope" id="mise-projen.MiseFile.ensure.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `options`<sup>Optional</sup> <a name="options" id="mise-projen.MiseFile.ensure.parameter.options"></a>

- *Type:* <a href="#mise-projen.MiseOptions">MiseOptions</a>

---

##### `of` <a name="of" id="mise-projen.MiseFile.of"></a>

```typescript
import { MiseFile } from 'mise-projen'

MiseFile.of(scope: IConstruct)
```

Returns the `MiseFile` instance already attached to the given project, if any.

###### `scope`<sup>Required</sup> <a name="scope" id="mise-projen.MiseFile.of.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#mise-projen.MiseFile.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#mise-projen.MiseFile.property.file">file</a></code> | <code>projen.TomlFile</code> | The generated mise config file. |

---

##### `node`<sup>Required</sup> <a name="node" id="mise-projen.MiseFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="mise-projen.MiseFile.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `file`<sup>Required</sup> <a name="file" id="mise-projen.MiseFile.property.file"></a>

```typescript
public readonly file: TomlFile;
```

- *Type:* projen.TomlFile

The generated mise config file.

---


## Structs <a name="Structs" id="Structs"></a>

### DepsProvider <a name="DepsProvider" id="mise-projen.DepsProvider"></a>

Prepare provider configuration.

#### Initializer <a name="Initializer" id="mise-projen.DepsProvider.Initializer"></a>

```typescript
import { DepsProvider } from 'mise-projen'

const depsProvider: DepsProvider = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.DepsProvider.property.auto">auto</a></code> | <code>boolean</code> | Auto-run before `mise x` and `mise run`. |
| <code><a href="#mise-projen.DepsProvider.property.depends">depends</a></code> | <code>string[]</code> | Other deps providers that must complete before this one runs. |
| <code><a href="#mise-projen.DepsProvider.property.description">description</a></code> | <code>string</code> | Description shown in output. |
| <code><a href="#mise-projen.DepsProvider.property.dir">dir</a></code> | <code>string</code> | Working directory for the command. |
| <code><a href="#mise-projen.DepsProvider.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Environment variables to set. |
| <code><a href="#mise-projen.DepsProvider.property.outputs">outputs</a></code> | <code>string[]</code> | Files/directories that should be newer than sources. |
| <code><a href="#mise-projen.DepsProvider.property.run">run</a></code> | <code>string</code> | Command to run when stale. |
| <code><a href="#mise-projen.DepsProvider.property.sources">sources</a></code> | <code>string[]</code> | Files/patterns to check for changes. |
| <code><a href="#mise-projen.DepsProvider.property.timeout">timeout</a></code> | <code>string</code> | Timeout for the run command (e.g., "30s", "5m", "1h"). |

---

##### `auto`<sup>Optional</sup> <a name="auto" id="mise-projen.DepsProvider.property.auto"></a>

```typescript
public readonly auto: boolean;
```

- *Type:* boolean

Auto-run before `mise x` and `mise run`.

---

##### `depends`<sup>Optional</sup> <a name="depends" id="mise-projen.DepsProvider.property.depends"></a>

```typescript
public readonly depends: string[];
```

- *Type:* string[]

Other deps providers that must complete before this one runs.

---

##### `description`<sup>Optional</sup> <a name="description" id="mise-projen.DepsProvider.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description shown in output.

---

##### `dir`<sup>Optional</sup> <a name="dir" id="mise-projen.DepsProvider.property.dir"></a>

```typescript
public readonly dir: string;
```

- *Type:* string

Working directory for the command.

---

##### `env`<sup>Optional</sup> <a name="env" id="mise-projen.DepsProvider.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Environment variables to set.

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="mise-projen.DepsProvider.property.outputs"></a>

```typescript
public readonly outputs: string[];
```

- *Type:* string[]

Files/directories that should be newer than sources.

---

##### `run`<sup>Optional</sup> <a name="run" id="mise-projen.DepsProvider.property.run"></a>

```typescript
public readonly run: string;
```

- *Type:* string

Command to run when stale.

---

##### `sources`<sup>Optional</sup> <a name="sources" id="mise-projen.DepsProvider.property.sources"></a>

```typescript
public readonly sources: string[];
```

- *Type:* string[]

Files/patterns to check for changes.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="mise-projen.DepsProvider.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

Timeout for the run command (e.g., "30s", "5m", "1h").

---

### Doctor <a name="Doctor" id="mise-projen.Doctor"></a>

Project diagnostic checks, run explicitly with mise doctor project.

#### Initializer <a name="Initializer" id="mise-projen.Doctor.Initializer"></a>

```typescript
import { Doctor } from 'mise-projen'

const doctor: Doctor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.Doctor.property.checks">checks</a></code> | <code>{[ key: string ]: <a href="#mise-projen.DoctorChecks">DoctorChecks</a>}</code> | *No description.* |

---

##### `checks`<sup>Optional</sup> <a name="checks" id="mise-projen.Doctor.property.checks"></a>

```typescript
public readonly checks: {[ key: string ]: DoctorChecks};
```

- *Type:* {[ key: string ]: <a href="#mise-projen.DoctorChecks">DoctorChecks</a>}

---

### DoctorChecks <a name="DoctorChecks" id="mise-projen.DoctorChecks"></a>

#### Initializer <a name="Initializer" id="mise-projen.DoctorChecks.Initializer"></a>

```typescript
import { DoctorChecks } from 'mise-projen'

const doctorChecks: DoctorChecks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.DoctorChecks.property.run">run</a></code> | <code>string</code> | Diagnostic command. |
| <code><a href="#mise-projen.DoctorChecks.property.description">description</a></code> | <code>string</code> | Human-readable requirement checked by the command. |
| <code><a href="#mise-projen.DoctorChecks.property.dir">dir</a></code> | <code>string</code> | Working directory. |
| <code><a href="#mise-projen.DoctorChecks.property.hint">hint</a></code> | <code>string</code> | Remediation guidance displayed on failure; |
| <code><a href="#mise-projen.DoctorChecks.property.os">os</a></code> | <code>string[]</code> | OS or OS/arch selectors; |
| <code><a href="#mise-projen.DoctorChecks.property.shell">shell</a></code> | <code>string</code> | Shell command, including the command flag, as in tasks. |
| <code><a href="#mise-projen.DoctorChecks.property.timeout">timeout</a></code> | <code>string</code> | Positive command timeout, such as 5s. |

---

##### `run`<sup>Required</sup> <a name="run" id="mise-projen.DoctorChecks.property.run"></a>

```typescript
public readonly run: string;
```

- *Type:* string

Diagnostic command.

Exit zero to pass; other exit codes fail.

---

##### `description`<sup>Optional</sup> <a name="description" id="mise-projen.DoctorChecks.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-readable requirement checked by the command.

---

##### `dir`<sup>Optional</sup> <a name="dir" id="mise-projen.DoctorChecks.property.dir"></a>

```typescript
public readonly dir: string;
```

- *Type:* string

Working directory.

Relative paths resolve from the declaring config's root (the invocation directory for global and system config); a leading ~/ and absolute paths are used as given.

---

##### `hint`<sup>Optional</sup> <a name="hint" id="mise-projen.DoctorChecks.property.hint"></a>

```typescript
public readonly hint: string;
```

- *Type:* string

Remediation guidance displayed on failure;

never executed.

---

##### `os`<sup>Optional</sup> <a name="os" id="mise-projen.DoctorChecks.property.os"></a>

```typescript
public readonly os: string[];
```

- *Type:* string[]

OS or OS/arch selectors;

omit to run everywhere.

---

##### `shell`<sup>Optional</sup> <a name="shell" id="mise-projen.DoctorChecks.property.shell"></a>

```typescript
public readonly shell: string;
```

- *Type:* string

Shell command, including the command flag, as in tasks.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="mise-projen.DoctorChecks.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string
- *Default:* 10s.

Positive command timeout, such as 5s.

Defaults to 10s.

---

### Env <a name="Env" id="mise-projen.Env"></a>

environment variables.

#### Initializer <a name="Initializer" id="mise-projen.Env.Initializer"></a>

```typescript
import { Env } from 'mise-projen'

const env: Env = { ... }
```


### Hooks <a name="Hooks" id="mise-projen.Hooks"></a>

hooks to run.

#### Initializer <a name="Initializer" id="mise-projen.Hooks.Initializer"></a>

```typescript
import { Hooks } from 'mise-projen'

const hooks: Hooks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.Hooks.property.cd">cd</a></code> | <code>any[]</code> | *No description.* |
| <code><a href="#mise-projen.Hooks.property.enter">enter</a></code> | <code>any[]</code> | *No description.* |
| <code><a href="#mise-projen.Hooks.property.leave">leave</a></code> | <code>any[]</code> | *No description.* |
| <code><a href="#mise-projen.Hooks.property.postinstall">postinstall</a></code> | <code>any[]</code> | *No description.* |
| <code><a href="#mise-projen.Hooks.property.preinstall">preinstall</a></code> | <code>any[]</code> | *No description.* |

---

##### `cd`<sup>Optional</sup> <a name="cd" id="mise-projen.Hooks.property.cd"></a>

```typescript
public readonly cd: any[];
```

- *Type:* any[]

---

##### `enter`<sup>Optional</sup> <a name="enter" id="mise-projen.Hooks.property.enter"></a>

```typescript
public readonly enter: any[];
```

- *Type:* any[]

---

##### `leave`<sup>Optional</sup> <a name="leave" id="mise-projen.Hooks.property.leave"></a>

```typescript
public readonly leave: any[];
```

- *Type:* any[]

---

##### `postinstall`<sup>Optional</sup> <a name="postinstall" id="mise-projen.Hooks.property.postinstall"></a>

```typescript
public readonly postinstall: any[];
```

- *Type:* any[]

---

##### `preinstall`<sup>Optional</sup> <a name="preinstall" id="mise-projen.Hooks.property.preinstall"></a>

```typescript
public readonly preinstall: any[];
```

- *Type:* any[]

---

### LaunchdCalendarInterval <a name="LaunchdCalendarInterval" id="mise-projen.LaunchdCalendarInterval"></a>

calendar schedule fields for launchd StartCalendarInterval.

#### Initializer <a name="Initializer" id="mise-projen.LaunchdCalendarInterval.Initializer"></a>

```typescript
import { LaunchdCalendarInterval } from 'mise-projen'

const launchdCalendarInterval: LaunchdCalendarInterval = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.LaunchdCalendarInterval.property.day">day</a></code> | <code>number</code> | *No description.* |
| <code><a href="#mise-projen.LaunchdCalendarInterval.property.hour">hour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#mise-projen.LaunchdCalendarInterval.property.minute">minute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#mise-projen.LaunchdCalendarInterval.property.month">month</a></code> | <code>number</code> | *No description.* |
| <code><a href="#mise-projen.LaunchdCalendarInterval.property.weekday">weekday</a></code> | <code>number</code> | *No description.* |

---

##### `day`<sup>Optional</sup> <a name="day" id="mise-projen.LaunchdCalendarInterval.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

---

##### `hour`<sup>Optional</sup> <a name="hour" id="mise-projen.LaunchdCalendarInterval.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

---

##### `minute`<sup>Optional</sup> <a name="minute" id="mise-projen.LaunchdCalendarInterval.property.minute"></a>

```typescript
public readonly minute: number;
```

- *Type:* number

---

##### `month`<sup>Optional</sup> <a name="month" id="mise-projen.LaunchdCalendarInterval.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

---

##### `weekday`<sup>Optional</sup> <a name="weekday" id="mise-projen.LaunchdCalendarInterval.property.weekday"></a>

```typescript
public readonly weekday: number;
```

- *Type:* number

---

### MiseOptions <a name="MiseOptions" id="mise-projen.MiseOptions"></a>

Options for `Mise` / `MiseFile`.

#### Initializer <a name="Initializer" id="mise-projen.MiseOptions.Initializer"></a>

```typescript
import { MiseOptions } from 'mise-projen'

const miseOptions: MiseOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseOptions.property.config">config</a></code> | <code><a href="#mise-projen.MiseTomlSchema">MiseTomlSchema</a></code> | Initial mise configuration. |
| <code><a href="#mise-projen.MiseOptions.property.fileName">fileName</a></code> | <code>string</code> | Name of the mise config file. |

---

##### `config`<sup>Optional</sup> <a name="config" id="mise-projen.MiseOptions.property.config"></a>

```typescript
public readonly config: MiseTomlSchema;
```

- *Type:* <a href="#mise-projen.MiseTomlSchema">MiseTomlSchema</a>
- *Default:* {}

Initial mise configuration.

Further fragments can be merged in later via `merge()`, `addTools()`, or by
applying additional `Mise` mixins to the same project.

---

##### `fileName`<sup>Optional</sup> <a name="fileName" id="mise-projen.MiseOptions.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string
- *Default:* "mise.toml"

Name of the mise config file.

---

### MiseTomlSchema <a name="MiseTomlSchema" id="mise-projen.MiseTomlSchema"></a>

config file for mise version manager (mise.toml).

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchema.Initializer"></a>

```typescript
import { MiseTomlSchema } from 'mise-projen'

const miseTomlSchema: MiseTomlSchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchema.property.alias">alias</a></code> | <code>{[ key: string ]: any}</code> | custom shorthands. |
| <code><a href="#mise-projen.MiseTomlSchema.property.bootstrap">bootstrap</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrap">MiseTomlSchemaBootstrap</a></code> | machine-global bootstrapping (system packages, repos, macOS defaults, launchd agents, login shell). |
| <code><a href="#mise-projen.MiseTomlSchema.property.daemonGroups">daemonGroups</a></code> | <code>{[ key: string ]: any}</code> | Experimental named groups of project daemons. |
| <code><a href="#mise-projen.MiseTomlSchema.property.daemonProviders">daemonProviders</a></code> | <code>{[ key: string ]: <a href="#mise-projen.MiseTomlSchemaDaemonProviders">MiseTomlSchemaDaemonProviders</a>}</code> | Experimental shared servers owned by the user. |
| <code><a href="#mise-projen.MiseTomlSchema.property.daemons">daemons</a></code> | <code>{[ key: string ]: any}</code> | Experimental project daemons: custom pitchfork commands or managed presets. |
| <code><a href="#mise-projen.MiseTomlSchema.property.daemonsSettings">daemonsSettings</a></code> | <code><a href="#mise-projen.MiseTomlSchemaDaemonsSettings">MiseTomlSchemaDaemonsSettings</a></code> | Experimental project-wide daemon options. |
| <code><a href="#mise-projen.MiseTomlSchema.property.deps">deps</a></code> | <code><a href="#mise-projen.MiseTomlSchemaDeps">MiseTomlSchemaDeps</a></code> | configure deps providers. |
| <code><a href="#mise-projen.MiseTomlSchema.property.doctor">doctor</a></code> | <code><a href="#mise-projen.Doctor">Doctor</a></code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchema.property.dotenv">dotenv</a></code> | <code>any</code> | dotenv file(s) to load. |
| <code><a href="#mise-projen.MiseTomlSchema.property.dotfiles">dotfiles</a></code> | <code>{[ key: string ]: any}</code> | dotfiles applied with `mise dotfiles apply` or `mise bootstrap`, keyed by target path or a logical name when every variant overrides the target; |
| <code><a href="#mise-projen.MiseTomlSchema.property.env">env</a></code> | <code><a href="#mise-projen.Env">Env</a>[]</code> | environment variables to set. |
| <code><a href="#mise-projen.MiseTomlSchema.property.envFile">envFile</a></code> | <code>any</code> | dotenv file(s) to load. |
| <code><a href="#mise-projen.MiseTomlSchema.property.envPath">envPath</a></code> | <code>any</code> | PATH entries to add. |
| <code><a href="#mise-projen.MiseTomlSchema.property.history">history</a></code> | <code><a href="#mise-projen.MiseTomlSchemaHistory">MiseTomlSchemaHistory</a></code> | dotfiles history: what is never captured, reload commands, and the setup repository (https://mise.jdx.dev/history.html). |
| <code><a href="#mise-projen.MiseTomlSchema.property.hooks">hooks</a></code> | <code><a href="#mise-projen.Hooks">Hooks</a></code> | hooks to run on events like cd, enter, leave. |
| <code><a href="#mise-projen.MiseTomlSchema.property.minVersion">minVersion</a></code> | <code>any</code> | minimum version of mise required to use this config. |
| <code><a href="#mise-projen.MiseTomlSchema.property.monorepo">monorepo</a></code> | <code><a href="#mise-projen.Monorepo">Monorepo</a></code> | configuration for monorepo task discovery. |
| <code><a href="#mise-projen.MiseTomlSchema.property.monorepoRoot">monorepoRoot</a></code> | <code>boolean</code> | marks this config as a monorepo root for task path syntax. |
| <code><a href="#mise-projen.MiseTomlSchema.property.oci">oci</a></code> | <code><a href="#mise-projen.MiseTomlSchemaOci">MiseTomlSchemaOci</a></code> | configuration for `mise oci build`. |
| <code><a href="#mise-projen.MiseTomlSchema.property.plugins">plugins</a></code> | <code>{[ key: string ]: string}</code> | plugins to use. |
| <code><a href="#mise-projen.MiseTomlSchema.property.redactions">redactions</a></code> | <code>string[]</code> | env or vars keys to redact from logs. |
| <code><a href="#mise-projen.MiseTomlSchema.property.settings">settings</a></code> | <code><a href="#mise-projen.Settings">Settings</a></code> | mise settings. |
| <code><a href="#mise-projen.MiseTomlSchema.property.shellAlias">shellAlias</a></code> | <code>{[ key: string ]: string}</code> | shell aliases. |
| <code><a href="#mise-projen.MiseTomlSchema.property.taskConfig">taskConfig</a></code> | <code><a href="#mise-projen.TaskConfig">TaskConfig</a></code> | configuration for task execution and management. |
| <code><a href="#mise-projen.MiseTomlSchema.property.tasks">tasks</a></code> | <code>{[ key: string ]: any}</code> | task runner tasks. |
| <code><a href="#mise-projen.MiseTomlSchema.property.taskTemplates">taskTemplates</a></code> | <code>{[ key: string ]: any}</code> | task templates that can be extended by tasks via extends. |
| <code><a href="#mise-projen.MiseTomlSchema.property.toolAlias">toolAlias</a></code> | <code>{[ key: string ]: any}</code> | Tool version aliases. |
| <code><a href="#mise-projen.MiseTomlSchema.property.toolConfig">toolConfig</a></code> | <code><a href="#mise-projen.ToolConfig">ToolConfig</a></code> | policy for tools declared by this config root. |
| <code><a href="#mise-projen.MiseTomlSchema.property.tools">tools</a></code> | <code>{[ key: string ]: any[]}</code> | dev tools to use. |
| <code><a href="#mise-projen.MiseTomlSchema.property.vars">vars</a></code> | <code><a href="#mise-projen.Vars">Vars</a></code> | variables to set for use in config templates. |
| <code><a href="#mise-projen.MiseTomlSchema.property.watchFiles">watchFiles</a></code> | <code>any[]</code> | files to watch for changes and run scripts when modified. |
| <code><a href="#mise-projen.MiseTomlSchema.property.wrappers">wrappers</a></code> | <code>{[ key: string ]: any}</code> | commands that intercept a binary name before delegating to the active toolset. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="mise-projen.MiseTomlSchema.property.alias"></a>

```typescript
public readonly alias: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

custom shorthands.

---

##### `bootstrap`<sup>Optional</sup> <a name="bootstrap" id="mise-projen.MiseTomlSchema.property.bootstrap"></a>

```typescript
public readonly bootstrap: MiseTomlSchemaBootstrap;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrap">MiseTomlSchemaBootstrap</a>

machine-global bootstrapping (system packages, repos, macOS defaults, launchd agents, login shell).

---

##### `daemonGroups`<sup>Optional</sup> <a name="daemonGroups" id="mise-projen.MiseTomlSchema.property.daemonGroups"></a>

```typescript
public readonly daemonGroups: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Experimental named groups of project daemons.

Members are daemon names or other group names declared in the same project.

---

##### `daemonProviders`<sup>Optional</sup> <a name="daemonProviders" id="mise-projen.MiseTomlSchema.property.daemonProviders"></a>

```typescript
public readonly daemonProviders: {[ key: string ]: MiseTomlSchemaDaemonProviders};
```

- *Type:* {[ key: string ]: <a href="#mise-projen.MiseTomlSchemaDaemonProviders">MiseTomlSchemaDaemonProviders</a>}

Experimental shared servers owned by the user.

Only allowed in global configuration.

---

##### `daemons`<sup>Optional</sup> <a name="daemons" id="mise-projen.MiseTomlSchema.property.daemons"></a>

```typescript
public readonly daemons: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Experimental project daemons: custom pitchfork commands or managed presets.

---

##### `daemonsSettings`<sup>Optional</sup> <a name="daemonsSettings" id="mise-projen.MiseTomlSchema.property.daemonsSettings"></a>

```typescript
public readonly daemonsSettings: MiseTomlSchemaDaemonsSettings;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaDaemonsSettings">MiseTomlSchemaDaemonsSettings</a>

Experimental project-wide daemon options.

---

##### `deps`<sup>Optional</sup> <a name="deps" id="mise-projen.MiseTomlSchema.property.deps"></a>

```typescript
public readonly deps: MiseTomlSchemaDeps;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaDeps">MiseTomlSchemaDeps</a>

configure deps providers.

---

##### `doctor`<sup>Optional</sup> <a name="doctor" id="mise-projen.MiseTomlSchema.property.doctor"></a>

```typescript
public readonly doctor: Doctor;
```

- *Type:* <a href="#mise-projen.Doctor">Doctor</a>

---

##### `dotenv`<sup>Optional</sup> <a name="dotenv" id="mise-projen.MiseTomlSchema.property.dotenv"></a>

```typescript
public readonly dotenv: any;
```

- *Type:* any

dotenv file(s) to load.

Deprecated; use env._.file instead. This will be removed in mise 2027.4.0.

---

##### `dotfiles`<sup>Optional</sup> <a name="dotfiles" id="mise-projen.MiseTomlSchema.property.dotfiles"></a>

```typescript
public readonly dotfiles: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

dotfiles applied with `mise dotfiles apply` or `mise bootstrap`, keyed by target path or a logical name when every variant overrides the target;

an omitted source for the latter resolves the relative key under dotfiles.root

---

##### `env`<sup>Optional</sup> <a name="env" id="mise-projen.MiseTomlSchema.property.env"></a>

```typescript
public readonly env: Env[];
```

- *Type:* <a href="#mise-projen.Env">Env</a>[]

environment variables to set.

---

##### `envFile`<sup>Optional</sup> <a name="envFile" id="mise-projen.MiseTomlSchema.property.envFile"></a>

```typescript
public readonly envFile: any;
```

- *Type:* any

dotenv file(s) to load.

Deprecated; use env._.file instead. This will be removed in mise 2027.4.0.

---

##### `envPath`<sup>Optional</sup> <a name="envPath" id="mise-projen.MiseTomlSchema.property.envPath"></a>

```typescript
public readonly envPath: any;
```

- *Type:* any

PATH entries to add.

Deprecated; use env._.path instead. This will be removed in mise 2027.4.0.

---

##### `history`<sup>Optional</sup> <a name="history" id="mise-projen.MiseTomlSchema.property.history"></a>

```typescript
public readonly history: MiseTomlSchemaHistory;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaHistory">MiseTomlSchemaHistory</a>

dotfiles history: what is never captured, reload commands, and the setup repository (https://mise.jdx.dev/history.html).

---

##### `hooks`<sup>Optional</sup> <a name="hooks" id="mise-projen.MiseTomlSchema.property.hooks"></a>

```typescript
public readonly hooks: Hooks;
```

- *Type:* <a href="#mise-projen.Hooks">Hooks</a>

hooks to run on events like cd, enter, leave.

---

##### `minVersion`<sup>Optional</sup> <a name="minVersion" id="mise-projen.MiseTomlSchema.property.minVersion"></a>

```typescript
public readonly minVersion: any;
```

- *Type:* any

minimum version of mise required to use this config.

---

##### `monorepo`<sup>Optional</sup> <a name="monorepo" id="mise-projen.MiseTomlSchema.property.monorepo"></a>

```typescript
public readonly monorepo: Monorepo;
```

- *Type:* <a href="#mise-projen.Monorepo">Monorepo</a>

configuration for monorepo task discovery.

---

##### `monorepoRoot`<sup>Optional</sup> <a name="monorepoRoot" id="mise-projen.MiseTomlSchema.property.monorepoRoot"></a>

```typescript
public readonly monorepoRoot: boolean;
```

- *Type:* boolean

marks this config as a monorepo root for task path syntax.

---

##### `oci`<sup>Optional</sup> <a name="oci" id="mise-projen.MiseTomlSchema.property.oci"></a>

```typescript
public readonly oci: MiseTomlSchemaOci;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaOci">MiseTomlSchemaOci</a>

configuration for `mise oci build`.

---

##### `plugins`<sup>Optional</sup> <a name="plugins" id="mise-projen.MiseTomlSchema.property.plugins"></a>

```typescript
public readonly plugins: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

plugins to use.

---

##### `redactions`<sup>Optional</sup> <a name="redactions" id="mise-projen.MiseTomlSchema.property.redactions"></a>

```typescript
public readonly redactions: string[];
```

- *Type:* string[]

env or vars keys to redact from logs.

---

##### `settings`<sup>Optional</sup> <a name="settings" id="mise-projen.MiseTomlSchema.property.settings"></a>

```typescript
public readonly settings: Settings;
```

- *Type:* <a href="#mise-projen.Settings">Settings</a>

mise settings.

---

##### `shellAlias`<sup>Optional</sup> <a name="shellAlias" id="mise-projen.MiseTomlSchema.property.shellAlias"></a>

```typescript
public readonly shellAlias: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

shell aliases.

---

##### `taskConfig`<sup>Optional</sup> <a name="taskConfig" id="mise-projen.MiseTomlSchema.property.taskConfig"></a>

```typescript
public readonly taskConfig: TaskConfig;
```

- *Type:* <a href="#mise-projen.TaskConfig">TaskConfig</a>

configuration for task execution and management.

---

##### `tasks`<sup>Optional</sup> <a name="tasks" id="mise-projen.MiseTomlSchema.property.tasks"></a>

```typescript
public readonly tasks: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

task runner tasks.

---

##### `taskTemplates`<sup>Optional</sup> <a name="taskTemplates" id="mise-projen.MiseTomlSchema.property.taskTemplates"></a>

```typescript
public readonly taskTemplates: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

task templates that can be extended by tasks via extends.

---

##### `toolAlias`<sup>Optional</sup> <a name="toolAlias" id="mise-projen.MiseTomlSchema.property.toolAlias"></a>

```typescript
public readonly toolAlias: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Tool version aliases.

---

##### `toolConfig`<sup>Optional</sup> <a name="toolConfig" id="mise-projen.MiseTomlSchema.property.toolConfig"></a>

```typescript
public readonly toolConfig: ToolConfig;
```

- *Type:* <a href="#mise-projen.ToolConfig">ToolConfig</a>

policy for tools declared by this config root.

---

##### `tools`<sup>Optional</sup> <a name="tools" id="mise-projen.MiseTomlSchema.property.tools"></a>

```typescript
public readonly tools: {[ key: string ]: any[]};
```

- *Type:* {[ key: string ]: any[]}

dev tools to use.

---

##### `vars`<sup>Optional</sup> <a name="vars" id="mise-projen.MiseTomlSchema.property.vars"></a>

```typescript
public readonly vars: Vars;
```

- *Type:* <a href="#mise-projen.Vars">Vars</a>

variables to set for use in config templates.

---

##### `watchFiles`<sup>Optional</sup> <a name="watchFiles" id="mise-projen.MiseTomlSchema.property.watchFiles"></a>

```typescript
public readonly watchFiles: any[];
```

- *Type:* any[]

files to watch for changes and run scripts when modified.

---

##### `wrappers`<sup>Optional</sup> <a name="wrappers" id="mise-projen.MiseTomlSchema.property.wrappers"></a>

```typescript
public readonly wrappers: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

commands that intercept a binary name before delegating to the active toolset.

---

### MiseTomlSchemaBootstrap <a name="MiseTomlSchemaBootstrap" id="mise-projen.MiseTomlSchemaBootstrap"></a>

machine-global bootstrapping (system packages, repos, macOS defaults, launchd agents, login shell).

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaBootstrap.Initializer"></a>

```typescript
import { MiseTomlSchemaBootstrap } from 'mise-projen'

const miseTomlSchemaBootstrap: MiseTomlSchemaBootstrap = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrap.property.brew">brew</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapBrew">MiseTomlSchemaBootstrapBrew</a></code> | Homebrew-specific bootstrap package config. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrap.property.configRoots">configRoots</a></code> | <code>string[]</code> | deprecated and will be removed in mise 2027.3.3; move each selected root into a conf.d folder instead (https://mise.jdx.dev/configuration.html#conf-d-folders). |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrap.property.directories">directories</a></code> | <code>{[ key: string ]: <a href="#mise-projen.MiseTomlSchemaBootstrapDirectories">MiseTomlSchemaBootstrapDirectories</a>}</code> | Managed system directories keyed by absolute target path. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrap.property.files">files</a></code> | <code>{[ key: string ]: <a href="#mise-projen.MiseTomlSchemaBootstrapFiles">MiseTomlSchemaBootstrapFiles</a>}</code> | Managed system files keyed by absolute target path. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrap.property.hooks">hooks</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapHooks">MiseTomlSchemaBootstrapHooks</a></code> | commands to run before and after bootstrap phases. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrap.property.linux">linux</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinux">MiseTomlSchemaBootstrapLinux</a></code> | Linux-specific bootstrap config. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrap.property.macos">macos</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacos">MiseTomlSchemaBootstrapMacos</a></code> | macOS-specific bootstrap config. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrap.property.miseShellActivate">miseShellActivate</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapMiseShellActivate">MiseTomlSchemaBootstrapMiseShellActivate</a></code> | declarative mise shell activation snippets, applied with `mise bootstrap mise-shell-activate apply`. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrap.property.packages">packages</a></code> | <code>{[ key: string ]: any}</code> | system packages to install with `mise bootstrap packages apply`, keyed by "manager:package" (e.g. "apt:libssl-dev", "brew:postgresql@17", "dnf:openssl-devel", "pacman:base-devel"). |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrap.property.plugins">plugins</a></code> | <code>{[ key: string ]: string}</code> | package manager plugins to install with `mise bootstrap plugins apply`, keyed by manager name. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrap.property.remote">remote</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapRemote">MiseTomlSchemaBootstrapRemote</a></code> | OpenSSH targets used by `mise bootstrap remote`. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrap.property.repos">repos</a></code> | <code>{[ key: string ]: <a href="#mise-projen.MiseTomlSchemaBootstrapRepos">MiseTomlSchemaBootstrapRepos</a>}</code> | git repositories to clone or update with `mise bootstrap repos apply`, keyed by target path. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrap.property.services">services</a></code> | <code>{[ key: string ]: <a href="#mise-projen.MiseTomlSchemaBootstrapServices">MiseTomlSchemaBootstrapServices</a>}</code> | System services and portable user services managed by mise bootstrap, keyed by service name. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrap.property.user">user</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapUser">MiseTomlSchemaBootstrapUser</a></code> | current-user bootstrap settings. |

---

##### `brew`<sup>Optional</sup> <a name="brew" id="mise-projen.MiseTomlSchemaBootstrap.property.brew"></a>

```typescript
public readonly brew: MiseTomlSchemaBootstrapBrew;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapBrew">MiseTomlSchemaBootstrapBrew</a>

Homebrew-specific bootstrap package config.

---

##### `configRoots`<sup>Optional</sup> <a name="configRoots" id="mise-projen.MiseTomlSchemaBootstrap.property.configRoots"></a>

```typescript
public readonly configRoots: string[];
```

- *Type:* string[]

deprecated and will be removed in mise 2027.3.3; move each selected root into a conf.d folder instead (https://mise.jdx.dev/configuration.html#conf-d-folders).

---

##### `directories`<sup>Optional</sup> <a name="directories" id="mise-projen.MiseTomlSchemaBootstrap.property.directories"></a>

```typescript
public readonly directories: {[ key: string ]: MiseTomlSchemaBootstrapDirectories};
```

- *Type:* {[ key: string ]: <a href="#mise-projen.MiseTomlSchemaBootstrapDirectories">MiseTomlSchemaBootstrapDirectories</a>}

Managed system directories keyed by absolute target path.

---

##### `files`<sup>Optional</sup> <a name="files" id="mise-projen.MiseTomlSchemaBootstrap.property.files"></a>

```typescript
public readonly files: {[ key: string ]: MiseTomlSchemaBootstrapFiles};
```

- *Type:* {[ key: string ]: <a href="#mise-projen.MiseTomlSchemaBootstrapFiles">MiseTomlSchemaBootstrapFiles</a>}

Managed system files keyed by absolute target path.

---

##### `hooks`<sup>Optional</sup> <a name="hooks" id="mise-projen.MiseTomlSchemaBootstrap.property.hooks"></a>

```typescript
public readonly hooks: MiseTomlSchemaBootstrapHooks;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapHooks">MiseTomlSchemaBootstrapHooks</a>

commands to run before and after bootstrap phases.

---

##### `linux`<sup>Optional</sup> <a name="linux" id="mise-projen.MiseTomlSchemaBootstrap.property.linux"></a>

```typescript
public readonly linux: MiseTomlSchemaBootstrapLinux;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapLinux">MiseTomlSchemaBootstrapLinux</a>

Linux-specific bootstrap config.

---

##### `macos`<sup>Optional</sup> <a name="macos" id="mise-projen.MiseTomlSchemaBootstrap.property.macos"></a>

```typescript
public readonly macos: MiseTomlSchemaBootstrapMacos;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapMacos">MiseTomlSchemaBootstrapMacos</a>

macOS-specific bootstrap config.

---

##### `miseShellActivate`<sup>Optional</sup> <a name="miseShellActivate" id="mise-projen.MiseTomlSchemaBootstrap.property.miseShellActivate"></a>

```typescript
public readonly miseShellActivate: MiseTomlSchemaBootstrapMiseShellActivate;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapMiseShellActivate">MiseTomlSchemaBootstrapMiseShellActivate</a>

declarative mise shell activation snippets, applied with `mise bootstrap mise-shell-activate apply`.

---

##### `packages`<sup>Optional</sup> <a name="packages" id="mise-projen.MiseTomlSchemaBootstrap.property.packages"></a>

```typescript
public readonly packages: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

system packages to install with `mise bootstrap packages apply`, keyed by "manager:package" (e.g. "apt:libssl-dev", "brew:postgresql@17", "dnf:openssl-devel", "pacman:base-devel").

---

##### `plugins`<sup>Optional</sup> <a name="plugins" id="mise-projen.MiseTomlSchemaBootstrap.property.plugins"></a>

```typescript
public readonly plugins: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

package manager plugins to install with `mise bootstrap plugins apply`, keyed by manager name.

---

##### `remote`<sup>Optional</sup> <a name="remote" id="mise-projen.MiseTomlSchemaBootstrap.property.remote"></a>

```typescript
public readonly remote: MiseTomlSchemaBootstrapRemote;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapRemote">MiseTomlSchemaBootstrapRemote</a>

OpenSSH targets used by `mise bootstrap remote`.

---

##### `repos`<sup>Optional</sup> <a name="repos" id="mise-projen.MiseTomlSchemaBootstrap.property.repos"></a>

```typescript
public readonly repos: {[ key: string ]: MiseTomlSchemaBootstrapRepos};
```

- *Type:* {[ key: string ]: <a href="#mise-projen.MiseTomlSchemaBootstrapRepos">MiseTomlSchemaBootstrapRepos</a>}

git repositories to clone or update with `mise bootstrap repos apply`, keyed by target path.

---

##### `services`<sup>Optional</sup> <a name="services" id="mise-projen.MiseTomlSchemaBootstrap.property.services"></a>

```typescript
public readonly services: {[ key: string ]: MiseTomlSchemaBootstrapServices};
```

- *Type:* {[ key: string ]: <a href="#mise-projen.MiseTomlSchemaBootstrapServices">MiseTomlSchemaBootstrapServices</a>}

System services and portable user services managed by mise bootstrap, keyed by service name.

---

##### `user`<sup>Optional</sup> <a name="user" id="mise-projen.MiseTomlSchemaBootstrap.property.user"></a>

```typescript
public readonly user: MiseTomlSchemaBootstrapUser;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapUser">MiseTomlSchemaBootstrapUser</a>

current-user bootstrap settings.

---

### MiseTomlSchemaBootstrapBrew <a name="MiseTomlSchemaBootstrapBrew" id="mise-projen.MiseTomlSchemaBootstrapBrew"></a>

Homebrew-specific bootstrap package config.

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaBootstrapBrew.Initializer"></a>

```typescript
import { MiseTomlSchemaBootstrapBrew } from 'mise-projen'

const miseTomlSchemaBootstrapBrew: MiseTomlSchemaBootstrapBrew = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapBrew.property.adopt">adopt</a></code> | <code>boolean</code> | adopt existing app artifacts by default for configured brew-cask packages. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapBrew.property.taps">taps</a></code> | <code>{[ key: string ]: string}</code> | Homebrew tap names mapped to custom git URLs. |

---

##### `adopt`<sup>Optional</sup> <a name="adopt" id="mise-projen.MiseTomlSchemaBootstrapBrew.property.adopt"></a>

```typescript
public readonly adopt: boolean;
```

- *Type:* boolean

adopt existing app artifacts by default for configured brew-cask packages.

---

##### `taps`<sup>Optional</sup> <a name="taps" id="mise-projen.MiseTomlSchemaBootstrapBrew.property.taps"></a>

```typescript
public readonly taps: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Homebrew tap names mapped to custom git URLs.

---

### MiseTomlSchemaBootstrapDirectories <a name="MiseTomlSchemaBootstrapDirectories" id="mise-projen.MiseTomlSchemaBootstrapDirectories"></a>

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaBootstrapDirectories.Initializer"></a>

```typescript
import { MiseTomlSchemaBootstrapDirectories } from 'mise-projen'

const miseTomlSchemaBootstrapDirectories: MiseTomlSchemaBootstrapDirectories = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapDirectories.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapDirectories.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapDirectories.property.notify">notify</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapDirectories.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapDirectories.property.phase">phase</a></code> | <code><a href="#mise-projen.BootstrapFilePhase">BootstrapFilePhase</a></code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapDirectories.property.recursive">recursive</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapDirectories.property.replace">replace</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapDirectories.property.state">state</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapDirectoriesState">MiseTomlSchemaBootstrapDirectoriesState</a></code> | *No description.* |

---

##### `group`<sup>Optional</sup> <a name="group" id="mise-projen.MiseTomlSchemaBootstrapDirectories.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `mode`<sup>Optional</sup> <a name="mode" id="mise-projen.MiseTomlSchemaBootstrapDirectories.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `notify`<sup>Optional</sup> <a name="notify" id="mise-projen.MiseTomlSchemaBootstrapDirectories.property.notify"></a>

```typescript
public readonly notify: string[];
```

- *Type:* string[]

---

##### `owner`<sup>Optional</sup> <a name="owner" id="mise-projen.MiseTomlSchemaBootstrapDirectories.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `phase`<sup>Optional</sup> <a name="phase" id="mise-projen.MiseTomlSchemaBootstrapDirectories.property.phase"></a>

```typescript
public readonly phase: BootstrapFilePhase;
```

- *Type:* <a href="#mise-projen.BootstrapFilePhase">BootstrapFilePhase</a>

---

##### `recursive`<sup>Optional</sup> <a name="recursive" id="mise-projen.MiseTomlSchemaBootstrapDirectories.property.recursive"></a>

```typescript
public readonly recursive: boolean;
```

- *Type:* boolean

---

##### `replace`<sup>Optional</sup> <a name="replace" id="mise-projen.MiseTomlSchemaBootstrapDirectories.property.replace"></a>

```typescript
public readonly replace: boolean;
```

- *Type:* boolean

---

##### `state`<sup>Optional</sup> <a name="state" id="mise-projen.MiseTomlSchemaBootstrapDirectories.property.state"></a>

```typescript
public readonly state: MiseTomlSchemaBootstrapDirectoriesState;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapDirectoriesState">MiseTomlSchemaBootstrapDirectoriesState</a>

---

### MiseTomlSchemaBootstrapFiles <a name="MiseTomlSchemaBootstrapFiles" id="mise-projen.MiseTomlSchemaBootstrapFiles"></a>

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaBootstrapFiles.Initializer"></a>

```typescript
import { MiseTomlSchemaBootstrapFiles } from 'mise-projen'

const miseTomlSchemaBootstrapFiles: MiseTomlSchemaBootstrapFiles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapFiles.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapFiles.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapFiles.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapFiles.property.notify">notify</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapFiles.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapFiles.property.phase">phase</a></code> | <code><a href="#mise-projen.BootstrapFilePhase">BootstrapFilePhase</a></code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapFiles.property.removeEmpty">removeEmpty</a></code> | <code>boolean</code> | remove the target when the template renders to empty or whitespace-only content; |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapFiles.property.replace">replace</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapFiles.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapFiles.property.state">state</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapFilesState">MiseTomlSchemaBootstrapFilesState</a></code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapFiles.property.template">template</a></code> | <code>boolean</code> | *No description.* |

---

##### `content`<sup>Optional</sup> <a name="content" id="mise-projen.MiseTomlSchemaBootstrapFiles.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `group`<sup>Optional</sup> <a name="group" id="mise-projen.MiseTomlSchemaBootstrapFiles.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `mode`<sup>Optional</sup> <a name="mode" id="mise-projen.MiseTomlSchemaBootstrapFiles.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `notify`<sup>Optional</sup> <a name="notify" id="mise-projen.MiseTomlSchemaBootstrapFiles.property.notify"></a>

```typescript
public readonly notify: string[];
```

- *Type:* string[]

---

##### `owner`<sup>Optional</sup> <a name="owner" id="mise-projen.MiseTomlSchemaBootstrapFiles.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `phase`<sup>Optional</sup> <a name="phase" id="mise-projen.MiseTomlSchemaBootstrapFiles.property.phase"></a>

```typescript
public readonly phase: BootstrapFilePhase;
```

- *Type:* <a href="#mise-projen.BootstrapFilePhase">BootstrapFilePhase</a>

---

##### `removeEmpty`<sup>Optional</sup> <a name="removeEmpty" id="mise-projen.MiseTomlSchemaBootstrapFiles.property.removeEmpty"></a>

```typescript
public readonly removeEmpty: boolean;
```

- *Type:* boolean

remove the target when the template renders to empty or whitespace-only content;

requires template = true

---

##### `replace`<sup>Optional</sup> <a name="replace" id="mise-projen.MiseTomlSchemaBootstrapFiles.property.replace"></a>

```typescript
public readonly replace: boolean;
```

- *Type:* boolean

---

##### `source`<sup>Optional</sup> <a name="source" id="mise-projen.MiseTomlSchemaBootstrapFiles.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `state`<sup>Optional</sup> <a name="state" id="mise-projen.MiseTomlSchemaBootstrapFiles.property.state"></a>

```typescript
public readonly state: MiseTomlSchemaBootstrapFilesState;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapFilesState">MiseTomlSchemaBootstrapFilesState</a>

---

##### `template`<sup>Optional</sup> <a name="template" id="mise-projen.MiseTomlSchemaBootstrapFiles.property.template"></a>

```typescript
public readonly template: boolean;
```

- *Type:* boolean

---

### MiseTomlSchemaBootstrapHooks <a name="MiseTomlSchemaBootstrapHooks" id="mise-projen.MiseTomlSchemaBootstrapHooks"></a>

commands to run before and after bootstrap phases.

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaBootstrapHooks.Initializer"></a>

```typescript
import { MiseTomlSchemaBootstrapHooks } from 'mise-projen'

const miseTomlSchemaBootstrapHooks: MiseTomlSchemaBootstrapHooks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapHooks.property.final">final</a></code> | <code>any</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapHooks.property.postDefaults">postDefaults</a></code> | <code>any</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapHooks.property.postDotfiles">postDotfiles</a></code> | <code>any</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapHooks.property.postPackages">postPackages</a></code> | <code>any</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapHooks.property.postRepos">postRepos</a></code> | <code>any</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapHooks.property.postTools">postTools</a></code> | <code>any</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapHooks.property.postUser">postUser</a></code> | <code>any</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapHooks.property.preDefaults">preDefaults</a></code> | <code>any</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapHooks.property.preDotfiles">preDotfiles</a></code> | <code>any</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapHooks.property.prePackages">prePackages</a></code> | <code>any</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapHooks.property.preRepos">preRepos</a></code> | <code>any</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapHooks.property.preTools">preTools</a></code> | <code>any</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapHooks.property.preUser">preUser</a></code> | <code>any</code> | *No description.* |

---

##### `final`<sup>Optional</sup> <a name="final" id="mise-projen.MiseTomlSchemaBootstrapHooks.property.final"></a>

```typescript
public readonly final: any;
```

- *Type:* any

---

##### `postDefaults`<sup>Optional</sup> <a name="postDefaults" id="mise-projen.MiseTomlSchemaBootstrapHooks.property.postDefaults"></a>

```typescript
public readonly postDefaults: any;
```

- *Type:* any

---

##### `postDotfiles`<sup>Optional</sup> <a name="postDotfiles" id="mise-projen.MiseTomlSchemaBootstrapHooks.property.postDotfiles"></a>

```typescript
public readonly postDotfiles: any;
```

- *Type:* any

---

##### `postPackages`<sup>Optional</sup> <a name="postPackages" id="mise-projen.MiseTomlSchemaBootstrapHooks.property.postPackages"></a>

```typescript
public readonly postPackages: any;
```

- *Type:* any

---

##### `postRepos`<sup>Optional</sup> <a name="postRepos" id="mise-projen.MiseTomlSchemaBootstrapHooks.property.postRepos"></a>

```typescript
public readonly postRepos: any;
```

- *Type:* any

---

##### `postTools`<sup>Optional</sup> <a name="postTools" id="mise-projen.MiseTomlSchemaBootstrapHooks.property.postTools"></a>

```typescript
public readonly postTools: any;
```

- *Type:* any

---

##### `postUser`<sup>Optional</sup> <a name="postUser" id="mise-projen.MiseTomlSchemaBootstrapHooks.property.postUser"></a>

```typescript
public readonly postUser: any;
```

- *Type:* any

---

##### `preDefaults`<sup>Optional</sup> <a name="preDefaults" id="mise-projen.MiseTomlSchemaBootstrapHooks.property.preDefaults"></a>

```typescript
public readonly preDefaults: any;
```

- *Type:* any

---

##### `preDotfiles`<sup>Optional</sup> <a name="preDotfiles" id="mise-projen.MiseTomlSchemaBootstrapHooks.property.preDotfiles"></a>

```typescript
public readonly preDotfiles: any;
```

- *Type:* any

---

##### `prePackages`<sup>Optional</sup> <a name="prePackages" id="mise-projen.MiseTomlSchemaBootstrapHooks.property.prePackages"></a>

```typescript
public readonly prePackages: any;
```

- *Type:* any

---

##### `preRepos`<sup>Optional</sup> <a name="preRepos" id="mise-projen.MiseTomlSchemaBootstrapHooks.property.preRepos"></a>

```typescript
public readonly preRepos: any;
```

- *Type:* any

---

##### `preTools`<sup>Optional</sup> <a name="preTools" id="mise-projen.MiseTomlSchemaBootstrapHooks.property.preTools"></a>

```typescript
public readonly preTools: any;
```

- *Type:* any

---

##### `preUser`<sup>Optional</sup> <a name="preUser" id="mise-projen.MiseTomlSchemaBootstrapHooks.property.preUser"></a>

```typescript
public readonly preUser: any;
```

- *Type:* any

---

### MiseTomlSchemaBootstrapLinux <a name="MiseTomlSchemaBootstrapLinux" id="mise-projen.MiseTomlSchemaBootstrapLinux"></a>

Linux-specific bootstrap config.

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaBootstrapLinux.Initializer"></a>

```typescript
import { MiseTomlSchemaBootstrapLinux } from 'mise-projen'

const miseTomlSchemaBootstrapLinux: MiseTomlSchemaBootstrapLinux = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinux.property.firewall">firewall</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewall">MiseTomlSchemaBootstrapLinuxFirewall</a></code> | Linux host firewall policy and rules managed with `mise bootstrap firewall`. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinux.property.systemd">systemd</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemd">MiseTomlSchemaBootstrapLinuxSystemd</a></code> | systemd user service and timer bootstrap config. |

---

##### `firewall`<sup>Optional</sup> <a name="firewall" id="mise-projen.MiseTomlSchemaBootstrapLinux.property.firewall"></a>

```typescript
public readonly firewall: MiseTomlSchemaBootstrapLinuxFirewall;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewall">MiseTomlSchemaBootstrapLinuxFirewall</a>

Linux host firewall policy and rules managed with `mise bootstrap firewall`.

---

##### `systemd`<sup>Optional</sup> <a name="systemd" id="mise-projen.MiseTomlSchemaBootstrapLinux.property.systemd"></a>

```typescript
public readonly systemd: MiseTomlSchemaBootstrapLinuxSystemd;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemd">MiseTomlSchemaBootstrapLinuxSystemd</a>

systemd user service and timer bootstrap config.

---

### MiseTomlSchemaBootstrapLinuxFirewall <a name="MiseTomlSchemaBootstrapLinuxFirewall" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewall"></a>

Linux host firewall policy and rules managed with `mise bootstrap firewall`.

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewall.Initializer"></a>

```typescript
import { MiseTomlSchemaBootstrapLinuxFirewall } from 'mise-projen'

const miseTomlSchemaBootstrapLinuxFirewall: MiseTomlSchemaBootstrapLinuxFirewall = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewall.property.allowLockout">allowLockout</a></code> | <code>boolean</code> | allow default-deny or reject over SSH without a rule covering the connected peer. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewall.property.backend">backend</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallBackend">MiseTomlSchemaBootstrapLinuxFirewallBackend</a></code> | firewall backend; |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewall.property.defaultIncoming">defaultIncoming</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallDefaultIncoming">MiseTomlSchemaBootstrapLinuxFirewallDefaultIncoming</a></code> | default action for incoming traffic. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewall.property.defaultOutgoing">defaultOutgoing</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallDefaultOutgoing">MiseTomlSchemaBootstrapLinuxFirewallDefaultOutgoing</a></code> | default action for outgoing traffic. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewall.property.exclusive">exclusive</a></code> | <code>boolean</code> | treat the declared rules as the complete owned ruleset; |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewall.property.rules">rules</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRules">MiseTomlSchemaBootstrapLinuxFirewallRules</a>[]</code> | named firewall rules reconciled without deleting undeclared managed rules. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewall.property.state">state</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallState">MiseTomlSchemaBootstrapLinuxFirewallState</a></code> | desired lifecycle of mise-managed firewall state. |

---

##### `allowLockout`<sup>Optional</sup> <a name="allowLockout" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewall.property.allowLockout"></a>

```typescript
public readonly allowLockout: boolean;
```

- *Type:* boolean

allow default-deny or reject over SSH without a rule covering the connected peer.

---

##### `backend`<sup>Optional</sup> <a name="backend" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewall.property.backend"></a>

```typescript
public readonly backend: MiseTomlSchemaBootstrapLinuxFirewallBackend;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallBackend">MiseTomlSchemaBootstrapLinuxFirewallBackend</a>

firewall backend;

auto reuses managed or active host infrastructure

---

##### `defaultIncoming`<sup>Optional</sup> <a name="defaultIncoming" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewall.property.defaultIncoming"></a>

```typescript
public readonly defaultIncoming: MiseTomlSchemaBootstrapLinuxFirewallDefaultIncoming;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallDefaultIncoming">MiseTomlSchemaBootstrapLinuxFirewallDefaultIncoming</a>

default action for incoming traffic.

---

##### `defaultOutgoing`<sup>Optional</sup> <a name="defaultOutgoing" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewall.property.defaultOutgoing"></a>

```typescript
public readonly defaultOutgoing: MiseTomlSchemaBootstrapLinuxFirewallDefaultOutgoing;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallDefaultOutgoing">MiseTomlSchemaBootstrapLinuxFirewallDefaultOutgoing</a>

default action for outgoing traffic.

---

##### `exclusive`<sup>Optional</sup> <a name="exclusive" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewall.property.exclusive"></a>

```typescript
public readonly exclusive: boolean;
```

- *Type:* boolean

treat the declared rules as the complete owned ruleset;

UFW reset also removes unrelated UFW rules

---

##### `rules`<sup>Optional</sup> <a name="rules" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewall.property.rules"></a>

```typescript
public readonly rules: MiseTomlSchemaBootstrapLinuxFirewallRules[];
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRules">MiseTomlSchemaBootstrapLinuxFirewallRules</a>[]

named firewall rules reconciled without deleting undeclared managed rules.

---

##### `state`<sup>Optional</sup> <a name="state" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewall.property.state"></a>

```typescript
public readonly state: MiseTomlSchemaBootstrapLinuxFirewallState;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallState">MiseTomlSchemaBootstrapLinuxFirewallState</a>

desired lifecycle of mise-managed firewall state.

---

### MiseTomlSchemaBootstrapLinuxFirewallRules <a name="MiseTomlSchemaBootstrapLinuxFirewallRules" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRules"></a>

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRules.Initializer"></a>

```typescript
import { MiseTomlSchemaBootstrapLinuxFirewallRules } from 'mise-projen'

const miseTomlSchemaBootstrapLinuxFirewallRules: MiseTomlSchemaBootstrapLinuxFirewallRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRules.property.name">name</a></code> | <code>string</code> | stable managed rule identifier. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRules.property.action">action</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesAction">MiseTomlSchemaBootstrapLinuxFirewallRulesAction</a></code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRules.property.destination">destination</a></code> | <code>string</code> | destination IPv4 or IPv6 CIDR network. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRules.property.direction">direction</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesDirection">MiseTomlSchemaBootstrapLinuxFirewallRulesDirection</a></code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRules.property.interface">interface</a></code> | <code>string</code> | network interface (nftables and UFW only). |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRules.property.port">port</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesPort">MiseTomlSchemaBootstrapLinuxFirewallRulesPort</a></code> | single port number or inclusive range. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRules.property.protocol">protocol</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesProtocol">MiseTomlSchemaBootstrapLinuxFirewallRulesProtocol</a></code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRules.property.source">source</a></code> | <code>string</code> | source IPv4 or IPv6 CIDR network. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRules.property.state">state</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesState">MiseTomlSchemaBootstrapLinuxFirewallRulesState</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRules.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

stable managed rule identifier.

---

##### `action`<sup>Optional</sup> <a name="action" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRules.property.action"></a>

```typescript
public readonly action: MiseTomlSchemaBootstrapLinuxFirewallRulesAction;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesAction">MiseTomlSchemaBootstrapLinuxFirewallRulesAction</a>

---

##### `destination`<sup>Optional</sup> <a name="destination" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRules.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

destination IPv4 or IPv6 CIDR network.

---

##### `direction`<sup>Optional</sup> <a name="direction" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRules.property.direction"></a>

```typescript
public readonly direction: MiseTomlSchemaBootstrapLinuxFirewallRulesDirection;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesDirection">MiseTomlSchemaBootstrapLinuxFirewallRulesDirection</a>

---

##### `interface`<sup>Optional</sup> <a name="interface" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRules.property.interface"></a>

```typescript
public readonly interface: string;
```

- *Type:* string

network interface (nftables and UFW only).

---

##### `port`<sup>Optional</sup> <a name="port" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRules.property.port"></a>

```typescript
public readonly port: MiseTomlSchemaBootstrapLinuxFirewallRulesPort;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesPort">MiseTomlSchemaBootstrapLinuxFirewallRulesPort</a>

single port number or inclusive range.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRules.property.protocol"></a>

```typescript
public readonly protocol: MiseTomlSchemaBootstrapLinuxFirewallRulesProtocol;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesProtocol">MiseTomlSchemaBootstrapLinuxFirewallRulesProtocol</a>

---

##### `source`<sup>Optional</sup> <a name="source" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRules.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

source IPv4 or IPv6 CIDR network.

---

##### `state`<sup>Optional</sup> <a name="state" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRules.property.state"></a>

```typescript
public readonly state: MiseTomlSchemaBootstrapLinuxFirewallRulesState;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesState">MiseTomlSchemaBootstrapLinuxFirewallRulesState</a>

---

### MiseTomlSchemaBootstrapLinuxSystemd <a name="MiseTomlSchemaBootstrapLinuxSystemd" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemd"></a>

systemd user service and timer bootstrap config.

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemd.Initializer"></a>

```typescript
import { MiseTomlSchemaBootstrapLinuxSystemd } from 'mise-projen'

const miseTomlSchemaBootstrapLinuxSystemd: MiseTomlSchemaBootstrapLinuxSystemd = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemd.property.units">units</a></code> | <code>{[ key: string ]: <a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits">MiseTomlSchemaBootstrapLinuxSystemdUnits</a>}</code> | systemd user services and timers to write and start with `mise bootstrap linux systemd-units apply`. |

---

##### `units`<sup>Optional</sup> <a name="units" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemd.property.units"></a>

```typescript
public readonly units: {[ key: string ]: MiseTomlSchemaBootstrapLinuxSystemdUnits};
```

- *Type:* {[ key: string ]: <a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits">MiseTomlSchemaBootstrapLinuxSystemdUnits</a>}

systemd user services and timers to write and start with `mise bootstrap linux systemd-units apply`.

---

### MiseTomlSchemaBootstrapLinuxSystemdUnits <a name="MiseTomlSchemaBootstrapLinuxSystemdUnits" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits"></a>

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.Initializer"></a>

```typescript
import { MiseTomlSchemaBootstrapLinuxSystemdUnits } from 'mise-projen'

const miseTomlSchemaBootstrapLinuxSystemdUnits: MiseTomlSchemaBootstrapLinuxSystemdUnits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.accuracySec">accuracySec</a></code> | <code>string</code> | write AccuracySec in the [Timer] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.after">after</a></code> | <code>string[]</code> | write After dependencies in the [Unit] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.before">before</a></code> | <code>string[]</code> | write Before ordering in the [Unit] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.bindsTo">bindsTo</a></code> | <code>string[]</code> | write BindsTo dependencies in the [Unit] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.conflicts">conflicts</a></code> | <code>string[]</code> | write Conflicts dependencies in the [Unit] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.description">description</a></code> | <code>string</code> | write Description in the [Unit] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | environment variables for Environment entries. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.environmentFile">environmentFile</a></code> | <code>string[]</code> | write one EnvironmentFile entry per path in the [Service] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.execStart">execStart</a></code> | <code>string</code> | write ExecStart in the [Service] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.execStartPost">execStartPost</a></code> | <code>string[]</code> | write one ExecStartPost entry per command in the [Service] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.execStartPre">execStartPre</a></code> | <code>string[]</code> | write one ExecStartPre entry per command in the [Service] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.execStop">execStop</a></code> | <code>string</code> | write ExecStop in the [Service] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.execStopPost">execStopPost</a></code> | <code>string[]</code> | write one ExecStopPost entry per command in the [Service] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.nice">nice</a></code> | <code>number</code> | write Nice in the [Service] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.noNewPrivileges">noNewPrivileges</a></code> | <code>boolean</code> | write NoNewPrivileges in the [Service] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.onBootSec">onBootSec</a></code> | <code>string</code> | write OnBootSec in the [Timer] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.onCalendar">onCalendar</a></code> | <code>string</code> | write OnCalendar in the [Timer] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.onUnitActiveSec">onUnitActiveSec</a></code> | <code>string</code> | write OnUnitActiveSec in the [Timer] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.onUnitInactiveSec">onUnitInactiveSec</a></code> | <code>string</code> | write OnUnitInactiveSec in the [Timer] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.partOf">partOf</a></code> | <code>string[]</code> | write PartOf dependencies in the [Unit] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.persistent">persistent</a></code> | <code>boolean</code> | write Persistent in the [Timer] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.privateTmp">privateTmp</a></code> | <code>boolean</code> | write PrivateTmp in the [Service] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.randomizedDelaySec">randomizedDelaySec</a></code> | <code>string</code> | write RandomizedDelaySec in the [Timer] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.remainAfterExit">remainAfterExit</a></code> | <code>boolean</code> | write RemainAfterExit in the [Service] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.requires">requires</a></code> | <code>string[]</code> | write Requires dependencies in the [Unit] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.restart">restart</a></code> | <code>string</code> | write Restart in the [Service] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.restartSec">restartSec</a></code> | <code>string</code> | write RestartSec in the [Service] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.standardError">standardError</a></code> | <code>string</code> | write StandardError in the [Service] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.standardOutput">standardOutput</a></code> | <code>string</code> | write StandardOutput in the [Service] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.start">start</a></code> | <code>boolean</code> | restart the unit after writing it; |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.timeoutStartSec">timeoutStartSec</a></code> | <code>string</code> | write TimeoutStartSec in the [Service] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.timeoutStopSec">timeoutStopSec</a></code> | <code>string</code> | write TimeoutStopSec in the [Service] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.type">type</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnitsType">MiseTomlSchemaBootstrapLinuxSystemdUnitsType</a></code> | write Type in the [Service] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.umask">umask</a></code> | <code>string</code> | write UMask in the [Service] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.unit">unit</a></code> | <code>string</code> | write Unit in the [Timer] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.wantedBy">wantedBy</a></code> | <code>string[]</code> | write WantedBy entries in the [Install] section and enable the unit; |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.wants">wants</a></code> | <code>string[]</code> | write Wants dependencies in the [Unit] section. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | write WorkingDirectory in the [Service] section. |

---

##### `accuracySec`<sup>Optional</sup> <a name="accuracySec" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.accuracySec"></a>

```typescript
public readonly accuracySec: string;
```

- *Type:* string

write AccuracySec in the [Timer] section.

---

##### `after`<sup>Optional</sup> <a name="after" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.after"></a>

```typescript
public readonly after: string[];
```

- *Type:* string[]

write After dependencies in the [Unit] section.

---

##### `before`<sup>Optional</sup> <a name="before" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.before"></a>

```typescript
public readonly before: string[];
```

- *Type:* string[]

write Before ordering in the [Unit] section.

---

##### `bindsTo`<sup>Optional</sup> <a name="bindsTo" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.bindsTo"></a>

```typescript
public readonly bindsTo: string[];
```

- *Type:* string[]

write BindsTo dependencies in the [Unit] section.

---

##### `conflicts`<sup>Optional</sup> <a name="conflicts" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.conflicts"></a>

```typescript
public readonly conflicts: string[];
```

- *Type:* string[]

write Conflicts dependencies in the [Unit] section.

---

##### `description`<sup>Optional</sup> <a name="description" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

write Description in the [Unit] section.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

environment variables for Environment entries.

---

##### `environmentFile`<sup>Optional</sup> <a name="environmentFile" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.environmentFile"></a>

```typescript
public readonly environmentFile: string[];
```

- *Type:* string[]

write one EnvironmentFile entry per path in the [Service] section.

---

##### `execStart`<sup>Optional</sup> <a name="execStart" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.execStart"></a>

```typescript
public readonly execStart: string;
```

- *Type:* string

write ExecStart in the [Service] section.

---

##### `execStartPost`<sup>Optional</sup> <a name="execStartPost" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.execStartPost"></a>

```typescript
public readonly execStartPost: string[];
```

- *Type:* string[]

write one ExecStartPost entry per command in the [Service] section.

---

##### `execStartPre`<sup>Optional</sup> <a name="execStartPre" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.execStartPre"></a>

```typescript
public readonly execStartPre: string[];
```

- *Type:* string[]

write one ExecStartPre entry per command in the [Service] section.

---

##### `execStop`<sup>Optional</sup> <a name="execStop" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.execStop"></a>

```typescript
public readonly execStop: string;
```

- *Type:* string

write ExecStop in the [Service] section.

---

##### `execStopPost`<sup>Optional</sup> <a name="execStopPost" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.execStopPost"></a>

```typescript
public readonly execStopPost: string[];
```

- *Type:* string[]

write one ExecStopPost entry per command in the [Service] section.

---

##### `nice`<sup>Optional</sup> <a name="nice" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.nice"></a>

```typescript
public readonly nice: number;
```

- *Type:* number

write Nice in the [Service] section.

---

##### `noNewPrivileges`<sup>Optional</sup> <a name="noNewPrivileges" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.noNewPrivileges"></a>

```typescript
public readonly noNewPrivileges: boolean;
```

- *Type:* boolean

write NoNewPrivileges in the [Service] section.

---

##### `onBootSec`<sup>Optional</sup> <a name="onBootSec" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.onBootSec"></a>

```typescript
public readonly onBootSec: string;
```

- *Type:* string

write OnBootSec in the [Timer] section.

---

##### `onCalendar`<sup>Optional</sup> <a name="onCalendar" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.onCalendar"></a>

```typescript
public readonly onCalendar: string;
```

- *Type:* string

write OnCalendar in the [Timer] section.

---

##### `onUnitActiveSec`<sup>Optional</sup> <a name="onUnitActiveSec" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.onUnitActiveSec"></a>

```typescript
public readonly onUnitActiveSec: string;
```

- *Type:* string

write OnUnitActiveSec in the [Timer] section.

---

##### `onUnitInactiveSec`<sup>Optional</sup> <a name="onUnitInactiveSec" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.onUnitInactiveSec"></a>

```typescript
public readonly onUnitInactiveSec: string;
```

- *Type:* string

write OnUnitInactiveSec in the [Timer] section.

---

##### `partOf`<sup>Optional</sup> <a name="partOf" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.partOf"></a>

```typescript
public readonly partOf: string[];
```

- *Type:* string[]

write PartOf dependencies in the [Unit] section.

---

##### `persistent`<sup>Optional</sup> <a name="persistent" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.persistent"></a>

```typescript
public readonly persistent: boolean;
```

- *Type:* boolean

write Persistent in the [Timer] section.

---

##### `privateTmp`<sup>Optional</sup> <a name="privateTmp" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.privateTmp"></a>

```typescript
public readonly privateTmp: boolean;
```

- *Type:* boolean

write PrivateTmp in the [Service] section.

---

##### `randomizedDelaySec`<sup>Optional</sup> <a name="randomizedDelaySec" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.randomizedDelaySec"></a>

```typescript
public readonly randomizedDelaySec: string;
```

- *Type:* string

write RandomizedDelaySec in the [Timer] section.

---

##### `remainAfterExit`<sup>Optional</sup> <a name="remainAfterExit" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.remainAfterExit"></a>

```typescript
public readonly remainAfterExit: boolean;
```

- *Type:* boolean

write RemainAfterExit in the [Service] section.

---

##### `requires`<sup>Optional</sup> <a name="requires" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.requires"></a>

```typescript
public readonly requires: string[];
```

- *Type:* string[]

write Requires dependencies in the [Unit] section.

---

##### `restart`<sup>Optional</sup> <a name="restart" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.restart"></a>

```typescript
public readonly restart: string;
```

- *Type:* string

write Restart in the [Service] section.

---

##### `restartSec`<sup>Optional</sup> <a name="restartSec" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.restartSec"></a>

```typescript
public readonly restartSec: string;
```

- *Type:* string

write RestartSec in the [Service] section.

---

##### `standardError`<sup>Optional</sup> <a name="standardError" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.standardError"></a>

```typescript
public readonly standardError: string;
```

- *Type:* string

write StandardError in the [Service] section.

---

##### `standardOutput`<sup>Optional</sup> <a name="standardOutput" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.standardOutput"></a>

```typescript
public readonly standardOutput: string;
```

- *Type:* string

write StandardOutput in the [Service] section.

---

##### `start`<sup>Optional</sup> <a name="start" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.start"></a>

```typescript
public readonly start: boolean;
```

- *Type:* boolean

restart the unit after writing it;

when false, stop the unit after writing it

---

##### `timeoutStartSec`<sup>Optional</sup> <a name="timeoutStartSec" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.timeoutStartSec"></a>

```typescript
public readonly timeoutStartSec: string;
```

- *Type:* string

write TimeoutStartSec in the [Service] section.

---

##### `timeoutStopSec`<sup>Optional</sup> <a name="timeoutStopSec" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.timeoutStopSec"></a>

```typescript
public readonly timeoutStopSec: string;
```

- *Type:* string

write TimeoutStopSec in the [Service] section.

---

##### `type`<sup>Optional</sup> <a name="type" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.type"></a>

```typescript
public readonly type: MiseTomlSchemaBootstrapLinuxSystemdUnitsType;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnitsType">MiseTomlSchemaBootstrapLinuxSystemdUnitsType</a>

write Type in the [Service] section.

---

##### `umask`<sup>Optional</sup> <a name="umask" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.umask"></a>

```typescript
public readonly umask: string;
```

- *Type:* string

write UMask in the [Service] section.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

write Unit in the [Timer] section.

---

##### `wantedBy`<sup>Optional</sup> <a name="wantedBy" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.wantedBy"></a>

```typescript
public readonly wantedBy: string[];
```

- *Type:* string[]

write WantedBy entries in the [Install] section and enable the unit;

an empty array disables previous enablement

---

##### `wants`<sup>Optional</sup> <a name="wants" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.wants"></a>

```typescript
public readonly wants: string[];
```

- *Type:* string[]

write Wants dependencies in the [Unit] section.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnits.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

write WorkingDirectory in the [Service] section.

---

### MiseTomlSchemaBootstrapMacos <a name="MiseTomlSchemaBootstrapMacos" id="mise-projen.MiseTomlSchemaBootstrapMacos"></a>

macOS-specific bootstrap config.

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaBootstrapMacos.Initializer"></a>

```typescript
import { MiseTomlSchemaBootstrapMacos } from 'mise-projen'

const miseTomlSchemaBootstrapMacos: MiseTomlSchemaBootstrapMacos = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacos.property.defaults">defaults</a></code> | <code>{[ key: string ]: {[ key: string ]: <a href="#mise-projen.MiseTomlSchemaBootstrapMacosDefaults">MiseTomlSchemaBootstrapMacosDefaults</a>}}</code> | macOS user defaults to apply with `mise bootstrap macos defaults apply`, keyed by preferences domain (e.g. "com.apple.dock", "NSGlobalDomain"). |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacos.property.defaultsEntries">defaultsEntries</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosDefaultsEntries">MiseTomlSchemaBootstrapMacosDefaultsEntries</a>[]</code> | Explicit macOS preferences with a selectable host scope. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacos.property.dock">dock</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosDock">MiseTomlSchemaBootstrapMacosDock</a></code> | curated Dock preferences that compile into macOS defaults. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacos.property.finder">finder</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosFinder">MiseTomlSchemaBootstrapMacosFinder</a></code> | curated Finder preferences that compile into macOS defaults. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacos.property.keyboard">keyboard</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosKeyboard">MiseTomlSchemaBootstrapMacosKeyboard</a></code> | curated keyboard preferences that compile into macOS defaults. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacos.property.launchd">launchd</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosLaunchd">MiseTomlSchemaBootstrapMacosLaunchd</a></code> | macOS launchd bootstrap config. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacos.property.trackpad">trackpad</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosTrackpad">MiseTomlSchemaBootstrapMacosTrackpad</a></code> | curated trackpad preferences that compile into macOS defaults. |

---

##### `defaults`<sup>Optional</sup> <a name="defaults" id="mise-projen.MiseTomlSchemaBootstrapMacos.property.defaults"></a>

```typescript
public readonly defaults: {[ key: string ]: {[ key: string ]: MiseTomlSchemaBootstrapMacosDefaults}};
```

- *Type:* {[ key: string ]: {[ key: string ]: <a href="#mise-projen.MiseTomlSchemaBootstrapMacosDefaults">MiseTomlSchemaBootstrapMacosDefaults</a>}}

macOS user defaults to apply with `mise bootstrap macos defaults apply`, keyed by preferences domain (e.g. "com.apple.dock", "NSGlobalDomain").

---

##### `defaultsEntries`<sup>Optional</sup> <a name="defaultsEntries" id="mise-projen.MiseTomlSchemaBootstrapMacos.property.defaultsEntries"></a>

```typescript
public readonly defaultsEntries: MiseTomlSchemaBootstrapMacosDefaultsEntries[];
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapMacosDefaultsEntries">MiseTomlSchemaBootstrapMacosDefaultsEntries</a>[]

Explicit macOS preferences with a selectable host scope.

---

##### `dock`<sup>Optional</sup> <a name="dock" id="mise-projen.MiseTomlSchemaBootstrapMacos.property.dock"></a>

```typescript
public readonly dock: MiseTomlSchemaBootstrapMacosDock;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapMacosDock">MiseTomlSchemaBootstrapMacosDock</a>

curated Dock preferences that compile into macOS defaults.

---

##### `finder`<sup>Optional</sup> <a name="finder" id="mise-projen.MiseTomlSchemaBootstrapMacos.property.finder"></a>

```typescript
public readonly finder: MiseTomlSchemaBootstrapMacosFinder;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapMacosFinder">MiseTomlSchemaBootstrapMacosFinder</a>

curated Finder preferences that compile into macOS defaults.

---

##### `keyboard`<sup>Optional</sup> <a name="keyboard" id="mise-projen.MiseTomlSchemaBootstrapMacos.property.keyboard"></a>

```typescript
public readonly keyboard: MiseTomlSchemaBootstrapMacosKeyboard;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapMacosKeyboard">MiseTomlSchemaBootstrapMacosKeyboard</a>

curated keyboard preferences that compile into macOS defaults.

---

##### `launchd`<sup>Optional</sup> <a name="launchd" id="mise-projen.MiseTomlSchemaBootstrapMacos.property.launchd"></a>

```typescript
public readonly launchd: MiseTomlSchemaBootstrapMacosLaunchd;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapMacosLaunchd">MiseTomlSchemaBootstrapMacosLaunchd</a>

macOS launchd bootstrap config.

---

##### `trackpad`<sup>Optional</sup> <a name="trackpad" id="mise-projen.MiseTomlSchemaBootstrapMacos.property.trackpad"></a>

```typescript
public readonly trackpad: MiseTomlSchemaBootstrapMacosTrackpad;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapMacosTrackpad">MiseTomlSchemaBootstrapMacosTrackpad</a>

curated trackpad preferences that compile into macOS defaults.

---

### MiseTomlSchemaBootstrapMacosDefaultsEntries <a name="MiseTomlSchemaBootstrapMacosDefaultsEntries" id="mise-projen.MiseTomlSchemaBootstrapMacosDefaultsEntries"></a>

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaBootstrapMacosDefaultsEntries.Initializer"></a>

```typescript
import { MiseTomlSchemaBootstrapMacosDefaultsEntries } from 'mise-projen'

const miseTomlSchemaBootstrapMacosDefaultsEntries: MiseTomlSchemaBootstrapMacosDefaultsEntries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosDefaultsEntries.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosDefaultsEntries.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosDefaultsEntries.property.value">value</a></code> | <code>any</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosDefaultsEntries.property.host">host</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosDefaultsEntriesHost">MiseTomlSchemaBootstrapMacosDefaultsEntriesHost</a></code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosDefaultsEntries.property.path">path</a></code> | <code>string[]</code> | Dictionary keys below the preference key; |

---

##### `domain`<sup>Required</sup> <a name="domain" id="mise-projen.MiseTomlSchemaBootstrapMacosDefaultsEntries.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="mise-projen.MiseTomlSchemaBootstrapMacosDefaultsEntries.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="mise-projen.MiseTomlSchemaBootstrapMacosDefaultsEntries.property.value"></a>

```typescript
public readonly value: any;
```

- *Type:* any

---

##### `host`<sup>Optional</sup> <a name="host" id="mise-projen.MiseTomlSchemaBootstrapMacosDefaultsEntries.property.host"></a>

```typescript
public readonly host: MiseTomlSchemaBootstrapMacosDefaultsEntriesHost;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapMacosDefaultsEntriesHost">MiseTomlSchemaBootstrapMacosDefaultsEntriesHost</a>

---

##### `path`<sup>Optional</sup> <a name="path" id="mise-projen.MiseTomlSchemaBootstrapMacosDefaultsEntries.property.path"></a>

```typescript
public readonly path: string[];
```

- *Type:* string[]

Dictionary keys below the preference key;

omitted to replace the whole value

---

### MiseTomlSchemaBootstrapMacosDock <a name="MiseTomlSchemaBootstrapMacosDock" id="mise-projen.MiseTomlSchemaBootstrapMacosDock"></a>

curated Dock preferences that compile into macOS defaults.

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaBootstrapMacosDock.Initializer"></a>

```typescript
import { MiseTomlSchemaBootstrapMacosDock } from 'mise-projen'

const miseTomlSchemaBootstrapMacosDock: MiseTomlSchemaBootstrapMacosDock = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosDock.property.apps">apps</a></code> | <code>string[]</code> | Pinned application paths in order; |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosDock.property.autohide">autohide</a></code> | <code>boolean</code> | hide and show the Dock automatically. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosDock.property.autohideDelay">autohideDelay</a></code> | <code>number</code> | delay before showing the Dock. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosDock.property.autohideTimeModifier">autohideTimeModifier</a></code> | <code>number</code> | Dock autohide animation time modifier. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosDock.property.largesize">largesize</a></code> | <code>number</code> | Dock magnified icon size. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosDock.property.magnification">magnification</a></code> | <code>boolean</code> | enable Dock magnification. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosDock.property.mruSpaces">mruSpaces</a></code> | <code>boolean</code> | automatically rearrange Spaces based on most recent use. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosDock.property.orientation">orientation</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosDockOrientation">MiseTomlSchemaBootstrapMacosDockOrientation</a></code> | Dock screen edge. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosDock.property.showRecents">showRecents</a></code> | <code>boolean</code> | show recent applications in the Dock. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosDock.property.tilesize">tilesize</a></code> | <code>number</code> | Dock icon size. |

---

##### `apps`<sup>Optional</sup> <a name="apps" id="mise-projen.MiseTomlSchemaBootstrapMacosDock.property.apps"></a>

```typescript
public readonly apps: string[];
```

- *Type:* string[]

Pinned application paths in order;

absolute or ~/ paths ending in .app. An empty array removes application tiles.

---

##### `autohide`<sup>Optional</sup> <a name="autohide" id="mise-projen.MiseTomlSchemaBootstrapMacosDock.property.autohide"></a>

```typescript
public readonly autohide: boolean;
```

- *Type:* boolean

hide and show the Dock automatically.

---

##### `autohideDelay`<sup>Optional</sup> <a name="autohideDelay" id="mise-projen.MiseTomlSchemaBootstrapMacosDock.property.autohideDelay"></a>

```typescript
public readonly autohideDelay: number;
```

- *Type:* number

delay before showing the Dock.

---

##### `autohideTimeModifier`<sup>Optional</sup> <a name="autohideTimeModifier" id="mise-projen.MiseTomlSchemaBootstrapMacosDock.property.autohideTimeModifier"></a>

```typescript
public readonly autohideTimeModifier: number;
```

- *Type:* number

Dock autohide animation time modifier.

---

##### `largesize`<sup>Optional</sup> <a name="largesize" id="mise-projen.MiseTomlSchemaBootstrapMacosDock.property.largesize"></a>

```typescript
public readonly largesize: number;
```

- *Type:* number

Dock magnified icon size.

---

##### `magnification`<sup>Optional</sup> <a name="magnification" id="mise-projen.MiseTomlSchemaBootstrapMacosDock.property.magnification"></a>

```typescript
public readonly magnification: boolean;
```

- *Type:* boolean

enable Dock magnification.

---

##### `mruSpaces`<sup>Optional</sup> <a name="mruSpaces" id="mise-projen.MiseTomlSchemaBootstrapMacosDock.property.mruSpaces"></a>

```typescript
public readonly mruSpaces: boolean;
```

- *Type:* boolean

automatically rearrange Spaces based on most recent use.

---

##### `orientation`<sup>Optional</sup> <a name="orientation" id="mise-projen.MiseTomlSchemaBootstrapMacosDock.property.orientation"></a>

```typescript
public readonly orientation: MiseTomlSchemaBootstrapMacosDockOrientation;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapMacosDockOrientation">MiseTomlSchemaBootstrapMacosDockOrientation</a>

Dock screen edge.

---

##### `showRecents`<sup>Optional</sup> <a name="showRecents" id="mise-projen.MiseTomlSchemaBootstrapMacosDock.property.showRecents"></a>

```typescript
public readonly showRecents: boolean;
```

- *Type:* boolean

show recent applications in the Dock.

---

##### `tilesize`<sup>Optional</sup> <a name="tilesize" id="mise-projen.MiseTomlSchemaBootstrapMacosDock.property.tilesize"></a>

```typescript
public readonly tilesize: number;
```

- *Type:* number

Dock icon size.

---

### MiseTomlSchemaBootstrapMacosFinder <a name="MiseTomlSchemaBootstrapMacosFinder" id="mise-projen.MiseTomlSchemaBootstrapMacosFinder"></a>

curated Finder preferences that compile into macOS defaults.

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaBootstrapMacosFinder.Initializer"></a>

```typescript
import { MiseTomlSchemaBootstrapMacosFinder } from 'mise-projen'

const miseTomlSchemaBootstrapMacosFinder: MiseTomlSchemaBootstrapMacosFinder = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosFinder.property.preferredViewStyle">preferredViewStyle</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosFinderPreferredViewStyle">MiseTomlSchemaBootstrapMacosFinderPreferredViewStyle</a></code> | Finder preferred view style. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosFinder.property.saveNewDocumentsToCloud">saveNewDocumentsToCloud</a></code> | <code>boolean</code> | save new documents to iCloud by default (applies globally to application save dialogs). |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosFinder.property.showAllFiles">showAllFiles</a></code> | <code>boolean</code> | show hidden files in Finder. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosFinder.property.showExtensionsWarning">showExtensionsWarning</a></code> | <code>boolean</code> | show the warning when changing file extensions. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosFinder.property.showPathbar">showPathbar</a></code> | <code>boolean</code> | show the Finder path bar. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosFinder.property.showStatusBar">showStatusBar</a></code> | <code>boolean</code> | show the Finder status bar. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosFinder.property.sortFoldersFirst">sortFoldersFirst</a></code> | <code>boolean</code> | keep folders first when sorting by name. |

---

##### `preferredViewStyle`<sup>Optional</sup> <a name="preferredViewStyle" id="mise-projen.MiseTomlSchemaBootstrapMacosFinder.property.preferredViewStyle"></a>

```typescript
public readonly preferredViewStyle: MiseTomlSchemaBootstrapMacosFinderPreferredViewStyle;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapMacosFinderPreferredViewStyle">MiseTomlSchemaBootstrapMacosFinderPreferredViewStyle</a>

Finder preferred view style.

---

##### `saveNewDocumentsToCloud`<sup>Optional</sup> <a name="saveNewDocumentsToCloud" id="mise-projen.MiseTomlSchemaBootstrapMacosFinder.property.saveNewDocumentsToCloud"></a>

```typescript
public readonly saveNewDocumentsToCloud: boolean;
```

- *Type:* boolean

save new documents to iCloud by default (applies globally to application save dialogs).

---

##### `showAllFiles`<sup>Optional</sup> <a name="showAllFiles" id="mise-projen.MiseTomlSchemaBootstrapMacosFinder.property.showAllFiles"></a>

```typescript
public readonly showAllFiles: boolean;
```

- *Type:* boolean

show hidden files in Finder.

---

##### `showExtensionsWarning`<sup>Optional</sup> <a name="showExtensionsWarning" id="mise-projen.MiseTomlSchemaBootstrapMacosFinder.property.showExtensionsWarning"></a>

```typescript
public readonly showExtensionsWarning: boolean;
```

- *Type:* boolean

show the warning when changing file extensions.

---

##### `showPathbar`<sup>Optional</sup> <a name="showPathbar" id="mise-projen.MiseTomlSchemaBootstrapMacosFinder.property.showPathbar"></a>

```typescript
public readonly showPathbar: boolean;
```

- *Type:* boolean

show the Finder path bar.

---

##### `showStatusBar`<sup>Optional</sup> <a name="showStatusBar" id="mise-projen.MiseTomlSchemaBootstrapMacosFinder.property.showStatusBar"></a>

```typescript
public readonly showStatusBar: boolean;
```

- *Type:* boolean

show the Finder status bar.

---

##### `sortFoldersFirst`<sup>Optional</sup> <a name="sortFoldersFirst" id="mise-projen.MiseTomlSchemaBootstrapMacosFinder.property.sortFoldersFirst"></a>

```typescript
public readonly sortFoldersFirst: boolean;
```

- *Type:* boolean

keep folders first when sorting by name.

---

### MiseTomlSchemaBootstrapMacosKeyboard <a name="MiseTomlSchemaBootstrapMacosKeyboard" id="mise-projen.MiseTomlSchemaBootstrapMacosKeyboard"></a>

curated keyboard preferences that compile into macOS defaults.

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaBootstrapMacosKeyboard.Initializer"></a>

```typescript
import { MiseTomlSchemaBootstrapMacosKeyboard } from 'mise-projen'

const miseTomlSchemaBootstrapMacosKeyboard: MiseTomlSchemaBootstrapMacosKeyboard = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosKeyboard.property.automaticCapitalization">automaticCapitalization</a></code> | <code>boolean</code> | automatically capitalize words. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosKeyboard.property.automaticSpellingCorrection">automaticSpellingCorrection</a></code> | <code>boolean</code> | automatically correct spelling. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosKeyboard.property.fnState">fnState</a></code> | <code>boolean</code> | use F1, F2, etc. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosKeyboard.property.initialKeyRepeat">initialKeyRepeat</a></code> | <code>number</code> | delay before key repeat starts. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosKeyboard.property.keyRepeat">keyRepeat</a></code> | <code>number</code> | keyboard repeat interval. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosKeyboard.property.pressAndHold">pressAndHold</a></code> | <code>boolean</code> | enable press-and-hold accent picker. |

---

##### `automaticCapitalization`<sup>Optional</sup> <a name="automaticCapitalization" id="mise-projen.MiseTomlSchemaBootstrapMacosKeyboard.property.automaticCapitalization"></a>

```typescript
public readonly automaticCapitalization: boolean;
```

- *Type:* boolean

automatically capitalize words.

---

##### `automaticSpellingCorrection`<sup>Optional</sup> <a name="automaticSpellingCorrection" id="mise-projen.MiseTomlSchemaBootstrapMacosKeyboard.property.automaticSpellingCorrection"></a>

```typescript
public readonly automaticSpellingCorrection: boolean;
```

- *Type:* boolean

automatically correct spelling.

---

##### `fnState`<sup>Optional</sup> <a name="fnState" id="mise-projen.MiseTomlSchemaBootstrapMacosKeyboard.property.fnState"></a>

```typescript
public readonly fnState: boolean;
```

- *Type:* boolean

use F1, F2, etc.

as standard function keys

---

##### `initialKeyRepeat`<sup>Optional</sup> <a name="initialKeyRepeat" id="mise-projen.MiseTomlSchemaBootstrapMacosKeyboard.property.initialKeyRepeat"></a>

```typescript
public readonly initialKeyRepeat: number;
```

- *Type:* number

delay before key repeat starts.

---

##### `keyRepeat`<sup>Optional</sup> <a name="keyRepeat" id="mise-projen.MiseTomlSchemaBootstrapMacosKeyboard.property.keyRepeat"></a>

```typescript
public readonly keyRepeat: number;
```

- *Type:* number

keyboard repeat interval.

---

##### `pressAndHold`<sup>Optional</sup> <a name="pressAndHold" id="mise-projen.MiseTomlSchemaBootstrapMacosKeyboard.property.pressAndHold"></a>

```typescript
public readonly pressAndHold: boolean;
```

- *Type:* boolean

enable press-and-hold accent picker.

---

### MiseTomlSchemaBootstrapMacosLaunchd <a name="MiseTomlSchemaBootstrapMacosLaunchd" id="mise-projen.MiseTomlSchemaBootstrapMacosLaunchd"></a>

macOS launchd bootstrap config.

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaBootstrapMacosLaunchd.Initializer"></a>

```typescript
import { MiseTomlSchemaBootstrapMacosLaunchd } from 'mise-projen'

const miseTomlSchemaBootstrapMacosLaunchd: MiseTomlSchemaBootstrapMacosLaunchd = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosLaunchd.property.agents">agents</a></code> | <code>{[ key: string ]: <a href="#mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents">MiseTomlSchemaBootstrapMacosLaunchdAgents</a>}</code> | macOS user LaunchAgents to write and load with `mise bootstrap macos launchd-agents apply`. |

---

##### `agents`<sup>Optional</sup> <a name="agents" id="mise-projen.MiseTomlSchemaBootstrapMacosLaunchd.property.agents"></a>

```typescript
public readonly agents: {[ key: string ]: MiseTomlSchemaBootstrapMacosLaunchdAgents};
```

- *Type:* {[ key: string ]: <a href="#mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents">MiseTomlSchemaBootstrapMacosLaunchdAgents</a>}

macOS user LaunchAgents to write and load with `mise bootstrap macos launchd-agents apply`.

---

### MiseTomlSchemaBootstrapMacosLaunchdAgents <a name="MiseTomlSchemaBootstrapMacosLaunchdAgents" id="mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents"></a>

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents.Initializer"></a>

```typescript
import { MiseTomlSchemaBootstrapMacosLaunchdAgents } from 'mise-projen'

const miseTomlSchemaBootstrapMacosLaunchdAgents: MiseTomlSchemaBootstrapMacosLaunchdAgents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents.property.program">program</a></code> | <code>string</code> | program path for ProgramArguments[0]. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents.property.args">args</a></code> | <code>string[]</code> | additional ProgramArguments entries. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | environment variables for EnvironmentVariables. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents.property.keepAlive">keepAlive</a></code> | <code>boolean</code> | write KeepAlive. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents.property.kickstart">kickstart</a></code> | <code>boolean</code> | run `launchctl kickstart -k` after loading the agent. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents.property.processType">processType</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgentsProcessType">MiseTomlSchemaBootstrapMacosLaunchdAgentsProcessType</a></code> | write ProcessType, the scheduling band launchd runs the job in. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents.property.queueDirectories">queueDirectories</a></code> | <code>string[]</code> | write QueueDirectories (absolute paths; |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents.property.runAtLoad">runAtLoad</a></code> | <code>boolean</code> | write RunAtLoad. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents.property.startCalendarInterval">startCalendarInterval</a></code> | <code><a href="#mise-projen.LaunchdCalendarInterval">LaunchdCalendarInterval</a>[]</code> | write one or more StartCalendarInterval schedules. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents.property.startInterval">startInterval</a></code> | <code>number</code> | write StartInterval in seconds. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents.property.stderrPath">stderrPath</a></code> | <code>string</code> | write StandardErrorPath. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents.property.stdoutPath">stdoutPath</a></code> | <code>string</code> | write StandardOutPath. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents.property.throttleInterval">throttleInterval</a></code> | <code>number</code> | write ThrottleInterval in seconds. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | write WorkingDirectory. |

---

##### `program`<sup>Required</sup> <a name="program" id="mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents.property.program"></a>

```typescript
public readonly program: string;
```

- *Type:* string

program path for ProgramArguments[0].

---

##### `args`<sup>Optional</sup> <a name="args" id="mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

additional ProgramArguments entries.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

environment variables for EnvironmentVariables.

---

##### `keepAlive`<sup>Optional</sup> <a name="keepAlive" id="mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents.property.keepAlive"></a>

```typescript
public readonly keepAlive: boolean;
```

- *Type:* boolean

write KeepAlive.

---

##### `kickstart`<sup>Optional</sup> <a name="kickstart" id="mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents.property.kickstart"></a>

```typescript
public readonly kickstart: boolean;
```

- *Type:* boolean

run `launchctl kickstart -k` after loading the agent.

---

##### `processType`<sup>Optional</sup> <a name="processType" id="mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents.property.processType"></a>

```typescript
public readonly processType: MiseTomlSchemaBootstrapMacosLaunchdAgentsProcessType;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgentsProcessType">MiseTomlSchemaBootstrapMacosLaunchdAgentsProcessType</a>

write ProcessType, the scheduling band launchd runs the job in.

---

##### `queueDirectories`<sup>Optional</sup> <a name="queueDirectories" id="mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents.property.queueDirectories"></a>

```typescript
public readonly queueDirectories: string[];
```

- *Type:* string[]

write QueueDirectories (absolute paths;

`~` and `~/` are expanded)

---

##### `runAtLoad`<sup>Optional</sup> <a name="runAtLoad" id="mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents.property.runAtLoad"></a>

```typescript
public readonly runAtLoad: boolean;
```

- *Type:* boolean

write RunAtLoad.

---

##### `startCalendarInterval`<sup>Optional</sup> <a name="startCalendarInterval" id="mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents.property.startCalendarInterval"></a>

```typescript
public readonly startCalendarInterval: LaunchdCalendarInterval[];
```

- *Type:* <a href="#mise-projen.LaunchdCalendarInterval">LaunchdCalendarInterval</a>[]

write one or more StartCalendarInterval schedules.

---

##### `startInterval`<sup>Optional</sup> <a name="startInterval" id="mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents.property.startInterval"></a>

```typescript
public readonly startInterval: number;
```

- *Type:* number

write StartInterval in seconds.

---

##### `stderrPath`<sup>Optional</sup> <a name="stderrPath" id="mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents.property.stderrPath"></a>

```typescript
public readonly stderrPath: string;
```

- *Type:* string

write StandardErrorPath.

---

##### `stdoutPath`<sup>Optional</sup> <a name="stdoutPath" id="mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents.property.stdoutPath"></a>

```typescript
public readonly stdoutPath: string;
```

- *Type:* string

write StandardOutPath.

---

##### `throttleInterval`<sup>Optional</sup> <a name="throttleInterval" id="mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents.property.throttleInterval"></a>

```typescript
public readonly throttleInterval: number;
```

- *Type:* number

write ThrottleInterval in seconds.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgents.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

write WorkingDirectory.

---

### MiseTomlSchemaBootstrapMacosTrackpad <a name="MiseTomlSchemaBootstrapMacosTrackpad" id="mise-projen.MiseTomlSchemaBootstrapMacosTrackpad"></a>

curated trackpad preferences that compile into macOS defaults.

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaBootstrapMacosTrackpad.Initializer"></a>

```typescript
import { MiseTomlSchemaBootstrapMacosTrackpad } from 'mise-projen'

const miseTomlSchemaBootstrapMacosTrackpad: MiseTomlSchemaBootstrapMacosTrackpad = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosTrackpad.property.tapToClick">tapToClick</a></code> | <code>boolean</code> | enable tap to click for built-in and Bluetooth trackpads. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosTrackpad.property.threeFingerDrag">threeFingerDrag</a></code> | <code>boolean</code> | enable three finger drag for built-in and Bluetooth trackpads. |

---

##### `tapToClick`<sup>Optional</sup> <a name="tapToClick" id="mise-projen.MiseTomlSchemaBootstrapMacosTrackpad.property.tapToClick"></a>

```typescript
public readonly tapToClick: boolean;
```

- *Type:* boolean

enable tap to click for built-in and Bluetooth trackpads.

---

##### `threeFingerDrag`<sup>Optional</sup> <a name="threeFingerDrag" id="mise-projen.MiseTomlSchemaBootstrapMacosTrackpad.property.threeFingerDrag"></a>

```typescript
public readonly threeFingerDrag: boolean;
```

- *Type:* boolean

enable three finger drag for built-in and Bluetooth trackpads.

---

### MiseTomlSchemaBootstrapMiseShellActivate <a name="MiseTomlSchemaBootstrapMiseShellActivate" id="mise-projen.MiseTomlSchemaBootstrapMiseShellActivate"></a>

declarative mise shell activation snippets, applied with `mise bootstrap mise-shell-activate apply`.

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaBootstrapMiseShellActivate.Initializer"></a>

```typescript
import { MiseTomlSchemaBootstrapMiseShellActivate } from 'mise-projen'

const miseTomlSchemaBootstrapMiseShellActivate: MiseTomlSchemaBootstrapMiseShellActivate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMiseShellActivate.property.bash">bash</a></code> | <code>any</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMiseShellActivate.property.bashProfile">bashProfile</a></code> | <code>any</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMiseShellActivate.property.bashrc">bashrc</a></code> | <code>any</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMiseShellActivate.property.fish">fish</a></code> | <code>any</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMiseShellActivate.property.zprofile">zprofile</a></code> | <code>any</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMiseShellActivate.property.zsh">zsh</a></code> | <code>any</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMiseShellActivate.property.zshenv">zshenv</a></code> | <code>any</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMiseShellActivate.property.zshrc">zshrc</a></code> | <code>any</code> | *No description.* |

---

##### `bash`<sup>Optional</sup> <a name="bash" id="mise-projen.MiseTomlSchemaBootstrapMiseShellActivate.property.bash"></a>

```typescript
public readonly bash: any;
```

- *Type:* any

---

##### `bashProfile`<sup>Optional</sup> <a name="bashProfile" id="mise-projen.MiseTomlSchemaBootstrapMiseShellActivate.property.bashProfile"></a>

```typescript
public readonly bashProfile: any;
```

- *Type:* any

---

##### `bashrc`<sup>Optional</sup> <a name="bashrc" id="mise-projen.MiseTomlSchemaBootstrapMiseShellActivate.property.bashrc"></a>

```typescript
public readonly bashrc: any;
```

- *Type:* any

---

##### `fish`<sup>Optional</sup> <a name="fish" id="mise-projen.MiseTomlSchemaBootstrapMiseShellActivate.property.fish"></a>

```typescript
public readonly fish: any;
```

- *Type:* any

---

##### `zprofile`<sup>Optional</sup> <a name="zprofile" id="mise-projen.MiseTomlSchemaBootstrapMiseShellActivate.property.zprofile"></a>

```typescript
public readonly zprofile: any;
```

- *Type:* any

---

##### `zsh`<sup>Optional</sup> <a name="zsh" id="mise-projen.MiseTomlSchemaBootstrapMiseShellActivate.property.zsh"></a>

```typescript
public readonly zsh: any;
```

- *Type:* any

---

##### `zshenv`<sup>Optional</sup> <a name="zshenv" id="mise-projen.MiseTomlSchemaBootstrapMiseShellActivate.property.zshenv"></a>

```typescript
public readonly zshenv: any;
```

- *Type:* any

---

##### `zshrc`<sup>Optional</sup> <a name="zshrc" id="mise-projen.MiseTomlSchemaBootstrapMiseShellActivate.property.zshrc"></a>

```typescript
public readonly zshrc: any;
```

- *Type:* any

---

### MiseTomlSchemaBootstrapRemote <a name="MiseTomlSchemaBootstrapRemote" id="mise-projen.MiseTomlSchemaBootstrapRemote"></a>

OpenSSH targets used by `mise bootstrap remote`.

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaBootstrapRemote.Initializer"></a>

```typescript
import { MiseTomlSchemaBootstrapRemote } from 'mise-projen'

const miseTomlSchemaBootstrapRemote: MiseTomlSchemaBootstrapRemote = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapRemote.property.copyLink">copyLink</a></code> | <code>string[]</code> | source-relative symbolic links to dereference. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapRemote.property.copyLinks">copyLinks</a></code> | <code>boolean</code> | dereference every symbolic link in the source archive. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapRemote.property.exclude">exclude</a></code> | <code>string[]</code> | additional source archive exclusion patterns. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapRemote.property.hosts">hosts</a></code> | <code>{[ key: string ]: <a href="#mise-projen.MiseTomlSchemaBootstrapRemoteHosts">MiseTomlSchemaBootstrapRemoteHosts</a>}</code> | remote bootstrap inventory keyed by target name. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapRemote.property.installMise">installMise</a></code> | <code><a href="#mise-projen.BootstrapRemoteInstallMise">BootstrapRemoteInstallMise</a></code> | install the provisioned mise on inventory hosts instead of only staging it. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapRemote.property.miseEnv">miseEnv</a></code> | <code>string[]</code> | default ordered config environments loaded by remote bootstrap. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapRemote.property.source">source</a></code> | <code>string</code> | local project directory sent to inventory hosts. |

---

##### `copyLink`<sup>Optional</sup> <a name="copyLink" id="mise-projen.MiseTomlSchemaBootstrapRemote.property.copyLink"></a>

```typescript
public readonly copyLink: string[];
```

- *Type:* string[]

source-relative symbolic links to dereference.

---

##### `copyLinks`<sup>Optional</sup> <a name="copyLinks" id="mise-projen.MiseTomlSchemaBootstrapRemote.property.copyLinks"></a>

```typescript
public readonly copyLinks: boolean;
```

- *Type:* boolean

dereference every symbolic link in the source archive.

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="mise-projen.MiseTomlSchemaBootstrapRemote.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

additional source archive exclusion patterns.

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="mise-projen.MiseTomlSchemaBootstrapRemote.property.hosts"></a>

```typescript
public readonly hosts: {[ key: string ]: MiseTomlSchemaBootstrapRemoteHosts};
```

- *Type:* {[ key: string ]: <a href="#mise-projen.MiseTomlSchemaBootstrapRemoteHosts">MiseTomlSchemaBootstrapRemoteHosts</a>}

remote bootstrap inventory keyed by target name.

---

##### `installMise`<sup>Optional</sup> <a name="installMise" id="mise-projen.MiseTomlSchemaBootstrapRemote.property.installMise"></a>

```typescript
public readonly installMise: BootstrapRemoteInstallMise;
```

- *Type:* <a href="#mise-projen.BootstrapRemoteInstallMise">BootstrapRemoteInstallMise</a>

install the provisioned mise on inventory hosts instead of only staging it.

---

##### `miseEnv`<sup>Optional</sup> <a name="miseEnv" id="mise-projen.MiseTomlSchemaBootstrapRemote.property.miseEnv"></a>

```typescript
public readonly miseEnv: string[];
```

- *Type:* string[]

default ordered config environments loaded by remote bootstrap.

---

##### `source`<sup>Optional</sup> <a name="source" id="mise-projen.MiseTomlSchemaBootstrapRemote.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

local project directory sent to inventory hosts.

---

### MiseTomlSchemaBootstrapRemoteHosts <a name="MiseTomlSchemaBootstrapRemoteHosts" id="mise-projen.MiseTomlSchemaBootstrapRemoteHosts"></a>

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaBootstrapRemoteHosts.Initializer"></a>

```typescript
import { MiseTomlSchemaBootstrapRemoteHosts } from 'mise-projen'

const miseTomlSchemaBootstrapRemoteHosts: MiseTomlSchemaBootstrapRemoteHosts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapRemoteHosts.property.host">host</a></code> | <code>string</code> | SSH host name or address. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapRemoteHosts.property.bootstrapCommand">bootstrapCommand</a></code> | <code>string</code> | remote shell command that installs mise. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapRemoteHosts.property.copyLink">copyLink</a></code> | <code>string[]</code> | source-relative symbolic links to dereference for this host. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapRemoteHosts.property.copyLinks">copyLinks</a></code> | <code>boolean</code> | dereference every symbolic link in this host's source archive. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapRemoteHosts.property.exclude">exclude</a></code> | <code>string[]</code> | additional source archive exclusion patterns for this host. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapRemoteHosts.property.identityFile">identityFile</a></code> | <code>string</code> | SSH identity file. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapRemoteHosts.property.installMise">installMise</a></code> | <code><a href="#mise-projen.BootstrapRemoteInstallMise">BootstrapRemoteInstallMise</a></code> | install the provisioned mise on this host instead of only staging it. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapRemoteHosts.property.miseBin">miseBin</a></code> | <code>string</code> | local mise executable to upload. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapRemoteHosts.property.miseEnv">miseEnv</a></code> | <code>string[]</code> | ordered config environments loaded by remote bootstrap. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapRemoteHosts.property.port">port</a></code> | <code>number</code> | SSH port. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapRemoteHosts.property.remoteMise">remoteMise</a></code> | <code>string</code> | existing mise executable name or path on the host. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapRemoteHosts.property.source">source</a></code> | <code>string</code> | host-specific local project directory to send. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapRemoteHosts.property.sshOptions">sshOptions</a></code> | <code>string[]</code> | OpenSSH options passed with `-o`. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapRemoteHosts.property.tags">tags</a></code> | <code>string[]</code> | inventory selection tags. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapRemoteHosts.property.user">user</a></code> | <code>string</code> | SSH user. |

---

##### `host`<sup>Required</sup> <a name="host" id="mise-projen.MiseTomlSchemaBootstrapRemoteHosts.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

SSH host name or address.

---

##### `bootstrapCommand`<sup>Optional</sup> <a name="bootstrapCommand" id="mise-projen.MiseTomlSchemaBootstrapRemoteHosts.property.bootstrapCommand"></a>

```typescript
public readonly bootstrapCommand: string;
```

- *Type:* string

remote shell command that installs mise.

---

##### `copyLink`<sup>Optional</sup> <a name="copyLink" id="mise-projen.MiseTomlSchemaBootstrapRemoteHosts.property.copyLink"></a>

```typescript
public readonly copyLink: string[];
```

- *Type:* string[]

source-relative symbolic links to dereference for this host.

---

##### `copyLinks`<sup>Optional</sup> <a name="copyLinks" id="mise-projen.MiseTomlSchemaBootstrapRemoteHosts.property.copyLinks"></a>

```typescript
public readonly copyLinks: boolean;
```

- *Type:* boolean

dereference every symbolic link in this host's source archive.

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="mise-projen.MiseTomlSchemaBootstrapRemoteHosts.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

additional source archive exclusion patterns for this host.

---

##### `identityFile`<sup>Optional</sup> <a name="identityFile" id="mise-projen.MiseTomlSchemaBootstrapRemoteHosts.property.identityFile"></a>

```typescript
public readonly identityFile: string;
```

- *Type:* string

SSH identity file.

---

##### `installMise`<sup>Optional</sup> <a name="installMise" id="mise-projen.MiseTomlSchemaBootstrapRemoteHosts.property.installMise"></a>

```typescript
public readonly installMise: BootstrapRemoteInstallMise;
```

- *Type:* <a href="#mise-projen.BootstrapRemoteInstallMise">BootstrapRemoteInstallMise</a>

install the provisioned mise on this host instead of only staging it.

---

##### `miseBin`<sup>Optional</sup> <a name="miseBin" id="mise-projen.MiseTomlSchemaBootstrapRemoteHosts.property.miseBin"></a>

```typescript
public readonly miseBin: string;
```

- *Type:* string

local mise executable to upload.

---

##### `miseEnv`<sup>Optional</sup> <a name="miseEnv" id="mise-projen.MiseTomlSchemaBootstrapRemoteHosts.property.miseEnv"></a>

```typescript
public readonly miseEnv: string[];
```

- *Type:* string[]

ordered config environments loaded by remote bootstrap.

---

##### `port`<sup>Optional</sup> <a name="port" id="mise-projen.MiseTomlSchemaBootstrapRemoteHosts.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

SSH port.

---

##### `remoteMise`<sup>Optional</sup> <a name="remoteMise" id="mise-projen.MiseTomlSchemaBootstrapRemoteHosts.property.remoteMise"></a>

```typescript
public readonly remoteMise: string;
```

- *Type:* string

existing mise executable name or path on the host.

---

##### `source`<sup>Optional</sup> <a name="source" id="mise-projen.MiseTomlSchemaBootstrapRemoteHosts.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

host-specific local project directory to send.

---

##### `sshOptions`<sup>Optional</sup> <a name="sshOptions" id="mise-projen.MiseTomlSchemaBootstrapRemoteHosts.property.sshOptions"></a>

```typescript
public readonly sshOptions: string[];
```

- *Type:* string[]

OpenSSH options passed with `-o`.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="mise-projen.MiseTomlSchemaBootstrapRemoteHosts.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

inventory selection tags.

---

##### `user`<sup>Optional</sup> <a name="user" id="mise-projen.MiseTomlSchemaBootstrapRemoteHosts.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

SSH user.

---

### MiseTomlSchemaBootstrapRepos <a name="MiseTomlSchemaBootstrapRepos" id="mise-projen.MiseTomlSchemaBootstrapRepos"></a>

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaBootstrapRepos.Initializer"></a>

```typescript
import { MiseTomlSchemaBootstrapRepos } from 'mise-projen'

const miseTomlSchemaBootstrapRepos: MiseTomlSchemaBootstrapRepos = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapRepos.property.url">url</a></code> | <code>string</code> | git repository URL. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapRepos.property.ref">ref</a></code> | <code>string</code> | optional branch, tag, or full commit SHA to check out. |

---

##### `url`<sup>Required</sup> <a name="url" id="mise-projen.MiseTomlSchemaBootstrapRepos.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

git repository URL.

---

##### `ref`<sup>Optional</sup> <a name="ref" id="mise-projen.MiseTomlSchemaBootstrapRepos.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

optional branch, tag, or full commit SHA to check out.

---

### MiseTomlSchemaBootstrapServices <a name="MiseTomlSchemaBootstrapServices" id="mise-projen.MiseTomlSchemaBootstrapServices"></a>

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaBootstrapServices.Initializer"></a>

```typescript
import { MiseTomlSchemaBootstrapServices } from 'mise-projen'

const miseTomlSchemaBootstrapServices: MiseTomlSchemaBootstrapServices = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapServices.property.builtin">builtin</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapServicesBuiltin">MiseTomlSchemaBootstrapServicesBuiltin</a></code> | A mise-provided user service. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapServices.property.command">command</a></code> | <code>string</code> | User service command; |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapServices.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapServices.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapServices.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapServices.property.masked">masked</a></code> | <code>boolean</code> | System scope only. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapServices.property.onChange">onChange</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapServicesOnChange">MiseTomlSchemaBootstrapServicesOnChange</a></code> | System scope only. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapServices.property.requiresTools">requiresTools</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapServices.property.restart">restart</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapServicesRestart">MiseTomlSchemaBootstrapServicesRestart</a></code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapServices.property.scope">scope</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapServicesScope">MiseTomlSchemaBootstrapServicesScope</a></code> | Defaults to system; |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapServices.property.state">state</a></code> | <code><a href="#mise-projen.MiseTomlSchemaBootstrapServicesState">MiseTomlSchemaBootstrapServicesState</a></code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapServices.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | *No description.* |

---

##### `builtin`<sup>Optional</sup> <a name="builtin" id="mise-projen.MiseTomlSchemaBootstrapServices.property.builtin"></a>

```typescript
public readonly builtin: MiseTomlSchemaBootstrapServicesBuiltin;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapServicesBuiltin">MiseTomlSchemaBootstrapServicesBuiltin</a>

A mise-provided user service.

---

##### `command`<sup>Optional</sup> <a name="command" id="mise-projen.MiseTomlSchemaBootstrapServices.property.command"></a>

```typescript
public readonly command: string;
```

- *Type:* string

User service command;

mutually exclusive with builtin

---

##### `description`<sup>Optional</sup> <a name="description" id="mise-projen.MiseTomlSchemaBootstrapServices.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="mise-projen.MiseTomlSchemaBootstrapServices.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

##### `environment`<sup>Optional</sup> <a name="environment" id="mise-projen.MiseTomlSchemaBootstrapServices.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `masked`<sup>Optional</sup> <a name="masked" id="mise-projen.MiseTomlSchemaBootstrapServices.property.masked"></a>

```typescript
public readonly masked: boolean;
```

- *Type:* boolean

System scope only.

---

##### `onChange`<sup>Optional</sup> <a name="onChange" id="mise-projen.MiseTomlSchemaBootstrapServices.property.onChange"></a>

```typescript
public readonly onChange: MiseTomlSchemaBootstrapServicesOnChange;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapServicesOnChange">MiseTomlSchemaBootstrapServicesOnChange</a>

System scope only.

---

##### `requiresTools`<sup>Optional</sup> <a name="requiresTools" id="mise-projen.MiseTomlSchemaBootstrapServices.property.requiresTools"></a>

```typescript
public readonly requiresTools: boolean;
```

- *Type:* boolean

---

##### `restart`<sup>Optional</sup> <a name="restart" id="mise-projen.MiseTomlSchemaBootstrapServices.property.restart"></a>

```typescript
public readonly restart: MiseTomlSchemaBootstrapServicesRestart;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapServicesRestart">MiseTomlSchemaBootstrapServicesRestart</a>

---

##### `scope`<sup>Optional</sup> <a name="scope" id="mise-projen.MiseTomlSchemaBootstrapServices.property.scope"></a>

```typescript
public readonly scope: MiseTomlSchemaBootstrapServicesScope;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapServicesScope">MiseTomlSchemaBootstrapServicesScope</a>
- *Default:* system; builtin implies user

Defaults to system;

builtin implies user

---

##### `state`<sup>Optional</sup> <a name="state" id="mise-projen.MiseTomlSchemaBootstrapServices.property.state"></a>

```typescript
public readonly state: MiseTomlSchemaBootstrapServicesState;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaBootstrapServicesState">MiseTomlSchemaBootstrapServicesState</a>

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="mise-projen.MiseTomlSchemaBootstrapServices.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

---

### MiseTomlSchemaBootstrapUser <a name="MiseTomlSchemaBootstrapUser" id="mise-projen.MiseTomlSchemaBootstrapUser"></a>

current-user bootstrap settings.

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaBootstrapUser.Initializer"></a>

```typescript
import { MiseTomlSchemaBootstrapUser } from 'mise-projen'

const miseTomlSchemaBootstrapUser: MiseTomlSchemaBootstrapUser = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapUser.property.loginShell">loginShell</a></code> | <code>string</code> | current user's desired login shell, applied with `chsh -s`; |

---

##### `loginShell`<sup>Optional</sup> <a name="loginShell" id="mise-projen.MiseTomlSchemaBootstrapUser.property.loginShell"></a>

```typescript
public readonly loginShell: string;
```

- *Type:* string

current user's desired login shell, applied with `chsh -s`;

must be an absolute path

---

### MiseTomlSchemaDaemonProviders <a name="MiseTomlSchemaDaemonProviders" id="mise-projen.MiseTomlSchemaDaemonProviders"></a>

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaDaemonProviders.Initializer"></a>

```typescript
import { MiseTomlSchemaDaemonProviders } from 'mise-projen'

const miseTomlSchemaDaemonProviders: MiseTomlSchemaDaemonProviders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaDaemonProviders.property.preset">preset</a></code> | <code><a href="#mise-projen.MiseTomlSchemaDaemonProvidersPreset">MiseTomlSchemaDaemonProvidersPreset</a></code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaDaemonProviders.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaDaemonProviders.property.dataDir">dataDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaDaemonProviders.property.options">options</a></code> | <code>any</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaDaemonProviders.property.port">port</a></code> | <code>any</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaDaemonProviders.property.ports">ports</a></code> | <code>{[ key: string ]: number}</code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaDaemonProviders.property.tool">tool</a></code> | <code>string</code> | *No description.* |

---

##### `preset`<sup>Required</sup> <a name="preset" id="mise-projen.MiseTomlSchemaDaemonProviders.property.preset"></a>

```typescript
public readonly preset: MiseTomlSchemaDaemonProvidersPreset;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaDaemonProvidersPreset">MiseTomlSchemaDaemonProvidersPreset</a>

---

##### `version`<sup>Required</sup> <a name="version" id="mise-projen.MiseTomlSchemaDaemonProviders.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `dataDir`<sup>Optional</sup> <a name="dataDir" id="mise-projen.MiseTomlSchemaDaemonProviders.property.dataDir"></a>

```typescript
public readonly dataDir: string;
```

- *Type:* string

---

##### `options`<sup>Optional</sup> <a name="options" id="mise-projen.MiseTomlSchemaDaemonProviders.property.options"></a>

```typescript
public readonly options: any;
```

- *Type:* any

---

##### `port`<sup>Optional</sup> <a name="port" id="mise-projen.MiseTomlSchemaDaemonProviders.property.port"></a>

```typescript
public readonly port: any;
```

- *Type:* any

---

##### `ports`<sup>Optional</sup> <a name="ports" id="mise-projen.MiseTomlSchemaDaemonProviders.property.ports"></a>

```typescript
public readonly ports: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

---

##### `tool`<sup>Optional</sup> <a name="tool" id="mise-projen.MiseTomlSchemaDaemonProviders.property.tool"></a>

```typescript
public readonly tool: string;
```

- *Type:* string

---

### MiseTomlSchemaDaemonsSettings <a name="MiseTomlSchemaDaemonsSettings" id="mise-projen.MiseTomlSchemaDaemonsSettings"></a>

Experimental project-wide daemon options.

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaDaemonsSettings.Initializer"></a>

```typescript
import { MiseTomlSchemaDaemonsSettings } from 'mise-projen'

const miseTomlSchemaDaemonsSettings: MiseTomlSchemaDaemonsSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaDaemonsSettings.property.namespace">namespace</a></code> | <code>string</code> | Fixed pitchfork namespace for this project, replacing the hashed default so other projects can refer to its daemons by qualified ID. |
| <code><a href="#mise-projen.MiseTomlSchemaDaemonsSettings.property.namespacePerWorktree">namespacePerWorktree</a></code> | <code>boolean</code> | Append a worktree-specific suffix to an explicit namespace when the project root is a linked git worktree. |

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="mise-projen.MiseTomlSchemaDaemonsSettings.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Fixed pitchfork namespace for this project, replacing the hashed default so other projects can refer to its daemons by qualified ID.

---

##### `namespacePerWorktree`<sup>Optional</sup> <a name="namespacePerWorktree" id="mise-projen.MiseTomlSchemaDaemonsSettings.property.namespacePerWorktree"></a>

```typescript
public readonly namespacePerWorktree: boolean;
```

- *Type:* boolean

Append a worktree-specific suffix to an explicit namespace when the project root is a linked git worktree.

---

### MiseTomlSchemaDeps <a name="MiseTomlSchemaDeps" id="mise-projen.MiseTomlSchemaDeps"></a>

configure deps providers.

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaDeps.Initializer"></a>

```typescript
import { MiseTomlSchemaDeps } from 'mise-projen'

const miseTomlSchemaDeps: MiseTomlSchemaDeps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaDeps.property.aube">aube</a></code> | <code><a href="#mise-projen.DepsProvider">DepsProvider</a></code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaDeps.property.bun">bun</a></code> | <code><a href="#mise-projen.DepsProvider">DepsProvider</a></code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaDeps.property.bundler">bundler</a></code> | <code><a href="#mise-projen.DepsProvider">DepsProvider</a></code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaDeps.property.composer">composer</a></code> | <code><a href="#mise-projen.DepsProvider">DepsProvider</a></code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaDeps.property.dart">dart</a></code> | <code><a href="#mise-projen.DepsProvider">DepsProvider</a></code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaDeps.property.deno">deno</a></code> | <code><a href="#mise-projen.DepsProvider">DepsProvider</a></code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaDeps.property.disable">disable</a></code> | <code>string[]</code> | Disable specific deps providers. |
| <code><a href="#mise-projen.MiseTomlSchemaDeps.property.flutter">flutter</a></code> | <code><a href="#mise-projen.DepsProvider">DepsProvider</a></code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaDeps.property.gitSubmodule">gitSubmodule</a></code> | <code><a href="#mise-projen.DepsProvider">DepsProvider</a></code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaDeps.property.go">go</a></code> | <code><a href="#mise-projen.DepsProvider">DepsProvider</a></code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaDeps.property.npm">npm</a></code> | <code><a href="#mise-projen.DepsProvider">DepsProvider</a></code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaDeps.property.pip">pip</a></code> | <code><a href="#mise-projen.DepsProvider">DepsProvider</a></code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaDeps.property.pnpm">pnpm</a></code> | <code><a href="#mise-projen.DepsProvider">DepsProvider</a></code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaDeps.property.poetry">poetry</a></code> | <code><a href="#mise-projen.DepsProvider">DepsProvider</a></code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaDeps.property.uv">uv</a></code> | <code><a href="#mise-projen.DepsProvider">DepsProvider</a></code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaDeps.property.yarn">yarn</a></code> | <code><a href="#mise-projen.DepsProvider">DepsProvider</a></code> | *No description.* |

---

##### `aube`<sup>Optional</sup> <a name="aube" id="mise-projen.MiseTomlSchemaDeps.property.aube"></a>

```typescript
public readonly aube: DepsProvider;
```

- *Type:* <a href="#mise-projen.DepsProvider">DepsProvider</a>

---

##### `bun`<sup>Optional</sup> <a name="bun" id="mise-projen.MiseTomlSchemaDeps.property.bun"></a>

```typescript
public readonly bun: DepsProvider;
```

- *Type:* <a href="#mise-projen.DepsProvider">DepsProvider</a>

---

##### `bundler`<sup>Optional</sup> <a name="bundler" id="mise-projen.MiseTomlSchemaDeps.property.bundler"></a>

```typescript
public readonly bundler: DepsProvider;
```

- *Type:* <a href="#mise-projen.DepsProvider">DepsProvider</a>

---

##### `composer`<sup>Optional</sup> <a name="composer" id="mise-projen.MiseTomlSchemaDeps.property.composer"></a>

```typescript
public readonly composer: DepsProvider;
```

- *Type:* <a href="#mise-projen.DepsProvider">DepsProvider</a>

---

##### `dart`<sup>Optional</sup> <a name="dart" id="mise-projen.MiseTomlSchemaDeps.property.dart"></a>

```typescript
public readonly dart: DepsProvider;
```

- *Type:* <a href="#mise-projen.DepsProvider">DepsProvider</a>

---

##### `deno`<sup>Optional</sup> <a name="deno" id="mise-projen.MiseTomlSchemaDeps.property.deno"></a>

```typescript
public readonly deno: DepsProvider;
```

- *Type:* <a href="#mise-projen.DepsProvider">DepsProvider</a>

---

##### `disable`<sup>Optional</sup> <a name="disable" id="mise-projen.MiseTomlSchemaDeps.property.disable"></a>

```typescript
public readonly disable: string[];
```

- *Type:* string[]

Disable specific deps providers.

---

##### `flutter`<sup>Optional</sup> <a name="flutter" id="mise-projen.MiseTomlSchemaDeps.property.flutter"></a>

```typescript
public readonly flutter: DepsProvider;
```

- *Type:* <a href="#mise-projen.DepsProvider">DepsProvider</a>

---

##### `gitSubmodule`<sup>Optional</sup> <a name="gitSubmodule" id="mise-projen.MiseTomlSchemaDeps.property.gitSubmodule"></a>

```typescript
public readonly gitSubmodule: DepsProvider;
```

- *Type:* <a href="#mise-projen.DepsProvider">DepsProvider</a>

---

##### `go`<sup>Optional</sup> <a name="go" id="mise-projen.MiseTomlSchemaDeps.property.go"></a>

```typescript
public readonly go: DepsProvider;
```

- *Type:* <a href="#mise-projen.DepsProvider">DepsProvider</a>

---

##### `npm`<sup>Optional</sup> <a name="npm" id="mise-projen.MiseTomlSchemaDeps.property.npm"></a>

```typescript
public readonly npm: DepsProvider;
```

- *Type:* <a href="#mise-projen.DepsProvider">DepsProvider</a>

---

##### `pip`<sup>Optional</sup> <a name="pip" id="mise-projen.MiseTomlSchemaDeps.property.pip"></a>

```typescript
public readonly pip: DepsProvider;
```

- *Type:* <a href="#mise-projen.DepsProvider">DepsProvider</a>

---

##### `pnpm`<sup>Optional</sup> <a name="pnpm" id="mise-projen.MiseTomlSchemaDeps.property.pnpm"></a>

```typescript
public readonly pnpm: DepsProvider;
```

- *Type:* <a href="#mise-projen.DepsProvider">DepsProvider</a>

---

##### `poetry`<sup>Optional</sup> <a name="poetry" id="mise-projen.MiseTomlSchemaDeps.property.poetry"></a>

```typescript
public readonly poetry: DepsProvider;
```

- *Type:* <a href="#mise-projen.DepsProvider">DepsProvider</a>

---

##### `uv`<sup>Optional</sup> <a name="uv" id="mise-projen.MiseTomlSchemaDeps.property.uv"></a>

```typescript
public readonly uv: DepsProvider;
```

- *Type:* <a href="#mise-projen.DepsProvider">DepsProvider</a>

---

##### `yarn`<sup>Optional</sup> <a name="yarn" id="mise-projen.MiseTomlSchemaDeps.property.yarn"></a>

```typescript
public readonly yarn: DepsProvider;
```

- *Type:* <a href="#mise-projen.DepsProvider">DepsProvider</a>

---

### MiseTomlSchemaHistory <a name="MiseTomlSchemaHistory" id="mise-projen.MiseTomlSchemaHistory"></a>

dotfiles history: what is never captured, reload commands, and the setup repository (https://mise.jdx.dev/history.html).

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaHistory.Initializer"></a>

```typescript
import { MiseTomlSchemaHistory } from 'mise-projen'

const miseTomlSchemaHistory: MiseTomlSchemaHistory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaHistory.property.encryption">encryption</a></code> | <code><a href="#mise-projen.MiseTomlSchemaHistoryEncryption">MiseTomlSchemaHistoryEncryption</a></code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaHistory.property.exclude">exclude</a></code> | <code>string[]</code> | globs never captured by dotfiles history; |
| <code><a href="#mise-projen.MiseTomlSchemaHistory.property.gitEmail">gitEmail</a></code> | <code>string</code> | email used for history commit authors and committers; |
| <code><a href="#mise-projen.MiseTomlSchemaHistory.property.origin">origin</a></code> | <code><a href="#mise-projen.MiseTomlSchemaHistoryOrigin">MiseTomlSchemaHistoryOrigin</a></code> | the setup repository this machine publishes to and fetches from; |
| <code><a href="#mise-projen.MiseTomlSchemaHistory.property.reload">reload</a></code> | <code>{[ key: string ]: string}</code> | commands run once after a rollback or undo writes a path matching the glob (trusted global or system config only). |

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="mise-projen.MiseTomlSchemaHistory.property.encryption"></a>

```typescript
public readonly encryption: MiseTomlSchemaHistoryEncryption;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaHistoryEncryption">MiseTomlSchemaHistoryEncryption</a>

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="mise-projen.MiseTomlSchemaHistory.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

globs never captured by dotfiles history;

a `!glob` entry re-includes a path an earlier glob excluded

---

##### `gitEmail`<sup>Optional</sup> <a name="gitEmail" id="mise-projen.MiseTomlSchemaHistory.property.gitEmail"></a>

```typescript
public readonly gitEmail: string;
```

- *Type:* string

email used for history commit authors and committers;

{hostname} expands to this machine's hostname

---

##### `origin`<sup>Optional</sup> <a name="origin" id="mise-projen.MiseTomlSchemaHistory.property.origin"></a>

```typescript
public readonly origin: MiseTomlSchemaHistoryOrigin;
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaHistoryOrigin">MiseTomlSchemaHistoryOrigin</a>

the setup repository this machine publishes to and fetches from;

machine-local, written by `mise bootstrap dotfiles origin set`

---

##### `reload`<sup>Optional</sup> <a name="reload" id="mise-projen.MiseTomlSchemaHistory.property.reload"></a>

```typescript
public readonly reload: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

commands run once after a rollback or undo writes a path matching the glob (trusted global or system config only).

---

### MiseTomlSchemaHistoryEncryption <a name="MiseTomlSchemaHistoryEncryption" id="mise-projen.MiseTomlSchemaHistoryEncryption"></a>

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaHistoryEncryption.Initializer"></a>

```typescript
import { MiseTomlSchemaHistoryEncryption } from 'mise-projen'

const miseTomlSchemaHistoryEncryption: MiseTomlSchemaHistoryEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaHistoryEncryption.property.recipients">recipients</a></code> | <code>string[]</code> | shared age, SSH, or age-plugin public recipients for all encrypted dotfiles. |

---

##### `recipients`<sup>Optional</sup> <a name="recipients" id="mise-projen.MiseTomlSchemaHistoryEncryption.property.recipients"></a>

```typescript
public readonly recipients: string[];
```

- *Type:* string[]

shared age, SSH, or age-plugin public recipients for all encrypted dotfiles.

---

### MiseTomlSchemaHistoryOrigin <a name="MiseTomlSchemaHistoryOrigin" id="mise-projen.MiseTomlSchemaHistoryOrigin"></a>

the setup repository this machine publishes to and fetches from;

machine-local, written by `mise bootstrap dotfiles origin set`

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaHistoryOrigin.Initializer"></a>

```typescript
import { MiseTomlSchemaHistoryOrigin } from 'mise-projen'

const miseTomlSchemaHistoryOrigin: MiseTomlSchemaHistoryOrigin = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaHistoryOrigin.property.url">url</a></code> | <code>string</code> | the repository url. |
| <code><a href="#mise-projen.MiseTomlSchemaHistoryOrigin.property.branch">branch</a></code> | <code>string</code> | the setup branch. |

---

##### `url`<sup>Required</sup> <a name="url" id="mise-projen.MiseTomlSchemaHistoryOrigin.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

the repository url.

---

##### `branch`<sup>Optional</sup> <a name="branch" id="mise-projen.MiseTomlSchemaHistoryOrigin.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

the setup branch.

---

### MiseTomlSchemaOci <a name="MiseTomlSchemaOci" id="mise-projen.MiseTomlSchemaOci"></a>

configuration for `mise oci build`.

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaOci.Initializer"></a>

```typescript
import { MiseTomlSchemaOci } from 'mise-projen'

const miseTomlSchemaOci: MiseTomlSchemaOci = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaOci.property.cmd">cmd</a></code> | <code>string[]</code> | Cmd baked into the image config. |
| <code><a href="#mise-projen.MiseTomlSchemaOci.property.copy">copy</a></code> | <code><a href="#mise-projen.MiseTomlSchemaOciCopy">MiseTomlSchemaOciCopy</a>[]</code> | Host files or directories copied into the image as independent layers. |
| <code><a href="#mise-projen.MiseTomlSchemaOci.property.entrypoint">entrypoint</a></code> | <code>string[]</code> | Entrypoint baked into the image config. |
| <code><a href="#mise-projen.MiseTomlSchemaOci.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Extra env vars baked into the image config. |
| <code><a href="#mise-projen.MiseTomlSchemaOci.property.from">from</a></code> | <code>string</code> | Base image reference (overrides the oci.default_from setting). |
| <code><a href="#mise-projen.MiseTomlSchemaOci.property.groupId">groupId</a></code> | <code>number</code> | Numeric GID assigned to tar layer entries. |
| <code><a href="#mise-projen.MiseTomlSchemaOci.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels baked into the image config. |
| <code><a href="#mise-projen.MiseTomlSchemaOci.property.mountPoint">mountPoint</a></code> | <code>string</code> | Override where mise installs go in the image (default /mise). |
| <code><a href="#mise-projen.MiseTomlSchemaOci.property.tag">tag</a></code> | <code>string</code> | Default tag applied to the built image. |
| <code><a href="#mise-projen.MiseTomlSchemaOci.property.user">user</a></code> | <code>string</code> | User baked into the image config. |
| <code><a href="#mise-projen.MiseTomlSchemaOci.property.userId">userId</a></code> | <code>number</code> | Numeric UID assigned to tar layer entries. |
| <code><a href="#mise-projen.MiseTomlSchemaOci.property.workdir">workdir</a></code> | <code>string</code> | Working directory baked into the image config. |

---

##### `cmd`<sup>Optional</sup> <a name="cmd" id="mise-projen.MiseTomlSchemaOci.property.cmd"></a>

```typescript
public readonly cmd: string[];
```

- *Type:* string[]

Cmd baked into the image config.

---

##### `copy`<sup>Optional</sup> <a name="copy" id="mise-projen.MiseTomlSchemaOci.property.copy"></a>

```typescript
public readonly copy: MiseTomlSchemaOciCopy[];
```

- *Type:* <a href="#mise-projen.MiseTomlSchemaOciCopy">MiseTomlSchemaOciCopy</a>[]

Host files or directories copied into the image as independent layers.

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="mise-projen.MiseTomlSchemaOci.property.entrypoint"></a>

```typescript
public readonly entrypoint: string[];
```

- *Type:* string[]

Entrypoint baked into the image config.

---

##### `env`<sup>Optional</sup> <a name="env" id="mise-projen.MiseTomlSchemaOci.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Extra env vars baked into the image config.

---

##### `from`<sup>Optional</sup> <a name="from" id="mise-projen.MiseTomlSchemaOci.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

Base image reference (overrides the oci.default_from setting).

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="mise-projen.MiseTomlSchemaOci.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number
- *Default:* user_id when unset

Numeric GID assigned to tar layer entries.

Defaults to user_id when unset

---

##### `labels`<sup>Optional</sup> <a name="labels" id="mise-projen.MiseTomlSchemaOci.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels baked into the image config.

---

##### `mountPoint`<sup>Optional</sup> <a name="mountPoint" id="mise-projen.MiseTomlSchemaOci.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

Override where mise installs go in the image (default /mise).

---

##### `tag`<sup>Optional</sup> <a name="tag" id="mise-projen.MiseTomlSchemaOci.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

Default tag applied to the built image.

---

##### `user`<sup>Optional</sup> <a name="user" id="mise-projen.MiseTomlSchemaOci.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

User baked into the image config.

---

##### `userId`<sup>Optional</sup> <a name="userId" id="mise-projen.MiseTomlSchemaOci.property.userId"></a>

```typescript
public readonly userId: number;
```

- *Type:* number

Numeric UID assigned to tar layer entries.

---

##### `workdir`<sup>Optional</sup> <a name="workdir" id="mise-projen.MiseTomlSchemaOci.property.workdir"></a>

```typescript
public readonly workdir: string;
```

- *Type:* string

Working directory baked into the image config.

---

### MiseTomlSchemaOciCopy <a name="MiseTomlSchemaOciCopy" id="mise-projen.MiseTomlSchemaOciCopy"></a>

#### Initializer <a name="Initializer" id="mise-projen.MiseTomlSchemaOciCopy.Initializer"></a>

```typescript
import { MiseTomlSchemaOciCopy } from 'mise-projen'

const miseTomlSchemaOciCopy: MiseTomlSchemaOciCopy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaOciCopy.property.host">host</a></code> | <code>string</code> | host path to copy, relative to the config file when not absolute. |
| <code><a href="#mise-projen.MiseTomlSchemaOciCopy.property.image">image</a></code> | <code>string</code> | absolute non-root image path without `.` or `..` components. |

---

##### `host`<sup>Required</sup> <a name="host" id="mise-projen.MiseTomlSchemaOciCopy.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

host path to copy, relative to the config file when not absolute.

---

##### `image`<sup>Required</sup> <a name="image" id="mise-projen.MiseTomlSchemaOciCopy.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

absolute non-root image path without `.` or `..` components.

---

### Monorepo <a name="Monorepo" id="mise-projen.Monorepo"></a>

Configuration for monorepo task discovery.

#### Initializer <a name="Initializer" id="mise-projen.Monorepo.Initializer"></a>

```typescript
import { Monorepo } from 'mise-projen'

const monorepo: Monorepo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.Monorepo.property.configRoots">configRoots</a></code> | <code>string[]</code> | Explicit list of config root paths for monorepo task discovery. |
| <code><a href="#mise-projen.Monorepo.property.lockfile">lockfile</a></code> | <code>boolean</code> | Use a single lockfile at the monorepo root for descendant config roots. |
| <code><a href="#mise-projen.Monorepo.property.pathAliases">pathAliases</a></code> | <code>{[ key: string ]: string}</code> | Short names for configured monorepo task roots. |
| <code><a href="#mise-projen.Monorepo.property.projects">projects</a></code> | <code>{[ key: string ]: <a href="#mise-projen.MonorepoProjects">MonorepoProjects</a>}</code> | Experimental explicit additions, removals, and overrides applied to provider-inferred workspace projects. |
| <code><a href="#mise-projen.Monorepo.property.taskDefaults">taskDefaults</a></code> | <code>{[ key: string ]: any}</code> | Experimental task defaults applied by task name across inferred and explicit workspace projects. |

---

##### `configRoots`<sup>Optional</sup> <a name="configRoots" id="mise-projen.Monorepo.property.configRoots"></a>

```typescript
public readonly configRoots: string[];
```

- *Type:* string[]

Explicit list of config root paths for monorepo task discovery.

Supports single-level glob patterns (*). When set, skips filesystem walking for better performance.

---

##### `lockfile`<sup>Optional</sup> <a name="lockfile" id="mise-projen.Monorepo.property.lockfile"></a>

```typescript
public readonly lockfile: boolean;
```

- *Type:* boolean

Use a single lockfile at the monorepo root for descendant config roots.

true opts in now, false keeps lockfiles next to subproject configs, and unset keeps the current behavior until the scheduled default flip.

---

##### `pathAliases`<sup>Optional</sup> <a name="pathAliases" id="mise-projen.Monorepo.property.pathAliases"></a>

```typescript
public readonly pathAliases: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Short names for configured monorepo task roots.

Keys are single path segments; values are paths in config_roots.

---

##### `projects`<sup>Optional</sup> <a name="projects" id="mise-projen.Monorepo.property.projects"></a>

```typescript
public readonly projects: {[ key: string ]: MonorepoProjects};
```

- *Type:* {[ key: string ]: <a href="#mise-projen.MonorepoProjects">MonorepoProjects</a>}

Experimental explicit additions, removals, and overrides applied to provider-inferred workspace projects.

---

##### `taskDefaults`<sup>Optional</sup> <a name="taskDefaults" id="mise-projen.Monorepo.property.taskDefaults"></a>

```typescript
public readonly taskDefaults: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Experimental task defaults applied by task name across inferred and explicit workspace projects.

---

### MonorepoProjects <a name="MonorepoProjects" id="mise-projen.MonorepoProjects"></a>

#### Initializer <a name="Initializer" id="mise-projen.MonorepoProjects.Initializer"></a>

```typescript
import { MonorepoProjects } from 'mise-projen'

const monorepoProjects: MonorepoProjects = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MonorepoProjects.property.depends">depends</a></code> | <code>string[]</code> | Replace the complete provider-inferred dependency set. |
| <code><a href="#mise-projen.MonorepoProjects.property.dependsAdd">dependsAdd</a></code> | <code>string[]</code> | Add dependency edges after an optional depends replacement. |
| <code><a href="#mise-projen.MonorepoProjects.property.dependsRemove">dependsRemove</a></code> | <code>string[]</code> | Remove dependency edges after an optional depends replacement. |
| <code><a href="#mise-projen.MonorepoProjects.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Replace provider-inferred project metadata. |
| <code><a href="#mise-projen.MonorepoProjects.property.remove">remove</a></code> | <code>boolean</code> | Remove this project and every dependency edge connected to it. |
| <code><a href="#mise-projen.MonorepoProjects.property.root">root</a></code> | <code>string</code> | Add the project at this workspace-relative root or replace its inferred root. |

---

##### `depends`<sup>Optional</sup> <a name="depends" id="mise-projen.MonorepoProjects.property.depends"></a>

```typescript
public readonly depends: string[];
```

- *Type:* string[]

Replace the complete provider-inferred dependency set.

---

##### `dependsAdd`<sup>Optional</sup> <a name="dependsAdd" id="mise-projen.MonorepoProjects.property.dependsAdd"></a>

```typescript
public readonly dependsAdd: string[];
```

- *Type:* string[]

Add dependency edges after an optional depends replacement.

---

##### `dependsRemove`<sup>Optional</sup> <a name="dependsRemove" id="mise-projen.MonorepoProjects.property.dependsRemove"></a>

```typescript
public readonly dependsRemove: string[];
```

- *Type:* string[]

Remove dependency edges after an optional depends replacement.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="mise-projen.MonorepoProjects.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Replace provider-inferred project metadata.

---

##### `remove`<sup>Optional</sup> <a name="remove" id="mise-projen.MonorepoProjects.property.remove"></a>

```typescript
public readonly remove: boolean;
```

- *Type:* boolean

Remove this project and every dependency edge connected to it.

---

##### `root`<sup>Optional</sup> <a name="root" id="mise-projen.MonorepoProjects.property.root"></a>

```typescript
public readonly root: string;
```

- *Type:* string

Add the project at this workspace-relative root or replace its inferred root.

---

### Settings <a name="Settings" id="mise-projen.Settings"></a>

#### Initializer <a name="Initializer" id="mise-projen.Settings.Initializer"></a>

```typescript
import { Settings } from 'mise-projen'

const settings: Settings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.Settings.property.activateAggressive">activateAggressive</a></code> | <code>boolean</code> | Pushes tools' bin-paths to the front of PATH instead of allowing modifications of PATH after activation to take precedence. |
| <code><a href="#mise-projen.Settings.property.activateShims">activateShims</a></code> | <code>boolean</code> | Allow full shell activation to add tool shims to PATH. |
| <code><a href="#mise-projen.Settings.property.age">age</a></code> | <code><a href="#mise-projen.SettingsAge">SettingsAge</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.allCompile">allCompile</a></code> | <code>boolean</code> | do not use precompiled binaries for any tool. |
| <code><a href="#mise-projen.Settings.property.alwaysKeepDownload">alwaysKeepDownload</a></code> | <code>boolean</code> | keep downloaded files after installation for debugging. |
| <code><a href="#mise-projen.Settings.property.alwaysKeepInstall">alwaysKeepInstall</a></code> | <code>boolean</code> | should mise keep install files after installation even if the installation fails. |
| <code><a href="#mise-projen.Settings.property.aqua">aqua</a></code> | <code><a href="#mise-projen.SettingsAqua">SettingsAqua</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.arch">arch</a></code> | <code>string</code> | Architecture to use for precompiled binaries. |
| <code><a href="#mise-projen.Settings.property.asdfCompat">asdfCompat</a></code> | <code>boolean</code> | set to true to ensure .tool-versions will be compatible with asdf. |
| <code><a href="#mise-projen.Settings.property.autoEnv">autoEnv</a></code> | <code>boolean</code> | Automatically enable platform config environments (unix, {os}, {os}-{arch}). |
| <code><a href="#mise-projen.Settings.property.autoInstall">autoInstall</a></code> | <code>boolean</code> | Automatically install missing tools when running `mise x`, `mise run`, or as part of the 'not found' handler. |
| <code><a href="#mise-projen.Settings.property.autoInstallDisableTools">autoInstallDisableTools</a></code> | <code>string[]</code> | List of tools to skip automatically installing when running `mise x`, `mise run`, or as part of the 'not found' handler. |
| <code><a href="#mise-projen.Settings.property.autoUpdate">autoUpdate</a></code> | <code>boolean</code> | Automatically update mise before running eligible commands. |
| <code><a href="#mise-projen.Settings.property.autoUpdateCheckDuration">autoUpdateCheckDuration</a></code> | <code>string</code> | How often to check for a new mise release when auto-update is enabled. |
| <code><a href="#mise-projen.Settings.property.cachePruneAge">cachePruneAge</a></code> | <code>string</code> | Delete files in cache that have not been accessed in this duration. |
| <code><a href="#mise-projen.Settings.property.cargo">cargo</a></code> | <code><a href="#mise-projen.SettingsCargo">SettingsCargo</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.cd">cd</a></code> | <code>string</code> | Path to change to after launching mise. |
| <code><a href="#mise-projen.Settings.property.ceilingPaths">ceilingPaths</a></code> | <code>string[]</code> | Directories where mise stops searching for config files. |
| <code><a href="#mise-projen.Settings.property.ci">ci</a></code> | <code>boolean</code> | Set to true if running in a CI environment. |
| <code><a href="#mise-projen.Settings.property.color">color</a></code> | <code>boolean</code> | Use color in mise terminal output. |
| <code><a href="#mise-projen.Settings.property.colorTheme">colorTheme</a></code> | <code><a href="#mise-projen.SettingsColorTheme">SettingsColorTheme</a></code> | Theme for interactive prompts (auto/default, charm, base16, catppuccin, dracula). |
| <code><a href="#mise-projen.Settings.property.conda">conda</a></code> | <code><a href="#mise-projen.SettingsConda">SettingsConda</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.debug">debug</a></code> | <code>boolean</code> | Sets log level to debug. |
| <code><a href="#mise-projen.Settings.property.defaultConfigFilename">defaultConfigFilename</a></code> | <code>string</code> | The default config filename read. |
| <code><a href="#mise-projen.Settings.property.defaultToolVersionsFilename">defaultToolVersionsFilename</a></code> | <code>string</code> | The default .tool-versions filename read. This will not ignore .tool-versions—use override_tool_versions_filename for that. This must be an env var. |
| <code><a href="#mise-projen.Settings.property.disableBackends">disableBackends</a></code> | <code>string[]</code> | Backends to exclude from tool resolution and new installs, such as `asdf`, `pypi`, or a vfox-backend plugin name. |
| <code><a href="#mise-projen.Settings.property.disableDefaultRegistry">disableDefaultRegistry</a></code> | <code>boolean</code> | Disable the default mapping of short tool names like `php` -> `asdf:mise-plugins/asdf-php`. |
| <code><a href="#mise-projen.Settings.property.disableHints">disableHints</a></code> | <code>string[]</code> | Turns off helpful hints when using different mise features. |
| <code><a href="#mise-projen.Settings.property.disableTools">disableTools</a></code> | <code>string[]</code> | Tools defined in mise.toml that should be ignored. |
| <code><a href="#mise-projen.Settings.property.disableUpdateWarning">disableUpdateWarning</a></code> | <code>boolean</code> | Suppress warnings when a newer mise version is available. |
| <code><a href="#mise-projen.Settings.property.dotfiles">dotfiles</a></code> | <code><a href="#mise-projen.SettingsDotfiles">SettingsDotfiles</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.dotnet">dotnet</a></code> | <code><a href="#mise-projen.SettingsDotnet">SettingsDotnet</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.enableTools">enableTools</a></code> | <code>string[]</code> | Tools defined in mise.toml that should be used; unset enables all tools and empty disables all tools. |
| <code><a href="#mise-projen.Settings.property.env">env</a></code> | <code>string[]</code> | Env to use for mise.<MISE_ENV>.toml files. |
| <code><a href="#mise-projen.Settings.property.envCache">envCache</a></code> | <code>boolean</code> | [experimental] Enable environment caching for nested mise invocations. |
| <code><a href="#mise-projen.Settings.property.envCacheTtl">envCacheTtl</a></code> | <code>string</code> | TTL for cached environments. |
| <code><a href="#mise-projen.Settings.property.envConfD">envConfD</a></code> | <code>boolean</code> | Enable environment-specific filenames in conf.d directories. |
| <code><a href="#mise-projen.Settings.property.envFile">envFile</a></code> | <code>string</code> | Path to a file containing environment variables to automatically load. |
| <code><a href="#mise-projen.Settings.property.envShellExpand">envShellExpand</a></code> | <code>boolean</code> | Controls shell-style variable expansion in env values (e.g., $FOO, ${BAR:-default}). |
| <code><a href="#mise-projen.Settings.property.erlang">erlang</a></code> | <code><a href="#mise-projen.SettingsErlang">SettingsErlang</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.execAutoInstall">execAutoInstall</a></code> | <code>boolean</code> | Automatically install missing tools when running `mise x`. |
| <code><a href="#mise-projen.Settings.property.experimental">experimental</a></code> | <code>boolean</code> | Enable experimental mise features which are incomplete or unstable—breakings changes may occur. |
| <code><a href="#mise-projen.Settings.property.fetchRemoteVersionsCache">fetchRemoteVersionsCache</a></code> | <code>string</code> | How long to cache remote versions for tools. |
| <code><a href="#mise-projen.Settings.property.fetchRemoteVersionsTimeout">fetchRemoteVersionsTimeout</a></code> | <code>string</code> | Timeout in seconds for HTTP requests to fetch new tool versions in mise. |
| <code><a href="#mise-projen.Settings.property.forgejo">forgejo</a></code> | <code><a href="#mise-projen.SettingsForgejo">SettingsForgejo</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.github">github</a></code> | <code><a href="#mise-projen.SettingsGithub">SettingsGithub</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.githubAttestations">githubAttestations</a></code> | <code>boolean</code> | Enable GitHub Artifact Attestations verification for supported tools. |
| <code><a href="#mise-projen.Settings.property.githubRelay">githubRelay</a></code> | <code><a href="#mise-projen.SettingsGithubRelay">SettingsGithubRelay</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.gitlab">gitlab</a></code> | <code><a href="#mise-projen.SettingsGitlab">SettingsGitlab</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.gix">gix</a></code> | <code>boolean</code> | Use gix for git operations, set to false to shell out to git. |
| <code><a href="#mise-projen.Settings.property.globalConfigFile">globalConfigFile</a></code> | <code>string</code> | Path to the global mise config file. |
| <code><a href="#mise-projen.Settings.property.globalConfigRoot">globalConfigRoot</a></code> | <code>string</code> | Path which is used as `{{config_root}}` for the global config file. |
| <code><a href="#mise-projen.Settings.property.go">go</a></code> | <code><a href="#mise-projen.SettingsGo">SettingsGo</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.goDefaultPackagesFile">goDefaultPackagesFile</a></code> | <code>string</code> | Path to a file containing default go packages to install when installing go. |
| <code><a href="#mise-projen.Settings.property.goDownloadMirror">goDownloadMirror</a></code> | <code>string</code> | Mirror to download go sdk tarballs from. |
| <code><a href="#mise-projen.Settings.property.goRepo">goRepo</a></code> | <code>string</code> | URL to fetch go from. |
| <code><a href="#mise-projen.Settings.property.goSetGobin">goSetGobin</a></code> | <code>boolean</code> | Changes where `go install` installs binaries to. |
| <code><a href="#mise-projen.Settings.property.goSetGopath">goSetGopath</a></code> | <code>boolean</code> | [deprecated] Set to true to set GOPATH=~/.local/share/mise/installs/go/.../packages. |
| <code><a href="#mise-projen.Settings.property.goSetGoroot">goSetGoroot</a></code> | <code>boolean</code> | Sets GOROOT=~/.local/share/mise/installs/go/.../. |
| <code><a href="#mise-projen.Settings.property.goSkipChecksum">goSkipChecksum</a></code> | <code>boolean</code> | Set to true to skip checksum verification when downloading go sdk tarballs. |
| <code><a href="#mise-projen.Settings.property.gpgVerify">gpgVerify</a></code> | <code>boolean</code> | Verify OpenPGP signatures for all tools (built-in, no external gpg required). |
| <code><a href="#mise-projen.Settings.property.history">history</a></code> | <code><a href="#mise-projen.SettingsHistory">SettingsHistory</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.hookEnv">hookEnv</a></code> | <code><a href="#mise-projen.SettingsHookEnv">SettingsHookEnv</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.httpDownloadTimeout">httpDownloadTimeout</a></code> | <code>string</code> | Total time allowed for an HTTP download, including retries. |
| <code><a href="#mise-projen.Settings.property.httpRetries">httpRetries</a></code> | <code>number</code> | Number of retries for transient HTTP failures in mise. |
| <code><a href="#mise-projen.Settings.property.httpTimeout">httpTimeout</a></code> | <code>string</code> | Timeout for connecting or waiting between reads during HTTP requests. |
| <code><a href="#mise-projen.Settings.property.idiomaticVersionFile">idiomaticVersionFile</a></code> | <code>boolean</code> | Set to false to disable the idiomatic version files such as .node-version, .ruby-version, etc. |
| <code><a href="#mise-projen.Settings.property.idiomaticVersionFileDisableFiles">idiomaticVersionFileDisableFiles</a></code> | <code>string[]</code> | Specific idiomatic version files to disable for a tool. |
| <code><a href="#mise-projen.Settings.property.idiomaticVersionFileDisableTools">idiomaticVersionFileDisableTools</a></code> | <code>string[]</code> | Specific tools to disable idiomatic version files for. |
| <code><a href="#mise-projen.Settings.property.idiomaticVersionFileEnableTools">idiomaticVersionFileEnableTools</a></code> | <code>string[]</code> | Specific tools to enable idiomatic version files for like .node-version, .ruby-version, etc. |
| <code><a href="#mise-projen.Settings.property.idiomaticVersionFileIgnoreMinimumVersions">idiomaticVersionFileIgnoreMinimumVersions</a></code> | <code>boolean</code> | Ignore idiomatic version file fields that only declare a minimum compatible version. |
| <code><a href="#mise-projen.Settings.property.ignoredConfigPaths">ignoredConfigPaths</a></code> | <code>string[]</code> | This is a list of config paths that mise will ignore. |
| <code><a href="#mise-projen.Settings.property.installBefore">installBefore</a></code> | <code>string</code> | Minimum release age / supply chain protection — only install versions released before this date. |
| <code><a href="#mise-projen.Settings.property.java">java</a></code> | <code><a href="#mise-projen.SettingsJava">SettingsJava</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.jobs">jobs</a></code> | <code>number</code> | How many jobs to run concurrently such as tool installs. |
| <code><a href="#mise-projen.Settings.property.legacyVersionFile">legacyVersionFile</a></code> | <code>boolean</code> | Set to false to disable the idiomatic version files such as .node-version, .ruby-version, etc. |
| <code><a href="#mise-projen.Settings.property.legacyVersionFileDisableTools">legacyVersionFileDisableTools</a></code> | <code>string[]</code> | Specific tools to disable idiomatic version files for. |
| <code><a href="#mise-projen.Settings.property.libc">libc</a></code> | <code><a href="#mise-projen.SettingsLibc">SettingsLibc</a></code> | Libc implementation to use for precompiled Linux binaries. |
| <code><a href="#mise-projen.Settings.property.libgit2">libgit2</a></code> | <code>boolean</code> | Use libgit2 for git operations, set to false to shell out to git. |
| <code><a href="#mise-projen.Settings.property.locked">locked</a></code> | <code>boolean</code> | Require lockfile URLs to be present during installation. |
| <code><a href="#mise-projen.Settings.property.lockedScopes">lockedScopes</a></code> | <code><a href="#mise-projen.SettingsLockedScopes">SettingsLockedScopes</a>[]</code> | Config scopes where invocation-wide locked mode is enforced. |
| <code><a href="#mise-projen.Settings.property.lockedVerifyProvenance">lockedVerifyProvenance</a></code> | <code>boolean</code> | Re-verify provenance at install time even when the lockfile already has provenance. |
| <code><a href="#mise-projen.Settings.property.lockfile">lockfile</a></code> | <code>boolean</code> | Create and read lockfiles for tool versions. |
| <code><a href="#mise-projen.Settings.property.lockfileMode">lockfileMode</a></code> | <code><a href="#mise-projen.SettingsLockfileMode">SettingsLockfileMode</a></code> | Choose incremental merging or complete lockfile generation. |
| <code><a href="#mise-projen.Settings.property.lockfilePlatforms">lockfilePlatforms</a></code> | <code>string[]</code> | Platforms to target in lockfile operations. |
| <code><a href="#mise-projen.Settings.property.logLevel">logLevel</a></code> | <code><a href="#mise-projen.SettingsLogLevel">SettingsLogLevel</a></code> | Show more/less output. |
| <code><a href="#mise-projen.Settings.property.minimumReleaseAge">minimumReleaseAge</a></code> | <code>string</code> | Minimum release age / supply chain protection — only install versions older than this threshold. |
| <code><a href="#mise-projen.Settings.property.minimumReleaseAgeExcludes">minimumReleaseAgeExcludes</a></code> | <code>string[]</code> | Tools and backends to exclude from the global/default minimum_release_age setting. |
| <code><a href="#mise-projen.Settings.property.netrc">netrc</a></code> | <code>boolean</code> | Use a netrc file for HTTP Basic authentication. |
| <code><a href="#mise-projen.Settings.property.netrcFile">netrcFile</a></code> | <code>string</code> | Path to the netrc file to use for HTTP Basic authentication. |
| <code><a href="#mise-projen.Settings.property.node">node</a></code> | <code><a href="#mise-projen.SettingsNode">SettingsNode</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.noEnv">noEnv</a></code> | <code>boolean</code> | Do not load environment variables from config files. |
| <code><a href="#mise-projen.Settings.property.noHooks">noHooks</a></code> | <code>boolean</code> | Do not execute hooks from config files. |
| <code><a href="#mise-projen.Settings.property.notFoundAutoInstall">notFoundAutoInstall</a></code> | <code>boolean</code> | Set to false to disable the "command not found" handler to autoinstall missing tool versions. |
| <code><a href="#mise-projen.Settings.property.notFoundAutoInstallRegistry">notFoundAutoInstallRegistry</a></code> | <code>boolean</code> | Automatically install an unconfigured tool when its registry bin matches a missing command. |
| <code><a href="#mise-projen.Settings.property.notFoundSystemFallback">notFoundSystemFallback</a></code> | <code>boolean</code> | Set to false to stop shims from falling back to a same-named binary found elsewhere on PATH. |
| <code><a href="#mise-projen.Settings.property.npm">npm</a></code> | <code><a href="#mise-projen.SettingsNpm">SettingsNpm</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.oci">oci</a></code> | <code><a href="#mise-projen.SettingsOci">SettingsOci</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.offline">offline</a></code> | <code>boolean</code> | Disable all HTTP requests. |
| <code><a href="#mise-projen.Settings.property.os">os</a></code> | <code>string</code> | OS to use for precompiled binaries. |
| <code><a href="#mise-projen.Settings.property.otel">otel</a></code> | <code><a href="#mise-projen.SettingsOtel">SettingsOtel</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.overrideConfigFilenames">overrideConfigFilenames</a></code> | <code>string[]</code> | If set, mise will ignore default config files like `mise.toml` and use these filenames instead. |
| <code><a href="#mise-projen.Settings.property.overrideToolVersionsFilenames">overrideToolVersionsFilenames</a></code> | <code>string[]</code> | If set, mise will ignore .tool-versions files and use these filenames instead. Can be set to `none` to disable .tool-versions. |
| <code><a href="#mise-projen.Settings.property.packslip">packslip</a></code> | <code><a href="#mise-projen.SettingsPackslip">SettingsPackslip</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.paranoid">paranoid</a></code> | <code>boolean</code> | Enables extra-secure behavior. |
| <code><a href="#mise-projen.Settings.property.pin">pin</a></code> | <code>boolean</code> | Default to pinning versions when running `mise use` in mise.toml files. |
| <code><a href="#mise-projen.Settings.property.pipx">pipx</a></code> | <code><a href="#mise-projen.SettingsPipx">SettingsPipx</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.pluginAutoupdateLastCheckDuration">pluginAutoupdateLastCheckDuration</a></code> | <code>string</code> | How long to wait before updating plugins automatically (note this isn't currently implemented). |
| <code><a href="#mise-projen.Settings.property.preferOffline">preferOffline</a></code> | <code>boolean</code> | Prefer locally cached data over remote fetches when possible. |
| <code><a href="#mise-projen.Settings.property.prereleases">prereleases</a></code> | <code>boolean</code> | Include pre-release versions in `ls-remote`, `latest` resolution, and fuzzy matching for all tools. |
| <code><a href="#mise-projen.Settings.property.profile">profile</a></code> | <code>string</code> | Profile to use for mise.${MISE_PROFILE}.toml files. |
| <code><a href="#mise-projen.Settings.property.provenanceApiFailuresFatal">provenanceApiFailuresFatal</a></code> | <code>boolean</code> | Fail when provenance API checks cannot be completed. |
| <code><a href="#mise-projen.Settings.property.pypi">pypi</a></code> | <code><a href="#mise-projen.SettingsPypi">SettingsPypi</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.python">python</a></code> | <code><a href="#mise-projen.SettingsPython">SettingsPython</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.quiet">quiet</a></code> | <code>boolean</code> | Suppress all output except errors. |
| <code><a href="#mise-projen.Settings.property.raw">raw</a></code> | <code>boolean</code> | Connect stdin/stdout/stderr to child processes. |
| <code><a href="#mise-projen.Settings.property.registryCacheTtl">registryCacheTtl</a></code> | <code>string</code> | How long to cache the floating mise registry. |
| <code><a href="#mise-projen.Settings.property.registryFloating">registryFloating</a></code> | <code>boolean</code> | Fetch the latest released mise registry and current aqua registry instead of using only the snapshots baked into this mise release. |
| <code><a href="#mise-projen.Settings.property.ruby">ruby</a></code> | <code><a href="#mise-projen.SettingsRuby">SettingsRuby</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.rust">rust</a></code> | <code><a href="#mise-projen.SettingsRust">SettingsRust</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.safe">safe</a></code> | <code>boolean</code> | Prevent project configuration from executing code during config loading and version resolution. |
| <code><a href="#mise-projen.Settings.property.sandbox">sandbox</a></code> | <code><a href="#mise-projen.SettingsSandbox">SettingsSandbox</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.selfUpdate">selfUpdate</a></code> | <code><a href="#mise-projen.SettingsSelfUpdate">SettingsSelfUpdate</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.sharedInstallDirs">sharedInstallDirs</a></code> | <code>string[]</code> | Additional read-only directories to search for installed tool versions. |
| <code><a href="#mise-projen.Settings.property.shims">shims</a></code> | <code><a href="#mise-projen.SettingsShims">SettingsShims</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.shimsDir">shimsDir</a></code> | <code>string</code> | Directory containing user shims. |
| <code><a href="#mise-projen.Settings.property.shorthandsFile">shorthandsFile</a></code> | <code>string</code> | [deprecated] Path to a file containing custom tool shorthands. |
| <code><a href="#mise-projen.Settings.property.silent">silent</a></code> | <code>boolean</code> | Suppress all `mise run\|watch` output except errors—including what tasks output. |
| <code><a href="#mise-projen.Settings.property.skills">skills</a></code> | <code><a href="#mise-projen.SettingsSkills">SettingsSkills</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.slsa">slsa</a></code> | <code>boolean</code> | Enable SLSA provenance verification globally. |
| <code><a href="#mise-projen.Settings.property.sops">sops</a></code> | <code><a href="#mise-projen.SettingsSops">SettingsSops</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.spm">spm</a></code> | <code><a href="#mise-projen.SettingsSpm">SettingsSpm</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.status">status</a></code> | <code><a href="#mise-projen.SettingsStatus">SettingsStatus</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.swift">swift</a></code> | <code><a href="#mise-projen.SettingsSwift">SettingsSwift</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.systemConfigFile">systemConfigFile</a></code> | <code>string</code> | Path to the system mise config file. |
| <code><a href="#mise-projen.Settings.property.systemDeps">systemDeps</a></code> | <code><a href="#mise-projen.SettingsSystemDeps">SettingsSystemDeps</a></code> | How to handle a plugin's declared system dependencies before installing a tool. |
| <code><a href="#mise-projen.Settings.property.systemInstallsDir">systemInstallsDir</a></code> | <code>string</code> | Directory containing system tool installs. |
| <code><a href="#mise-projen.Settings.property.systemPackages">systemPackages</a></code> | <code><a href="#mise-projen.SettingsSystemPackages">SettingsSystemPackages</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.systemShimsDir">systemShimsDir</a></code> | <code>string</code> | Directory containing system shims. |
| <code><a href="#mise-projen.Settings.property.task">task</a></code> | <code><a href="#mise-projen.SettingsTask">SettingsTask</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.taskDisablePaths">taskDisablePaths</a></code> | <code>string[]</code> | Paths that mise will not look for tasks in. |
| <code><a href="#mise-projen.Settings.property.taskOutput">taskOutput</a></code> | <code>string</code> | Change output style when executing tasks. |
| <code><a href="#mise-projen.Settings.property.taskRemoteNoCache">taskRemoteNoCache</a></code> | <code>boolean</code> | Mise will always fetch the latest tasks from the remote, by default the cache is used. |
| <code><a href="#mise-projen.Settings.property.taskRunAutoInstall">taskRunAutoInstall</a></code> | <code>boolean</code> | Automatically install missing tools when executing tasks. |
| <code><a href="#mise-projen.Settings.property.taskShowFullCmd">taskShowFullCmd</a></code> | <code>boolean</code> | Disable truncation of command lines in task execution output. |
| <code><a href="#mise-projen.Settings.property.taskSkip">taskSkip</a></code> | <code>string[]</code> | Tasks to skip when running `mise run`. |
| <code><a href="#mise-projen.Settings.property.taskSkipDepends">taskSkipDepends</a></code> | <code>boolean</code> | Run only specified tasks skipping all dependencies. |
| <code><a href="#mise-projen.Settings.property.taskTimeout">taskTimeout</a></code> | <code>string</code> | Default timeout for tasks. |
| <code><a href="#mise-projen.Settings.property.taskTimings">taskTimings</a></code> | <code>boolean</code> | Show completion message with elapsed time for each task on `mise run`. |
| <code><a href="#mise-projen.Settings.property.teraV1">teraV1</a></code> | <code>boolean</code> | Use Tera v1 instead of Tera v2 for template rendering. |
| <code><a href="#mise-projen.Settings.property.terminalProgress">terminalProgress</a></code> | <code>boolean</code> | Enable terminal progress indicators (OSC 9;4) for compatible terminals. |
| <code><a href="#mise-projen.Settings.property.trace">trace</a></code> | <code>boolean</code> | Sets log level to trace. |
| <code><a href="#mise-projen.Settings.property.truncate">truncate</a></code> | <code>boolean</code> | Truncate long terminal output to fit the available width. |
| <code><a href="#mise-projen.Settings.property.trustedConfigPaths">trustedConfigPaths</a></code> | <code>string[]</code> | This is a list of config paths that mise will automatically mark as trusted. |
| <code><a href="#mise-projen.Settings.property.unixDefaultFileShellArgs">unixDefaultFileShellArgs</a></code> | <code>string</code> | Default shell arguments for Unix to be used for file commands. |
| <code><a href="#mise-projen.Settings.property.unixDefaultInlineShellArgs">unixDefaultInlineShellArgs</a></code> | <code>string</code> | Default shell arguments for Unix to be used for inline commands. |
| <code><a href="#mise-projen.Settings.property.upgrade">upgrade</a></code> | <code><a href="#mise-projen.SettingsUpgrade">SettingsUpgrade</a></code> | *No description.* |
| <code><a href="#mise-projen.Settings.property.urlReplacements">urlReplacements</a></code> | <code>{[ key: string ]: string}</code> | Map of URL patterns to replacement URLs applied to all requests. |
| <code><a href="#mise-projen.Settings.property.useFileShellForExecutableTasks">useFileShellForExecutableTasks</a></code> | <code>boolean</code> | Determines whether to use a specified shell for executing tasks in the tasks directory. |
| <code><a href="#mise-projen.Settings.property.useVersionsHost">useVersionsHost</a></code> | <code>boolean</code> | Set to false to disable using the mise-versions API for version lists, public GitHub release metadata, and GitHub artifact attestations. |
| <code><a href="#mise-projen.Settings.property.useVersionsHostTrack">useVersionsHostTrack</a></code> | <code>boolean</code> | Send anonymous download statistics when installing tools. |
| <code><a href="#mise-projen.Settings.property.verbose">verbose</a></code> | <code>boolean</code> | Shows more verbose output such as installation logs when installing tools. |
| <code><a href="#mise-projen.Settings.property.windowsDefaultFileShellArgs">windowsDefaultFileShellArgs</a></code> | <code>string</code> | Default shell arguments for Windows to be used for file commands. |
| <code><a href="#mise-projen.Settings.property.windowsDefaultInlineShellArgs">windowsDefaultInlineShellArgs</a></code> | <code>string</code> | Default shell arguments for Windows to be used for inline commands. |
| <code><a href="#mise-projen.Settings.property.windowsExecutableExtensions">windowsExecutableExtensions</a></code> | <code>string[]</code> | List of executable extensions for Windows. |
| <code><a href="#mise-projen.Settings.property.windowsPowershellNoProfile">windowsPowershellNoProfile</a></code> | <code>boolean</code> | Pass `-NoProfile` to PowerShell (`pwsh`/`powershell`) shells that mise spawns for tasks and inline commands, so startup profiles are skipped. |
| <code><a href="#mise-projen.Settings.property.windowsShimMode">windowsShimMode</a></code> | <code>string</code> | Shim file mode for Windows. |
| <code><a href="#mise-projen.Settings.property.yes">yes</a></code> | <code>boolean</code> | This will automatically answer yes or no to prompts. |
| <code><a href="#mise-projen.Settings.property.zig">zig</a></code> | <code><a href="#mise-projen.SettingsZig">SettingsZig</a></code> | *No description.* |

---

##### `activateAggressive`<sup>Optional</sup> <a name="activateAggressive" id="mise-projen.Settings.property.activateAggressive"></a>

```typescript
public readonly activateAggressive: boolean;
```

- *Type:* boolean

Pushes tools' bin-paths to the front of PATH instead of allowing modifications of PATH after activation to take precedence.

---

##### `activateShims`<sup>Optional</sup> <a name="activateShims" id="mise-projen.Settings.property.activateShims"></a>

```typescript
public readonly activateShims: boolean;
```

- *Type:* boolean

Allow full shell activation to add tool shims to PATH.

---

##### `age`<sup>Optional</sup> <a name="age" id="mise-projen.Settings.property.age"></a>

```typescript
public readonly age: SettingsAge;
```

- *Type:* <a href="#mise-projen.SettingsAge">SettingsAge</a>

---

##### `allCompile`<sup>Optional</sup> <a name="allCompile" id="mise-projen.Settings.property.allCompile"></a>

```typescript
public readonly allCompile: boolean;
```

- *Type:* boolean

do not use precompiled binaries for any tool.

---

##### `alwaysKeepDownload`<sup>Optional</sup> <a name="alwaysKeepDownload" id="mise-projen.Settings.property.alwaysKeepDownload"></a>

```typescript
public readonly alwaysKeepDownload: boolean;
```

- *Type:* boolean

keep downloaded files after installation for debugging.

---

##### `alwaysKeepInstall`<sup>Optional</sup> <a name="alwaysKeepInstall" id="mise-projen.Settings.property.alwaysKeepInstall"></a>

```typescript
public readonly alwaysKeepInstall: boolean;
```

- *Type:* boolean

should mise keep install files after installation even if the installation fails.

---

##### `aqua`<sup>Optional</sup> <a name="aqua" id="mise-projen.Settings.property.aqua"></a>

```typescript
public readonly aqua: SettingsAqua;
```

- *Type:* <a href="#mise-projen.SettingsAqua">SettingsAqua</a>

---

##### `arch`<sup>Optional</sup> <a name="arch" id="mise-projen.Settings.property.arch"></a>

```typescript
public readonly arch: string;
```

- *Type:* string

Architecture to use for precompiled binaries.

---

##### `asdfCompat`<sup>Optional</sup> <a name="asdfCompat" id="mise-projen.Settings.property.asdfCompat"></a>

```typescript
public readonly asdfCompat: boolean;
```

- *Type:* boolean

set to true to ensure .tool-versions will be compatible with asdf.

---

##### `autoEnv`<sup>Optional</sup> <a name="autoEnv" id="mise-projen.Settings.property.autoEnv"></a>

```typescript
public readonly autoEnv: boolean;
```

- *Type:* boolean

Automatically enable platform config environments (unix, {os}, {os}-{arch}).

---

##### `autoInstall`<sup>Optional</sup> <a name="autoInstall" id="mise-projen.Settings.property.autoInstall"></a>

```typescript
public readonly autoInstall: boolean;
```

- *Type:* boolean

Automatically install missing tools when running `mise x`, `mise run`, or as part of the 'not found' handler.

---

##### `autoInstallDisableTools`<sup>Optional</sup> <a name="autoInstallDisableTools" id="mise-projen.Settings.property.autoInstallDisableTools"></a>

```typescript
public readonly autoInstallDisableTools: string[];
```

- *Type:* string[]

List of tools to skip automatically installing when running `mise x`, `mise run`, or as part of the 'not found' handler.

---

##### `autoUpdate`<sup>Optional</sup> <a name="autoUpdate" id="mise-projen.Settings.property.autoUpdate"></a>

```typescript
public readonly autoUpdate: boolean;
```

- *Type:* boolean

Automatically update mise before running eligible commands.

---

##### `autoUpdateCheckDuration`<sup>Optional</sup> <a name="autoUpdateCheckDuration" id="mise-projen.Settings.property.autoUpdateCheckDuration"></a>

```typescript
public readonly autoUpdateCheckDuration: string;
```

- *Type:* string

How often to check for a new mise release when auto-update is enabled.

---

##### `cachePruneAge`<sup>Optional</sup> <a name="cachePruneAge" id="mise-projen.Settings.property.cachePruneAge"></a>

```typescript
public readonly cachePruneAge: string;
```

- *Type:* string

Delete files in cache that have not been accessed in this duration.

---

##### `cargo`<sup>Optional</sup> <a name="cargo" id="mise-projen.Settings.property.cargo"></a>

```typescript
public readonly cargo: SettingsCargo;
```

- *Type:* <a href="#mise-projen.SettingsCargo">SettingsCargo</a>

---

##### `cd`<sup>Optional</sup> <a name="cd" id="mise-projen.Settings.property.cd"></a>

```typescript
public readonly cd: string;
```

- *Type:* string

Path to change to after launching mise.

---

##### `ceilingPaths`<sup>Optional</sup> <a name="ceilingPaths" id="mise-projen.Settings.property.ceilingPaths"></a>

```typescript
public readonly ceilingPaths: string[];
```

- *Type:* string[]

Directories where mise stops searching for config files.

---

##### `ci`<sup>Optional</sup> <a name="ci" id="mise-projen.Settings.property.ci"></a>

```typescript
public readonly ci: boolean;
```

- *Type:* boolean

Set to true if running in a CI environment.

---

##### `color`<sup>Optional</sup> <a name="color" id="mise-projen.Settings.property.color"></a>

```typescript
public readonly color: boolean;
```

- *Type:* boolean

Use color in mise terminal output.

---

##### `colorTheme`<sup>Optional</sup> <a name="colorTheme" id="mise-projen.Settings.property.colorTheme"></a>

```typescript
public readonly colorTheme: SettingsColorTheme;
```

- *Type:* <a href="#mise-projen.SettingsColorTheme">SettingsColorTheme</a>

Theme for interactive prompts (auto/default, charm, base16, catppuccin, dracula).

---

##### `conda`<sup>Optional</sup> <a name="conda" id="mise-projen.Settings.property.conda"></a>

```typescript
public readonly conda: SettingsConda;
```

- *Type:* <a href="#mise-projen.SettingsConda">SettingsConda</a>

---

##### `debug`<sup>Optional</sup> <a name="debug" id="mise-projen.Settings.property.debug"></a>

```typescript
public readonly debug: boolean;
```

- *Type:* boolean

Sets log level to debug.

---

##### `defaultConfigFilename`<sup>Optional</sup> <a name="defaultConfigFilename" id="mise-projen.Settings.property.defaultConfigFilename"></a>

```typescript
public readonly defaultConfigFilename: string;
```

- *Type:* string

The default config filename read.

`mise use` and other commands that create new config files will use this value. This must be an env var.

---

##### `defaultToolVersionsFilename`<sup>Optional</sup> <a name="defaultToolVersionsFilename" id="mise-projen.Settings.property.defaultToolVersionsFilename"></a>

```typescript
public readonly defaultToolVersionsFilename: string;
```

- *Type:* string

The default .tool-versions filename read. This will not ignore .tool-versions—use override_tool_versions_filename for that. This must be an env var.

---

##### `disableBackends`<sup>Optional</sup> <a name="disableBackends" id="mise-projen.Settings.property.disableBackends"></a>

```typescript
public readonly disableBackends: string[];
```

- *Type:* string[]

Backends to exclude from tool resolution and new installs, such as `asdf`, `pypi`, or a vfox-backend plugin name.

Existing installations are left on disk and become available again if the backend is re-enabled.

---

##### `disableDefaultRegistry`<sup>Optional</sup> <a name="disableDefaultRegistry" id="mise-projen.Settings.property.disableDefaultRegistry"></a>

```typescript
public readonly disableDefaultRegistry: boolean;
```

- *Type:* boolean

Disable the default mapping of short tool names like `php` -> `asdf:mise-plugins/asdf-php`.

This parameter disables only for the backends `vfox` and `asdf`.

---

##### `disableHints`<sup>Optional</sup> <a name="disableHints" id="mise-projen.Settings.property.disableHints"></a>

```typescript
public readonly disableHints: string[];
```

- *Type:* string[]

Turns off helpful hints when using different mise features.

---

##### `disableTools`<sup>Optional</sup> <a name="disableTools" id="mise-projen.Settings.property.disableTools"></a>

```typescript
public readonly disableTools: string[];
```

- *Type:* string[]

Tools defined in mise.toml that should be ignored.

---

##### `disableUpdateWarning`<sup>Optional</sup> <a name="disableUpdateWarning" id="mise-projen.Settings.property.disableUpdateWarning"></a>

```typescript
public readonly disableUpdateWarning: boolean;
```

- *Type:* boolean

Suppress warnings when a newer mise version is available.

---

##### `dotfiles`<sup>Optional</sup> <a name="dotfiles" id="mise-projen.Settings.property.dotfiles"></a>

```typescript
public readonly dotfiles: SettingsDotfiles;
```

- *Type:* <a href="#mise-projen.SettingsDotfiles">SettingsDotfiles</a>

---

##### `dotnet`<sup>Optional</sup> <a name="dotnet" id="mise-projen.Settings.property.dotnet"></a>

```typescript
public readonly dotnet: SettingsDotnet;
```

- *Type:* <a href="#mise-projen.SettingsDotnet">SettingsDotnet</a>

---

##### `enableTools`<sup>Optional</sup> <a name="enableTools" id="mise-projen.Settings.property.enableTools"></a>

```typescript
public readonly enableTools: string[];
```

- *Type:* string[]

Tools defined in mise.toml that should be used; unset enables all tools and empty disables all tools.

---

##### `env`<sup>Optional</sup> <a name="env" id="mise-projen.Settings.property.env"></a>

```typescript
public readonly env: string[];
```

- *Type:* string[]

Env to use for mise.<MISE_ENV>.toml files.

---

##### `envCache`<sup>Optional</sup> <a name="envCache" id="mise-projen.Settings.property.envCache"></a>

```typescript
public readonly envCache: boolean;
```

- *Type:* boolean

[experimental] Enable environment caching for nested mise invocations.

---

##### `envCacheTtl`<sup>Optional</sup> <a name="envCacheTtl" id="mise-projen.Settings.property.envCacheTtl"></a>

```typescript
public readonly envCacheTtl: string;
```

- *Type:* string

TTL for cached environments.

---

##### `envConfD`<sup>Optional</sup> <a name="envConfD" id="mise-projen.Settings.property.envConfD"></a>

```typescript
public readonly envConfD: boolean;
```

- *Type:* boolean

Enable environment-specific filenames in conf.d directories.

---

##### `envFile`<sup>Optional</sup> <a name="envFile" id="mise-projen.Settings.property.envFile"></a>

```typescript
public readonly envFile: string;
```

- *Type:* string

Path to a file containing environment variables to automatically load.

---

##### `envShellExpand`<sup>Optional</sup> <a name="envShellExpand" id="mise-projen.Settings.property.envShellExpand"></a>

```typescript
public readonly envShellExpand: boolean;
```

- *Type:* boolean

Controls shell-style variable expansion in env values (e.g., $FOO, ${BAR:-default}).

---

##### `erlang`<sup>Optional</sup> <a name="erlang" id="mise-projen.Settings.property.erlang"></a>

```typescript
public readonly erlang: SettingsErlang;
```

- *Type:* <a href="#mise-projen.SettingsErlang">SettingsErlang</a>

---

##### `execAutoInstall`<sup>Optional</sup> <a name="execAutoInstall" id="mise-projen.Settings.property.execAutoInstall"></a>

```typescript
public readonly execAutoInstall: boolean;
```

- *Type:* boolean

Automatically install missing tools when running `mise x`.

---

##### `experimental`<sup>Optional</sup> <a name="experimental" id="mise-projen.Settings.property.experimental"></a>

```typescript
public readonly experimental: boolean;
```

- *Type:* boolean

Enable experimental mise features which are incomplete or unstable—breakings changes may occur.

---

##### `fetchRemoteVersionsCache`<sup>Optional</sup> <a name="fetchRemoteVersionsCache" id="mise-projen.Settings.property.fetchRemoteVersionsCache"></a>

```typescript
public readonly fetchRemoteVersionsCache: string;
```

- *Type:* string

How long to cache remote versions for tools.

---

##### `fetchRemoteVersionsTimeout`<sup>Optional</sup> <a name="fetchRemoteVersionsTimeout" id="mise-projen.Settings.property.fetchRemoteVersionsTimeout"></a>

```typescript
public readonly fetchRemoteVersionsTimeout: string;
```

- *Type:* string

Timeout in seconds for HTTP requests to fetch new tool versions in mise.

---

##### `forgejo`<sup>Optional</sup> <a name="forgejo" id="mise-projen.Settings.property.forgejo"></a>

```typescript
public readonly forgejo: SettingsForgejo;
```

- *Type:* <a href="#mise-projen.SettingsForgejo">SettingsForgejo</a>

---

##### `github`<sup>Optional</sup> <a name="github" id="mise-projen.Settings.property.github"></a>

```typescript
public readonly github: SettingsGithub;
```

- *Type:* <a href="#mise-projen.SettingsGithub">SettingsGithub</a>

---

##### `githubAttestations`<sup>Optional</sup> <a name="githubAttestations" id="mise-projen.Settings.property.githubAttestations"></a>

```typescript
public readonly githubAttestations: boolean;
```

- *Type:* boolean

Enable GitHub Artifact Attestations verification for supported tools.

---

##### `githubRelay`<sup>Optional</sup> <a name="githubRelay" id="mise-projen.Settings.property.githubRelay"></a>

```typescript
public readonly githubRelay: SettingsGithubRelay;
```

- *Type:* <a href="#mise-projen.SettingsGithubRelay">SettingsGithubRelay</a>

---

##### `gitlab`<sup>Optional</sup> <a name="gitlab" id="mise-projen.Settings.property.gitlab"></a>

```typescript
public readonly gitlab: SettingsGitlab;
```

- *Type:* <a href="#mise-projen.SettingsGitlab">SettingsGitlab</a>

---

##### `gix`<sup>Optional</sup> <a name="gix" id="mise-projen.Settings.property.gix"></a>

```typescript
public readonly gix: boolean;
```

- *Type:* boolean

Use gix for git operations, set to false to shell out to git.

---

##### `globalConfigFile`<sup>Optional</sup> <a name="globalConfigFile" id="mise-projen.Settings.property.globalConfigFile"></a>

```typescript
public readonly globalConfigFile: string;
```

- *Type:* string
- *Default:* config/mise/config.toml`. This must be an env var.

Path to the global mise config file.

Default is `~/.config/mise/config.toml`. This must be an env var.

---

##### `globalConfigRoot`<sup>Optional</sup> <a name="globalConfigRoot" id="mise-projen.Settings.property.globalConfigRoot"></a>

```typescript
public readonly globalConfigRoot: string;
```

- *Type:* string
- *Default:* HOME`. This must be an env var.

Path which is used as `{{config_root}}` for the global config file.

Default is `$HOME`. This must be an env var.

---

##### `go`<sup>Optional</sup> <a name="go" id="mise-projen.Settings.property.go"></a>

```typescript
public readonly go: SettingsGo;
```

- *Type:* <a href="#mise-projen.SettingsGo">SettingsGo</a>

---

##### `goDefaultPackagesFile`<sup>Optional</sup> <a name="goDefaultPackagesFile" id="mise-projen.Settings.property.goDefaultPackagesFile"></a>

```typescript
public readonly goDefaultPackagesFile: string;
```

- *Type:* string

Path to a file containing default go packages to install when installing go.

---

##### `goDownloadMirror`<sup>Optional</sup> <a name="goDownloadMirror" id="mise-projen.Settings.property.goDownloadMirror"></a>

```typescript
public readonly goDownloadMirror: string;
```

- *Type:* string

Mirror to download go sdk tarballs from.

---

##### `goRepo`<sup>Optional</sup> <a name="goRepo" id="mise-projen.Settings.property.goRepo"></a>

```typescript
public readonly goRepo: string;
```

- *Type:* string

URL to fetch go from.

---

##### `goSetGobin`<sup>Optional</sup> <a name="goSetGobin" id="mise-projen.Settings.property.goSetGobin"></a>

```typescript
public readonly goSetGobin: boolean;
```

- *Type:* boolean

Changes where `go install` installs binaries to.

---

##### `goSetGopath`<sup>Optional</sup> <a name="goSetGopath" id="mise-projen.Settings.property.goSetGopath"></a>

```typescript
public readonly goSetGopath: boolean;
```

- *Type:* boolean

[deprecated] Set to true to set GOPATH=~/.local/share/mise/installs/go/.../packages.

---

##### `goSetGoroot`<sup>Optional</sup> <a name="goSetGoroot" id="mise-projen.Settings.property.goSetGoroot"></a>

```typescript
public readonly goSetGoroot: boolean;
```

- *Type:* boolean

Sets GOROOT=~/.local/share/mise/installs/go/.../.

---

##### `goSkipChecksum`<sup>Optional</sup> <a name="goSkipChecksum" id="mise-projen.Settings.property.goSkipChecksum"></a>

```typescript
public readonly goSkipChecksum: boolean;
```

- *Type:* boolean

Set to true to skip checksum verification when downloading go sdk tarballs.

---

##### `gpgVerify`<sup>Optional</sup> <a name="gpgVerify" id="mise-projen.Settings.property.gpgVerify"></a>

```typescript
public readonly gpgVerify: boolean;
```

- *Type:* boolean

Verify OpenPGP signatures for all tools (built-in, no external gpg required).

Set to false to disable.

---

##### `history`<sup>Optional</sup> <a name="history" id="mise-projen.Settings.property.history"></a>

```typescript
public readonly history: SettingsHistory;
```

- *Type:* <a href="#mise-projen.SettingsHistory">SettingsHistory</a>

---

##### `hookEnv`<sup>Optional</sup> <a name="hookEnv" id="mise-projen.Settings.property.hookEnv"></a>

```typescript
public readonly hookEnv: SettingsHookEnv;
```

- *Type:* <a href="#mise-projen.SettingsHookEnv">SettingsHookEnv</a>

---

##### `httpDownloadTimeout`<sup>Optional</sup> <a name="httpDownloadTimeout" id="mise-projen.Settings.property.httpDownloadTimeout"></a>

```typescript
public readonly httpDownloadTimeout: string;
```

- *Type:* string

Total time allowed for an HTTP download, including retries.

---

##### `httpRetries`<sup>Optional</sup> <a name="httpRetries" id="mise-projen.Settings.property.httpRetries"></a>

```typescript
public readonly httpRetries: number;
```

- *Type:* number

Number of retries for transient HTTP failures in mise.

---

##### `httpTimeout`<sup>Optional</sup> <a name="httpTimeout" id="mise-projen.Settings.property.httpTimeout"></a>

```typescript
public readonly httpTimeout: string;
```

- *Type:* string

Timeout for connecting or waiting between reads during HTTP requests.

---

##### `idiomaticVersionFile`<sup>Optional</sup> <a name="idiomaticVersionFile" id="mise-projen.Settings.property.idiomaticVersionFile"></a>

```typescript
public readonly idiomaticVersionFile: boolean;
```

- *Type:* boolean

Set to false to disable the idiomatic version files such as .node-version, .ruby-version, etc.

---

##### `idiomaticVersionFileDisableFiles`<sup>Optional</sup> <a name="idiomaticVersionFileDisableFiles" id="mise-projen.Settings.property.idiomaticVersionFileDisableFiles"></a>

```typescript
public readonly idiomaticVersionFileDisableFiles: string[];
```

- *Type:* string[]

Specific idiomatic version files to disable for a tool.

---

##### `idiomaticVersionFileDisableTools`<sup>Optional</sup> <a name="idiomaticVersionFileDisableTools" id="mise-projen.Settings.property.idiomaticVersionFileDisableTools"></a>

```typescript
public readonly idiomaticVersionFileDisableTools: string[];
```

- *Type:* string[]

Specific tools to disable idiomatic version files for.

---

##### `idiomaticVersionFileEnableTools`<sup>Optional</sup> <a name="idiomaticVersionFileEnableTools" id="mise-projen.Settings.property.idiomaticVersionFileEnableTools"></a>

```typescript
public readonly idiomaticVersionFileEnableTools: string[];
```

- *Type:* string[]

Specific tools to enable idiomatic version files for like .node-version, .ruby-version, etc.

---

##### `idiomaticVersionFileIgnoreMinimumVersions`<sup>Optional</sup> <a name="idiomaticVersionFileIgnoreMinimumVersions" id="mise-projen.Settings.property.idiomaticVersionFileIgnoreMinimumVersions"></a>

```typescript
public readonly idiomaticVersionFileIgnoreMinimumVersions: boolean;
```

- *Type:* boolean

Ignore idiomatic version file fields that only declare a minimum compatible version.

---

##### `ignoredConfigPaths`<sup>Optional</sup> <a name="ignoredConfigPaths" id="mise-projen.Settings.property.ignoredConfigPaths"></a>

```typescript
public readonly ignoredConfigPaths: string[];
```

- *Type:* string[]

This is a list of config paths that mise will ignore.

---

##### `installBefore`<sup>Optional</sup> <a name="installBefore" id="mise-projen.Settings.property.installBefore"></a>

```typescript
public readonly installBefore: string;
```

- *Type:* string

Minimum release age / supply chain protection — only install versions released before this date.

---

##### `java`<sup>Optional</sup> <a name="java" id="mise-projen.Settings.property.java"></a>

```typescript
public readonly java: SettingsJava;
```

- *Type:* <a href="#mise-projen.SettingsJava">SettingsJava</a>

---

##### `jobs`<sup>Optional</sup> <a name="jobs" id="mise-projen.Settings.property.jobs"></a>

```typescript
public readonly jobs: number;
```

- *Type:* number

How many jobs to run concurrently such as tool installs.

Values below 1 are treated as 1.

---

##### `legacyVersionFile`<sup>Optional</sup> <a name="legacyVersionFile" id="mise-projen.Settings.property.legacyVersionFile"></a>

```typescript
public readonly legacyVersionFile: boolean;
```

- *Type:* boolean

Set to false to disable the idiomatic version files such as .node-version, .ruby-version, etc.

---

##### `legacyVersionFileDisableTools`<sup>Optional</sup> <a name="legacyVersionFileDisableTools" id="mise-projen.Settings.property.legacyVersionFileDisableTools"></a>

```typescript
public readonly legacyVersionFileDisableTools: string[];
```

- *Type:* string[]

Specific tools to disable idiomatic version files for.

---

##### `libc`<sup>Optional</sup> <a name="libc" id="mise-projen.Settings.property.libc"></a>

```typescript
public readonly libc: SettingsLibc;
```

- *Type:* <a href="#mise-projen.SettingsLibc">SettingsLibc</a>

Libc implementation to use for precompiled Linux binaries.

---

##### `libgit2`<sup>Optional</sup> <a name="libgit2" id="mise-projen.Settings.property.libgit2"></a>

```typescript
public readonly libgit2: boolean;
```

- *Type:* boolean

Use libgit2 for git operations, set to false to shell out to git.

---

##### `locked`<sup>Optional</sup> <a name="locked" id="mise-projen.Settings.property.locked"></a>

```typescript
public readonly locked: boolean;
```

- *Type:* boolean

Require lockfile URLs to be present during installation.

---

##### `lockedScopes`<sup>Optional</sup> <a name="lockedScopes" id="mise-projen.Settings.property.lockedScopes"></a>

```typescript
public readonly lockedScopes: SettingsLockedScopes[];
```

- *Type:* <a href="#mise-projen.SettingsLockedScopes">SettingsLockedScopes</a>[]

Config scopes where invocation-wide locked mode is enforced.

---

##### `lockedVerifyProvenance`<sup>Optional</sup> <a name="lockedVerifyProvenance" id="mise-projen.Settings.property.lockedVerifyProvenance"></a>

```typescript
public readonly lockedVerifyProvenance: boolean;
```

- *Type:* boolean

Re-verify provenance at install time even when the lockfile already has provenance.

---

##### `lockfile`<sup>Optional</sup> <a name="lockfile" id="mise-projen.Settings.property.lockfile"></a>

```typescript
public readonly lockfile: boolean;
```

- *Type:* boolean

Create and read lockfiles for tool versions.

---

##### `lockfileMode`<sup>Optional</sup> <a name="lockfileMode" id="mise-projen.Settings.property.lockfileMode"></a>

```typescript
public readonly lockfileMode: SettingsLockfileMode;
```

- *Type:* <a href="#mise-projen.SettingsLockfileMode">SettingsLockfileMode</a>

Choose incremental merging or complete lockfile generation.

---

##### `lockfilePlatforms`<sup>Optional</sup> <a name="lockfilePlatforms" id="mise-projen.Settings.property.lockfilePlatforms"></a>

```typescript
public readonly lockfilePlatforms: string[];
```

- *Type:* string[]

Platforms to target in lockfile operations.

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="mise-projen.Settings.property.logLevel"></a>

```typescript
public readonly logLevel: SettingsLogLevel;
```

- *Type:* <a href="#mise-projen.SettingsLogLevel">SettingsLogLevel</a>

Show more/less output.

---

##### `minimumReleaseAge`<sup>Optional</sup> <a name="minimumReleaseAge" id="mise-projen.Settings.property.minimumReleaseAge"></a>

```typescript
public readonly minimumReleaseAge: string;
```

- *Type:* string

Minimum release age / supply chain protection — only install versions older than this threshold.

---

##### `minimumReleaseAgeExcludes`<sup>Optional</sup> <a name="minimumReleaseAgeExcludes" id="mise-projen.Settings.property.minimumReleaseAgeExcludes"></a>

```typescript
public readonly minimumReleaseAgeExcludes: string[];
```

- *Type:* string[]

Tools and backends to exclude from the global/default minimum_release_age setting.

---

##### `netrc`<sup>Optional</sup> <a name="netrc" id="mise-projen.Settings.property.netrc"></a>

```typescript
public readonly netrc: boolean;
```

- *Type:* boolean

Use a netrc file for HTTP Basic authentication.

---

##### `netrcFile`<sup>Optional</sup> <a name="netrcFile" id="mise-projen.Settings.property.netrcFile"></a>

```typescript
public readonly netrcFile: string;
```

- *Type:* string

Path to the netrc file to use for HTTP Basic authentication.

---

##### `node`<sup>Optional</sup> <a name="node" id="mise-projen.Settings.property.node"></a>

```typescript
public readonly node: SettingsNode;
```

- *Type:* <a href="#mise-projen.SettingsNode">SettingsNode</a>

---

##### `noEnv`<sup>Optional</sup> <a name="noEnv" id="mise-projen.Settings.property.noEnv"></a>

```typescript
public readonly noEnv: boolean;
```

- *Type:* boolean

Do not load environment variables from config files.

---

##### `noHooks`<sup>Optional</sup> <a name="noHooks" id="mise-projen.Settings.property.noHooks"></a>

```typescript
public readonly noHooks: boolean;
```

- *Type:* boolean

Do not execute hooks from config files.

---

##### `notFoundAutoInstall`<sup>Optional</sup> <a name="notFoundAutoInstall" id="mise-projen.Settings.property.notFoundAutoInstall"></a>

```typescript
public readonly notFoundAutoInstall: boolean;
```

- *Type:* boolean

Set to false to disable the "command not found" handler to autoinstall missing tool versions.

---

##### `notFoundAutoInstallRegistry`<sup>Optional</sup> <a name="notFoundAutoInstallRegistry" id="mise-projen.Settings.property.notFoundAutoInstallRegistry"></a>

```typescript
public readonly notFoundAutoInstallRegistry: boolean;
```

- *Type:* boolean

Automatically install an unconfigured tool when its registry bin matches a missing command.

---

##### `notFoundSystemFallback`<sup>Optional</sup> <a name="notFoundSystemFallback" id="mise-projen.Settings.property.notFoundSystemFallback"></a>

```typescript
public readonly notFoundSystemFallback: boolean;
```

- *Type:* boolean

Set to false to stop shims from falling back to a same-named binary found elsewhere on PATH.

---

##### `npm`<sup>Optional</sup> <a name="npm" id="mise-projen.Settings.property.npm"></a>

```typescript
public readonly npm: SettingsNpm;
```

- *Type:* <a href="#mise-projen.SettingsNpm">SettingsNpm</a>

---

##### `oci`<sup>Optional</sup> <a name="oci" id="mise-projen.Settings.property.oci"></a>

```typescript
public readonly oci: SettingsOci;
```

- *Type:* <a href="#mise-projen.SettingsOci">SettingsOci</a>

---

##### `offline`<sup>Optional</sup> <a name="offline" id="mise-projen.Settings.property.offline"></a>

```typescript
public readonly offline: boolean;
```

- *Type:* boolean

Disable all HTTP requests.

Tools will only use locally cached data.

---

##### `os`<sup>Optional</sup> <a name="os" id="mise-projen.Settings.property.os"></a>

```typescript
public readonly os: string;
```

- *Type:* string

OS to use for precompiled binaries.

---

##### `otel`<sup>Optional</sup> <a name="otel" id="mise-projen.Settings.property.otel"></a>

```typescript
public readonly otel: SettingsOtel;
```

- *Type:* <a href="#mise-projen.SettingsOtel">SettingsOtel</a>

---

##### `overrideConfigFilenames`<sup>Optional</sup> <a name="overrideConfigFilenames" id="mise-projen.Settings.property.overrideConfigFilenames"></a>

```typescript
public readonly overrideConfigFilenames: string[];
```

- *Type:* string[]

If set, mise will ignore default config files like `mise.toml` and use these filenames instead.

---

##### `overrideToolVersionsFilenames`<sup>Optional</sup> <a name="overrideToolVersionsFilenames" id="mise-projen.Settings.property.overrideToolVersionsFilenames"></a>

```typescript
public readonly overrideToolVersionsFilenames: string[];
```

- *Type:* string[]

If set, mise will ignore .tool-versions files and use these filenames instead. Can be set to `none` to disable .tool-versions.

---

##### `packslip`<sup>Optional</sup> <a name="packslip" id="mise-projen.Settings.property.packslip"></a>

```typescript
public readonly packslip: SettingsPackslip;
```

- *Type:* <a href="#mise-projen.SettingsPackslip">SettingsPackslip</a>

---

##### `paranoid`<sup>Optional</sup> <a name="paranoid" id="mise-projen.Settings.property.paranoid"></a>

```typescript
public readonly paranoid: boolean;
```

- *Type:* boolean

Enables extra-secure behavior.

---

##### `pin`<sup>Optional</sup> <a name="pin" id="mise-projen.Settings.property.pin"></a>

```typescript
public readonly pin: boolean;
```

- *Type:* boolean
- *Default:* pinning versions when running `mise use` in mise.toml files.

Default to pinning versions when running `mise use` in mise.toml files.

---

##### `pipx`<sup>Optional</sup> <a name="pipx" id="mise-projen.Settings.property.pipx"></a>

```typescript
public readonly pipx: SettingsPipx;
```

- *Type:* <a href="#mise-projen.SettingsPipx">SettingsPipx</a>

---

##### `pluginAutoupdateLastCheckDuration`<sup>Optional</sup> <a name="pluginAutoupdateLastCheckDuration" id="mise-projen.Settings.property.pluginAutoupdateLastCheckDuration"></a>

```typescript
public readonly pluginAutoupdateLastCheckDuration: string;
```

- *Type:* string

How long to wait before updating plugins automatically (note this isn't currently implemented).

---

##### `preferOffline`<sup>Optional</sup> <a name="preferOffline" id="mise-projen.Settings.property.preferOffline"></a>

```typescript
public readonly preferOffline: boolean;
```

- *Type:* boolean

Prefer locally cached data over remote fetches when possible.

---

##### `prereleases`<sup>Optional</sup> <a name="prereleases" id="mise-projen.Settings.property.prereleases"></a>

```typescript
public readonly prereleases: boolean;
```

- *Type:* boolean

Include pre-release versions in `ls-remote`, `latest` resolution, and fuzzy matching for all tools.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="mise-projen.Settings.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

Profile to use for mise.${MISE_PROFILE}.toml files.

---

##### `provenanceApiFailuresFatal`<sup>Optional</sup> <a name="provenanceApiFailuresFatal" id="mise-projen.Settings.property.provenanceApiFailuresFatal"></a>

```typescript
public readonly provenanceApiFailuresFatal: boolean;
```

- *Type:* boolean

Fail when provenance API checks cannot be completed.

---

##### `pypi`<sup>Optional</sup> <a name="pypi" id="mise-projen.Settings.property.pypi"></a>

```typescript
public readonly pypi: SettingsPypi;
```

- *Type:* <a href="#mise-projen.SettingsPypi">SettingsPypi</a>

---

##### `python`<sup>Optional</sup> <a name="python" id="mise-projen.Settings.property.python"></a>

```typescript
public readonly python: SettingsPython;
```

- *Type:* <a href="#mise-projen.SettingsPython">SettingsPython</a>

---

##### `quiet`<sup>Optional</sup> <a name="quiet" id="mise-projen.Settings.property.quiet"></a>

```typescript
public readonly quiet: boolean;
```

- *Type:* boolean

Suppress all output except errors.

---

##### `raw`<sup>Optional</sup> <a name="raw" id="mise-projen.Settings.property.raw"></a>

```typescript
public readonly raw: boolean;
```

- *Type:* boolean

Connect stdin/stdout/stderr to child processes.

---

##### `registryCacheTtl`<sup>Optional</sup> <a name="registryCacheTtl" id="mise-projen.Settings.property.registryCacheTtl"></a>

```typescript
public readonly registryCacheTtl: string;
```

- *Type:* string

How long to cache the floating mise registry.

---

##### `registryFloating`<sup>Optional</sup> <a name="registryFloating" id="mise-projen.Settings.property.registryFloating"></a>

```typescript
public readonly registryFloating: boolean;
```

- *Type:* boolean

Fetch the latest released mise registry and current aqua registry instead of using only the snapshots baked into this mise release.

---

##### `ruby`<sup>Optional</sup> <a name="ruby" id="mise-projen.Settings.property.ruby"></a>

```typescript
public readonly ruby: SettingsRuby;
```

- *Type:* <a href="#mise-projen.SettingsRuby">SettingsRuby</a>

---

##### `rust`<sup>Optional</sup> <a name="rust" id="mise-projen.Settings.property.rust"></a>

```typescript
public readonly rust: SettingsRust;
```

- *Type:* <a href="#mise-projen.SettingsRust">SettingsRust</a>

---

##### `safe`<sup>Optional</sup> <a name="safe" id="mise-projen.Settings.property.safe"></a>

```typescript
public readonly safe: boolean;
```

- *Type:* boolean

Prevent project configuration from executing code during config loading and version resolution.

---

##### `sandbox`<sup>Optional</sup> <a name="sandbox" id="mise-projen.Settings.property.sandbox"></a>

```typescript
public readonly sandbox: SettingsSandbox;
```

- *Type:* <a href="#mise-projen.SettingsSandbox">SettingsSandbox</a>

---

##### `selfUpdate`<sup>Optional</sup> <a name="selfUpdate" id="mise-projen.Settings.property.selfUpdate"></a>

```typescript
public readonly selfUpdate: SettingsSelfUpdate;
```

- *Type:* <a href="#mise-projen.SettingsSelfUpdate">SettingsSelfUpdate</a>

---

##### `sharedInstallDirs`<sup>Optional</sup> <a name="sharedInstallDirs" id="mise-projen.Settings.property.sharedInstallDirs"></a>

```typescript
public readonly sharedInstallDirs: string[];
```

- *Type:* string[]

Additional read-only directories to search for installed tool versions.

---

##### `shims`<sup>Optional</sup> <a name="shims" id="mise-projen.Settings.property.shims"></a>

```typescript
public readonly shims: SettingsShims;
```

- *Type:* <a href="#mise-projen.SettingsShims">SettingsShims</a>

---

##### `shimsDir`<sup>Optional</sup> <a name="shimsDir" id="mise-projen.Settings.property.shimsDir"></a>

```typescript
public readonly shimsDir: string;
```

- *Type:* string

Directory containing user shims.

---

##### `shorthandsFile`<sup>Optional</sup> <a name="shorthandsFile" id="mise-projen.Settings.property.shorthandsFile"></a>

```typescript
public readonly shorthandsFile: string;
```

- *Type:* string

[deprecated] Path to a file containing custom tool shorthands.

---

##### `silent`<sup>Optional</sup> <a name="silent" id="mise-projen.Settings.property.silent"></a>

```typescript
public readonly silent: boolean;
```

- *Type:* boolean

Suppress all `mise run|watch` output except errors—including what tasks output.

---

##### `skills`<sup>Optional</sup> <a name="skills" id="mise-projen.Settings.property.skills"></a>

```typescript
public readonly skills: SettingsSkills;
```

- *Type:* <a href="#mise-projen.SettingsSkills">SettingsSkills</a>

---

##### `slsa`<sup>Optional</sup> <a name="slsa" id="mise-projen.Settings.property.slsa"></a>

```typescript
public readonly slsa: boolean;
```

- *Type:* boolean

Enable SLSA provenance verification globally.

---

##### `sops`<sup>Optional</sup> <a name="sops" id="mise-projen.Settings.property.sops"></a>

```typescript
public readonly sops: SettingsSops;
```

- *Type:* <a href="#mise-projen.SettingsSops">SettingsSops</a>

---

##### `spm`<sup>Optional</sup> <a name="spm" id="mise-projen.Settings.property.spm"></a>

```typescript
public readonly spm: SettingsSpm;
```

- *Type:* <a href="#mise-projen.SettingsSpm">SettingsSpm</a>

---

##### `status`<sup>Optional</sup> <a name="status" id="mise-projen.Settings.property.status"></a>

```typescript
public readonly status: SettingsStatus;
```

- *Type:* <a href="#mise-projen.SettingsStatus">SettingsStatus</a>

---

##### `swift`<sup>Optional</sup> <a name="swift" id="mise-projen.Settings.property.swift"></a>

```typescript
public readonly swift: SettingsSwift;
```

- *Type:* <a href="#mise-projen.SettingsSwift">SettingsSwift</a>

---

##### `systemConfigFile`<sup>Optional</sup> <a name="systemConfigFile" id="mise-projen.Settings.property.systemConfigFile"></a>

```typescript
public readonly systemConfigFile: string;
```

- *Type:* string
- *Default:* etc/mise/config.toml`. This must be an env var.

Path to the system mise config file.

Default is `/etc/mise/config.toml`. This must be an env var.

---

##### `systemDeps`<sup>Optional</sup> <a name="systemDeps" id="mise-projen.Settings.property.systemDeps"></a>

```typescript
public readonly systemDeps: SettingsSystemDeps;
```

- *Type:* <a href="#mise-projen.SettingsSystemDeps">SettingsSystemDeps</a>

How to handle a plugin's declared system dependencies before installing a tool.

---

##### `systemInstallsDir`<sup>Optional</sup> <a name="systemInstallsDir" id="mise-projen.Settings.property.systemInstallsDir"></a>

```typescript
public readonly systemInstallsDir: string;
```

- *Type:* string

Directory containing system tool installs.

---

##### `systemPackages`<sup>Optional</sup> <a name="systemPackages" id="mise-projen.Settings.property.systemPackages"></a>

```typescript
public readonly systemPackages: SettingsSystemPackages;
```

- *Type:* <a href="#mise-projen.SettingsSystemPackages">SettingsSystemPackages</a>

---

##### `systemShimsDir`<sup>Optional</sup> <a name="systemShimsDir" id="mise-projen.Settings.property.systemShimsDir"></a>

```typescript
public readonly systemShimsDir: string;
```

- *Type:* string

Directory containing system shims.

---

##### `task`<sup>Optional</sup> <a name="task" id="mise-projen.Settings.property.task"></a>

```typescript
public readonly task: SettingsTask;
```

- *Type:* <a href="#mise-projen.SettingsTask">SettingsTask</a>

---

##### `taskDisablePaths`<sup>Optional</sup> <a name="taskDisablePaths" id="mise-projen.Settings.property.taskDisablePaths"></a>

```typescript
public readonly taskDisablePaths: string[];
```

- *Type:* string[]

Paths that mise will not look for tasks in.

---

##### `taskOutput`<sup>Optional</sup> <a name="taskOutput" id="mise-projen.Settings.property.taskOutput"></a>

```typescript
public readonly taskOutput: string;
```

- *Type:* string

Change output style when executing tasks.

---

##### `taskRemoteNoCache`<sup>Optional</sup> <a name="taskRemoteNoCache" id="mise-projen.Settings.property.taskRemoteNoCache"></a>

```typescript
public readonly taskRemoteNoCache: boolean;
```

- *Type:* boolean

Mise will always fetch the latest tasks from the remote, by default the cache is used.

---

##### `taskRunAutoInstall`<sup>Optional</sup> <a name="taskRunAutoInstall" id="mise-projen.Settings.property.taskRunAutoInstall"></a>

```typescript
public readonly taskRunAutoInstall: boolean;
```

- *Type:* boolean

Automatically install missing tools when executing tasks.

---

##### `taskShowFullCmd`<sup>Optional</sup> <a name="taskShowFullCmd" id="mise-projen.Settings.property.taskShowFullCmd"></a>

```typescript
public readonly taskShowFullCmd: boolean;
```

- *Type:* boolean

Disable truncation of command lines in task execution output.

When true, the full command line will be shown.

---

##### `taskSkip`<sup>Optional</sup> <a name="taskSkip" id="mise-projen.Settings.property.taskSkip"></a>

```typescript
public readonly taskSkip: string[];
```

- *Type:* string[]

Tasks to skip when running `mise run`.

---

##### `taskSkipDepends`<sup>Optional</sup> <a name="taskSkipDepends" id="mise-projen.Settings.property.taskSkipDepends"></a>

```typescript
public readonly taskSkipDepends: boolean;
```

- *Type:* boolean

Run only specified tasks skipping all dependencies.

---

##### `taskTimeout`<sup>Optional</sup> <a name="taskTimeout" id="mise-projen.Settings.property.taskTimeout"></a>

```typescript
public readonly taskTimeout: string;
```

- *Type:* string

Default timeout for tasks.

Can be overridden by individual tasks.

---

##### `taskTimings`<sup>Optional</sup> <a name="taskTimings" id="mise-projen.Settings.property.taskTimings"></a>

```typescript
public readonly taskTimings: boolean;
```

- *Type:* boolean

Show completion message with elapsed time for each task on `mise run`.

Default shows when output type is `prefix`.

---

##### `teraV1`<sup>Optional</sup> <a name="teraV1" id="mise-projen.Settings.property.teraV1"></a>

```typescript
public readonly teraV1: boolean;
```

- *Type:* boolean

Use Tera v1 instead of Tera v2 for template rendering.

---

##### `terminalProgress`<sup>Optional</sup> <a name="terminalProgress" id="mise-projen.Settings.property.terminalProgress"></a>

```typescript
public readonly terminalProgress: boolean;
```

- *Type:* boolean

Enable terminal progress indicators (OSC 9;4) for compatible terminals.

---

##### `trace`<sup>Optional</sup> <a name="trace" id="mise-projen.Settings.property.trace"></a>

```typescript
public readonly trace: boolean;
```

- *Type:* boolean

Sets log level to trace.

---

##### `truncate`<sup>Optional</sup> <a name="truncate" id="mise-projen.Settings.property.truncate"></a>

```typescript
public readonly truncate: boolean;
```

- *Type:* boolean

Truncate long terminal output to fit the available width.

---

##### `trustedConfigPaths`<sup>Optional</sup> <a name="trustedConfigPaths" id="mise-projen.Settings.property.trustedConfigPaths"></a>

```typescript
public readonly trustedConfigPaths: string[];
```

- *Type:* string[]

This is a list of config paths that mise will automatically mark as trusted.

Any config files under these paths will be trusted without prompting. Set to `["/"]` to trust all config files, effectively disabling the trust mechanism. Paths are separated by the OS path separator when using the environment variable, `mise settings set`, or `mise settings add` (`:` on Unix, `;` on Windows).

---

##### `unixDefaultFileShellArgs`<sup>Optional</sup> <a name="unixDefaultFileShellArgs" id="mise-projen.Settings.property.unixDefaultFileShellArgs"></a>

```typescript
public readonly unixDefaultFileShellArgs: string;
```

- *Type:* string

Default shell arguments for Unix to be used for file commands.

For example, `sh` for sh.

---

##### `unixDefaultInlineShellArgs`<sup>Optional</sup> <a name="unixDefaultInlineShellArgs" id="mise-projen.Settings.property.unixDefaultInlineShellArgs"></a>

```typescript
public readonly unixDefaultInlineShellArgs: string;
```

- *Type:* string

Default shell arguments for Unix to be used for inline commands.

For example, `sh -c` for sh.

---

##### `upgrade`<sup>Optional</sup> <a name="upgrade" id="mise-projen.Settings.property.upgrade"></a>

```typescript
public readonly upgrade: SettingsUpgrade;
```

- *Type:* <a href="#mise-projen.SettingsUpgrade">SettingsUpgrade</a>

---

##### `urlReplacements`<sup>Optional</sup> <a name="urlReplacements" id="mise-projen.Settings.property.urlReplacements"></a>

```typescript
public readonly urlReplacements: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of URL patterns to replacement URLs applied to all requests.

---

##### `useFileShellForExecutableTasks`<sup>Optional</sup> <a name="useFileShellForExecutableTasks" id="mise-projen.Settings.property.useFileShellForExecutableTasks"></a>

```typescript
public readonly useFileShellForExecutableTasks: boolean;
```

- *Type:* boolean

Determines whether to use a specified shell for executing tasks in the tasks directory.

When set to true, the shell defined in the file will be used, or the default shell specified by `windows_default_file_shell_args` or `unix_default_file_shell_args` will be applied. If set to false, tasks will be executed directly as programs.

---

##### `useVersionsHost`<sup>Optional</sup> <a name="useVersionsHost" id="mise-projen.Settings.property.useVersionsHost"></a>

```typescript
public readonly useVersionsHost: boolean;
```

- *Type:* boolean

Set to false to disable using the mise-versions API for version lists, public GitHub release metadata, and GitHub artifact attestations.

---

##### `useVersionsHostTrack`<sup>Optional</sup> <a name="useVersionsHostTrack" id="mise-projen.Settings.property.useVersionsHostTrack"></a>

```typescript
public readonly useVersionsHostTrack: boolean;
```

- *Type:* boolean

Send anonymous download statistics when installing tools.

---

##### `verbose`<sup>Optional</sup> <a name="verbose" id="mise-projen.Settings.property.verbose"></a>

```typescript
public readonly verbose: boolean;
```

- *Type:* boolean

Shows more verbose output such as installation logs when installing tools.

---

##### `windowsDefaultFileShellArgs`<sup>Optional</sup> <a name="windowsDefaultFileShellArgs" id="mise-projen.Settings.property.windowsDefaultFileShellArgs"></a>

```typescript
public readonly windowsDefaultFileShellArgs: string;
```

- *Type:* string

Default shell arguments for Windows to be used for file commands.

For example, `cmd /c` for cmd.exe.

---

##### `windowsDefaultInlineShellArgs`<sup>Optional</sup> <a name="windowsDefaultInlineShellArgs" id="mise-projen.Settings.property.windowsDefaultInlineShellArgs"></a>

```typescript
public readonly windowsDefaultInlineShellArgs: string;
```

- *Type:* string

Default shell arguments for Windows to be used for inline commands.

For example, `cmd /c` for cmd.exe.

---

##### `windowsExecutableExtensions`<sup>Optional</sup> <a name="windowsExecutableExtensions" id="mise-projen.Settings.property.windowsExecutableExtensions"></a>

```typescript
public readonly windowsExecutableExtensions: string[];
```

- *Type:* string[]

List of executable extensions for Windows.

For example, `exe` for .exe files, `bat` for .bat files, and so on.

---

##### `windowsPowershellNoProfile`<sup>Optional</sup> <a name="windowsPowershellNoProfile" id="mise-projen.Settings.property.windowsPowershellNoProfile"></a>

```typescript
public readonly windowsPowershellNoProfile: boolean;
```

- *Type:* boolean

Pass `-NoProfile` to PowerShell (`pwsh`/`powershell`) shells that mise spawns for tasks and inline commands, so startup profiles are skipped.

---

##### `windowsShimMode`<sup>Optional</sup> <a name="windowsShimMode" id="mise-projen.Settings.property.windowsShimMode"></a>

```typescript
public readonly windowsShimMode: string;
```

- *Type:* string

Shim file mode for Windows.

Options: `exe`, `file`, `hardlink`, `symlink`.

---

##### `yes`<sup>Optional</sup> <a name="yes" id="mise-projen.Settings.property.yes"></a>

```typescript
public readonly yes: boolean;
```

- *Type:* boolean

This will automatically answer yes or no to prompts.

This is useful for scripting.

---

##### `zig`<sup>Optional</sup> <a name="zig" id="mise-projen.Settings.property.zig"></a>

```typescript
public readonly zig: SettingsZig;
```

- *Type:* <a href="#mise-projen.SettingsZig">SettingsZig</a>

---

### SettingsAge <a name="SettingsAge" id="mise-projen.SettingsAge"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsAge.Initializer"></a>

```typescript
import { SettingsAge } from 'mise-projen'

const settingsAge: SettingsAge = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsAge.property.identityFiles">identityFiles</a></code> | <code>string[]</code> | List of age identity files to use for decryption (encrypted shared dotfiles and the experimental `[env]` age directives). |
| <code><a href="#mise-projen.SettingsAge.property.keyFile">keyFile</a></code> | <code>string</code> | Path to the age private key file to use for encryption/decryption: the default recipient and identity for encrypted shared dotfiles and the key for the experimental `[env]` age directives. |
| <code><a href="#mise-projen.SettingsAge.property.sshIdentityFiles">sshIdentityFiles</a></code> | <code>string[]</code> | List of SSH identity files to use for age decryption (encrypted shared dotfiles and the experimental `[env]` age directives). |
| <code><a href="#mise-projen.SettingsAge.property.strict">strict</a></code> | <code>boolean</code> | If true, fail when age decryption fails (including when age is not available, the key is missing, or the key is invalid). |

---

##### `identityFiles`<sup>Optional</sup> <a name="identityFiles" id="mise-projen.SettingsAge.property.identityFiles"></a>

```typescript
public readonly identityFiles: string[];
```

- *Type:* string[]

List of age identity files to use for decryption (encrypted shared dotfiles and the experimental `[env]` age directives).

---

##### `keyFile`<sup>Optional</sup> <a name="keyFile" id="mise-projen.SettingsAge.property.keyFile"></a>

```typescript
public readonly keyFile: string;
```

- *Type:* string

Path to the age private key file to use for encryption/decryption: the default recipient and identity for encrypted shared dotfiles and the key for the experimental `[env]` age directives.

---

##### `sshIdentityFiles`<sup>Optional</sup> <a name="sshIdentityFiles" id="mise-projen.SettingsAge.property.sshIdentityFiles"></a>

```typescript
public readonly sshIdentityFiles: string[];
```

- *Type:* string[]

List of SSH identity files to use for age decryption (encrypted shared dotfiles and the experimental `[env]` age directives).

---

##### `strict`<sup>Optional</sup> <a name="strict" id="mise-projen.SettingsAge.property.strict"></a>

```typescript
public readonly strict: boolean;
```

- *Type:* boolean

If true, fail when age decryption fails (including when age is not available, the key is missing, or the key is invalid).

If false, skip decryption and continue in these cases.

---

### SettingsAqua <a name="SettingsAqua" id="mise-projen.SettingsAqua"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsAqua.Initializer"></a>

```typescript
import { SettingsAqua } from 'mise-projen'

const settingsAqua: SettingsAqua = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsAqua.property.bakedRegistry">bakedRegistry</a></code> | <code>boolean</code> | Use baked-in aqua registry. |
| <code><a href="#mise-projen.SettingsAqua.property.cosign">cosign</a></code> | <code>boolean</code> | Use cosign to verify aqua tool signatures. |
| <code><a href="#mise-projen.SettingsAqua.property.githubAttestations">githubAttestations</a></code> | <code>boolean</code> | Enable GitHub Artifact Attestations verification for aqua tools. |
| <code><a href="#mise-projen.SettingsAqua.property.minisign">minisign</a></code> | <code>boolean</code> | Use minisign to verify aqua tool signatures. |
| <code><a href="#mise-projen.SettingsAqua.property.registries">registries</a></code> | <code>string[]</code> | Aqua registry sources to load before the baked-in registry. |
| <code><a href="#mise-projen.SettingsAqua.property.registryCacheTtl">registryCacheTtl</a></code> | <code>string</code> | How long to cache downloaded aqua registry source files. |
| <code><a href="#mise-projen.SettingsAqua.property.registryUrl">registryUrl</a></code> | <code>string</code> | [deprecated] URL of an aqua registry repository to fetch. |
| <code><a href="#mise-projen.SettingsAqua.property.slsa">slsa</a></code> | <code>boolean</code> | Use SLSA to verify aqua tool signatures. |

---

##### `bakedRegistry`<sup>Optional</sup> <a name="bakedRegistry" id="mise-projen.SettingsAqua.property.bakedRegistry"></a>

```typescript
public readonly bakedRegistry: boolean;
```

- *Type:* boolean

Use baked-in aqua registry.

---

##### `cosign`<sup>Optional</sup> <a name="cosign" id="mise-projen.SettingsAqua.property.cosign"></a>

```typescript
public readonly cosign: boolean;
```

- *Type:* boolean

Use cosign to verify aqua tool signatures.

---

##### `githubAttestations`<sup>Optional</sup> <a name="githubAttestations" id="mise-projen.SettingsAqua.property.githubAttestations"></a>

```typescript
public readonly githubAttestations: boolean;
```

- *Type:* boolean

Enable GitHub Artifact Attestations verification for aqua tools.

---

##### `minisign`<sup>Optional</sup> <a name="minisign" id="mise-projen.SettingsAqua.property.minisign"></a>

```typescript
public readonly minisign: boolean;
```

- *Type:* boolean

Use minisign to verify aqua tool signatures.

---

##### `registries`<sup>Optional</sup> <a name="registries" id="mise-projen.SettingsAqua.property.registries"></a>

```typescript
public readonly registries: string[];
```

- *Type:* string[]

Aqua registry sources to load before the baked-in registry.

---

##### `registryCacheTtl`<sup>Optional</sup> <a name="registryCacheTtl" id="mise-projen.SettingsAqua.property.registryCacheTtl"></a>

```typescript
public readonly registryCacheTtl: string;
```

- *Type:* string

How long to cache downloaded aqua registry source files.

---

##### `registryUrl`<sup>Optional</sup> <a name="registryUrl" id="mise-projen.SettingsAqua.property.registryUrl"></a>

```typescript
public readonly registryUrl: string;
```

- *Type:* string

[deprecated] URL of an aqua registry repository to fetch.

---

##### `slsa`<sup>Optional</sup> <a name="slsa" id="mise-projen.SettingsAqua.property.slsa"></a>

```typescript
public readonly slsa: boolean;
```

- *Type:* boolean

Use SLSA to verify aqua tool signatures.

---

### SettingsCargo <a name="SettingsCargo" id="mise-projen.SettingsCargo"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsCargo.Initializer"></a>

```typescript
import { SettingsCargo } from 'mise-projen'

const settingsCargo: SettingsCargo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsCargo.property.binstall">binstall</a></code> | <code>boolean</code> | Use cargo-binstall instead of cargo install if available. |
| <code><a href="#mise-projen.SettingsCargo.property.binstallNative">binstallNative</a></code> | <code>boolean</code> | Use mise's native cargo binary installer when cargo-binstall is unavailable. |
| <code><a href="#mise-projen.SettingsCargo.property.binstallOnly">binstallOnly</a></code> | <code>boolean</code> | Require cargo-binstall for Cargo tools without an explicit Git source. |
| <code><a href="#mise-projen.SettingsCargo.property.binstallQuickinstall">binstallQuickinstall</a></code> | <code>boolean</code> | Allow cargo-binstall to use third-party cargo-quickinstall artifacts. |
| <code><a href="#mise-projen.SettingsCargo.property.registryName">registryName</a></code> | <code>string</code> | Name of the cargo registry to use. |

---

##### `binstall`<sup>Optional</sup> <a name="binstall" id="mise-projen.SettingsCargo.property.binstall"></a>

```typescript
public readonly binstall: boolean;
```

- *Type:* boolean

Use cargo-binstall instead of cargo install if available.

---

##### `binstallNative`<sup>Optional</sup> <a name="binstallNative" id="mise-projen.SettingsCargo.property.binstallNative"></a>

```typescript
public readonly binstallNative: boolean;
```

- *Type:* boolean

Use mise's native cargo binary installer when cargo-binstall is unavailable.

---

##### `binstallOnly`<sup>Optional</sup> <a name="binstallOnly" id="mise-projen.SettingsCargo.property.binstallOnly"></a>

```typescript
public readonly binstallOnly: boolean;
```

- *Type:* boolean

Require cargo-binstall for Cargo tools without an explicit Git source.

Fail if no prebuilt binary is available or if tool options require cargo install.

---

##### `binstallQuickinstall`<sup>Optional</sup> <a name="binstallQuickinstall" id="mise-projen.SettingsCargo.property.binstallQuickinstall"></a>

```typescript
public readonly binstallQuickinstall: boolean;
```

- *Type:* boolean

Allow cargo-binstall to use third-party cargo-quickinstall artifacts.

---

##### `registryName`<sup>Optional</sup> <a name="registryName" id="mise-projen.SettingsCargo.property.registryName"></a>

```typescript
public readonly registryName: string;
```

- *Type:* string

Name of the cargo registry to use.

---

### SettingsConda <a name="SettingsConda" id="mise-projen.SettingsConda"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsConda.Initializer"></a>

```typescript
import { SettingsConda } from 'mise-projen'

const settingsConda: SettingsConda = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsConda.property.channel">channel</a></code> | <code>string</code> | Default channel for conda packages. |

---

##### `channel`<sup>Optional</sup> <a name="channel" id="mise-projen.SettingsConda.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

Default channel for conda packages.

---

### SettingsDotfiles <a name="SettingsDotfiles" id="mise-projen.SettingsDotfiles"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsDotfiles.Initializer"></a>

```typescript
import { SettingsDotfiles } from 'mise-projen'

const settingsDotfiles: SettingsDotfiles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsDotfiles.property.defaultMode">defaultMode</a></code> | <code>string</code> | Default mode for dotfile entries when mode is omitted. |
| <code><a href="#mise-projen.SettingsDotfiles.property.relativeSymlinks">relativeSymlinks</a></code> | <code>boolean</code> | Create dotfile symlinks with relative targets instead of absolute ones. |
| <code><a href="#mise-projen.SettingsDotfiles.property.root">root</a></code> | <code>string</code> | Root directory used for implied dotfile sources. |

---

##### `defaultMode`<sup>Optional</sup> <a name="defaultMode" id="mise-projen.SettingsDotfiles.property.defaultMode"></a>

```typescript
public readonly defaultMode: string;
```

- *Type:* string

Default mode for dotfile entries when mode is omitted.

Options: `symlink`, `symlink-each`, `copy`, `template`.

---

##### `relativeSymlinks`<sup>Optional</sup> <a name="relativeSymlinks" id="mise-projen.SettingsDotfiles.property.relativeSymlinks"></a>

```typescript
public readonly relativeSymlinks: boolean;
```

- *Type:* boolean

Create dotfile symlinks with relative targets instead of absolute ones.

---

##### `root`<sup>Optional</sup> <a name="root" id="mise-projen.SettingsDotfiles.property.root"></a>

```typescript
public readonly root: string;
```

- *Type:* string

Root directory used for implied dotfile sources.

---

### SettingsDotnet <a name="SettingsDotnet" id="mise-projen.SettingsDotnet"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsDotnet.Initializer"></a>

```typescript
import { SettingsDotnet } from 'mise-projen'

const settingsDotnet: SettingsDotnet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsDotnet.property.cliTelemetryOptout">cliTelemetryOptout</a></code> | <code>boolean</code> | Set DOTNET_CLI_TELEMETRY_OPTOUT to opt out of .NET CLI telemetry. |
| <code><a href="#mise-projen.SettingsDotnet.property.dotnetRoot">dotnetRoot</a></code> | <code>string</code> | Path to the shared .NET SDK root directory. |
| <code><a href="#mise-projen.SettingsDotnet.property.isolated">isolated</a></code> | <code>boolean</code> | Install each .NET SDK version in its own isolated directory. |
| <code><a href="#mise-projen.SettingsDotnet.property.packageFlags">packageFlags</a></code> | <code>string[]</code> | [deprecated] Extends dotnet search and install abilities. |
| <code><a href="#mise-projen.SettingsDotnet.property.registryUrl">registryUrl</a></code> | <code>string</code> | NuGet service index used to discover dotnet tool versions. |

---

##### `cliTelemetryOptout`<sup>Optional</sup> <a name="cliTelemetryOptout" id="mise-projen.SettingsDotnet.property.cliTelemetryOptout"></a>

```typescript
public readonly cliTelemetryOptout: boolean;
```

- *Type:* boolean

Set DOTNET_CLI_TELEMETRY_OPTOUT to opt out of .NET CLI telemetry.

---

##### `dotnetRoot`<sup>Optional</sup> <a name="dotnetRoot" id="mise-projen.SettingsDotnet.property.dotnetRoot"></a>

```typescript
public readonly dotnetRoot: string;
```

- *Type:* string

Path to the shared .NET SDK root directory.

---

##### `isolated`<sup>Optional</sup> <a name="isolated" id="mise-projen.SettingsDotnet.property.isolated"></a>

```typescript
public readonly isolated: boolean;
```

- *Type:* boolean

Install each .NET SDK version in its own isolated directory.

---

##### `packageFlags`<sup>Optional</sup> <a name="packageFlags" id="mise-projen.SettingsDotnet.property.packageFlags"></a>

```typescript
public readonly packageFlags: string[];
```

- *Type:* string[]

[deprecated] Extends dotnet search and install abilities.

---

##### `registryUrl`<sup>Optional</sup> <a name="registryUrl" id="mise-projen.SettingsDotnet.property.registryUrl"></a>

```typescript
public readonly registryUrl: string;
```

- *Type:* string

NuGet service index used to discover dotnet tool versions.

---

### SettingsErlang <a name="SettingsErlang" id="mise-projen.SettingsErlang"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsErlang.Initializer"></a>

```typescript
import { SettingsErlang } from 'mise-projen'

const settingsErlang: SettingsErlang = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsErlang.property.compile">compile</a></code> | <code>boolean</code> | If true, compile erlang from source. |
| <code><a href="#mise-projen.SettingsErlang.property.precompiledOs">precompiledOs</a></code> | <code>string</code> | Ubuntu release target to use for precompiled Erlang builds from builds.hex.pm. |

---

##### `compile`<sup>Optional</sup> <a name="compile" id="mise-projen.SettingsErlang.property.compile"></a>

```typescript
public readonly compile: boolean;
```

- *Type:* boolean

If true, compile erlang from source.

If false, use precompiled binaries. If not set, use precompiled binaries if available.

---

##### `precompiledOs`<sup>Optional</sup> <a name="precompiledOs" id="mise-projen.SettingsErlang.property.precompiledOs"></a>

```typescript
public readonly precompiledOs: string;
```

- *Type:* string

Ubuntu release target to use for precompiled Erlang builds from builds.hex.pm.

---

### SettingsForgejo <a name="SettingsForgejo" id="mise-projen.SettingsForgejo"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsForgejo.Initializer"></a>

```typescript
import { SettingsForgejo } from 'mise-projen'

const settingsForgejo: SettingsForgejo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsForgejo.property.credentialCommand">credentialCommand</a></code> | <code>string</code> | Shell command to run to obtain a Forgejo token for mise. |
| <code><a href="#mise-projen.SettingsForgejo.property.fjCliTokens">fjCliTokens</a></code> | <code>boolean</code> | Read Forgejo tokens from the fj CLI config. |
| <code><a href="#mise-projen.SettingsForgejo.property.useGitCredentials">useGitCredentials</a></code> | <code>boolean</code> | Use git credential helpers to obtain Forgejo tokens. |

---

##### `credentialCommand`<sup>Optional</sup> <a name="credentialCommand" id="mise-projen.SettingsForgejo.property.credentialCommand"></a>

```typescript
public readonly credentialCommand: string;
```

- *Type:* string

Shell command to run to obtain a Forgejo token for mise.

---

##### `fjCliTokens`<sup>Optional</sup> <a name="fjCliTokens" id="mise-projen.SettingsForgejo.property.fjCliTokens"></a>

```typescript
public readonly fjCliTokens: boolean;
```

- *Type:* boolean

Read Forgejo tokens from the fj CLI config.

---

##### `useGitCredentials`<sup>Optional</sup> <a name="useGitCredentials" id="mise-projen.SettingsForgejo.property.useGitCredentials"></a>

```typescript
public readonly useGitCredentials: boolean;
```

- *Type:* boolean

Use git credential helpers to obtain Forgejo tokens.

---

### SettingsGithub <a name="SettingsGithub" id="mise-projen.SettingsGithub"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsGithub.Initializer"></a>

```typescript
import { SettingsGithub } from 'mise-projen'

const settingsGithub: SettingsGithub = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsGithub.property.credentialCommand">credentialCommand</a></code> | <code>string</code> | Shell command to run to obtain a GitHub token for mise. |
| <code><a href="#mise-projen.SettingsGithub.property.ghCliTokens">ghCliTokens</a></code> | <code>boolean</code> | Read GitHub tokens from the gh CLI's hosts.yml config. |
| <code><a href="#mise-projen.SettingsGithub.property.githubAttestations">githubAttestations</a></code> | <code>boolean</code> | Enable GitHub Artifact Attestations verification for github backend tools. |
| <code><a href="#mise-projen.SettingsGithub.property.oauthApiUrl">oauthApiUrl</a></code> | <code>string</code> | GitHub API base URL for native OAuth token validation. |
| <code><a href="#mise-projen.SettingsGithub.property.oauthAuthUrl">oauthAuthUrl</a></code> | <code>string</code> | GitHub OAuth endpoint base URL for native device-flow tokens. |
| <code><a href="#mise-projen.SettingsGithub.property.oauthClientId">oauthClientId</a></code> | <code>string</code> | GitHub App client ID for native OAuth device-flow tokens. |
| <code><a href="#mise-projen.SettingsGithub.property.oauthExportEnv">oauthExportEnv</a></code> | <code>string</code> | Environment variable name to export the native GitHub OAuth token under (empty disables). |
| <code><a href="#mise-projen.SettingsGithub.property.oauthOpenBrowser">oauthOpenBrowser</a></code> | <code>boolean</code> | Open the browser during native GitHub OAuth device flow. |
| <code><a href="#mise-projen.SettingsGithub.property.oauthScopes">oauthScopes</a></code> | <code>string</code> | OAuth scopes requested for native GitHub device-flow tokens. |
| <code><a href="#mise-projen.SettingsGithub.property.slsa">slsa</a></code> | <code>boolean</code> | Enable SLSA provenance verification for github backend tools. |
| <code><a href="#mise-projen.SettingsGithub.property.useGitCredentials">useGitCredentials</a></code> | <code>boolean</code> | Use git credential helpers to obtain GitHub tokens. |

---

##### `credentialCommand`<sup>Optional</sup> <a name="credentialCommand" id="mise-projen.SettingsGithub.property.credentialCommand"></a>

```typescript
public readonly credentialCommand: string;
```

- *Type:* string

Shell command to run to obtain a GitHub token for mise.

---

##### `ghCliTokens`<sup>Optional</sup> <a name="ghCliTokens" id="mise-projen.SettingsGithub.property.ghCliTokens"></a>

```typescript
public readonly ghCliTokens: boolean;
```

- *Type:* boolean

Read GitHub tokens from the gh CLI's hosts.yml config.

---

##### `githubAttestations`<sup>Optional</sup> <a name="githubAttestations" id="mise-projen.SettingsGithub.property.githubAttestations"></a>

```typescript
public readonly githubAttestations: boolean;
```

- *Type:* boolean

Enable GitHub Artifact Attestations verification for github backend tools.

---

##### `oauthApiUrl`<sup>Optional</sup> <a name="oauthApiUrl" id="mise-projen.SettingsGithub.property.oauthApiUrl"></a>

```typescript
public readonly oauthApiUrl: string;
```

- *Type:* string

GitHub API base URL for native OAuth token validation.

---

##### `oauthAuthUrl`<sup>Optional</sup> <a name="oauthAuthUrl" id="mise-projen.SettingsGithub.property.oauthAuthUrl"></a>

```typescript
public readonly oauthAuthUrl: string;
```

- *Type:* string

GitHub OAuth endpoint base URL for native device-flow tokens.

---

##### `oauthClientId`<sup>Optional</sup> <a name="oauthClientId" id="mise-projen.SettingsGithub.property.oauthClientId"></a>

```typescript
public readonly oauthClientId: string;
```

- *Type:* string

GitHub App client ID for native OAuth device-flow tokens.

---

##### `oauthExportEnv`<sup>Optional</sup> <a name="oauthExportEnv" id="mise-projen.SettingsGithub.property.oauthExportEnv"></a>

```typescript
public readonly oauthExportEnv: string;
```

- *Type:* string

Environment variable name to export the native GitHub OAuth token under (empty disables).

---

##### `oauthOpenBrowser`<sup>Optional</sup> <a name="oauthOpenBrowser" id="mise-projen.SettingsGithub.property.oauthOpenBrowser"></a>

```typescript
public readonly oauthOpenBrowser: boolean;
```

- *Type:* boolean

Open the browser during native GitHub OAuth device flow.

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="mise-projen.SettingsGithub.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string;
```

- *Type:* string

OAuth scopes requested for native GitHub device-flow tokens.

---

##### `slsa`<sup>Optional</sup> <a name="slsa" id="mise-projen.SettingsGithub.property.slsa"></a>

```typescript
public readonly slsa: boolean;
```

- *Type:* boolean

Enable SLSA provenance verification for github backend tools.

---

##### `useGitCredentials`<sup>Optional</sup> <a name="useGitCredentials" id="mise-projen.SettingsGithub.property.useGitCredentials"></a>

```typescript
public readonly useGitCredentials: boolean;
```

- *Type:* boolean

Use git credential helpers to obtain GitHub tokens.

---

### SettingsGithubRelay <a name="SettingsGithubRelay" id="mise-projen.SettingsGithubRelay"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsGithubRelay.Initializer"></a>

```typescript
import { SettingsGithubRelay } from 'mise-projen'

const settingsGithubRelay: SettingsGithubRelay = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsGithubRelay.property.concurrency">concurrency</a></code> | <code>number</code> | Maximum simultaneous GitHub relay requests (1-32); |
| <code><a href="#mise-projen.SettingsGithubRelay.property.logFormat">logFormat</a></code> | <code>string</code> | GitHub relay request and summary output format: text or jsonl. |
| <code><a href="#mise-projen.SettingsGithubRelay.property.logRequests">logRequests</a></code> | <code>boolean</code> | Log sanitized GitHub relay requests on the initiating machine's stderr. |
| <code><a href="#mise-projen.SettingsGithubRelay.property.maxDuration">maxDuration</a></code> | <code>string</code> | Maximum borrowed GitHub access duration; |
| <code><a href="#mise-projen.SettingsGithubRelay.property.requestTimeout">requestTimeout</a></code> | <code>string</code> | Total time limit for a relayed request, including response streaming. |

---

##### `concurrency`<sup>Optional</sup> <a name="concurrency" id="mise-projen.SettingsGithubRelay.property.concurrency"></a>

```typescript
public readonly concurrency: number;
```

- *Type:* number

Maximum simultaneous GitHub relay requests (1-32);

excess requests fail closed.

---

##### `logFormat`<sup>Optional</sup> <a name="logFormat" id="mise-projen.SettingsGithubRelay.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string

GitHub relay request and summary output format: text or jsonl.

---

##### `logRequests`<sup>Optional</sup> <a name="logRequests" id="mise-projen.SettingsGithubRelay.property.logRequests"></a>

```typescript
public readonly logRequests: boolean;
```

- *Type:* boolean

Log sanitized GitHub relay requests on the initiating machine's stderr.

---

##### `maxDuration`<sup>Optional</sup> <a name="maxDuration" id="mise-projen.SettingsGithubRelay.property.maxDuration"></a>

```typescript
public readonly maxDuration: string;
```

- *Type:* string

Maximum borrowed GitHub access duration;

0s means until the session ends.

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="mise-projen.SettingsGithubRelay.property.requestTimeout"></a>

```typescript
public readonly requestTimeout: string;
```

- *Type:* string

Total time limit for a relayed request, including response streaming.

---

### SettingsGitlab <a name="SettingsGitlab" id="mise-projen.SettingsGitlab"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsGitlab.Initializer"></a>

```typescript
import { SettingsGitlab } from 'mise-projen'

const settingsGitlab: SettingsGitlab = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsGitlab.property.credentialCommand">credentialCommand</a></code> | <code>string</code> | Shell command to run to obtain a GitLab token for mise. |
| <code><a href="#mise-projen.SettingsGitlab.property.glabCliTokens">glabCliTokens</a></code> | <code>boolean</code> | Read GitLab tokens from the glab CLI config. |
| <code><a href="#mise-projen.SettingsGitlab.property.useGitCredentials">useGitCredentials</a></code> | <code>boolean</code> | Use git credential helpers to obtain GitLab tokens. |

---

##### `credentialCommand`<sup>Optional</sup> <a name="credentialCommand" id="mise-projen.SettingsGitlab.property.credentialCommand"></a>

```typescript
public readonly credentialCommand: string;
```

- *Type:* string

Shell command to run to obtain a GitLab token for mise.

---

##### `glabCliTokens`<sup>Optional</sup> <a name="glabCliTokens" id="mise-projen.SettingsGitlab.property.glabCliTokens"></a>

```typescript
public readonly glabCliTokens: boolean;
```

- *Type:* boolean

Read GitLab tokens from the glab CLI config.

---

##### `useGitCredentials`<sup>Optional</sup> <a name="useGitCredentials" id="mise-projen.SettingsGitlab.property.useGitCredentials"></a>

```typescript
public readonly useGitCredentials: boolean;
```

- *Type:* boolean

Use git credential helpers to obtain GitLab tokens.

---

### SettingsGo <a name="SettingsGo" id="mise-projen.SettingsGo"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsGo.Initializer"></a>

```typescript
import { SettingsGo } from 'mise-projen'

const settingsGo: SettingsGo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsGo.property.defaultPackagesFile">defaultPackagesFile</a></code> | <code>string</code> | Path to a file containing default go packages to install when installing go. |
| <code><a href="#mise-projen.SettingsGo.property.downloadMirror">downloadMirror</a></code> | <code>string</code> | Mirror to download go sdk tarballs from. |
| <code><a href="#mise-projen.SettingsGo.property.repo">repo</a></code> | <code>string</code> | URL to fetch go from. |
| <code><a href="#mise-projen.SettingsGo.property.setGobin">setGobin</a></code> | <code>boolean</code> | Changes where `go install` installs binaries to. |
| <code><a href="#mise-projen.SettingsGo.property.setGopath">setGopath</a></code> | <code>boolean</code> | [deprecated] Set to true to set GOPATH=~/.local/share/mise/installs/go/.../packages. |
| <code><a href="#mise-projen.SettingsGo.property.setGoroot">setGoroot</a></code> | <code>boolean</code> | Sets GOROOT=~/.local/share/mise/installs/go/.../. |
| <code><a href="#mise-projen.SettingsGo.property.skipChecksum">skipChecksum</a></code> | <code>boolean</code> | Set to true to skip checksum verification when downloading go sdk tarballs. |

---

##### `defaultPackagesFile`<sup>Optional</sup> <a name="defaultPackagesFile" id="mise-projen.SettingsGo.property.defaultPackagesFile"></a>

```typescript
public readonly defaultPackagesFile: string;
```

- *Type:* string

Path to a file containing default go packages to install when installing go.

---

##### `downloadMirror`<sup>Optional</sup> <a name="downloadMirror" id="mise-projen.SettingsGo.property.downloadMirror"></a>

```typescript
public readonly downloadMirror: string;
```

- *Type:* string

Mirror to download go sdk tarballs from.

---

##### `repo`<sup>Optional</sup> <a name="repo" id="mise-projen.SettingsGo.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

URL to fetch go from.

---

##### `setGobin`<sup>Optional</sup> <a name="setGobin" id="mise-projen.SettingsGo.property.setGobin"></a>

```typescript
public readonly setGobin: boolean;
```

- *Type:* boolean

Changes where `go install` installs binaries to.

---

##### `setGopath`<sup>Optional</sup> <a name="setGopath" id="mise-projen.SettingsGo.property.setGopath"></a>

```typescript
public readonly setGopath: boolean;
```

- *Type:* boolean

[deprecated] Set to true to set GOPATH=~/.local/share/mise/installs/go/.../packages.

---

##### `setGoroot`<sup>Optional</sup> <a name="setGoroot" id="mise-projen.SettingsGo.property.setGoroot"></a>

```typescript
public readonly setGoroot: boolean;
```

- *Type:* boolean

Sets GOROOT=~/.local/share/mise/installs/go/.../.

---

##### `skipChecksum`<sup>Optional</sup> <a name="skipChecksum" id="mise-projen.SettingsGo.property.skipChecksum"></a>

```typescript
public readonly skipChecksum: boolean;
```

- *Type:* boolean

Set to true to skip checksum verification when downloading go sdk tarballs.

---

### SettingsHistory <a name="SettingsHistory" id="mise-projen.SettingsHistory"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsHistory.Initializer"></a>

```typescript
import { SettingsHistory } from 'mise-projen'

const settingsHistory: SettingsHistory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsHistory.property.allowPlaintextHistory">allowPlaintextHistory</a></code> | <code>boolean</code> | Allow publishing history that contains unencrypted versions of files now marked for encryption. |
| <code><a href="#mise-projen.SettingsHistory.property.describeCommand">describeCommand</a></code> | <code>string</code> | A command that names commits the watcher saves (an agent, say): it gets one JSON object on stdin (uuid, trigger, the computed description, changed tracked paths, and a unified diff of changed unencrypted files, at most 64 KiB) and prints one line of at most 200 characters, which becomes the description. |
| <code><a href="#mise-projen.SettingsHistory.property.enabled">enabled</a></code> | <code>boolean</code> | Record ordinary Git commits for explicitly tracked files around bootstrap operations and on explicit saves. |
| <code><a href="#mise-projen.SettingsHistory.property.fetchInterval">fetchInterval</a></code> | <code>string</code> | How often the history watcher fetches the origin branch. |
| <code><a href="#mise-projen.SettingsHistory.property.notify">notify</a></code> | <code>boolean</code> | Show a desktop notification when conflicts pause sharing for the setup. |
| <code><a href="#mise-projen.SettingsHistory.property.sync">sync</a></code> | <code><a href="#mise-projen.SettingsHistorySync">SettingsHistorySync</a></code> | What the history watcher does with a connected setup repository on its own: `sync` publishes after saves, fetches periodically, and applies incoming changes. |
| <code><a href="#mise-projen.SettingsHistory.property.syncInterval">syncInterval</a></code> | <code>string</code> | How soon after a save the history watcher publishes to the setup repository, at most this often. |
| <code><a href="#mise-projen.SettingsHistory.property.watch">watch</a></code> | <code><a href="#mise-projen.SettingsHistoryWatch">SettingsHistoryWatch</a></code> | *No description.* |

---

##### `allowPlaintextHistory`<sup>Optional</sup> <a name="allowPlaintextHistory" id="mise-projen.SettingsHistory.property.allowPlaintextHistory"></a>

```typescript
public readonly allowPlaintextHistory: boolean;
```

- *Type:* boolean

Allow publishing history that contains unencrypted versions of files now marked for encryption.

---

##### `describeCommand`<sup>Optional</sup> <a name="describeCommand" id="mise-projen.SettingsHistory.property.describeCommand"></a>

```typescript
public readonly describeCommand: string;
```

- *Type:* string

A command that names commits the watcher saves (an agent, say): it gets one JSON object on stdin (uuid, trigger, the computed description, changed tracked paths, and a unified diff of changed unencrypted files, at most 64 KiB) and prints one line of at most 200 characters, which becomes the description.

Empty: computed descriptions only.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="mise-projen.SettingsHistory.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

Record ordinary Git commits for explicitly tracked files around bootstrap operations and on explicit saves.

---

##### `fetchInterval`<sup>Optional</sup> <a name="fetchInterval" id="mise-projen.SettingsHistory.property.fetchInterval"></a>

```typescript
public readonly fetchInterval: string;
```

- *Type:* string

How often the history watcher fetches the origin branch.

Values below one second use one second; use history.sync = 'manual' to disable automatic synchronization.

---

##### `notify`<sup>Optional</sup> <a name="notify" id="mise-projen.SettingsHistory.property.notify"></a>

```typescript
public readonly notify: boolean;
```

- *Type:* boolean

Show a desktop notification when conflicts pause sharing for the setup.

Enabled by default; retries stay silent until sharing recovers, and a notifier that is missing or failing never holds up history or sync.

---

##### `sync`<sup>Optional</sup> <a name="sync" id="mise-projen.SettingsHistory.property.sync"></a>

```typescript
public readonly sync: SettingsHistorySync;
```

- *Type:* <a href="#mise-projen.SettingsHistorySync">SettingsHistorySync</a>

What the history watcher does with a connected setup repository on its own: `sync` publishes after saves, fetches periodically, and applies incoming changes.

Any conflict pauses publication and incoming application for the entire setup; local commits and fetching continue. `fetch-only` only fetches; `manual` does nothing automatically. `mise bootstrap dotfiles sync` and `pull` work on request in every mode.

---

##### `syncInterval`<sup>Optional</sup> <a name="syncInterval" id="mise-projen.SettingsHistory.property.syncInterval"></a>

```typescript
public readonly syncInterval: string;
```

- *Type:* string

How soon after a save the history watcher publishes to the setup repository, at most this often.

---

##### `watch`<sup>Optional</sup> <a name="watch" id="mise-projen.SettingsHistory.property.watch"></a>

```typescript
public readonly watch: SettingsHistoryWatch;
```

- *Type:* <a href="#mise-projen.SettingsHistoryWatch">SettingsHistoryWatch</a>

---

### SettingsHistoryWatch <a name="SettingsHistoryWatch" id="mise-projen.SettingsHistoryWatch"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsHistoryWatch.Initializer"></a>

```typescript
import { SettingsHistoryWatch } from 'mise-projen'

const settingsHistoryWatch: SettingsHistoryWatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsHistoryWatch.property.debounce">debounce</a></code> | <code>string</code> | How long a changed file must stay quiet before the history watcher saves it (the base autosave interval). |
| <code><a href="#mise-projen.SettingsHistoryWatch.property.maxInterval">maxInterval</a></code> | <code>string</code> | The longest autosave interval the history watcher stretches a constantly changing file to. |
| <code><a href="#mise-projen.SettingsHistoryWatch.property.reconcile">reconcile</a></code> | <code>string</code> | How often the history watcher rescans the whole tracked set for changes its watches missed. |

---

##### `debounce`<sup>Optional</sup> <a name="debounce" id="mise-projen.SettingsHistoryWatch.property.debounce"></a>

```typescript
public readonly debounce: string;
```

- *Type:* string

How long a changed file must stay quiet before the history watcher saves it (the base autosave interval).

A file that keeps changing is stretched on its own and never delays the others.

---

##### `maxInterval`<sup>Optional</sup> <a name="maxInterval" id="mise-projen.SettingsHistoryWatch.property.maxInterval"></a>

```typescript
public readonly maxInterval: string;
```

- *Type:* string

The longest autosave interval the history watcher stretches a constantly changing file to.

Sustained churn doubles a file's own interval up to this; a settled file is saved promptly again, and a sustained quiet period resets it.

---

##### `reconcile`<sup>Optional</sup> <a name="reconcile" id="mise-projen.SettingsHistoryWatch.property.reconcile"></a>

```typescript
public readonly reconcile: string;
```

- *Type:* string

How often the history watcher rescans the whole tracked set for changes its watches missed.

`0` disables periodic reconciliation (startup and configuration changes still reconcile).

---

### SettingsHookEnv <a name="SettingsHookEnv" id="mise-projen.SettingsHookEnv"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsHookEnv.Initializer"></a>

```typescript
import { SettingsHookEnv } from 'mise-projen'

const settingsHookEnv: SettingsHookEnv = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsHookEnv.property.cacheTtl">cacheTtl</a></code> | <code>string</code> | Cache hook-env directory checks for this duration. |
| <code><a href="#mise-projen.SettingsHookEnv.property.chpwdOnly">chpwdOnly</a></code> | <code>boolean</code> | Only run hook-env checks on directory change, not on every prompt. |

---

##### `cacheTtl`<sup>Optional</sup> <a name="cacheTtl" id="mise-projen.SettingsHookEnv.property.cacheTtl"></a>

```typescript
public readonly cacheTtl: string;
```

- *Type:* string

Cache hook-env directory checks for this duration.

Useful for slow filesystems like NFS.

---

##### `chpwdOnly`<sup>Optional</sup> <a name="chpwdOnly" id="mise-projen.SettingsHookEnv.property.chpwdOnly"></a>

```typescript
public readonly chpwdOnly: boolean;
```

- *Type:* boolean

Only run hook-env checks on directory change, not on every prompt.

---

### SettingsJava <a name="SettingsJava" id="mise-projen.SettingsJava"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsJava.Initializer"></a>

```typescript
import { SettingsJava } from 'mise-projen'

const settingsJava: SettingsJava = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsJava.property.shorthandVendor">shorthandVendor</a></code> | <code>string</code> | Shorthand for Java. |

---

##### `shorthandVendor`<sup>Optional</sup> <a name="shorthandVendor" id="mise-projen.SettingsJava.property.shorthandVendor"></a>

```typescript
public readonly shorthandVendor: string;
```

- *Type:* string

Shorthand for Java.

Used when installing Java without a vendor prefix.

---

### SettingsNode <a name="SettingsNode" id="mise-projen.SettingsNode"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsNode.Initializer"></a>

```typescript
import { SettingsNode } from 'mise-projen'

const settingsNode: SettingsNode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsNode.property.applyPatches">applyPatches</a></code> | <code>string</code> | A list of patch files or URLs to apply to node source. |
| <code><a href="#mise-projen.SettingsNode.property.cflags">cflags</a></code> | <code>string</code> | Additional CFLAGS options (e.g., to override -O3). |
| <code><a href="#mise-projen.SettingsNode.property.compile">compile</a></code> | <code>boolean</code> | Compile node from source. |
| <code><a href="#mise-projen.SettingsNode.property.concurrency">concurrency</a></code> | <code>number</code> | How many jobs should be used in compilation. |
| <code><a href="#mise-projen.SettingsNode.property.configureOpts">configureOpts</a></code> | <code>string</code> | Additional ./configure options. |
| <code><a href="#mise-projen.SettingsNode.property.corepack">corepack</a></code> | <code>boolean</code> | Installs the default corepack shims after installing any node version. |
| <code><a href="#mise-projen.SettingsNode.property.defaultPackagesFile">defaultPackagesFile</a></code> | <code>string</code> | Path to a file containing default npm packages to install. |
| <code><a href="#mise-projen.SettingsNode.property.flavor">flavor</a></code> | <code>string</code> | Install a specific node flavor like glibc-217 or musl. |
| <code><a href="#mise-projen.SettingsNode.property.gpgVerify">gpgVerify</a></code> | <code>boolean</code> | Verify OpenPGP signatures for node (built-in, no external gpg required). |
| <code><a href="#mise-projen.SettingsNode.property.make">make</a></code> | <code>string</code> | Make command to use. |
| <code><a href="#mise-projen.SettingsNode.property.makeInstallOpts">makeInstallOpts</a></code> | <code>string</code> | Additional make install options. |
| <code><a href="#mise-projen.SettingsNode.property.makeOpts">makeOpts</a></code> | <code>string</code> | Additional make options. |
| <code><a href="#mise-projen.SettingsNode.property.mirrorUrl">mirrorUrl</a></code> | <code>string</code> | Mirror to download node tarballs from. |
| <code><a href="#mise-projen.SettingsNode.property.ninja">ninja</a></code> | <code>boolean</code> | Use ninja instead of make to compile node. |
| <code><a href="#mise-projen.SettingsNode.property.nodenvRoot">nodenvRoot</a></code> | <code>string</code> | Directory for nodenv. |
| <code><a href="#mise-projen.SettingsNode.property.npmShim">npmShim</a></code> | <code>boolean</code> | Install a bash wrapper at bin/npm that triggers `mise reshim` after `npm install -g`. |
| <code><a href="#mise-projen.SettingsNode.property.nvmDir">nvmDir</a></code> | <code>string</code> | Directory for nvm. |
| <code><a href="#mise-projen.SettingsNode.property.verify">verify</a></code> | <code>boolean</code> | Verify the downloaded assets using GPG. |

---

##### `applyPatches`<sup>Optional</sup> <a name="applyPatches" id="mise-projen.SettingsNode.property.applyPatches"></a>

```typescript
public readonly applyPatches: string;
```

- *Type:* string

A list of patch files or URLs to apply to node source.

---

##### `cflags`<sup>Optional</sup> <a name="cflags" id="mise-projen.SettingsNode.property.cflags"></a>

```typescript
public readonly cflags: string;
```

- *Type:* string

Additional CFLAGS options (e.g., to override -O3).

---

##### `compile`<sup>Optional</sup> <a name="compile" id="mise-projen.SettingsNode.property.compile"></a>

```typescript
public readonly compile: boolean;
```

- *Type:* boolean

Compile node from source.

---

##### `concurrency`<sup>Optional</sup> <a name="concurrency" id="mise-projen.SettingsNode.property.concurrency"></a>

```typescript
public readonly concurrency: number;
```

- *Type:* number

How many jobs should be used in compilation.

---

##### `configureOpts`<sup>Optional</sup> <a name="configureOpts" id="mise-projen.SettingsNode.property.configureOpts"></a>

```typescript
public readonly configureOpts: string;
```

- *Type:* string

Additional ./configure options.

---

##### `corepack`<sup>Optional</sup> <a name="corepack" id="mise-projen.SettingsNode.property.corepack"></a>

```typescript
public readonly corepack: boolean;
```

- *Type:* boolean

Installs the default corepack shims after installing any node version.

---

##### `defaultPackagesFile`<sup>Optional</sup> <a name="defaultPackagesFile" id="mise-projen.SettingsNode.property.defaultPackagesFile"></a>

```typescript
public readonly defaultPackagesFile: string;
```

- *Type:* string

Path to a file containing default npm packages to install.

---

##### `flavor`<sup>Optional</sup> <a name="flavor" id="mise-projen.SettingsNode.property.flavor"></a>

```typescript
public readonly flavor: string;
```

- *Type:* string

Install a specific node flavor like glibc-217 or musl.

Use with unofficial node build repo.

---

##### `gpgVerify`<sup>Optional</sup> <a name="gpgVerify" id="mise-projen.SettingsNode.property.gpgVerify"></a>

```typescript
public readonly gpgVerify: boolean;
```

- *Type:* boolean

Verify OpenPGP signatures for node (built-in, no external gpg required).

Set to false to disable.

---

##### `make`<sup>Optional</sup> <a name="make" id="mise-projen.SettingsNode.property.make"></a>

```typescript
public readonly make: string;
```

- *Type:* string

Make command to use.

---

##### `makeInstallOpts`<sup>Optional</sup> <a name="makeInstallOpts" id="mise-projen.SettingsNode.property.makeInstallOpts"></a>

```typescript
public readonly makeInstallOpts: string;
```

- *Type:* string

Additional make install options.

---

##### `makeOpts`<sup>Optional</sup> <a name="makeOpts" id="mise-projen.SettingsNode.property.makeOpts"></a>

```typescript
public readonly makeOpts: string;
```

- *Type:* string

Additional make options.

---

##### `mirrorUrl`<sup>Optional</sup> <a name="mirrorUrl" id="mise-projen.SettingsNode.property.mirrorUrl"></a>

```typescript
public readonly mirrorUrl: string;
```

- *Type:* string

Mirror to download node tarballs from.

---

##### `ninja`<sup>Optional</sup> <a name="ninja" id="mise-projen.SettingsNode.property.ninja"></a>

```typescript
public readonly ninja: boolean;
```

- *Type:* boolean

Use ninja instead of make to compile node.

---

##### `nodenvRoot`<sup>Optional</sup> <a name="nodenvRoot" id="mise-projen.SettingsNode.property.nodenvRoot"></a>

```typescript
public readonly nodenvRoot: string;
```

- *Type:* string

Directory for nodenv.

---

##### `npmShim`<sup>Optional</sup> <a name="npmShim" id="mise-projen.SettingsNode.property.npmShim"></a>

```typescript
public readonly npmShim: boolean;
```

- *Type:* boolean

Install a bash wrapper at bin/npm that triggers `mise reshim` after `npm install -g`.

Disable to let corepack or a global `npm install -g npm@...` manage `bin/npm` directly.

---

##### `nvmDir`<sup>Optional</sup> <a name="nvmDir" id="mise-projen.SettingsNode.property.nvmDir"></a>

```typescript
public readonly nvmDir: string;
```

- *Type:* string

Directory for nvm.

---

##### `verify`<sup>Optional</sup> <a name="verify" id="mise-projen.SettingsNode.property.verify"></a>

```typescript
public readonly verify: boolean;
```

- *Type:* boolean

Verify the downloaded assets using GPG.

---

### SettingsNpm <a name="SettingsNpm" id="mise-projen.SettingsNpm"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsNpm.Initializer"></a>

```typescript
import { SettingsNpm } from 'mise-projen'

const settingsNpm: SettingsNpm = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsNpm.property.bun">bun</a></code> | <code>boolean</code> | Use bun instead of npm if bun is installed and on PATH. |
| <code><a href="#mise-projen.SettingsNpm.property.packageManager">packageManager</a></code> | <code><a href="#mise-projen.SettingsNpmPackageManager">SettingsNpmPackageManager</a></code> | Package manager to use for installing npm packages. |
| <code><a href="#mise-projen.SettingsNpm.property.shellOut">shellOut</a></code> | <code>boolean</code> | Shell out to the npm CLI for `npm:` version metadata and installs instead of mise's built-in aube-based implementation. |

---

##### `bun`<sup>Optional</sup> <a name="bun" id="mise-projen.SettingsNpm.property.bun"></a>

```typescript
public readonly bun: boolean;
```

- *Type:* boolean

Use bun instead of npm if bun is installed and on PATH.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="mise-projen.SettingsNpm.property.packageManager"></a>

```typescript
public readonly packageManager: SettingsNpmPackageManager;
```

- *Type:* <a href="#mise-projen.SettingsNpmPackageManager">SettingsNpmPackageManager</a>

Package manager to use for installing npm packages.

---

##### `shellOut`<sup>Optional</sup> <a name="shellOut" id="mise-projen.SettingsNpm.property.shellOut"></a>

```typescript
public readonly shellOut: boolean;
```

- *Type:* boolean

Shell out to the npm CLI for `npm:` version metadata and installs instead of mise's built-in aube-based implementation.

---

### SettingsOci <a name="SettingsOci" id="mise-projen.SettingsOci"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsOci.Initializer"></a>

```typescript
import { SettingsOci } from 'mise-projen'

const settingsOci: SettingsOci = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsOci.property.defaultFrom">defaultFrom</a></code> | <code>string</code> | Default base image for `mise oci build` when [oci].from is not set. |
| <code><a href="#mise-projen.SettingsOci.property.defaultMountPoint">defaultMountPoint</a></code> | <code>string</code> | Path inside OCI images where mise tools are installed. |
| <code><a href="#mise-projen.SettingsOci.property.insecureRegistries">insecureRegistries</a></code> | <code>string[]</code> | Registries (host or host:port) contacted over plain HTTP instead of HTTPS. |

---

##### `defaultFrom`<sup>Optional</sup> <a name="defaultFrom" id="mise-projen.SettingsOci.property.defaultFrom"></a>

```typescript
public readonly defaultFrom: string;
```

- *Type:* string

Default base image for `mise oci build` when [oci].from is not set.

---

##### `defaultMountPoint`<sup>Optional</sup> <a name="defaultMountPoint" id="mise-projen.SettingsOci.property.defaultMountPoint"></a>

```typescript
public readonly defaultMountPoint: string;
```

- *Type:* string

Path inside OCI images where mise tools are installed.

---

##### `insecureRegistries`<sup>Optional</sup> <a name="insecureRegistries" id="mise-projen.SettingsOci.property.insecureRegistries"></a>

```typescript
public readonly insecureRegistries: string[];
```

- *Type:* string[]

Registries (host or host:port) contacted over plain HTTP instead of HTTPS.

---

### SettingsOtel <a name="SettingsOtel" id="mise-projen.SettingsOtel"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsOtel.Initializer"></a>

```typescript
import { SettingsOtel } from 'mise-projen'

const settingsOtel: SettingsOtel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsOtel.property.enabled">enabled</a></code> | <code>boolean</code> | [experimental] Enable OpenTelemetry trace export for task executions. |
| <code><a href="#mise-projen.SettingsOtel.property.logs">logs</a></code> | <code>boolean</code> | [experimental] Enable OpenTelemetry log export for task stdout/stderr. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="mise-projen.SettingsOtel.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

[experimental] Enable OpenTelemetry trace export for task executions.

---

##### `logs`<sup>Optional</sup> <a name="logs" id="mise-projen.SettingsOtel.property.logs"></a>

```typescript
public readonly logs: boolean;
```

- *Type:* boolean

[experimental] Enable OpenTelemetry log export for task stdout/stderr.

---

### SettingsPackslip <a name="SettingsPackslip" id="mise-projen.SettingsPackslip"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsPackslip.Initializer"></a>

```typescript
import { SettingsPackslip } from 'mise-projen'

const settingsPackslip: SettingsPackslip = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsPackslip.property.exec">exec</a></code> | <code>boolean</code> | Run a tool's own command at install time to produce a resource its packslip offers only as an exec entry, such as an agent skill. |
| <code><a href="#mise-projen.SettingsPackslip.property.stampers">stampers</a></code> | <code>string[]</code> | Hosts whose signed stamp lists say which packslip releases may be installed, each with its pin. |

---

##### `exec`<sup>Optional</sup> <a name="exec" id="mise-projen.SettingsPackslip.property.exec"></a>

```typescript
public readonly exec: boolean;
```

- *Type:* boolean

Run a tool's own command at install time to produce a resource its packslip offers only as an exec entry, such as an agent skill.

---

##### `stampers`<sup>Optional</sup> <a name="stampers" id="mise-projen.SettingsPackslip.property.stampers"></a>

```typescript
public readonly stampers: string[];
```

- *Type:* string[]

Hosts whose signed stamp lists say which packslip releases may be installed, each with its pin.

---

### SettingsPipx <a name="SettingsPipx" id="mise-projen.SettingsPipx"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsPipx.Initializer"></a>

```typescript
import { SettingsPipx } from 'mise-projen'

const settingsPipx: SettingsPipx = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsPipx.property.registryUrl">registryUrl</a></code> | <code>string</code> | URL to use for pipx registry. |
| <code><a href="#mise-projen.SettingsPipx.property.uvx">uvx</a></code> | <code>boolean</code> | Use uvx instead of pipx if uv is installed and on PATH. |

---

##### `registryUrl`<sup>Optional</sup> <a name="registryUrl" id="mise-projen.SettingsPipx.property.registryUrl"></a>

```typescript
public readonly registryUrl: string;
```

- *Type:* string

URL to use for pipx registry.

---

##### `uvx`<sup>Optional</sup> <a name="uvx" id="mise-projen.SettingsPipx.property.uvx"></a>

```typescript
public readonly uvx: boolean;
```

- *Type:* boolean

Use uvx instead of pipx if uv is installed and on PATH.

---

### SettingsPypi <a name="SettingsPypi" id="mise-projen.SettingsPypi"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsPypi.Initializer"></a>

```typescript
import { SettingsPypi } from 'mise-projen'

const settingsPypi: SettingsPypi = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsPypi.property.registryUrl">registryUrl</a></code> | <code>string</code> | Package registry URL for Python tools (pipx.registry_url is a compatibility alias). |
| <code><a href="#mise-projen.SettingsPypi.property.uvx">uvx</a></code> | <code>boolean</code> | Use uv for Python tools when available (pipx.uvx is a compatibility alias). |

---

##### `registryUrl`<sup>Optional</sup> <a name="registryUrl" id="mise-projen.SettingsPypi.property.registryUrl"></a>

```typescript
public readonly registryUrl: string;
```

- *Type:* string

Package registry URL for Python tools (pipx.registry_url is a compatibility alias).

---

##### `uvx`<sup>Optional</sup> <a name="uvx" id="mise-projen.SettingsPypi.property.uvx"></a>

```typescript
public readonly uvx: boolean;
```

- *Type:* boolean

Use uv for Python tools when available (pipx.uvx is a compatibility alias).

---

### SettingsPython <a name="SettingsPython" id="mise-projen.SettingsPython"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsPython.Initializer"></a>

```typescript
import { SettingsPython } from 'mise-projen'

const settingsPython: SettingsPython = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsPython.property.compile">compile</a></code> | <code>boolean</code> | If true, compile python from source. |
| <code><a href="#mise-projen.SettingsPython.property.defaultPackagesFile">defaultPackagesFile</a></code> | <code>string</code> | Path to a file containing default python packages to install when installing a python version. |
| <code><a href="#mise-projen.SettingsPython.property.githubAttestations">githubAttestations</a></code> | <code>boolean</code> | Enable GitHub Artifact Attestations verification for precompiled Python binaries. |
| <code><a href="#mise-projen.SettingsPython.property.patchesDirectory">patchesDirectory</a></code> | <code>string</code> | Directory to fetch python patches from. |
| <code><a href="#mise-projen.SettingsPython.property.patchUrl">patchUrl</a></code> | <code>string</code> | URL to fetch python patches from to pass to python-build. |
| <code><a href="#mise-projen.SettingsPython.property.precompiledArch">precompiledArch</a></code> | <code>string</code> | Specify the architecture to use for precompiled binaries. |
| <code><a href="#mise-projen.SettingsPython.property.precompiledFlavor">precompiledFlavor</a></code> | <code>string</code> | Specify the flavor to use for precompiled binaries. |
| <code><a href="#mise-projen.SettingsPython.property.precompiledOs">precompiledOs</a></code> | <code>string</code> | Specify the OS to use for precompiled binaries. |
| <code><a href="#mise-projen.SettingsPython.property.pyenvRepo">pyenvRepo</a></code> | <code>string</code> | URL to fetch pyenv from for compiling python with python-build. |
| <code><a href="#mise-projen.SettingsPython.property.uvVenvAuto">uvVenvAuto</a></code> | <code><a href="#mise-projen.SettingsPythonUvVenvAuto">SettingsPythonUvVenvAuto</a></code> | Integrate with uv to manage project venvs when uv.lock is present. |
| <code><a href="#mise-projen.SettingsPython.property.uvVenvCreateArgs">uvVenvCreateArgs</a></code> | <code>string[]</code> | Arguments to pass to uv when creating a venv. |
| <code><a href="#mise-projen.SettingsPython.property.venvCreateArgs">venvCreateArgs</a></code> | <code>string[]</code> | Arguments to pass to python when creating a venv. |
| <code><a href="#mise-projen.SettingsPython.property.venvStdlib">venvStdlib</a></code> | <code>boolean</code> | Prefer to use venv from Python's standard library. |

---

##### `compile`<sup>Optional</sup> <a name="compile" id="mise-projen.SettingsPython.property.compile"></a>

```typescript
public readonly compile: boolean;
```

- *Type:* boolean

If true, compile python from source.

If false, use precompiled binaries. If not set, use precompiled binaries if available.

---

##### `defaultPackagesFile`<sup>Optional</sup> <a name="defaultPackagesFile" id="mise-projen.SettingsPython.property.defaultPackagesFile"></a>

```typescript
public readonly defaultPackagesFile: string;
```

- *Type:* string

Path to a file containing default python packages to install when installing a python version.

---

##### `githubAttestations`<sup>Optional</sup> <a name="githubAttestations" id="mise-projen.SettingsPython.property.githubAttestations"></a>

```typescript
public readonly githubAttestations: boolean;
```

- *Type:* boolean

Enable GitHub Artifact Attestations verification for precompiled Python binaries.

---

##### `patchesDirectory`<sup>Optional</sup> <a name="patchesDirectory" id="mise-projen.SettingsPython.property.patchesDirectory"></a>

```typescript
public readonly patchesDirectory: string;
```

- *Type:* string

Directory to fetch python patches from.

---

##### `patchUrl`<sup>Optional</sup> <a name="patchUrl" id="mise-projen.SettingsPython.property.patchUrl"></a>

```typescript
public readonly patchUrl: string;
```

- *Type:* string

URL to fetch python patches from to pass to python-build.

---

##### `precompiledArch`<sup>Optional</sup> <a name="precompiledArch" id="mise-projen.SettingsPython.property.precompiledArch"></a>

```typescript
public readonly precompiledArch: string;
```

- *Type:* string

Specify the architecture to use for precompiled binaries.

---

##### `precompiledFlavor`<sup>Optional</sup> <a name="precompiledFlavor" id="mise-projen.SettingsPython.property.precompiledFlavor"></a>

```typescript
public readonly precompiledFlavor: string;
```

- *Type:* string

Specify the flavor to use for precompiled binaries.

---

##### `precompiledOs`<sup>Optional</sup> <a name="precompiledOs" id="mise-projen.SettingsPython.property.precompiledOs"></a>

```typescript
public readonly precompiledOs: string;
```

- *Type:* string

Specify the OS to use for precompiled binaries.

---

##### `pyenvRepo`<sup>Optional</sup> <a name="pyenvRepo" id="mise-projen.SettingsPython.property.pyenvRepo"></a>

```typescript
public readonly pyenvRepo: string;
```

- *Type:* string

URL to fetch pyenv from for compiling python with python-build.

---

##### `uvVenvAuto`<sup>Optional</sup> <a name="uvVenvAuto" id="mise-projen.SettingsPython.property.uvVenvAuto"></a>

```typescript
public readonly uvVenvAuto: SettingsPythonUvVenvAuto;
```

- *Type:* <a href="#mise-projen.SettingsPythonUvVenvAuto">SettingsPythonUvVenvAuto</a>

Integrate with uv to manage project venvs when uv.lock is present.

---

##### `uvVenvCreateArgs`<sup>Optional</sup> <a name="uvVenvCreateArgs" id="mise-projen.SettingsPython.property.uvVenvCreateArgs"></a>

```typescript
public readonly uvVenvCreateArgs: string[];
```

- *Type:* string[]

Arguments to pass to uv when creating a venv.

---

##### `venvCreateArgs`<sup>Optional</sup> <a name="venvCreateArgs" id="mise-projen.SettingsPython.property.venvCreateArgs"></a>

```typescript
public readonly venvCreateArgs: string[];
```

- *Type:* string[]

Arguments to pass to python when creating a venv.

(not used for uv venv creation)

---

##### `venvStdlib`<sup>Optional</sup> <a name="venvStdlib" id="mise-projen.SettingsPython.property.venvStdlib"></a>

```typescript
public readonly venvStdlib: boolean;
```

- *Type:* boolean

Prefer to use venv from Python's standard library.

---

### SettingsRuby <a name="SettingsRuby" id="mise-projen.SettingsRuby"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsRuby.Initializer"></a>

```typescript
import { SettingsRuby } from 'mise-projen'

const settingsRuby: SettingsRuby = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsRuby.property.applyPatches">applyPatches</a></code> | <code>string</code> | A list of patch files or URLs to apply to ruby source. |
| <code><a href="#mise-projen.SettingsRuby.property.compile">compile</a></code> | <code>boolean</code> | If true, compile ruby from source. |
| <code><a href="#mise-projen.SettingsRuby.property.defaultPackagesFile">defaultPackagesFile</a></code> | <code>string</code> | Path to a file containing default ruby gems to install when installing ruby. |
| <code><a href="#mise-projen.SettingsRuby.property.githubAttestations">githubAttestations</a></code> | <code>boolean</code> | Enable GitHub Artifact Attestations verification for precompiled Ruby binaries. |
| <code><a href="#mise-projen.SettingsRuby.property.precompiledArch">precompiledArch</a></code> | <code>string</code> | Override architecture identifier for precompiled Ruby binaries. |
| <code><a href="#mise-projen.SettingsRuby.property.precompiledOs">precompiledOs</a></code> | <code>string</code> | Override OS identifier for precompiled Ruby binaries. |
| <code><a href="#mise-projen.SettingsRuby.property.precompiledUrl">precompiledUrl</a></code> | <code>string</code> | URL template or GitHub repo for precompiled Ruby binaries. |
| <code><a href="#mise-projen.SettingsRuby.property.rubyBuildCliOpts">rubyBuildCliOpts</a></code> | <code>string</code> | CLI options passed directly to ruby-build before the version and install prefix. |
| <code><a href="#mise-projen.SettingsRuby.property.rubyBuildOpts">rubyBuildOpts</a></code> | <code>string</code> | Configure arguments passed through ruby-build after `--`. |
| <code><a href="#mise-projen.SettingsRuby.property.rubyBuildRepo">rubyBuildRepo</a></code> | <code>string</code> | The URL used to fetch ruby-build. |
| <code><a href="#mise-projen.SettingsRuby.property.rubyInstall">rubyInstall</a></code> | <code>boolean</code> | Use ruby-install instead of ruby-build. |
| <code><a href="#mise-projen.SettingsRuby.property.rubyInstallOpts">rubyInstallOpts</a></code> | <code>string</code> | Options to pass to ruby-install. |
| <code><a href="#mise-projen.SettingsRuby.property.rubyInstallRepo">rubyInstallRepo</a></code> | <code>string</code> | The URL used to fetch ruby-install. |
| <code><a href="#mise-projen.SettingsRuby.property.verboseInstall">verboseInstall</a></code> | <code>boolean</code> | Set to true to enable verbose output during ruby installation. |

---

##### `applyPatches`<sup>Optional</sup> <a name="applyPatches" id="mise-projen.SettingsRuby.property.applyPatches"></a>

```typescript
public readonly applyPatches: string;
```

- *Type:* string

A list of patch files or URLs to apply to ruby source.

---

##### `compile`<sup>Optional</sup> <a name="compile" id="mise-projen.SettingsRuby.property.compile"></a>

```typescript
public readonly compile: boolean;
```

- *Type:* boolean

If true, compile ruby from source.

If false, require precompiled binaries. If not set, use precompiled binaries if available.

---

##### `defaultPackagesFile`<sup>Optional</sup> <a name="defaultPackagesFile" id="mise-projen.SettingsRuby.property.defaultPackagesFile"></a>

```typescript
public readonly defaultPackagesFile: string;
```

- *Type:* string

Path to a file containing default ruby gems to install when installing ruby.

---

##### `githubAttestations`<sup>Optional</sup> <a name="githubAttestations" id="mise-projen.SettingsRuby.property.githubAttestations"></a>

```typescript
public readonly githubAttestations: boolean;
```

- *Type:* boolean

Enable GitHub Artifact Attestations verification for precompiled Ruby binaries.

---

##### `precompiledArch`<sup>Optional</sup> <a name="precompiledArch" id="mise-projen.SettingsRuby.property.precompiledArch"></a>

```typescript
public readonly precompiledArch: string;
```

- *Type:* string

Override architecture identifier for precompiled Ruby binaries.

---

##### `precompiledOs`<sup>Optional</sup> <a name="precompiledOs" id="mise-projen.SettingsRuby.property.precompiledOs"></a>

```typescript
public readonly precompiledOs: string;
```

- *Type:* string

Override OS identifier for precompiled Ruby binaries.

---

##### `precompiledUrl`<sup>Optional</sup> <a name="precompiledUrl" id="mise-projen.SettingsRuby.property.precompiledUrl"></a>

```typescript
public readonly precompiledUrl: string;
```

- *Type:* string

URL template or GitHub repo for precompiled Ruby binaries.

---

##### `rubyBuildCliOpts`<sup>Optional</sup> <a name="rubyBuildCliOpts" id="mise-projen.SettingsRuby.property.rubyBuildCliOpts"></a>

```typescript
public readonly rubyBuildCliOpts: string;
```

- *Type:* string

CLI options passed directly to ruby-build before the version and install prefix.

---

##### `rubyBuildOpts`<sup>Optional</sup> <a name="rubyBuildOpts" id="mise-projen.SettingsRuby.property.rubyBuildOpts"></a>

```typescript
public readonly rubyBuildOpts: string;
```

- *Type:* string

Configure arguments passed through ruby-build after `--`.

---

##### `rubyBuildRepo`<sup>Optional</sup> <a name="rubyBuildRepo" id="mise-projen.SettingsRuby.property.rubyBuildRepo"></a>

```typescript
public readonly rubyBuildRepo: string;
```

- *Type:* string

The URL used to fetch ruby-build.

This accepts either a Git repository or a ZIP archive.

---

##### `rubyInstall`<sup>Optional</sup> <a name="rubyInstall" id="mise-projen.SettingsRuby.property.rubyInstall"></a>

```typescript
public readonly rubyInstall: boolean;
```

- *Type:* boolean

Use ruby-install instead of ruby-build.

---

##### `rubyInstallOpts`<sup>Optional</sup> <a name="rubyInstallOpts" id="mise-projen.SettingsRuby.property.rubyInstallOpts"></a>

```typescript
public readonly rubyInstallOpts: string;
```

- *Type:* string

Options to pass to ruby-install.

---

##### `rubyInstallRepo`<sup>Optional</sup> <a name="rubyInstallRepo" id="mise-projen.SettingsRuby.property.rubyInstallRepo"></a>

```typescript
public readonly rubyInstallRepo: string;
```

- *Type:* string

The URL used to fetch ruby-install.

This accepts either a Git repository or a ZIP archive.

---

##### `verboseInstall`<sup>Optional</sup> <a name="verboseInstall" id="mise-projen.SettingsRuby.property.verboseInstall"></a>

```typescript
public readonly verboseInstall: boolean;
```

- *Type:* boolean

Set to true to enable verbose output during ruby installation.

---

### SettingsRust <a name="SettingsRust" id="mise-projen.SettingsRust"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsRust.Initializer"></a>

```typescript
import { SettingsRust } from 'mise-projen'

const settingsRust: SettingsRust = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsRust.property.cargoHome">cargoHome</a></code> | <code>string</code> | Path to the cargo home directory. |
| <code><a href="#mise-projen.SettingsRust.property.defaultHost">defaultHost</a></code> | <code>string</code> | Default host triple to pass to `rustup init` via `--default-host`. |
| <code><a href="#mise-projen.SettingsRust.property.rustupHome">rustupHome</a></code> | <code>string</code> | Path to the rustup home directory. |

---

##### `cargoHome`<sup>Optional</sup> <a name="cargoHome" id="mise-projen.SettingsRust.property.cargoHome"></a>

```typescript
public readonly cargoHome: string;
```

- *Type:* string
- *Default:* cargo` or `%USERPROFILE%\.cargo`

Path to the cargo home directory.

Defaults to `~/.cargo` or `%USERPROFILE%\.cargo`

---

##### `defaultHost`<sup>Optional</sup> <a name="defaultHost" id="mise-projen.SettingsRust.property.defaultHost"></a>

```typescript
public readonly defaultHost: string;
```

- *Type:* string

Default host triple to pass to `rustup init` via `--default-host`.

---

##### `rustupHome`<sup>Optional</sup> <a name="rustupHome" id="mise-projen.SettingsRust.property.rustupHome"></a>

```typescript
public readonly rustupHome: string;
```

- *Type:* string
- *Default:* rustup` or `%USERPROFILE%\.rustup`

Path to the rustup home directory.

Defaults to `~/.rustup` or `%USERPROFILE%\.rustup`

---

### SettingsSandbox <a name="SettingsSandbox" id="mise-projen.SettingsSandbox"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsSandbox.Initializer"></a>

```typescript
import { SettingsSandbox } from 'mise-projen'

const settingsSandbox: SettingsSandbox = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsSandbox.property.denyAll">denyAll</a></code> | <code>boolean</code> | Deny filesystem reads and writes, network access, and environment variable inheritance by default for `mise run` and `mise exec`. |
| <code><a href="#mise-projen.SettingsSandbox.property.denyEnv">denyEnv</a></code> | <code>boolean</code> | Deny environment variable inheritance by default for `mise run` and `mise exec`. |
| <code><a href="#mise-projen.SettingsSandbox.property.denyNet">denyNet</a></code> | <code>boolean</code> | Deny network access by default for `mise run` and `mise exec`. |
| <code><a href="#mise-projen.SettingsSandbox.property.denyRead">denyRead</a></code> | <code>boolean</code> | Deny filesystem reads by default for `mise run` and `mise exec`. |
| <code><a href="#mise-projen.SettingsSandbox.property.denyWrite">denyWrite</a></code> | <code>boolean</code> | Deny filesystem writes by default for `mise run` and `mise exec`. |

---

##### `denyAll`<sup>Optional</sup> <a name="denyAll" id="mise-projen.SettingsSandbox.property.denyAll"></a>

```typescript
public readonly denyAll: boolean;
```

- *Type:* boolean

Deny filesystem reads and writes, network access, and environment variable inheritance by default for `mise run` and `mise exec`.

---

##### `denyEnv`<sup>Optional</sup> <a name="denyEnv" id="mise-projen.SettingsSandbox.property.denyEnv"></a>

```typescript
public readonly denyEnv: boolean;
```

- *Type:* boolean

Deny environment variable inheritance by default for `mise run` and `mise exec`.

---

##### `denyNet`<sup>Optional</sup> <a name="denyNet" id="mise-projen.SettingsSandbox.property.denyNet"></a>

```typescript
public readonly denyNet: boolean;
```

- *Type:* boolean

Deny network access by default for `mise run` and `mise exec`.

---

##### `denyRead`<sup>Optional</sup> <a name="denyRead" id="mise-projen.SettingsSandbox.property.denyRead"></a>

```typescript
public readonly denyRead: boolean;
```

- *Type:* boolean

Deny filesystem reads by default for `mise run` and `mise exec`.

---

##### `denyWrite`<sup>Optional</sup> <a name="denyWrite" id="mise-projen.SettingsSandbox.property.denyWrite"></a>

```typescript
public readonly denyWrite: boolean;
```

- *Type:* boolean

Deny filesystem writes by default for `mise run` and `mise exec`.

---

### SettingsSelfUpdate <a name="SettingsSelfUpdate" id="mise-projen.SettingsSelfUpdate"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsSelfUpdate.Initializer"></a>

```typescript
import { SettingsSelfUpdate } from 'mise-projen'

const settingsSelfUpdate: SettingsSelfUpdate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsSelfUpdate.property.apiUrl">apiUrl</a></code> | <code>string</code> | GitHub API base URL used by `mise self-update`. |
| <code><a href="#mise-projen.SettingsSelfUpdate.property.minimumReleaseAge">minimumReleaseAge</a></code> | <code>string</code> | Minimum release age for mise itself; |
| <code><a href="#mise-projen.SettingsSelfUpdate.property.repository">repository</a></code> | <code>string</code> | GitHub repository used by `mise self-update`. |

---

##### `apiUrl`<sup>Optional</sup> <a name="apiUrl" id="mise-projen.SettingsSelfUpdate.property.apiUrl"></a>

```typescript
public readonly apiUrl: string;
```

- *Type:* string

GitHub API base URL used by `mise self-update`.

---

##### `minimumReleaseAge`<sup>Optional</sup> <a name="minimumReleaseAge" id="mise-projen.SettingsSelfUpdate.property.minimumReleaseAge"></a>

```typescript
public readonly minimumReleaseAge: string;
```

- *Type:* string

Minimum release age for mise itself;

inherits minimum_release_age (24h by default).

---

##### `repository`<sup>Optional</sup> <a name="repository" id="mise-projen.SettingsSelfUpdate.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

GitHub repository used by `mise self-update`.

---

### SettingsShims <a name="SettingsShims" id="mise-projen.SettingsShims"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsShims.Initializer"></a>

```typescript
import { SettingsShims } from 'mise-projen'

const settingsShims: SettingsShims = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsShims.property.exclude">exclude</a></code> | <code>string[]</code> | Command names mise should never create shims for, leaving them to the system. |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="mise-projen.SettingsShims.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

Command names mise should never create shims for, leaving them to the system.

---

### SettingsSkills <a name="SettingsSkills" id="mise-projen.SettingsSkills"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsSkills.Initializer"></a>

```typescript
import { SettingsSkills } from 'mise-projen'

const settingsSkills: SettingsSkills = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsSkills.property.autoSync">autoSync</a></code> | <code>boolean</code> | Link the active tools' agent skills into the project after `mise install` and `mise use`. |
| <code><a href="#mise-projen.SettingsSkills.property.dir">dir</a></code> | <code>string</code> | Where `mise skills sync` links skills: a path under the project root, or under the home directory with `--global`. |
| <code><a href="#mise-projen.SettingsSkills.property.fetch">fetch</a></code> | <code>boolean</code> | Fetch the agent skills a tool's packslip declares when installing it. |
| <code><a href="#mise-projen.SettingsSkills.property.prune">prune</a></code> | <code>boolean</code> | Remove links mise made for skills that are no longer active when syncing. |

---

##### `autoSync`<sup>Optional</sup> <a name="autoSync" id="mise-projen.SettingsSkills.property.autoSync"></a>

```typescript
public readonly autoSync: boolean;
```

- *Type:* boolean

Link the active tools' agent skills into the project after `mise install` and `mise use`.

---

##### `dir`<sup>Optional</sup> <a name="dir" id="mise-projen.SettingsSkills.property.dir"></a>

```typescript
public readonly dir: string;
```

- *Type:* string

Where `mise skills sync` links skills: a path under the project root, or under the home directory with `--global`.

---

##### `fetch`<sup>Optional</sup> <a name="fetch" id="mise-projen.SettingsSkills.property.fetch"></a>

```typescript
public readonly fetch: boolean;
```

- *Type:* boolean

Fetch the agent skills a tool's packslip declares when installing it.

---

##### `prune`<sup>Optional</sup> <a name="prune" id="mise-projen.SettingsSkills.property.prune"></a>

```typescript
public readonly prune: boolean;
```

- *Type:* boolean

Remove links mise made for skills that are no longer active when syncing.

---

### SettingsSops <a name="SettingsSops" id="mise-projen.SettingsSops"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsSops.Initializer"></a>

```typescript
import { SettingsSops } from 'mise-projen'

const settingsSops: SettingsSops = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsSops.property.ageKey">ageKey</a></code> | <code>string</code> | The age private key to use for sops secret decryption. |
| <code><a href="#mise-projen.SettingsSops.property.ageKeyFile">ageKeyFile</a></code> | <code>string</code> | Path to the age private key file for sops secret decryption. |
| <code><a href="#mise-projen.SettingsSops.property.ageRecipients">ageRecipients</a></code> | <code>string</code> | The age public keys to use for sops secret encryption. |
| <code><a href="#mise-projen.SettingsSops.property.rops">rops</a></code> | <code>boolean</code> | Use rops to decrypt sops files. |
| <code><a href="#mise-projen.SettingsSops.property.strict">strict</a></code> | <code>boolean</code> | If true, fail when sops decryption fails (including when sops is not available, the key is missing, or the key is invalid). |

---

##### `ageKey`<sup>Optional</sup> <a name="ageKey" id="mise-projen.SettingsSops.property.ageKey"></a>

```typescript
public readonly ageKey: string;
```

- *Type:* string

The age private key to use for sops secret decryption.

Takes precedence over standard SOPS_AGE_KEY environment variable.

---

##### `ageKeyFile`<sup>Optional</sup> <a name="ageKeyFile" id="mise-projen.SettingsSops.property.ageKeyFile"></a>

```typescript
public readonly ageKeyFile: string;
```

- *Type:* string

Path to the age private key file for sops secret decryption.

Takes precedence over standard SOPS_AGE_KEY_FILE environment variable.

---

##### `ageRecipients`<sup>Optional</sup> <a name="ageRecipients" id="mise-projen.SettingsSops.property.ageRecipients"></a>

```typescript
public readonly ageRecipients: string;
```

- *Type:* string

The age public keys to use for sops secret encryption.

---

##### `rops`<sup>Optional</sup> <a name="rops" id="mise-projen.SettingsSops.property.rops"></a>

```typescript
public readonly rops: boolean;
```

- *Type:* boolean

Use rops to decrypt sops files.

Disable to shell out to `sops` which will slow down mise but sops may offer features not available in rops. Required for TOML SOPS files because the sops CLI does not support TOML.

---

##### `strict`<sup>Optional</sup> <a name="strict" id="mise-projen.SettingsSops.property.strict"></a>

```typescript
public readonly strict: boolean;
```

- *Type:* boolean

If true, fail when sops decryption fails (including when sops is not available, the key is missing, or the key is invalid).

If false, skip decryption and continue in these cases.

---

### SettingsSpm <a name="SettingsSpm" id="mise-projen.SettingsSpm"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsSpm.Initializer"></a>

```typescript
import { SettingsSpm } from 'mise-projen'

const settingsSpm: SettingsSpm = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsSpm.property.artifactbundleOnly">artifactbundleOnly</a></code> | <code>boolean</code> | Only use SwiftPM artifact bundles for installation, fail if no matching bundle is available. |

---

##### `artifactbundleOnly`<sup>Optional</sup> <a name="artifactbundleOnly" id="mise-projen.SettingsSpm.property.artifactbundleOnly"></a>

```typescript
public readonly artifactbundleOnly: boolean;
```

- *Type:* boolean

Only use SwiftPM artifact bundles for installation, fail if no matching bundle is available.

---

### SettingsStatus <a name="SettingsStatus" id="mise-projen.SettingsStatus"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsStatus.Initializer"></a>

```typescript
import { SettingsStatus } from 'mise-projen'

const settingsStatus: SettingsStatus = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsStatus.property.missingTools">missingTools</a></code> | <code>string</code> | Show a warning if tools are not installed when entering a directory with a mise.toml file. |
| <code><a href="#mise-projen.SettingsStatus.property.showDepsStale">showDepsStale</a></code> | <code>boolean</code> | Show warning when deps providers have stale dependencies. |
| <code><a href="#mise-projen.SettingsStatus.property.showEnv">showEnv</a></code> | <code>boolean</code> | Show configured env vars when entering a directory with a mise.toml file. |
| <code><a href="#mise-projen.SettingsStatus.property.showTools">showTools</a></code> | <code>boolean</code> | Show configured tools when entering a directory with a mise.toml file. |
| <code><a href="#mise-projen.SettingsStatus.property.truncate">truncate</a></code> | <code>boolean</code> | Truncate status messages. |

---

##### `missingTools`<sup>Optional</sup> <a name="missingTools" id="mise-projen.SettingsStatus.property.missingTools"></a>

```typescript
public readonly missingTools: string;
```

- *Type:* string

Show a warning if tools are not installed when entering a directory with a mise.toml file.

---

##### `showDepsStale`<sup>Optional</sup> <a name="showDepsStale" id="mise-projen.SettingsStatus.property.showDepsStale"></a>

```typescript
public readonly showDepsStale: boolean;
```

- *Type:* boolean

Show warning when deps providers have stale dependencies.

---

##### `showEnv`<sup>Optional</sup> <a name="showEnv" id="mise-projen.SettingsStatus.property.showEnv"></a>

```typescript
public readonly showEnv: boolean;
```

- *Type:* boolean

Show configured env vars when entering a directory with a mise.toml file.

---

##### `showTools`<sup>Optional</sup> <a name="showTools" id="mise-projen.SettingsStatus.property.showTools"></a>

```typescript
public readonly showTools: boolean;
```

- *Type:* boolean

Show configured tools when entering a directory with a mise.toml file.

---

##### `truncate`<sup>Optional</sup> <a name="truncate" id="mise-projen.SettingsStatus.property.truncate"></a>

```typescript
public readonly truncate: boolean;
```

- *Type:* boolean

Truncate status messages.

---

### SettingsSwift <a name="SettingsSwift" id="mise-projen.SettingsSwift"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsSwift.Initializer"></a>

```typescript
import { SettingsSwift } from 'mise-projen'

const settingsSwift: SettingsSwift = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsSwift.property.gpgVerify">gpgVerify</a></code> | <code>boolean</code> | Verify OpenPGP signatures for swift (built-in, no external gpg required). |
| <code><a href="#mise-projen.SettingsSwift.property.platform">platform</a></code> | <code>string</code> | Override the distro build to use for precompiled binaries. |

---

##### `gpgVerify`<sup>Optional</sup> <a name="gpgVerify" id="mise-projen.SettingsSwift.property.gpgVerify"></a>

```typescript
public readonly gpgVerify: boolean;
```

- *Type:* boolean

Verify OpenPGP signatures for swift (built-in, no external gpg required).

Set to false to disable.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="mise-projen.SettingsSwift.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

Override the distro build to use for precompiled binaries.

By default the distro is detected and matched against what the Swift release actually publishes, which changes from release to release. Set this to force a specific build, or to install without reaching swift.org's release index.

---

### SettingsSystemPackages <a name="SettingsSystemPackages" id="mise-projen.SettingsSystemPackages"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsSystemPackages.Initializer"></a>

```typescript
import { SettingsSystemPackages } from 'mise-projen'

const settingsSystemPackages: SettingsSystemPackages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsSystemPackages.property.managers">managers</a></code> | <code>string[]</code> | Restrict which system package managers mise will use. |
| <code><a href="#mise-projen.SettingsSystemPackages.property.sudo">sudo</a></code> | <code>boolean</code> | Allow `mise bootstrap` and `mise install --system` to elevate with sudo when not running as root. |

---

##### `managers`<sup>Optional</sup> <a name="managers" id="mise-projen.SettingsSystemPackages.property.managers"></a>

```typescript
public readonly managers: string[];
```

- *Type:* string[]

Restrict which system package managers mise will use.

---

##### `sudo`<sup>Optional</sup> <a name="sudo" id="mise-projen.SettingsSystemPackages.property.sudo"></a>

```typescript
public readonly sudo: boolean;
```

- *Type:* boolean

Allow `mise bootstrap` and `mise install --system` to elevate with sudo when not running as root.

---

### SettingsTask <a name="SettingsTask" id="mise-projen.SettingsTask"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsTask.Initializer"></a>

```typescript
import { SettingsTask } from 'mise-projen'

const settingsTask: SettingsTask = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsTask.property.autoInfer">autoInfer</a></code> | <code>string[]</code> | [experimental] Workspace providers from which to automatically infer tasks. |
| <code><a href="#mise-projen.SettingsTask.property.cache">cache</a></code> | <code><a href="#mise-projen.SettingsTaskCache">SettingsTaskCache</a></code> | *No description.* |
| <code><a href="#mise-projen.SettingsTask.property.cacheDir">cacheDir</a></code> | <code>string</code> | [experimental] Directory for task output cache artifacts. |
| <code><a href="#mise-projen.SettingsTask.property.cacheMaxAge">cacheMaxAge</a></code> | <code>string</code> | [experimental] Maximum age of task output cache entries since their last access. |
| <code><a href="#mise-projen.SettingsTask.property.cacheMaxSize">cacheMaxSize</a></code> | <code>string</code> | [experimental] Maximum total size of task output cache entries. |
| <code><a href="#mise-projen.SettingsTask.property.cacheRemoteMode">cacheRemoteMode</a></code> | <code><a href="#mise-projen.SettingsTaskCacheRemoteMode">SettingsTaskCacheRemoteMode</a></code> | Compatibility alias for task.cache.remote_mode. |
| <code><a href="#mise-projen.SettingsTask.property.cacheRemoteNamespace">cacheRemoteNamespace</a></code> | <code>string</code> | Compatibility alias for task.cache.remote_namespace. |
| <code><a href="#mise-projen.SettingsTask.property.cacheRemoteOidcAudience">cacheRemoteOidcAudience</a></code> | <code>string</code> | Compatibility alias for task.cache.remote_oidc_audience. |
| <code><a href="#mise-projen.SettingsTask.property.cacheRemoteToken">cacheRemoteToken</a></code> | <code>string</code> | Compatibility alias for task.cache.remote_token. |
| <code><a href="#mise-projen.SettingsTask.property.cacheRemoteTokenFile">cacheRemoteTokenFile</a></code> | <code>string</code> | Compatibility alias for task.cache.remote_token_file. |
| <code><a href="#mise-projen.SettingsTask.property.cacheRemoteUrl">cacheRemoteUrl</a></code> | <code>string</code> | Compatibility alias for task.cache.remote_url. |
| <code><a href="#mise-projen.SettingsTask.property.disablePaths">disablePaths</a></code> | <code>string[]</code> | Paths that mise will not look for tasks in. |
| <code><a href="#mise-projen.SettingsTask.property.disableSpecFromRunScripts">disableSpecFromRunScripts</a></code> | <code>boolean</code> | Opt out of parsing task run scripts to infer the usage spec (arguments and flags). |
| <code><a href="#mise-projen.SettingsTask.property.monorepoDepth">monorepoDepth</a></code> | <code>number</code> | Maximum depth to search for task files in monorepo subdirectories. |
| <code><a href="#mise-projen.SettingsTask.property.monorepoExcludeDirs">monorepoExcludeDirs</a></code> | <code>string[]</code> | Directory patterns to exclude when discovering monorepo subdirectories. |
| <code><a href="#mise-projen.SettingsTask.property.monorepoRespectGitignore">monorepoRespectGitignore</a></code> | <code>boolean</code> | Whether to respect .gitignore files when discovering monorepo subdirectories. |
| <code><a href="#mise-projen.SettingsTask.property.output">output</a></code> | <code><a href="#mise-projen.SettingsTaskOutput">SettingsTaskOutput</a></code> | Change output style when executing tasks. |
| <code><a href="#mise-projen.SettingsTask.property.quiet">quiet</a></code> | <code>boolean</code> | Suppress mise's own output while executing tasks. |
| <code><a href="#mise-projen.SettingsTask.property.remoteNoCache">remoteNoCache</a></code> | <code>boolean</code> | Mise will always fetch the latest tasks from the remote, by default the cache is used. |
| <code><a href="#mise-projen.SettingsTask.property.runAutoInstall">runAutoInstall</a></code> | <code>boolean</code> | Automatically install missing tools when executing tasks. |
| <code><a href="#mise-projen.SettingsTask.property.showFullCmd">showFullCmd</a></code> | <code>boolean</code> | Disable truncation of command lines in task execution output. |
| <code><a href="#mise-projen.SettingsTask.property.skip">skip</a></code> | <code>string[]</code> | Tasks to skip when running `mise run`. |
| <code><a href="#mise-projen.SettingsTask.property.skipDepends">skipDepends</a></code> | <code>boolean</code> | Run only specified tasks skipping all dependencies. |
| <code><a href="#mise-projen.SettingsTask.property.sourceFreshnessEqualMtimeIsFresh">sourceFreshnessEqualMtimeIsFresh</a></code> | <code>boolean</code> | When source mtime equals output mtime, consider sources fresh (use <=). |
| <code><a href="#mise-projen.SettingsTask.property.sourceFreshnessHashContents">sourceFreshnessHashContents</a></code> | <code>boolean</code> | Use content hashing (blake3) instead of metadata for source freshness. |
| <code><a href="#mise-projen.SettingsTask.property.timeout">timeout</a></code> | <code>string</code> | Default timeout for tasks. |
| <code><a href="#mise-projen.SettingsTask.property.timings">timings</a></code> | <code>boolean</code> | Show completion message with elapsed time for each task on `mise run`. |

---

##### `autoInfer`<sup>Optional</sup> <a name="autoInfer" id="mise-projen.SettingsTask.property.autoInfer"></a>

```typescript
public readonly autoInfer: string[];
```

- *Type:* string[]

[experimental] Workspace providers from which to automatically infer tasks.

---

##### `cache`<sup>Optional</sup> <a name="cache" id="mise-projen.SettingsTask.property.cache"></a>

```typescript
public readonly cache: SettingsTaskCache;
```

- *Type:* <a href="#mise-projen.SettingsTaskCache">SettingsTaskCache</a>

---

##### `cacheDir`<sup>Optional</sup> <a name="cacheDir" id="mise-projen.SettingsTask.property.cacheDir"></a>

```typescript
public readonly cacheDir: string;
```

- *Type:* string

[experimental] Directory for task output cache artifacts.

---

##### `cacheMaxAge`<sup>Optional</sup> <a name="cacheMaxAge" id="mise-projen.SettingsTask.property.cacheMaxAge"></a>

```typescript
public readonly cacheMaxAge: string;
```

- *Type:* string

[experimental] Maximum age of task output cache entries since their last access.

---

##### `cacheMaxSize`<sup>Optional</sup> <a name="cacheMaxSize" id="mise-projen.SettingsTask.property.cacheMaxSize"></a>

```typescript
public readonly cacheMaxSize: string;
```

- *Type:* string

[experimental] Maximum total size of task output cache entries.

---

##### `cacheRemoteMode`<sup>Optional</sup> <a name="cacheRemoteMode" id="mise-projen.SettingsTask.property.cacheRemoteMode"></a>

```typescript
public readonly cacheRemoteMode: SettingsTaskCacheRemoteMode;
```

- *Type:* <a href="#mise-projen.SettingsTaskCacheRemoteMode">SettingsTaskCacheRemoteMode</a>

Compatibility alias for task.cache.remote_mode.

---

##### `cacheRemoteNamespace`<sup>Optional</sup> <a name="cacheRemoteNamespace" id="mise-projen.SettingsTask.property.cacheRemoteNamespace"></a>

```typescript
public readonly cacheRemoteNamespace: string;
```

- *Type:* string

Compatibility alias for task.cache.remote_namespace.

---

##### `cacheRemoteOidcAudience`<sup>Optional</sup> <a name="cacheRemoteOidcAudience" id="mise-projen.SettingsTask.property.cacheRemoteOidcAudience"></a>

```typescript
public readonly cacheRemoteOidcAudience: string;
```

- *Type:* string

Compatibility alias for task.cache.remote_oidc_audience.

---

##### `cacheRemoteToken`<sup>Optional</sup> <a name="cacheRemoteToken" id="mise-projen.SettingsTask.property.cacheRemoteToken"></a>

```typescript
public readonly cacheRemoteToken: string;
```

- *Type:* string

Compatibility alias for task.cache.remote_token.

---

##### `cacheRemoteTokenFile`<sup>Optional</sup> <a name="cacheRemoteTokenFile" id="mise-projen.SettingsTask.property.cacheRemoteTokenFile"></a>

```typescript
public readonly cacheRemoteTokenFile: string;
```

- *Type:* string

Compatibility alias for task.cache.remote_token_file.

---

##### `cacheRemoteUrl`<sup>Optional</sup> <a name="cacheRemoteUrl" id="mise-projen.SettingsTask.property.cacheRemoteUrl"></a>

```typescript
public readonly cacheRemoteUrl: string;
```

- *Type:* string

Compatibility alias for task.cache.remote_url.

---

##### `disablePaths`<sup>Optional</sup> <a name="disablePaths" id="mise-projen.SettingsTask.property.disablePaths"></a>

```typescript
public readonly disablePaths: string[];
```

- *Type:* string[]

Paths that mise will not look for tasks in.

---

##### `disableSpecFromRunScripts`<sup>Optional</sup> <a name="disableSpecFromRunScripts" id="mise-projen.SettingsTask.property.disableSpecFromRunScripts"></a>

```typescript
public readonly disableSpecFromRunScripts: boolean;
```

- *Type:* boolean

Opt out of parsing task run scripts to infer the usage spec (arguments and flags).

When enabled, mise will derive the usage spec only from the `usage` field, ignoring any `arg()`, `option()`, or `flag()` templates used in run scripts. This can restore previous behavior and avoid the extra template pass over run scripts when collecting specs.

---

##### `monorepoDepth`<sup>Optional</sup> <a name="monorepoDepth" id="mise-projen.SettingsTask.property.monorepoDepth"></a>

```typescript
public readonly monorepoDepth: number;
```

- *Type:* number

Maximum depth to search for task files in monorepo subdirectories.

---

##### `monorepoExcludeDirs`<sup>Optional</sup> <a name="monorepoExcludeDirs" id="mise-projen.SettingsTask.property.monorepoExcludeDirs"></a>

```typescript
public readonly monorepoExcludeDirs: string[];
```

- *Type:* string[]

Directory patterns to exclude when discovering monorepo subdirectories.

---

##### `monorepoRespectGitignore`<sup>Optional</sup> <a name="monorepoRespectGitignore" id="mise-projen.SettingsTask.property.monorepoRespectGitignore"></a>

```typescript
public readonly monorepoRespectGitignore: boolean;
```

- *Type:* boolean

Whether to respect .gitignore files when discovering monorepo subdirectories.

---

##### `output`<sup>Optional</sup> <a name="output" id="mise-projen.SettingsTask.property.output"></a>

```typescript
public readonly output: SettingsTaskOutput;
```

- *Type:* <a href="#mise-projen.SettingsTaskOutput">SettingsTaskOutput</a>

Change output style when executing tasks.

---

##### `quiet`<sup>Optional</sup> <a name="quiet" id="mise-projen.SettingsTask.property.quiet"></a>

```typescript
public readonly quiet: boolean;
```

- *Type:* boolean

Suppress mise's own output while executing tasks.

---

##### `remoteNoCache`<sup>Optional</sup> <a name="remoteNoCache" id="mise-projen.SettingsTask.property.remoteNoCache"></a>

```typescript
public readonly remoteNoCache: boolean;
```

- *Type:* boolean

Mise will always fetch the latest tasks from the remote, by default the cache is used.

---

##### `runAutoInstall`<sup>Optional</sup> <a name="runAutoInstall" id="mise-projen.SettingsTask.property.runAutoInstall"></a>

```typescript
public readonly runAutoInstall: boolean;
```

- *Type:* boolean

Automatically install missing tools when executing tasks.

---

##### `showFullCmd`<sup>Optional</sup> <a name="showFullCmd" id="mise-projen.SettingsTask.property.showFullCmd"></a>

```typescript
public readonly showFullCmd: boolean;
```

- *Type:* boolean

Disable truncation of command lines in task execution output.

When true, the full command line will be shown.

---

##### `skip`<sup>Optional</sup> <a name="skip" id="mise-projen.SettingsTask.property.skip"></a>

```typescript
public readonly skip: string[];
```

- *Type:* string[]

Tasks to skip when running `mise run`.

---

##### `skipDepends`<sup>Optional</sup> <a name="skipDepends" id="mise-projen.SettingsTask.property.skipDepends"></a>

```typescript
public readonly skipDepends: boolean;
```

- *Type:* boolean

Run only specified tasks skipping all dependencies.

---

##### `sourceFreshnessEqualMtimeIsFresh`<sup>Optional</sup> <a name="sourceFreshnessEqualMtimeIsFresh" id="mise-projen.SettingsTask.property.sourceFreshnessEqualMtimeIsFresh"></a>

```typescript
public readonly sourceFreshnessEqualMtimeIsFresh: boolean;
```

- *Type:* boolean

When source mtime equals output mtime, consider sources fresh (use <=).

Default false uses strict < comparison.

---

##### `sourceFreshnessHashContents`<sup>Optional</sup> <a name="sourceFreshnessHashContents" id="mise-projen.SettingsTask.property.sourceFreshnessHashContents"></a>

```typescript
public readonly sourceFreshnessHashContents: boolean;
```

- *Type:* boolean

Use content hashing (blake3) instead of metadata for source freshness.

More accurate but slower.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="mise-projen.SettingsTask.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

Default timeout for tasks.

---

##### `timings`<sup>Optional</sup> <a name="timings" id="mise-projen.SettingsTask.property.timings"></a>

```typescript
public readonly timings: boolean;
```

- *Type:* boolean

Show completion message with elapsed time for each task on `mise run`.

Default shows when output type is `prefix`.

---

### SettingsTaskCache <a name="SettingsTaskCache" id="mise-projen.SettingsTaskCache"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsTaskCache.Initializer"></a>

```typescript
import { SettingsTaskCache } from 'mise-projen'

const settingsTaskCache: SettingsTaskCache = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsTaskCache.property.auditReport">auditReport</a></code> | <code>string</code> | [experimental] File to write the complete task cache audit report to. |
| <code><a href="#mise-projen.SettingsTaskCache.property.remoteMode">remoteMode</a></code> | <code><a href="#mise-projen.SettingsTaskCacheRemoteMode">SettingsTaskCacheRemoteMode</a></code> | [experimental] Remote task and action cache access mode. |
| <code><a href="#mise-projen.SettingsTaskCache.property.remoteNamespace">remoteNamespace</a></code> | <code>string</code> | [experimental] Namespace sent to the remote build cache. |
| <code><a href="#mise-projen.SettingsTaskCache.property.remoteOidcAudience">remoteOidcAudience</a></code> | <code>string</code> | [experimental] Audience for an automatically acquired remote cache OIDC token. |
| <code><a href="#mise-projen.SettingsTaskCache.property.remoteToken">remoteToken</a></code> | <code>string</code> | [experimental] Bearer token for remote build-cache authentication. |
| <code><a href="#mise-projen.SettingsTaskCache.property.remoteTokenFile">remoteTokenFile</a></code> | <code>string</code> | [experimental] File containing a remote build-cache bearer token. |
| <code><a href="#mise-projen.SettingsTaskCache.property.remoteUrl">remoteUrl</a></code> | <code>string</code> | [experimental] Base URL for the remote build-cache service. |
| <code><a href="#mise-projen.SettingsTaskCache.property.statsReport">statsReport</a></code> | <code>string</code> | [experimental] File to write action-cache session statistics to. |

---

##### `auditReport`<sup>Optional</sup> <a name="auditReport" id="mise-projen.SettingsTaskCache.property.auditReport"></a>

```typescript
public readonly auditReport: string;
```

- *Type:* string

[experimental] File to write the complete task cache audit report to.

---

##### `remoteMode`<sup>Optional</sup> <a name="remoteMode" id="mise-projen.SettingsTaskCache.property.remoteMode"></a>

```typescript
public readonly remoteMode: SettingsTaskCacheRemoteMode;
```

- *Type:* <a href="#mise-projen.SettingsTaskCacheRemoteMode">SettingsTaskCacheRemoteMode</a>

[experimental] Remote task and action cache access mode.

---

##### `remoteNamespace`<sup>Optional</sup> <a name="remoteNamespace" id="mise-projen.SettingsTaskCache.property.remoteNamespace"></a>

```typescript
public readonly remoteNamespace: string;
```

- *Type:* string

[experimental] Namespace sent to the remote build cache.

---

##### `remoteOidcAudience`<sup>Optional</sup> <a name="remoteOidcAudience" id="mise-projen.SettingsTaskCache.property.remoteOidcAudience"></a>

```typescript
public readonly remoteOidcAudience: string;
```

- *Type:* string

[experimental] Audience for an automatically acquired remote cache OIDC token.

---

##### `remoteToken`<sup>Optional</sup> <a name="remoteToken" id="mise-projen.SettingsTaskCache.property.remoteToken"></a>

```typescript
public readonly remoteToken: string;
```

- *Type:* string

[experimental] Bearer token for remote build-cache authentication.

---

##### `remoteTokenFile`<sup>Optional</sup> <a name="remoteTokenFile" id="mise-projen.SettingsTaskCache.property.remoteTokenFile"></a>

```typescript
public readonly remoteTokenFile: string;
```

- *Type:* string

[experimental] File containing a remote build-cache bearer token.

---

##### `remoteUrl`<sup>Optional</sup> <a name="remoteUrl" id="mise-projen.SettingsTaskCache.property.remoteUrl"></a>

```typescript
public readonly remoteUrl: string;
```

- *Type:* string

[experimental] Base URL for the remote build-cache service.

---

##### `statsReport`<sup>Optional</sup> <a name="statsReport" id="mise-projen.SettingsTaskCache.property.statsReport"></a>

```typescript
public readonly statsReport: string;
```

- *Type:* string

[experimental] File to write action-cache session statistics to.

---

### SettingsUpgrade <a name="SettingsUpgrade" id="mise-projen.SettingsUpgrade"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsUpgrade.Initializer"></a>

```typescript
import { SettingsUpgrade } from 'mise-projen'

const settingsUpgrade: SettingsUpgrade = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsUpgrade.property.autoPrune">autoPrune</a></code> | <code>boolean</code> | Schedule the version `mise upgrade` replaced for pruning once the new one has installed. |
| <code><a href="#mise-projen.SettingsUpgrade.property.pruneAfter">pruneAfter</a></code> | <code>string</code> | Grace period before versions replaced by `mise upgrade` are automatically pruned. |

---

##### `autoPrune`<sup>Optional</sup> <a name="autoPrune" id="mise-projen.SettingsUpgrade.property.autoPrune"></a>

```typescript
public readonly autoPrune: boolean;
```

- *Type:* boolean

Schedule the version `mise upgrade` replaced for pruning once the new one has installed.

---

##### `pruneAfter`<sup>Optional</sup> <a name="pruneAfter" id="mise-projen.SettingsUpgrade.property.pruneAfter"></a>

```typescript
public readonly pruneAfter: string;
```

- *Type:* string

Grace period before versions replaced by `mise upgrade` are automatically pruned.

---

### SettingsZig <a name="SettingsZig" id="mise-projen.SettingsZig"></a>

#### Initializer <a name="Initializer" id="mise-projen.SettingsZig.Initializer"></a>

```typescript
import { SettingsZig } from 'mise-projen'

const settingsZig: SettingsZig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsZig.property.useCommunityMirrors">useCommunityMirrors</a></code> | <code>boolean</code> | Download Zig from community-maintained mirrors. |

---

##### `useCommunityMirrors`<sup>Optional</sup> <a name="useCommunityMirrors" id="mise-projen.SettingsZig.property.useCommunityMirrors"></a>

```typescript
public readonly useCommunityMirrors: boolean;
```

- *Type:* boolean

Download Zig from community-maintained mirrors.

---

### TaskConfig <a name="TaskConfig" id="mise-projen.TaskConfig"></a>

configuration for task execution/management.

#### Initializer <a name="Initializer" id="mise-projen.TaskConfig.Initializer"></a>

```typescript
import { TaskConfig } from 'mise-projen'

const taskConfig: TaskConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.TaskConfig.property.cache">cache</a></code> | <code><a href="#mise-projen.TaskConfigCache">TaskConfigCache</a></code> | default experimental local artifact cache configuration for eligible tasks with sources and explicit outputs. |
| <code><a href="#mise-projen.TaskConfig.property.cascade">cascade</a></code> | <code>boolean</code> | cascade task configuration to descendant config roots. |
| <code><a href="#mise-projen.TaskConfig.property.dir">dir</a></code> | <code>string</code> | default directory to run tasks in defined in this file. |
| <code><a href="#mise-projen.TaskConfig.property.excludes">excludes</a></code> | <code>string[]</code> | config-root-relative paths or glob patterns to exclude from file-task discovery. |
| <code><a href="#mise-projen.TaskConfig.property.globalEnv">globalEnv</a></code> | <code>string[]</code> | experimental ambient environment variable names added to every enabled task cache key in this config scope. |
| <code><a href="#mise-projen.TaskConfig.property.globalInputs">globalInputs</a></code> | <code>string[]</code> | experimental config-root-relative source patterns added to every task in this config scope; |
| <code><a href="#mise-projen.TaskConfig.property.globalPassThroughEnv">globalPassThroughEnv</a></code> | <code>string[]</code> | experimental ambient environment variable names preserved under environment denial without affecting task cache keys. |
| <code><a href="#mise-projen.TaskConfig.property.includes">includes</a></code> | <code>string[]</code> | files/directories to include searching for tasks. |
| <code><a href="#mise-projen.TaskConfig.property.inputGroups">inputGroups</a></code> | <code>{[ key: string ]: string[]}</code> | experimental reusable config-root-relative source groups referenced with. |
| <code><a href="#mise-projen.TaskConfig.property.rustCache">rustCache</a></code> | <code>any</code> | deprecated no-op; |
| <code><a href="#mise-projen.TaskConfig.property.shell">shell</a></code> | <code>string</code> | default shell to run tasks with in this config scope. |

---

##### `cache`<sup>Optional</sup> <a name="cache" id="mise-projen.TaskConfig.property.cache"></a>

```typescript
public readonly cache: TaskConfigCache;
```

- *Type:* <a href="#mise-projen.TaskConfigCache">TaskConfigCache</a>

default experimental local artifact cache configuration for eligible tasks with sources and explicit outputs.

---

##### `cascade`<sup>Optional</sup> <a name="cascade" id="mise-projen.TaskConfig.property.cascade"></a>

```typescript
public readonly cascade: boolean;
```

- *Type:* boolean

cascade task configuration to descendant config roots.

---

##### `dir`<sup>Optional</sup> <a name="dir" id="mise-projen.TaskConfig.property.dir"></a>

```typescript
public readonly dir: string;
```

- *Type:* string

default directory to run tasks in defined in this file.

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="mise-projen.TaskConfig.property.excludes"></a>

```typescript
public readonly excludes: string[];
```

- *Type:* string[]

config-root-relative paths or glob patterns to exclude from file-task discovery.

---

##### `globalEnv`<sup>Optional</sup> <a name="globalEnv" id="mise-projen.TaskConfig.property.globalEnv"></a>

```typescript
public readonly globalEnv: string[];
```

- *Type:* string[]

experimental ambient environment variable names added to every enabled task cache key in this config scope.

---

##### `globalInputs`<sup>Optional</sup> <a name="globalInputs" id="mise-projen.TaskConfig.property.globalInputs"></a>

```typescript
public readonly globalInputs: string[];
```

- *Type:* string[]

experimental config-root-relative source patterns added to every task in this config scope;

entries may reference input groups with

---

##### `globalPassThroughEnv`<sup>Optional</sup> <a name="globalPassThroughEnv" id="mise-projen.TaskConfig.property.globalPassThroughEnv"></a>

```typescript
public readonly globalPassThroughEnv: string[];
```

- *Type:* string[]

experimental ambient environment variable names preserved under environment denial without affecting task cache keys.

---

##### `includes`<sup>Optional</sup> <a name="includes" id="mise-projen.TaskConfig.property.includes"></a>

```typescript
public readonly includes: string[];
```

- *Type:* string[]

files/directories to include searching for tasks.

Can be local paths or git repository URLs using git:: prefix (e.g., git::https://github.com/org/repo.git//path?ref=branch)

---

##### `inputGroups`<sup>Optional</sup> <a name="inputGroups" id="mise-projen.TaskConfig.property.inputGroups"></a>

```typescript
public readonly inputGroups: {[ key: string ]: string[]};
```

- *Type:* {[ key: string ]: string[]}

experimental reusable config-root-relative source groups referenced with.

---

##### `rustCache`<sup>Optional</sup> <a name="rustCache" id="mise-projen.TaskConfig.property.rustCache"></a>

```typescript
public readonly rustCache: any;
```

- *Type:* any

deprecated no-op;

use mbx for Rust action caching instead: https://mr-boxington.jdx.dev/getting-started

---

##### `shell`<sup>Optional</sup> <a name="shell" id="mise-projen.TaskConfig.property.shell"></a>

```typescript
public readonly shell: string;
```

- *Type:* string

default shell to run tasks with in this config scope.

---

### TaskConfigCache <a name="TaskConfigCache" id="mise-projen.TaskConfigCache"></a>

default experimental local artifact cache configuration for eligible tasks with sources and explicit outputs.

#### Initializer <a name="Initializer" id="mise-projen.TaskConfigCache.Initializer"></a>

```typescript
import { TaskConfigCache } from 'mise-projen'

const taskConfigCache: TaskConfigCache = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.TaskConfigCache.property.audit">audit</a></code> | <code>boolean</code> | report project files read or written outside declared cache sources and outputs. |
| <code><a href="#mise-projen.TaskConfigCache.property.commandInputs">commandInputs</a></code> | <code>string[]</code> | commands whose stdout and stderr affect eligible task cache keys. |
| <code><a href="#mise-projen.TaskConfigCache.property.enabled">enabled</a></code> | <code>boolean</code> | store and restore eligible task outputs from the local mise cache. |
| <code><a href="#mise-projen.TaskConfigCache.property.env">env</a></code> | <code>string[]</code> | ambient environment variable names whose values affect eligible task cache keys. |

---

##### `audit`<sup>Optional</sup> <a name="audit" id="mise-projen.TaskConfigCache.property.audit"></a>

```typescript
public readonly audit: boolean;
```

- *Type:* boolean

report project files read or written outside declared cache sources and outputs.

---

##### `commandInputs`<sup>Optional</sup> <a name="commandInputs" id="mise-projen.TaskConfigCache.property.commandInputs"></a>

```typescript
public readonly commandInputs: string[];
```

- *Type:* string[]

commands whose stdout and stderr affect eligible task cache keys.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="mise-projen.TaskConfigCache.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

store and restore eligible task outputs from the local mise cache.

---

##### `env`<sup>Optional</sup> <a name="env" id="mise-projen.TaskConfigCache.property.env"></a>

```typescript
public readonly env: string[];
```

- *Type:* string[]

ambient environment variable names whose values affect eligible task cache keys.

---

### ToolConfig <a name="ToolConfig" id="mise-projen.ToolConfig"></a>

policy for tools declared by configs sharing the containing config root.

#### Initializer <a name="Initializer" id="mise-projen.ToolConfig.Initializer"></a>

```typescript
import { ToolConfig } from 'mise-projen'

const toolConfig: ToolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.ToolConfig.property.locked">locked</a></code> | <code>boolean</code> | require tools declared by this config root to resolve and install from their lockfiles. |

---

##### `locked`<sup>Optional</sup> <a name="locked" id="mise-projen.ToolConfig.property.locked"></a>

```typescript
public readonly locked: boolean;
```

- *Type:* boolean

require tools declared by this config root to resolve and install from their lockfiles.

---

### Vars <a name="Vars" id="mise-projen.Vars"></a>

variables to set.

#### Initializer <a name="Initializer" id="mise-projen.Vars.Initializer"></a>

```typescript
import { Vars } from 'mise-projen'

const vars: Vars = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### BootstrapRemoteInstallMise <a name="BootstrapRemoteInstallMise" id="mise-projen.BootstrapRemoteInstallMise"></a>


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.BootstrapRemoteInstallMise.fromBoolean">fromBoolean</a></code> | *No description.* |
| <code><a href="#mise-projen.BootstrapRemoteInstallMise.fromString">fromString</a></code> | *No description.* |

---

##### `fromBoolean` <a name="fromBoolean" id="mise-projen.BootstrapRemoteInstallMise.fromBoolean"></a>

```typescript
import { BootstrapRemoteInstallMise } from 'mise-projen'

BootstrapRemoteInstallMise.fromBoolean(value: boolean)
```

###### `value`<sup>Required</sup> <a name="value" id="mise-projen.BootstrapRemoteInstallMise.fromBoolean.parameter.value"></a>

- *Type:* boolean

---

##### `fromString` <a name="fromString" id="mise-projen.BootstrapRemoteInstallMise.fromString"></a>

```typescript
import { BootstrapRemoteInstallMise } from 'mise-projen'

BootstrapRemoteInstallMise.fromString(value: string)
```

###### `value`<sup>Required</sup> <a name="value" id="mise-projen.BootstrapRemoteInstallMise.fromString.parameter.value"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.BootstrapRemoteInstallMise.property.value">value</a></code> | <code>string \| boolean</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="mise-projen.BootstrapRemoteInstallMise.property.value"></a>

```typescript
public readonly value: string | boolean;
```

- *Type:* string | boolean

---


### Mise <a name="Mise" id="mise-projen.Mise"></a>

- *Implements:* constructs.IMixin

A mixin that adds mise (https://mise.jdx.dev) support to any projen project.

Apply it with `project.with(new Mise(options))` (or `applyTo()` directly).
Applying multiple `Mise` mixins to the same project merges their
configuration into a single `mise.toml`, backed by `MiseFile`.

*Example*

```typescript
project.with(new Mise({ config: { tools: { node: ['24'] } } }));
```


#### Initializers <a name="Initializers" id="mise-projen.Mise.Initializer"></a>

```typescript
import { Mise } from 'mise-projen'

new Mise(options?: MiseOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.Mise.Initializer.parameter.options">options</a></code> | <code><a href="#mise-projen.MiseOptions">MiseOptions</a></code> | *No description.* |

---

##### `options`<sup>Optional</sup> <a name="options" id="mise-projen.Mise.Initializer.parameter.options"></a>

- *Type:* <a href="#mise-projen.MiseOptions">MiseOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.Mise.addTools">addTools</a></code> | Adds (or extends) dev tools managed by mise. |
| <code><a href="#mise-projen.Mise.applyTo">applyTo</a></code> | Ensures a `MiseFile` exists on the project and merges this mixin's configuration into it. |
| <code><a href="#mise-projen.Mise.merge">merge</a></code> | Deep-merges the given configuration fragment into this mixin's configuration. |
| <code><a href="#mise-projen.Mise.supports">supports</a></code> | Returns true if the construct is a projen `Project`. |

---

##### `addTools` <a name="addTools" id="mise-projen.Mise.addTools"></a>

```typescript
public addTools(tools: {[ key: string ]: string | string[]}): void
```

Adds (or extends) dev tools managed by mise.

*Example*

```typescript
mise.addTools({ node: '24', pnpm: ['11', '10'] });
```


###### `tools`<sup>Required</sup> <a name="tools" id="mise-projen.Mise.addTools.parameter.tools"></a>

- *Type:* {[ key: string ]: string | string[]}

---

##### `applyTo` <a name="applyTo" id="mise-projen.Mise.applyTo"></a>

```typescript
public applyTo(construct: IConstruct): void
```

Ensures a `MiseFile` exists on the project and merges this mixin's configuration into it.

###### `construct`<sup>Required</sup> <a name="construct" id="mise-projen.Mise.applyTo.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `merge` <a name="merge" id="mise-projen.Mise.merge"></a>

```typescript
public merge(config: MiseTomlSchema): void
```

Deep-merges the given configuration fragment into this mixin's configuration.

Objects are merged key by key, arrays are concatenated and de-duplicated, and
any other value overwrites the previous one.

###### `config`<sup>Required</sup> <a name="config" id="mise-projen.Mise.merge.parameter.config"></a>

- *Type:* <a href="#mise-projen.MiseTomlSchema">MiseTomlSchema</a>

---

##### `supports` <a name="supports" id="mise-projen.Mise.supports"></a>

```typescript
public supports(construct: IConstruct): boolean
```

Returns true if the construct is a projen `Project`.

###### `construct`<sup>Required</sup> <a name="construct" id="mise-projen.Mise.supports.parameter.construct"></a>

- *Type:* constructs.IConstruct

---




### MiseTomlSchemaBootstrapLinuxFirewallRulesPort <a name="MiseTomlSchemaBootstrapLinuxFirewallRulesPort" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesPort"></a>

single port number or inclusive range.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesPort.fromNumber">fromNumber</a></code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesPort.fromString">fromString</a></code> | *No description.* |

---

##### `fromNumber` <a name="fromNumber" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesPort.fromNumber"></a>

```typescript
import { MiseTomlSchemaBootstrapLinuxFirewallRulesPort } from 'mise-projen'

MiseTomlSchemaBootstrapLinuxFirewallRulesPort.fromNumber(value: number)
```

###### `value`<sup>Required</sup> <a name="value" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesPort.fromNumber.parameter.value"></a>

- *Type:* number

---

##### `fromString` <a name="fromString" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesPort.fromString"></a>

```typescript
import { MiseTomlSchemaBootstrapLinuxFirewallRulesPort } from 'mise-projen'

MiseTomlSchemaBootstrapLinuxFirewallRulesPort.fromString(value: string)
```

###### `value`<sup>Required</sup> <a name="value" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesPort.fromString.parameter.value"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesPort.property.value">value</a></code> | <code>string \| number</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesPort.property.value"></a>

```typescript
public readonly value: string | number;
```

- *Type:* string | number

---


### MiseTomlSchemaBootstrapMacosDefaults <a name="MiseTomlSchemaBootstrapMacosDefaults" id="mise-projen.MiseTomlSchemaBootstrapMacosDefaults"></a>

desired value, written with the matching `defaults write` type (-bool, -int, -float, -string).


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosDefaults.fromBoolean">fromBoolean</a></code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosDefaults.fromNumber">fromNumber</a></code> | *No description.* |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosDefaults.fromString">fromString</a></code> | *No description.* |

---

##### `fromBoolean` <a name="fromBoolean" id="mise-projen.MiseTomlSchemaBootstrapMacosDefaults.fromBoolean"></a>

```typescript
import { MiseTomlSchemaBootstrapMacosDefaults } from 'mise-projen'

MiseTomlSchemaBootstrapMacosDefaults.fromBoolean(value: boolean)
```

###### `value`<sup>Required</sup> <a name="value" id="mise-projen.MiseTomlSchemaBootstrapMacosDefaults.fromBoolean.parameter.value"></a>

- *Type:* boolean

---

##### `fromNumber` <a name="fromNumber" id="mise-projen.MiseTomlSchemaBootstrapMacosDefaults.fromNumber"></a>

```typescript
import { MiseTomlSchemaBootstrapMacosDefaults } from 'mise-projen'

MiseTomlSchemaBootstrapMacosDefaults.fromNumber(value: number)
```

###### `value`<sup>Required</sup> <a name="value" id="mise-projen.MiseTomlSchemaBootstrapMacosDefaults.fromNumber.parameter.value"></a>

- *Type:* number

---

##### `fromString` <a name="fromString" id="mise-projen.MiseTomlSchemaBootstrapMacosDefaults.fromString"></a>

```typescript
import { MiseTomlSchemaBootstrapMacosDefaults } from 'mise-projen'

MiseTomlSchemaBootstrapMacosDefaults.fromString(value: string)
```

###### `value`<sup>Required</sup> <a name="value" id="mise-projen.MiseTomlSchemaBootstrapMacosDefaults.fromString.parameter.value"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosDefaults.property.value">value</a></code> | <code>string \| number \| boolean</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="mise-projen.MiseTomlSchemaBootstrapMacosDefaults.property.value"></a>

```typescript
public readonly value: string | number | boolean;
```

- *Type:* string | number | boolean

---


### SettingsPythonUvVenvAuto <a name="SettingsPythonUvVenvAuto" id="mise-projen.SettingsPythonUvVenvAuto"></a>

Integrate with uv to manage project venvs when uv.lock is present.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.SettingsPythonUvVenvAuto.fromBoolean">fromBoolean</a></code> | *No description.* |
| <code><a href="#mise-projen.SettingsPythonUvVenvAuto.fromString">fromString</a></code> | *No description.* |

---

##### `fromBoolean` <a name="fromBoolean" id="mise-projen.SettingsPythonUvVenvAuto.fromBoolean"></a>

```typescript
import { SettingsPythonUvVenvAuto } from 'mise-projen'

SettingsPythonUvVenvAuto.fromBoolean(value: boolean)
```

###### `value`<sup>Required</sup> <a name="value" id="mise-projen.SettingsPythonUvVenvAuto.fromBoolean.parameter.value"></a>

- *Type:* boolean

---

##### `fromString` <a name="fromString" id="mise-projen.SettingsPythonUvVenvAuto.fromString"></a>

```typescript
import { SettingsPythonUvVenvAuto } from 'mise-projen'

SettingsPythonUvVenvAuto.fromString(value: string)
```

###### `value`<sup>Required</sup> <a name="value" id="mise-projen.SettingsPythonUvVenvAuto.fromString.parameter.value"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#mise-projen.SettingsPythonUvVenvAuto.property.value">value</a></code> | <code>string \| boolean</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="mise-projen.SettingsPythonUvVenvAuto.property.value"></a>

```typescript
public readonly value: string | boolean;
```

- *Type:* string | boolean

---



## Enums <a name="Enums" id="Enums"></a>

### BootstrapFilePhase <a name="BootstrapFilePhase" id="mise-projen.BootstrapFilePhase"></a>

When to apply the managed path during bootstrap;

pre-packages runs before the pre-packages hook

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.BootstrapFilePhase.PRE_HYPHEN_PACKAGES">PRE_HYPHEN_PACKAGES</a></code> | pre-packages. |
| <code><a href="#mise-projen.BootstrapFilePhase.POST_HYPHEN_PACKAGES">POST_HYPHEN_PACKAGES</a></code> | post-packages. |

---

##### `PRE_HYPHEN_PACKAGES` <a name="PRE_HYPHEN_PACKAGES" id="mise-projen.BootstrapFilePhase.PRE_HYPHEN_PACKAGES"></a>

pre-packages.

---


##### `POST_HYPHEN_PACKAGES` <a name="POST_HYPHEN_PACKAGES" id="mise-projen.BootstrapFilePhase.POST_HYPHEN_PACKAGES"></a>

post-packages.

---


### MiseTomlSchemaBootstrapDirectoriesState <a name="MiseTomlSchemaBootstrapDirectoriesState" id="mise-projen.MiseTomlSchemaBootstrapDirectoriesState"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapDirectoriesState.PRESENT">PRESENT</a></code> | present. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapDirectoriesState.ABSENT">ABSENT</a></code> | absent. |

---

##### `PRESENT` <a name="PRESENT" id="mise-projen.MiseTomlSchemaBootstrapDirectoriesState.PRESENT"></a>

present.

---


##### `ABSENT` <a name="ABSENT" id="mise-projen.MiseTomlSchemaBootstrapDirectoriesState.ABSENT"></a>

absent.

---


### MiseTomlSchemaBootstrapFilesState <a name="MiseTomlSchemaBootstrapFilesState" id="mise-projen.MiseTomlSchemaBootstrapFilesState"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapFilesState.PRESENT">PRESENT</a></code> | present. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapFilesState.ABSENT">ABSENT</a></code> | absent. |

---

##### `PRESENT` <a name="PRESENT" id="mise-projen.MiseTomlSchemaBootstrapFilesState.PRESENT"></a>

present.

---


##### `ABSENT` <a name="ABSENT" id="mise-projen.MiseTomlSchemaBootstrapFilesState.ABSENT"></a>

absent.

---


### MiseTomlSchemaBootstrapLinuxFirewallBackend <a name="MiseTomlSchemaBootstrapLinuxFirewallBackend" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallBackend"></a>

firewall backend;

auto reuses managed or active host infrastructure

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallBackend.AUTO">AUTO</a></code> | auto. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallBackend.UFW">UFW</a></code> | ufw. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallBackend.FIREWALLD">FIREWALLD</a></code> | firewalld. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallBackend.NFTABLES">NFTABLES</a></code> | nftables. |

---

##### `AUTO` <a name="AUTO" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallBackend.AUTO"></a>

auto.

---


##### `UFW` <a name="UFW" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallBackend.UFW"></a>

ufw.

---


##### `FIREWALLD` <a name="FIREWALLD" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallBackend.FIREWALLD"></a>

firewalld.

---


##### `NFTABLES` <a name="NFTABLES" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallBackend.NFTABLES"></a>

nftables.

---


### MiseTomlSchemaBootstrapLinuxFirewallDefaultIncoming <a name="MiseTomlSchemaBootstrapLinuxFirewallDefaultIncoming" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallDefaultIncoming"></a>

default action for incoming traffic.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallDefaultIncoming.ALLOW">ALLOW</a></code> | allow. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallDefaultIncoming.DENY">DENY</a></code> | deny. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallDefaultIncoming.REJECT">REJECT</a></code> | reject. |

---

##### `ALLOW` <a name="ALLOW" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallDefaultIncoming.ALLOW"></a>

allow.

---


##### `DENY` <a name="DENY" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallDefaultIncoming.DENY"></a>

deny.

---


##### `REJECT` <a name="REJECT" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallDefaultIncoming.REJECT"></a>

reject.

---


### MiseTomlSchemaBootstrapLinuxFirewallDefaultOutgoing <a name="MiseTomlSchemaBootstrapLinuxFirewallDefaultOutgoing" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallDefaultOutgoing"></a>

default action for outgoing traffic.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallDefaultOutgoing.ALLOW">ALLOW</a></code> | allow. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallDefaultOutgoing.DENY">DENY</a></code> | deny. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallDefaultOutgoing.REJECT">REJECT</a></code> | reject. |

---

##### `ALLOW` <a name="ALLOW" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallDefaultOutgoing.ALLOW"></a>

allow.

---


##### `DENY` <a name="DENY" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallDefaultOutgoing.DENY"></a>

deny.

---


##### `REJECT` <a name="REJECT" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallDefaultOutgoing.REJECT"></a>

reject.

---


### MiseTomlSchemaBootstrapLinuxFirewallRulesAction <a name="MiseTomlSchemaBootstrapLinuxFirewallRulesAction" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesAction"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesAction.ALLOW">ALLOW</a></code> | allow. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesAction.LIMIT">LIMIT</a></code> | limit. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesAction.DENY">DENY</a></code> | deny. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesAction.REJECT">REJECT</a></code> | reject. |

---

##### `ALLOW` <a name="ALLOW" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesAction.ALLOW"></a>

allow.

---


##### `LIMIT` <a name="LIMIT" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesAction.LIMIT"></a>

limit.

---


##### `DENY` <a name="DENY" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesAction.DENY"></a>

deny.

---


##### `REJECT` <a name="REJECT" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesAction.REJECT"></a>

reject.

---


### MiseTomlSchemaBootstrapLinuxFirewallRulesDirection <a name="MiseTomlSchemaBootstrapLinuxFirewallRulesDirection" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesDirection"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesDirection.INCOMING">INCOMING</a></code> | incoming. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesDirection.OUTGOING">OUTGOING</a></code> | outgoing. |

---

##### `INCOMING` <a name="INCOMING" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesDirection.INCOMING"></a>

incoming.

---


##### `OUTGOING` <a name="OUTGOING" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesDirection.OUTGOING"></a>

outgoing.

---


### MiseTomlSchemaBootstrapLinuxFirewallRulesProtocol <a name="MiseTomlSchemaBootstrapLinuxFirewallRulesProtocol" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesProtocol"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesProtocol.TCP">TCP</a></code> | tcp. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesProtocol.UDP">UDP</a></code> | udp. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesProtocol.SCTP">SCTP</a></code> | sctp. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesProtocol.DCCP">DCCP</a></code> | dccp. |

---

##### `TCP` <a name="TCP" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesProtocol.TCP"></a>

tcp.

---


##### `UDP` <a name="UDP" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesProtocol.UDP"></a>

udp.

---


##### `SCTP` <a name="SCTP" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesProtocol.SCTP"></a>

sctp.

---


##### `DCCP` <a name="DCCP" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesProtocol.DCCP"></a>

dccp.

---


### MiseTomlSchemaBootstrapLinuxFirewallRulesState <a name="MiseTomlSchemaBootstrapLinuxFirewallRulesState" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesState"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesState.PRESENT">PRESENT</a></code> | present. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesState.ABSENT">ABSENT</a></code> | absent. |

---

##### `PRESENT` <a name="PRESENT" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesState.PRESENT"></a>

present.

---


##### `ABSENT` <a name="ABSENT" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallRulesState.ABSENT"></a>

absent.

---


### MiseTomlSchemaBootstrapLinuxFirewallState <a name="MiseTomlSchemaBootstrapLinuxFirewallState" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallState"></a>

desired lifecycle of mise-managed firewall state.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallState.ENABLED">ENABLED</a></code> | enabled. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallState.DISABLED">DISABLED</a></code> | disabled. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxFirewallState.ABSENT">ABSENT</a></code> | absent. |

---

##### `ENABLED` <a name="ENABLED" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallState.ENABLED"></a>

enabled.

---


##### `DISABLED` <a name="DISABLED" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallState.DISABLED"></a>

disabled.

---


##### `ABSENT` <a name="ABSENT" id="mise-projen.MiseTomlSchemaBootstrapLinuxFirewallState.ABSENT"></a>

absent.

---


### MiseTomlSchemaBootstrapLinuxSystemdUnitsType <a name="MiseTomlSchemaBootstrapLinuxSystemdUnitsType" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnitsType"></a>

write Type in the [Service] section.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnitsType.SIMPLE">SIMPLE</a></code> | simple. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnitsType.EXEC">EXEC</a></code> | exec. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnitsType.FORKING">FORKING</a></code> | forking. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnitsType.ONESHOT">ONESHOT</a></code> | oneshot. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnitsType.DBUS">DBUS</a></code> | dbus. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnitsType.NOTIFY">NOTIFY</a></code> | notify. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnitsType.NOTIFY_HYPHEN_RELOAD">NOTIFY_HYPHEN_RELOAD</a></code> | notify-reload. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnitsType.IDLE">IDLE</a></code> | idle. |

---

##### `SIMPLE` <a name="SIMPLE" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnitsType.SIMPLE"></a>

simple.

---


##### `EXEC` <a name="EXEC" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnitsType.EXEC"></a>

exec.

---


##### `FORKING` <a name="FORKING" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnitsType.FORKING"></a>

forking.

---


##### `ONESHOT` <a name="ONESHOT" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnitsType.ONESHOT"></a>

oneshot.

---


##### `DBUS` <a name="DBUS" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnitsType.DBUS"></a>

dbus.

---


##### `NOTIFY` <a name="NOTIFY" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnitsType.NOTIFY"></a>

notify.

---


##### `NOTIFY_HYPHEN_RELOAD` <a name="NOTIFY_HYPHEN_RELOAD" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnitsType.NOTIFY_HYPHEN_RELOAD"></a>

notify-reload.

---


##### `IDLE` <a name="IDLE" id="mise-projen.MiseTomlSchemaBootstrapLinuxSystemdUnitsType.IDLE"></a>

idle.

---


### MiseTomlSchemaBootstrapMacosDefaultsEntriesHost <a name="MiseTomlSchemaBootstrapMacosDefaultsEntriesHost" id="mise-projen.MiseTomlSchemaBootstrapMacosDefaultsEntriesHost"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosDefaultsEntriesHost.ANY">ANY</a></code> | any. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosDefaultsEntriesHost.CURRENT">CURRENT</a></code> | current. |

---

##### `ANY` <a name="ANY" id="mise-projen.MiseTomlSchemaBootstrapMacosDefaultsEntriesHost.ANY"></a>

any.

---


##### `CURRENT` <a name="CURRENT" id="mise-projen.MiseTomlSchemaBootstrapMacosDefaultsEntriesHost.CURRENT"></a>

current.

---


### MiseTomlSchemaBootstrapMacosDockOrientation <a name="MiseTomlSchemaBootstrapMacosDockOrientation" id="mise-projen.MiseTomlSchemaBootstrapMacosDockOrientation"></a>

Dock screen edge.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosDockOrientation.BOTTOM">BOTTOM</a></code> | bottom. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosDockOrientation.LEFT">LEFT</a></code> | left. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosDockOrientation.RIGHT">RIGHT</a></code> | right. |

---

##### `BOTTOM` <a name="BOTTOM" id="mise-projen.MiseTomlSchemaBootstrapMacosDockOrientation.BOTTOM"></a>

bottom.

---


##### `LEFT` <a name="LEFT" id="mise-projen.MiseTomlSchemaBootstrapMacosDockOrientation.LEFT"></a>

left.

---


##### `RIGHT` <a name="RIGHT" id="mise-projen.MiseTomlSchemaBootstrapMacosDockOrientation.RIGHT"></a>

right.

---


### MiseTomlSchemaBootstrapMacosFinderPreferredViewStyle <a name="MiseTomlSchemaBootstrapMacosFinderPreferredViewStyle" id="mise-projen.MiseTomlSchemaBootstrapMacosFinderPreferredViewStyle"></a>

Finder preferred view style.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosFinderPreferredViewStyle.ICON">ICON</a></code> | icon. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosFinderPreferredViewStyle.LIST">LIST</a></code> | list. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosFinderPreferredViewStyle.COLUMN">COLUMN</a></code> | column. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosFinderPreferredViewStyle.GALLERY">GALLERY</a></code> | gallery. |

---

##### `ICON` <a name="ICON" id="mise-projen.MiseTomlSchemaBootstrapMacosFinderPreferredViewStyle.ICON"></a>

icon.

---


##### `LIST` <a name="LIST" id="mise-projen.MiseTomlSchemaBootstrapMacosFinderPreferredViewStyle.LIST"></a>

list.

---


##### `COLUMN` <a name="COLUMN" id="mise-projen.MiseTomlSchemaBootstrapMacosFinderPreferredViewStyle.COLUMN"></a>

column.

---


##### `GALLERY` <a name="GALLERY" id="mise-projen.MiseTomlSchemaBootstrapMacosFinderPreferredViewStyle.GALLERY"></a>

gallery.

---


### MiseTomlSchemaBootstrapMacosLaunchdAgentsProcessType <a name="MiseTomlSchemaBootstrapMacosLaunchdAgentsProcessType" id="mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgentsProcessType"></a>

write ProcessType, the scheduling band launchd runs the job in.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgentsProcessType.BACKGROUND">BACKGROUND</a></code> | Background. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgentsProcessType.STANDARD">STANDARD</a></code> | Standard. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgentsProcessType.ADAPTIVE">ADAPTIVE</a></code> | Adaptive. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgentsProcessType.INTERACTIVE">INTERACTIVE</a></code> | Interactive. |

---

##### `BACKGROUND` <a name="BACKGROUND" id="mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgentsProcessType.BACKGROUND"></a>

Background.

---


##### `STANDARD` <a name="STANDARD" id="mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgentsProcessType.STANDARD"></a>

Standard.

---


##### `ADAPTIVE` <a name="ADAPTIVE" id="mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgentsProcessType.ADAPTIVE"></a>

Adaptive.

---


##### `INTERACTIVE` <a name="INTERACTIVE" id="mise-projen.MiseTomlSchemaBootstrapMacosLaunchdAgentsProcessType.INTERACTIVE"></a>

Interactive.

---


### MiseTomlSchemaBootstrapServicesBuiltin <a name="MiseTomlSchemaBootstrapServicesBuiltin" id="mise-projen.MiseTomlSchemaBootstrapServicesBuiltin"></a>

A mise-provided user service.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapServicesBuiltin.HISTORY_HYPHEN_WATCH">HISTORY_HYPHEN_WATCH</a></code> | history-watch. |

---

##### `HISTORY_HYPHEN_WATCH` <a name="HISTORY_HYPHEN_WATCH" id="mise-projen.MiseTomlSchemaBootstrapServicesBuiltin.HISTORY_HYPHEN_WATCH"></a>

history-watch.

---


### MiseTomlSchemaBootstrapServicesOnChange <a name="MiseTomlSchemaBootstrapServicesOnChange" id="mise-projen.MiseTomlSchemaBootstrapServicesOnChange"></a>

System scope only.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapServicesOnChange.RELOAD">RELOAD</a></code> | reload. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapServicesOnChange.RESTART">RESTART</a></code> | restart. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapServicesOnChange.RELOAD_UNDERSCORE_OR_UNDERSCORE_RESTART">RELOAD_UNDERSCORE_OR_UNDERSCORE_RESTART</a></code> | reload_or_restart. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapServicesOnChange.NONE">NONE</a></code> | none. |

---

##### `RELOAD` <a name="RELOAD" id="mise-projen.MiseTomlSchemaBootstrapServicesOnChange.RELOAD"></a>

reload.

---


##### `RESTART` <a name="RESTART" id="mise-projen.MiseTomlSchemaBootstrapServicesOnChange.RESTART"></a>

restart.

---


##### `RELOAD_UNDERSCORE_OR_UNDERSCORE_RESTART` <a name="RELOAD_UNDERSCORE_OR_UNDERSCORE_RESTART" id="mise-projen.MiseTomlSchemaBootstrapServicesOnChange.RELOAD_UNDERSCORE_OR_UNDERSCORE_RESTART"></a>

reload_or_restart.

---


##### `NONE` <a name="NONE" id="mise-projen.MiseTomlSchemaBootstrapServicesOnChange.NONE"></a>

none.

---


### MiseTomlSchemaBootstrapServicesRestart <a name="MiseTomlSchemaBootstrapServicesRestart" id="mise-projen.MiseTomlSchemaBootstrapServicesRestart"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapServicesRestart.ALWAYS">ALWAYS</a></code> | always. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapServicesRestart.ON_HYPHEN_FAILURE">ON_HYPHEN_FAILURE</a></code> | on-failure. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapServicesRestart.NEVER">NEVER</a></code> | never. |

---

##### `ALWAYS` <a name="ALWAYS" id="mise-projen.MiseTomlSchemaBootstrapServicesRestart.ALWAYS"></a>

always.

---


##### `ON_HYPHEN_FAILURE` <a name="ON_HYPHEN_FAILURE" id="mise-projen.MiseTomlSchemaBootstrapServicesRestart.ON_HYPHEN_FAILURE"></a>

on-failure.

---


##### `NEVER` <a name="NEVER" id="mise-projen.MiseTomlSchemaBootstrapServicesRestart.NEVER"></a>

never.

---


### MiseTomlSchemaBootstrapServicesScope <a name="MiseTomlSchemaBootstrapServicesScope" id="mise-projen.MiseTomlSchemaBootstrapServicesScope"></a>

Defaults to system;

builtin implies user

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapServicesScope.SYSTEM">SYSTEM</a></code> | system. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapServicesScope.USER">USER</a></code> | user. |

---

##### `SYSTEM` <a name="SYSTEM" id="mise-projen.MiseTomlSchemaBootstrapServicesScope.SYSTEM"></a>

system.

---


##### `USER` <a name="USER" id="mise-projen.MiseTomlSchemaBootstrapServicesScope.USER"></a>

user.

---


### MiseTomlSchemaBootstrapServicesState <a name="MiseTomlSchemaBootstrapServicesState" id="mise-projen.MiseTomlSchemaBootstrapServicesState"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapServicesState.RUNNING">RUNNING</a></code> | running. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapServicesState.STOPPED">STOPPED</a></code> | stopped. |
| <code><a href="#mise-projen.MiseTomlSchemaBootstrapServicesState.ABSENT">ABSENT</a></code> | absent. |

---

##### `RUNNING` <a name="RUNNING" id="mise-projen.MiseTomlSchemaBootstrapServicesState.RUNNING"></a>

running.

---


##### `STOPPED` <a name="STOPPED" id="mise-projen.MiseTomlSchemaBootstrapServicesState.STOPPED"></a>

stopped.

---


##### `ABSENT` <a name="ABSENT" id="mise-projen.MiseTomlSchemaBootstrapServicesState.ABSENT"></a>

absent.

---


### MiseTomlSchemaDaemonProvidersPreset <a name="MiseTomlSchemaDaemonProvidersPreset" id="mise-projen.MiseTomlSchemaDaemonProvidersPreset"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.MiseTomlSchemaDaemonProvidersPreset.POSTGRES">POSTGRES</a></code> | postgres. |
| <code><a href="#mise-projen.MiseTomlSchemaDaemonProvidersPreset.COCKROACHDB">COCKROACHDB</a></code> | cockroachdb. |
| <code><a href="#mise-projen.MiseTomlSchemaDaemonProvidersPreset.NATS">NATS</a></code> | nats. |

---

##### `POSTGRES` <a name="POSTGRES" id="mise-projen.MiseTomlSchemaDaemonProvidersPreset.POSTGRES"></a>

postgres.

---


##### `COCKROACHDB` <a name="COCKROACHDB" id="mise-projen.MiseTomlSchemaDaemonProvidersPreset.COCKROACHDB"></a>

cockroachdb.

---


##### `NATS` <a name="NATS" id="mise-projen.MiseTomlSchemaDaemonProvidersPreset.NATS"></a>

nats.

---


### SettingsColorTheme <a name="SettingsColorTheme" id="mise-projen.SettingsColorTheme"></a>

Theme for interactive prompts (auto/default, charm, base16, catppuccin, dracula).

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.SettingsColorTheme.AUTO">AUTO</a></code> | auto. |
| <code><a href="#mise-projen.SettingsColorTheme.DEFAULT">DEFAULT</a></code> | default. |
| <code><a href="#mise-projen.SettingsColorTheme.CHARM">CHARM</a></code> | charm. |
| <code><a href="#mise-projen.SettingsColorTheme.BASE16">BASE16</a></code> | base16. |
| <code><a href="#mise-projen.SettingsColorTheme.CATPPUCCIN">CATPPUCCIN</a></code> | catppuccin. |
| <code><a href="#mise-projen.SettingsColorTheme.DRACULA">DRACULA</a></code> | dracula. |

---

##### `AUTO` <a name="AUTO" id="mise-projen.SettingsColorTheme.AUTO"></a>

auto.

---


##### `DEFAULT` <a name="DEFAULT" id="mise-projen.SettingsColorTheme.DEFAULT"></a>

default.

---


##### `CHARM` <a name="CHARM" id="mise-projen.SettingsColorTheme.CHARM"></a>

charm.

---


##### `BASE16` <a name="BASE16" id="mise-projen.SettingsColorTheme.BASE16"></a>

base16.

---


##### `CATPPUCCIN` <a name="CATPPUCCIN" id="mise-projen.SettingsColorTheme.CATPPUCCIN"></a>

catppuccin.

---


##### `DRACULA` <a name="DRACULA" id="mise-projen.SettingsColorTheme.DRACULA"></a>

dracula.

---


### SettingsHistorySync <a name="SettingsHistorySync" id="mise-projen.SettingsHistorySync"></a>

What the history watcher does with a connected setup repository on its own: `sync` publishes after saves, fetches periodically, and applies incoming changes.

Any conflict pauses publication and incoming application for the entire setup; local commits and fetching continue. `fetch-only` only fetches; `manual` does nothing automatically. `mise bootstrap dotfiles sync` and `pull` work on request in every mode.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.SettingsHistorySync.SYNC">SYNC</a></code> | sync. |
| <code><a href="#mise-projen.SettingsHistorySync.FETCH_HYPHEN_ONLY">FETCH_HYPHEN_ONLY</a></code> | fetch-only. |
| <code><a href="#mise-projen.SettingsHistorySync.MANUAL">MANUAL</a></code> | manual. |

---

##### `SYNC` <a name="SYNC" id="mise-projen.SettingsHistorySync.SYNC"></a>

sync.

---


##### `FETCH_HYPHEN_ONLY` <a name="FETCH_HYPHEN_ONLY" id="mise-projen.SettingsHistorySync.FETCH_HYPHEN_ONLY"></a>

fetch-only.

---


##### `MANUAL` <a name="MANUAL" id="mise-projen.SettingsHistorySync.MANUAL"></a>

manual.

---


### SettingsLibc <a name="SettingsLibc" id="mise-projen.SettingsLibc"></a>

Libc implementation to use for precompiled Linux binaries.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.SettingsLibc.GLIBC">GLIBC</a></code> | glibc. |
| <code><a href="#mise-projen.SettingsLibc.GNU">GNU</a></code> | gnu. |
| <code><a href="#mise-projen.SettingsLibc.MUSL">MUSL</a></code> | musl. |

---

##### `GLIBC` <a name="GLIBC" id="mise-projen.SettingsLibc.GLIBC"></a>

glibc.

---


##### `GNU` <a name="GNU" id="mise-projen.SettingsLibc.GNU"></a>

gnu.

---


##### `MUSL` <a name="MUSL" id="mise-projen.SettingsLibc.MUSL"></a>

musl.

---


### SettingsLockedScopes <a name="SettingsLockedScopes" id="mise-projen.SettingsLockedScopes"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.SettingsLockedScopes.PROJECT">PROJECT</a></code> | project. |
| <code><a href="#mise-projen.SettingsLockedScopes.GLOBAL">GLOBAL</a></code> | global. |
| <code><a href="#mise-projen.SettingsLockedScopes.SYSTEM">SYSTEM</a></code> | system. |

---

##### `PROJECT` <a name="PROJECT" id="mise-projen.SettingsLockedScopes.PROJECT"></a>

project.

---


##### `GLOBAL` <a name="GLOBAL" id="mise-projen.SettingsLockedScopes.GLOBAL"></a>

global.

---


##### `SYSTEM` <a name="SYSTEM" id="mise-projen.SettingsLockedScopes.SYSTEM"></a>

system.

---


### SettingsLockfileMode <a name="SettingsLockfileMode" id="mise-projen.SettingsLockfileMode"></a>

Choose incremental merging or complete lockfile generation.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.SettingsLockfileMode.MERGE">MERGE</a></code> | merge. |
| <code><a href="#mise-projen.SettingsLockfileMode.GENERATE">GENERATE</a></code> | generate. |

---

##### `MERGE` <a name="MERGE" id="mise-projen.SettingsLockfileMode.MERGE"></a>

merge.

---


##### `GENERATE` <a name="GENERATE" id="mise-projen.SettingsLockfileMode.GENERATE"></a>

generate.

---


### SettingsLogLevel <a name="SettingsLogLevel" id="mise-projen.SettingsLogLevel"></a>

Show more/less output.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.SettingsLogLevel.TRACE">TRACE</a></code> | trace. |
| <code><a href="#mise-projen.SettingsLogLevel.DEBUG">DEBUG</a></code> | debug. |
| <code><a href="#mise-projen.SettingsLogLevel.INFO">INFO</a></code> | info. |
| <code><a href="#mise-projen.SettingsLogLevel.WARN">WARN</a></code> | warn. |
| <code><a href="#mise-projen.SettingsLogLevel.ERROR">ERROR</a></code> | error. |

---

##### `TRACE` <a name="TRACE" id="mise-projen.SettingsLogLevel.TRACE"></a>

trace.

---


##### `DEBUG` <a name="DEBUG" id="mise-projen.SettingsLogLevel.DEBUG"></a>

debug.

---


##### `INFO` <a name="INFO" id="mise-projen.SettingsLogLevel.INFO"></a>

info.

---


##### `WARN` <a name="WARN" id="mise-projen.SettingsLogLevel.WARN"></a>

warn.

---


##### `ERROR` <a name="ERROR" id="mise-projen.SettingsLogLevel.ERROR"></a>

error.

---


### SettingsNpmPackageManager <a name="SettingsNpmPackageManager" id="mise-projen.SettingsNpmPackageManager"></a>

Package manager to use for installing npm packages.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.SettingsNpmPackageManager.AUTO">AUTO</a></code> | auto. |
| <code><a href="#mise-projen.SettingsNpmPackageManager.NPM">NPM</a></code> | npm. |
| <code><a href="#mise-projen.SettingsNpmPackageManager.AUBE">AUBE</a></code> | aube. |
| <code><a href="#mise-projen.SettingsNpmPackageManager.AUBE_UNDERSCORE_CLI">AUBE_UNDERSCORE_CLI</a></code> | aube_cli. |
| <code><a href="#mise-projen.SettingsNpmPackageManager.BUN">BUN</a></code> | bun. |
| <code><a href="#mise-projen.SettingsNpmPackageManager.PNPM">PNPM</a></code> | pnpm. |

---

##### `AUTO` <a name="AUTO" id="mise-projen.SettingsNpmPackageManager.AUTO"></a>

auto.

---


##### `NPM` <a name="NPM" id="mise-projen.SettingsNpmPackageManager.NPM"></a>

npm.

---


##### `AUBE` <a name="AUBE" id="mise-projen.SettingsNpmPackageManager.AUBE"></a>

aube.

---


##### `AUBE_UNDERSCORE_CLI` <a name="AUBE_UNDERSCORE_CLI" id="mise-projen.SettingsNpmPackageManager.AUBE_UNDERSCORE_CLI"></a>

aube_cli.

---


##### `BUN` <a name="BUN" id="mise-projen.SettingsNpmPackageManager.BUN"></a>

bun.

---


##### `PNPM` <a name="PNPM" id="mise-projen.SettingsNpmPackageManager.PNPM"></a>

pnpm.

---


### SettingsSystemDeps <a name="SettingsSystemDeps" id="mise-projen.SettingsSystemDeps"></a>

How to handle a plugin's declared system dependencies before installing a tool.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.SettingsSystemDeps.PROMPT">PROMPT</a></code> | prompt. |
| <code><a href="#mise-projen.SettingsSystemDeps.AUTO">AUTO</a></code> | auto. |
| <code><a href="#mise-projen.SettingsSystemDeps.WARN">WARN</a></code> | warn. |
| <code><a href="#mise-projen.SettingsSystemDeps.IGNORE">IGNORE</a></code> | ignore. |

---

##### `PROMPT` <a name="PROMPT" id="mise-projen.SettingsSystemDeps.PROMPT"></a>

prompt.

---


##### `AUTO` <a name="AUTO" id="mise-projen.SettingsSystemDeps.AUTO"></a>

auto.

---


##### `WARN` <a name="WARN" id="mise-projen.SettingsSystemDeps.WARN"></a>

warn.

---


##### `IGNORE` <a name="IGNORE" id="mise-projen.SettingsSystemDeps.IGNORE"></a>

ignore.

---


### SettingsTaskCacheRemoteMode <a name="SettingsTaskCacheRemoteMode" id="mise-projen.SettingsTaskCacheRemoteMode"></a>

[experimental] Remote task and action cache access mode.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.SettingsTaskCacheRemoteMode.READ_HYPHEN_WRITE">READ_HYPHEN_WRITE</a></code> | read-write. |
| <code><a href="#mise-projen.SettingsTaskCacheRemoteMode.READ_HYPHEN_ONLY">READ_HYPHEN_ONLY</a></code> | read-only. |
| <code><a href="#mise-projen.SettingsTaskCacheRemoteMode.WRITE_HYPHEN_ONLY">WRITE_HYPHEN_ONLY</a></code> | write-only. |

---

##### `READ_HYPHEN_WRITE` <a name="READ_HYPHEN_WRITE" id="mise-projen.SettingsTaskCacheRemoteMode.READ_HYPHEN_WRITE"></a>

read-write.

---


##### `READ_HYPHEN_ONLY` <a name="READ_HYPHEN_ONLY" id="mise-projen.SettingsTaskCacheRemoteMode.READ_HYPHEN_ONLY"></a>

read-only.

---


##### `WRITE_HYPHEN_ONLY` <a name="WRITE_HYPHEN_ONLY" id="mise-projen.SettingsTaskCacheRemoteMode.WRITE_HYPHEN_ONLY"></a>

write-only.

---


### SettingsTaskOutput <a name="SettingsTaskOutput" id="mise-projen.SettingsTaskOutput"></a>

Change output style when executing tasks.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#mise-projen.SettingsTaskOutput.PREFIX">PREFIX</a></code> | prefix. |
| <code><a href="#mise-projen.SettingsTaskOutput.INTERLEAVE">INTERLEAVE</a></code> | interleave. |
| <code><a href="#mise-projen.SettingsTaskOutput.KEEP_HYPHEN_ORDER">KEEP_HYPHEN_ORDER</a></code> | keep-order. |
| <code><a href="#mise-projen.SettingsTaskOutput.REPLACING">REPLACING</a></code> | replacing. |
| <code><a href="#mise-projen.SettingsTaskOutput.TIMED">TIMED</a></code> | timed. |
| <code><a href="#mise-projen.SettingsTaskOutput.QUIET">QUIET</a></code> | quiet. |
| <code><a href="#mise-projen.SettingsTaskOutput.SILENT">SILENT</a></code> | silent. |

---

##### `PREFIX` <a name="PREFIX" id="mise-projen.SettingsTaskOutput.PREFIX"></a>

prefix.

---


##### `INTERLEAVE` <a name="INTERLEAVE" id="mise-projen.SettingsTaskOutput.INTERLEAVE"></a>

interleave.

---


##### `KEEP_HYPHEN_ORDER` <a name="KEEP_HYPHEN_ORDER" id="mise-projen.SettingsTaskOutput.KEEP_HYPHEN_ORDER"></a>

keep-order.

---


##### `REPLACING` <a name="REPLACING" id="mise-projen.SettingsTaskOutput.REPLACING"></a>

replacing.

---


##### `TIMED` <a name="TIMED" id="mise-projen.SettingsTaskOutput.TIMED"></a>

timed.

---


##### `QUIET` <a name="QUIET" id="mise-projen.SettingsTaskOutput.QUIET"></a>

quiet.

---


##### `SILENT` <a name="SILENT" id="mise-projen.SettingsTaskOutput.SILENT"></a>

silent.

---

