const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'ts-jest',
  testMatch: ['<rootDir>/src/**/*.spec.{ts,tsx}'],
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json',
    },
  },
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
    '.+\\.(css|png|jpg|svg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  setupFiles: ['<rootDir>/test-setup.ts'],
  verbose: true,
  collectCoverage: true,
};
