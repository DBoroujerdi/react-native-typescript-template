module.exports = {
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|react-navigation|@react-native-community|@react-navigation/.*))',
  ],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  verbose: true,
  preset: '@testing-library/react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
};
