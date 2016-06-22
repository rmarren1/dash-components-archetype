# Dash Components Archetype

## Release

To tag and release a new version:

1. Update appropriate `HISTORY.md` notes
2. Bump `package.json` version
3. Generate a new `ARCHETYPE-dev` `package.json`
4. Add to git, tag, and publish

```sh
$ vim HISTORY.md              # Version notes
$ vim package.json            # Bump version
$ builder-support gen-dev     # Generate `dev/*` files
$ npm run builder:check       # Last check!
$ git add package.json dev HISTORY.md
$ git commit -m "Version bump"
$ git tag -a "vNUMBER" -m "Version NUMBER"
$ git push && git push --tags
$ npm publish                 # Publish main project
$ cd dev && npm publish       # Publish dev project
```
