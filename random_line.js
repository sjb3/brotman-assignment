'use strict';

const fs = require('fs');

function get_line(filename, line, cb) {
  fs.readFile(filename, (err, data) => {
    if (err) throw err;

    var lines = data.toString('utf-8').split('\n');

    if (+line > lines.length) {
      return callback('File end reached without finding line', null);
    }
    cb(null, lines[+line]);
  });
}

let inputFile = process.argv[2];
let inputLine = process.argv[3];
get_line(inputFile, inputLine, (err, inputLine) => {
  console.log('Results: ' + inputLine);
});
