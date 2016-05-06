import babel from 'rollup-plugin-babel';

export default {
  entry: 'lib/localforage-memoryStorageDriver.js',
  // sourceMap: true,
  plugins: [babel()]
};
