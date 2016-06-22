# Dash Components Archetype

## Release

To tag and release a new version of the archetype, follow these instructions.
You might be tempted to add some of these steps to NPM's `*version` lifecycle
methods, but that would interfere with versioning and publishing of the actual
project depending on the archetype, since [Builder][] merges the project
package.json scripts with the archetype's package.json scripts.


```sh
# 1. Bump package.json `version` according to [semver][]
$ vi package.json

# 2. Generate `dev/*` package files
$ builder-support gen-dev

# 3. Run tests
$ npm run builder:check

# 4. Commit and tag
$ git add package.json dev
$ git commit -m "%s"
$ git tag -a "%s" -m "%s"
$ git push --follow-tags

5. Publish main and dev package
$ npm publish && cd dev && npm publish && cd -
```

[Builder]: https://github.com/FormidableLabs/builder
[semver]: http://semver.org/
