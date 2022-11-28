module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          assets: './src/assets',
          components: './src/components',
          containers: './src/containers',
          config: './src/config',
          data: './src/data',
          navigators: './src/navigators',
          reduxs: './src/reduxs',
          screens: './src/screens',
          services: './src/services',
          utils: './src/utils',
        },
        extensions: ['.js', '.ios.js', '.android.js'],
      },
    ],
  ],
};
