const esModules = ['lodash-es'].join('|');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  clearMocks: true,
};
