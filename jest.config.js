module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json'
    }
  },
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ['ts', 'tsx', 'html', 'js', 'json'],
  "moduleNameMapper": {
    "^@core/(.*)": "<rootDir>/src/app/$1",
    "^@assets/(.*)": "<rootDir>/src/assets/$1",
    "^@environments/(.*)": "<rootDir>/src/environments/$1"
  },
  setupFiles: [
    "<rootDir>/test-setup.js"
  ],
};