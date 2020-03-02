module.exports = {
  env: {
    browser: true,
    es6: true
  },
  plugin: ['prettier'],
  extends: ['eslint:recommended', 'plugin:trettier/recommmended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {}
};
