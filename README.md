# Dash Components Archetype

## Overview

This is a [Builder][] archetype for [Dash][] component suites. It defines build-
and test configuration, as well as development scripts and a convenient way to
generate a new component suite project with all the necessary boilerplate.

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
