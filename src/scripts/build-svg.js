const fs = require('fs');
const fse = require('fs-extra');

const r2iconSrcDir = `${__dirname}/../iconLibrary`;
const r2iconDestDir = `${__dirname}/../../dist/iconLibrary`;

fse.copy(r2iconSrcDir, `${r2iconDestDir}/svg`, { overwrite: true }, (err) => {
  if (err) {
    console.error(err);
  }
});
