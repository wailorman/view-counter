const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

(async () => {
  const PATHS = {
    babelConfig: path.resolve(__dirname, '../.babelrc'),
    tmpBabelConfig: path.resolve(__dirname, '../.tmp/.babelrc'),
  };

  const DESIRED_NODE_VERSION = process.argv[2] || '6';

  const babelConfig = JSON.parse(fs.readFileSync(PATHS.babelConfig));

  const newBabelConfig = { ...babelConfig };

  newBabelConfig.presets[0][1].targets.node = DESIRED_NODE_VERSION;

  await fse.outputFile(PATHS.tmpBabelConfig, JSON.stringify(newBabelConfig, null, 2));

  console.log('Success!');
})().catch(console.error);
