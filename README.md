# Laced Design Tokens

This repo contains the design tokens created in [Figma](https://docs.tokens.studio) which are transformed to CSS & SCSS with token-transformer and [Style Dictionary](https://amzn.github.io/style-dictionary/#/)

Change your tokens in `tokens.json` (either directly or with the Figma Tokens plugin in Figma). The GitHub action will automatically generate style dictionary tokens to `style-dictionary.json` that can then be read by Style Dictionary, which will output tokens to the format you defined in `style-dictionary.js`

### Before Making Change...

Always `git pull` before making changes as it's very likely there are remote changes because of the auto-commit bot configured in the Github Action

### Pre-Requisites

```sh
npm install
```

### Utils

Added util which runs in Github Action that purges the jsDelivr Github cache

### Transformers + Filters (Style Dictionary)

Some custom transformers and filters have been registered to the build process in order to get working CSS

_Filters_

- `omitTypography` Removes the typography tokens

_Transforms_

- `numberToPx` Convert all number values (except opacity) to `px` as Figma tokens works best with raw number values (allows cross referencing tokens and math i.e. {spacing.sm} * 2)
- `flattenShadow` Check for shadow tokens and convert the object `{ x: 0, y: 0, blur: 0, ...}` to `"0px 0px 0px ..."`
- `fontweightsToNumber` Convert font weight keywords to numbers e.g. Regular -> 400
- `letterSpacingPercentageToEM` converts all percentage-based letter-spacing values to `em` as css doesn't support `%` for this property
- `descriptionToComment` adds a `comment` attribute to each token based on the `description` value coming from Figma Tokens, this allows comments to be generated by Style Dictionary where possible
### Build

```sh
npm run build
```

This is configured to generate CSS variables, CSS custom media queries and SCSS variables in `dist`.

This script is also used by the Github Action so to make changes to the CI, simply change this file

### Release

The assets in `dist` are published to Github Packages npm registry and is done entirely through Github Actions.

To create a new release:
0. Make sure the build workflow has finished first!
1. Goto the `Actions` tab
2. Choose the `Release` workflow on the left sidebar
3. Click the `Run workflow` button on the right
4. Select the `design` branch and select the desired Semantic Version for the release
5. Click `Run workflow`!

### Usage

`npm install @lacedltd/design-tokens`

TODO document npm registry authentication