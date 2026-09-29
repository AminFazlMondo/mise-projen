import path from 'path';
import { cdk, javascript } from 'projen';
import { dedupeAnyOfNumberTypes, JsiiFromJsonSchema, stripUnderscoreProperties } from './projenrc/json2jsii';

const nodeVersion = '24';
const project = new cdk.JsiiProject({
  author: 'Amin Fazl',
  authorAddress: '62678026+AminFazlMondo@users.noreply.github.com',
  jsiiVersion: '~6.0.0',
  typescriptVersion: '~6.0.0',
  minNodeVersion: `${nodeVersion}.0.0`,
  workflowNodeVersion: nodeVersion,
  name: 'mise-projen',
  keywords: [
    'mise',
    'tooling',
    'mixin',
    'projen',
    'typescript',
  ],
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion: '11.25.0',
  pnpmOptions: {
    workspaceYamlOptions: {
      strictDepBuilds: false,
      sharedWorkspaceLockfile: true,
      minimumReleaseAge: 60,
      allowBuilds: {
        '@parcel/watcher': false,
        'unrs-resolver': false,
      },
    },
  },
  projenrcTs: true,
  repositoryUrl: 'https://github.com/AminFazlMondo/mise-projen.git',
  releaseFailureIssue: true,
  githubOptions: {
    dependencyReview: true,
  },
  autoApproveOptions: {
    allowedUsernames: ['AminFazlMondo'],
  },
  autoApproveUpgrades: true,
  devDeps: [
    'json2jsii',
  ],
  peerDeps: [
    'constructs@^10.5.0',
    'projen@^0.103.27',
  ],
  npmTrustedPublishing: true,
});

new JsiiFromJsonSchema(project, {
  structName: 'MiseTomlSchema',
  schemaPath: 'https://mise.jdx.dev/schema/mise.json',
  filePath: path.join('src', 'miseConfig.ts'),
  transform: (schema) => dedupeAnyOfNumberTypes(stripUnderscoreProperties(schema)),
});

project.tasks.tryFind('post-upgrade')?.spawn(project.tasks.tryFind('update-schemas')!);

project.synth();