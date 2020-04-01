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

- [React](https://reactjs.org/)

- [Redux](https://redux.js.org/)

- [TypeScript](https://www.typescriptlang.org/)

- [Jest](https://jestjs.io/)

- [Enzyme](https://airbnb.io/enzyme/docs/guides/jest.html)

- [TSLint](https://palantir.github.io/tslint/)

- [Webpack](https://webpack.js.org/)

- [Cypress](https://cypress.io/) (optional)

## Snippets

Snippets can be found [here](https://github.com/espeo/espeo-create-react-app/tree/code-snippets)

## SSR

Examples with SSR are placed as a separate branches in this repository.

- [using express](https://github.com/espeo/espeo-create-react-app/tree/chore/ssr-express)

## Customize

Install one of this redux middleware

- [redux-observable](https://redux-observable.js.org/)

- [redux-saga](https://redux-saga.js.org/)

- [redux-loop](https://redux-loop.js.org/)

For date parsing [optional]:

- [dayjs](https://github.com/iamkun/dayjs)

Forms [optional]:

- [final-form](https://github.com/final-form/react-final-form#videos)

- [formik](https://jaredpalmer.com/formik)

- [redux-form](https://redux-form.com/8.2.2/)

CSS-IN-JS:

- [styled-components](https://www.styled-components.com) [default]

- [typestyle](https://github.com/typestyle/typestyle)

- [emotion](https://github.com/emotion-js/emotion)
