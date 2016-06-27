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

You can override any `npm` script in the archetype with your own implementation.
To see the list of supported scripts, run `./node_modules/bin/builder run`. For
more details, see [Builder Archetypes][].

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
[Builder Archetypes]: https://github.com/FormidableLabs/builder#archetypes
[Dash]: https://github.com/plotly/dash2
[dash-components-core]: https://github.com/plotly/dash-components-core
[semver]: http://semver.org/
