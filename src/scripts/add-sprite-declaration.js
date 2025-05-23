const fs = require('fs');

fs.writeFileSync(
  `${process.cwd()}/dist/iconLibrary/sprite/iconLibrary.svg.d.ts`,
  "export default SVGElement;"
);
