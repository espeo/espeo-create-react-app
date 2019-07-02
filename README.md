# Create-espeo-app

## CLI

Install dependencies:
```bash
yarn install
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

Remove builded files:
```bash
yarn clean
```

Installed dependencies security audit:
```bash
yarn audit
```

## Used technologies

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Jest](https://jestjs.io/)
* [Enzyme](https://airbnb.io/enzyme/docs/guides/jest.html)
* [TSLint](https://palantir.github.io/tslint/)
* [Webpack](https://webpack.js.org/)

## Customize

Install one of this redux middleware
* [redux-observable](https://redux-observable.js.org/)
* [redux-saga](https://redux-saga.js.org/)
* [redux-loop](https://redux-loop.js.org/)

For date parsing [optional]:
* [dayjs](https://github.com/iamkun/dayjs)

Forms [optional]:
* [final-form](https://github.com/final-form/react-final-form#videos)

## Prohibited technologies
* [redux-thunk](https://github.com/reduxjs/redux-thunk)
* [momentjs](https://momentjs.com/)
* [lodash](https://lodash.com/)
