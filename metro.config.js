const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const os = require('os');

const config = {};
// Monkey patch for older Node or broken environments
if (!os.availableParallelism) {
  os.availableParallelism = () => os.cpus().length;
}


module.exports = mergeConfig(getDefaultConfig(__dirname), config);
