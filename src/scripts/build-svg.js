const fs = require('fs');
const fse = require('fs-extra');

const veraIconSrcDir = `${__dirname}/../iconLibrary`;
const veraIconDestDir = `${__dirname}/../../dist/iconLibrary`;

fse.copy(veraIconSrcDir, `${veraIconDestDir}/svg`, { overwrite: true }, (err) => {
  if (err) {
    console.error(err);
  }
});
