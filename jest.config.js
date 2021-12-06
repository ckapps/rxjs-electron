module.exports = {
  preset: 'ts-jest/presets/default',
  testRegex: '^.+\\.spec\\.ts$',
  collectCoverageFrom: [
    'src/**/*',
    '!src/**/index.ts',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.spec.json',
    },
  },
};
