const fs = require('fs');
const fse = require('fs-extra');

const fwIconSrcDir = `${__dirname}/../iconLibrary`;
const fwIconDestDir = `${__dirname}/../../dist/iconLibrary`;

fse.copy(fwIconSrcDir, `${fwIconDestDir}/svg`, { overwrite: true }, (err) => {
  if (err) {
    console.error(err);
  }
});
