# Dash Components Archetype

## Overview

This is a [Builder][] archetype for [Dash][] component suites. It defines build-
and test configuration, as well as development scripts and a convenient way to
generate a new component suite project with all the necessary boilerplate.

## Generating a component suite project

```sh
$ npm install -g builder-init
$ builder-init dash-components-archetype
```

Answer the prompts, then:

```sh
$ cd [YOUR-COMPONENT-SUITE-NAME]
$ npm install
```

## Development

We don't yet have a dev server with demo capabilities in this archetype. The
best way to test your components is by linking into `dash2` and testing them
from there.

1. Prepare module by linking and watching for changes

        # Symlink module
        $ npm link

        # Transpile components to `lib/` and watch for changes
        $ npm start

2. Link module into `dash2` project

        # In the `dash2/renderer` project directory:
        $ npm link [YOUR-COMPONENT-SUITE-NAME]

Now you should be able to restart the webpack process (in `dash2/renderer`:
`ctrl-c`, `npm start`), after which webpack will automatically pick up new
changes to the component suite.


## Customizing your project

### Components path

The default path to your components is `src/components`. If you want to change
this, you'll also have to update the `DASH_COMPONENTS_SOURCE` environment
variable in your project's `package.json`:

```json
{
  "scripts": {
    "start": "DASH_COMPONENTS_SOURCE=src/components builder run transpile-dev-watch",
    "test": "builder run check"
  }
}
```

## Release

To tag and release a new version of the archetype, follow these instructions.
You might be tempted to add some of these steps to NPM's `*version` lifecycle
methods, but that would interfere with versioning and publishing of the actual
project depending on the archetype, since [Builder][] merges the project
package.json scripts with the archetype's package.json scripts.


```sh
# 1. Bump package.json `version` according to [semver][]
vi package.json

# 2. Generate `dev/*` package files
builder-support gen-dev

# 3. Run tests
npm run builder:check

# 4. Commit and tag
git add package.json dev
git commit -m "vx.x.x"
git tag -a "vx.x.x" -m "vx.x.x"
git push --follow-tags

5. Publish main and dev package
npm publish && cd dev && npm publish && cd -
```

[Builder]: https://github.com/FormidableLabs/builder
[Dash]: https://github.com/plotly/dash2
[dash-components-core]: https://github.com/plotly/dash-components-core
[semver]: http://semver.org/
