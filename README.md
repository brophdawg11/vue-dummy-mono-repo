## vue-dummy-mono-repo

This is a sample boilerplate monorepo for a collection of Vue components that you intend to publish to the NPM registry.  To some extent, each individual component structure is based on the [vue-dummy-published-component](https://github.com/brophdawg11/vue-dummy-published-component) setup - and then adjusted to work in this monorepo setup with [Lerna](https://github.com/lerna/lerna).

If you wish to only publish a single component, you are better off using [vue-dummy-published-component](https://github.com/brophdawg11/vue-dummy-published-component).

**Credits**

Much of the baseline for this work comes from:

* The [Packaging Vue Components for npm](https://vuejs.org/v2/cookbook/packaging-sfc-for-npm.html) entry in the Vue Cookbook
* The associated [vue-sfc-rollup GitHub repo](https://github.com/team-innovation/vue-sfc-rollup)


### What's Included in this Boilerplate?

This adds a few new features that you mind useful when creating robust open-source Vue components (all of which you are welcome to change once your fork for your own purposes): 

* Code linting via [`eslint`](https://eslint.org/)
  * Leverages the [AirBnb ESLint Config](https://github.com/airbnb/javascript) via the [`eslint-config-airbnb-base`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) plugin
  * Adds the [`eslint-plugin-vue`](https://github.com/vuejs/eslint-plugin-vue) plugin with the "recommended" settings
  * Configured via [`.eslintrc.js`](./.eslintrc.js)
* Unit testing via [`jest`](https://jestjs.io/) and [`@vue/test-utils`](https://vue-test-utils.vuejs.org)
  * Configured via [`jest.config.js`](./jest.config.js)
  * Tests located in the [`test/unit`](./test/unit) directory
* [Storybook](https://storybook.js.org/) Generation
  * Configured via [`.storybook`](./.storybook)
  * Stories located in the [`stories`](./stories) directory
* End-to-End tests with [`cypress`](https://www.cypress.io/) that run on top of your generated Storybook  
  * This is a pattern I haven't seen before that makes a lot of sense to me.  Storybook is intended to show off the various usages of your components - so why not write integration tests to ensure those usages are working as expected?
  * Configured in [`cypress.json`](./cypress.json)
  * Tests located in the [`tests/e2e`](./test/e2e) directory
* Precommit hook using [`husky`](https://github.com/typicode/husky) to lint and test the component


### MonoRepo Setup

This was my first time playing with Lerna, so there is always room for improvement, but I attempted to hoist as much to the root as possible to reduce duplication amongst leaf component packages.

* All `devDependencies` live at the root `package.json`
* Component `devDependencies` that are directly used in component npm scripts are listed with `file:` specifiers pointing up to the root
* For this reason, it should never be required to run `lerna bootstrap` or deal with `package-lock.json` files in components
  * If your components have `dependencies`, then this may not work quite right for you.  There's a good discussion in [this lerna issue](https://github.com/lerna/lerna/issues/1415) that might be useful.
* Linting and Unit testing is done solely from the root, since there's nothing inherently component-specific about those.  There are no `npm run lint` or `npm run test:unit` commands in components.
* Storybook building and Cypress E2E tests must still be implemented at the component level because they require component-specific setups.  They are executed from the root using `lerna exec`
  * Cypress requires a local `cypress.json` file, so the file lives at the root and is symlinked into each sub-package
  * Storybook didn't seem to like using `--config` to point to `../../.storybook`, nor did it seem to like the symlink approach, so each sub-package has it's own `.storybook` directory
* A single `rollup.config.js` is used from the root for all components, which loads component-specific info from the component `package.json` file


### Getting Started

To get started with your own publishable components via a monorepo, I would start by copying this to your own new repo and then there's a few changes to make as well as some things to add that have been intentionally left out.

#### Things to Change

* Update all relevant `package.json` fields (`name`, `author`, `repository`, etc.)
* Modify the exported component names in the `package.json` `rollup` field - which is deep-merged onto the shared rollup config.
* Write your components, unit tests, stories, and E2E Tests!
* Update the [LICENSE.md](./LICENSE.md`) with the proper license and attribution

#### Things to Add

* Add some docs for how users can file issues and contribute back to your open-source components.  Check out the [Mozilla Science Lab Post](https://mozillascience.github.io/working-open-workshop/contributing/) for ideas and examples
* Don't forget to host your Storybooks somewhere so users can access it.  [gitHub Pages](https://pages.github.com/) is one potential solution.


### Usage

```bash
# Build all components
npx lerna run build

# Run unit tests
npm run test:unit

# Build all storybooks
npm run storybook:build

# Run all E2E Tests against built Storybooks
npm run test:e2e
```

### Publishing to NPM

Please refer to the [NPM documentation](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry) and the [Lerna Documentation](https://github.com/lerna/lerna/tree/master/commands/publish#readme)
