// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@root': path.resolve(__dirname),
      '@src': path.resolve(__dirname, 'src/'),
      '@page': path.join(path.resolve(__dirname, 'src/'), 'Pages'),
      '@router': path.join(path.resolve(__dirname, 'src/'), 'Routes'),
      '@component': path.join(path.resolve(__dirname, 'src/'), 'Components'),
      '@redux': path.join(path.resolve(__dirname, 'src/'), 'Reducer'),
      '@utils': path.join(path.resolve(__dirname, 'src/'), 'Utils'),
      $types: path.join(path.resolve(__dirname, 'src/'), '@types'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@(.*)$': '<rootDir>/src$1',
      },
    },
  },
};
