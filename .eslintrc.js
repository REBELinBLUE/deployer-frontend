module.exports = {
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017
  },
  rules: {
    'max-classes-per-file': 0,
    'max-len': ['error', 120],
    'no-underscore-dangle': [2, {
      allow: ['__backboneAgent']
    }],
  },
  env: {
    browser: true,
    jquery: true,
    node: true,
    mocha: true
  }
};
