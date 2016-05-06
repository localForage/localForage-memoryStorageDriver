import config from './rollup.config';

config.format = 'umd';
config.dest = 'dist/localforage-memoryStorageDriver.js';
config.moduleName = 'memoryStorageDriver';

export default config;
