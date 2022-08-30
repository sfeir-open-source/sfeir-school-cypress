const shelljs = require('shelljs');

shelljs.rm('-rf', './web_modules');
shelljs.mkdir('-p', './web_modules/sfeir-theme');
shelljs.cp('-rf', './node_modules/sfeir-school-theme/*', './web_modules/sfeir-theme');
