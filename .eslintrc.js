// Notes
//   - arrow-body-style and comma-dangle are disabled as they do not work with rollup/buble

module.exports = {
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 2017
  },
  rules: {
    'max-len': ['error', 120],
    'no-underscore-dangle': [2, {
      allow: ['__backboneAgent']
    }],
    'arrow-body-style': [0],
    'comma-dangle': [0]
  },
  env: {
    browser: true,
    jquery: true,
    node: true,
    mocha: true
  }
};
