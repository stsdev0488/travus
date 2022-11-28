module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          assets: './src/assets',
          components: './src/components',
          config: './src/config',
          data: './src/data',
          navigators: './src/navigators',
          reduxs: './src/reduxs',
          screens: './src/screens',
          services: './src/services',
          utils: './src/utils',
        },
      },
    },
  },
};
