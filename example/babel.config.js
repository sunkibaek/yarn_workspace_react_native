const path = require('path');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['../lib'],
        alias: {
          components: './src/components',
          lib: path.resolve(__dirname, '../lib'),
        },
        extensions: ['.tsx'],
      },
    ],
  ],
};
