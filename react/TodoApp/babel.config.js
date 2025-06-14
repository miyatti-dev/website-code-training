module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: './src',
        extensions: ['.ts', '.tsx', '.js'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
