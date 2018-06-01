const fs = require('fs');
// const fse = require('fs-extra');
const path = require('path');
// const util = require('util');
// const babel = require('@babel/core');

// const execFile = util.promisify(require('child_process').execFile);

(async () => {
  const PATHS = {
    babelConfig: path.resolve(__dirname, '../.babelrc'),
    entryFile: path.resolve(__dirname, '../src/index.js'),
    distFile: path.resolve(__dirname, '../lib/index.js'),
    babelBin: path.resolve(__dirname, '../node_modules/.bin/babel'),
  };

  const DESIRED_NODE_VERSION = process.argv[2] || '6';

  const babelConfig = JSON.parse(fs.readFileSync(PATHS.babelConfig));

  const newBabelConfig = { ...babelConfig };

  newBabelConfig.presets[0][1].targets.node = DESIRED_NODE_VERSION;

  // await fse.outputFile(PATHS.tmpBabelConfig, JSON.stringify(newBabelConfig, null, 2));

  // const { stdout } = await execFile('node', [PATHS.babelBin]);

  // const { code } = babel.transformFileSync(PATHS.entryFile, newBabelConfig);

  // debugger;

  console.log('Success!');
})().catch(console.error);
