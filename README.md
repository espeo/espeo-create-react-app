# Create-espeo-app

## CLI

Install dependencies:
```bash
yarn install
```

Run dev server (on port 4200):
```bash
yarn start
```

Run static code analyze:
```bash
yarn lint
```

Linter auto fix
```bash
yarn lint --fix
```

Run unit tests:
```bash
yarn test
```

Run unit tests in watch mode:
```bash
yarn test --watch
```
Run unit tests and update snapshots:
```bash
yarn test -u
```

Build bundle in development mode:
```bash
yarn build:dev
```

Build bundle in production mode:
```bash
yarn build:prod
```

Full build:
```bash
yarn build
```

Run mocked server (on port 4201):
```bash
yarn mocked-server
```

Open Cypress panel (required running mocked-server & build dist):
```bash
yarn cy:open
```

Run Cypress tests in headless mode (required running mocked-server & build dist):
```bash
yarn cy:run
```

Remove builded files:
```bash
yarn clean
```

Installed dependencies security audit:
```bash
yarn audit
```

To analyze bundle size (via [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)):
```bash
yarn analyze
```

## Used technologies

* [React](https://reactjs.org/)

* [Redux](https://redux.js.org/)

* [TypeScript](https://www.typescriptlang.org/)

* [Jest](https://jestjs.io/)

* [Enzyme](https://airbnb.io/enzyme/docs/guides/jest.html)

* [TSLint](https://palantir.github.io/tslint/)

* [Webpack](https://webpack.js.org/)

* [Cypress](https://cypress.io/)

## Snippets

Snippets are creating based on file name. For example to create actions for `user` feature run `espeo-actions` in `user.actions.ts` file.

* Create container (required .container.ts extension)
```bash
espeo-container
```

* Create component for container container (required `.component.tsx` extension)
```bash
espeo-container-component
```

* Create class component (required `.component.tsx` extension)
```bash
espeo-component
```

* Create function component (required `.component.tsx` extension)
```bash
espeo-component-functional
```

* Create unit test for component (required `.component.spec.tsx` extension in `./spec` directory)
```bash
espeo-component-tests
```

* Create redux actions (required `.actions.ts` extension)
```bash
espeo-actions
```

* Create reducers (required `.reducers.ts` extension)
```bash
espeo-reducers
```

* Create unit test for reducers (required `reducers.spec.ts` extension in `./spec` directory)
```bash
espeo-reducers-tests
```

* Create simple unit test (required `.ts` extension in `spec` director)
```bash
espeo-unit-test
```

* Create cypress test (required `.spec.js` extension in `cypres/integrations` directory)
```bash
espeo-cypress-test
```

* Create cypress command (required `.js` extension in `cypres/support` directory)
```bash
espeo-cypress-command
```

## Customize

Install one of this redux middleware

* [redux-observable](https://redux-observable.js.org/)

* [redux-saga](https://redux-saga.js.org/)

* [redux-loop](https://redux-loop.js.org/)

For date parsing [optional]:

* [dayjs](https://github.com/iamkun/dayjs)

Forms [optional]:

* [final-form](https://github.com/final-form/react-final-form#videos)

* [formik](https://jaredpalmer.com/formik)

* [redux-form](https://redux-form.com/8.2.2/)

CSS-IN-JS:

* [styled-components](https://www.styled-components.com) [default]

* [typestyle](https://github.com/typestyle/typestyle)

* [emotion](https://github.com/emotion-js/emotion)

## Remove unused CI

Circle:
```bash
rm -rf .circleci
```

Bitbucket pipelines:
```bash
rm bitbucket-pipelines.yml
```

GitlabCI
```bash
rm .gitlab-ci.yml
```

## Prohibited technologies
* [redux-thunk](https://github.com/reduxjs/redux-thunk)
* [momentjs](https://momentjs.com/)
* [lodash](https://lodash.com/)
