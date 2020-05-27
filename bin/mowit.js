const os = require('os'),
const fs = require('fs');

const PubSub = require('../lib/vendor/publish'),
const xebiaTondeuse = require('../lib/mowitnow');

let userArgs = process.argv;
let filepath = userArgs[2];

if (userArgs.indexOf('-h') !== -1 || userArgs.indexOf('--help') !== -1 || filepath === undefined) {
    return console.log('usage : mowit <filepath>');
}

if (userArgs.indexOf('-v') !== -1 || userArgs.indexOf('--version') !== -1) {
    return console.log(require('../package').version);
}


PubSub.subscribe('movements/started', function (msg, pos) {
    console.log('the mower started from ' + pos);
});

PubSub.subscribe('movements/stopped', function (msg, pos) {
    console.log('the mower stopped to ' + pos);
});

fs.readFile(filepath, function (err, data) {
  if (err) throw err;
  var instructions = data.toString().trim().split(os.EOL);
  xebiaTondeuse.run(instructions);
});
