'use strict';

const fs = require('fs');

function seq_conversion(filename, L) {
  try {
    const data = fs.readFileSync('./dna_seq.txt', 'UTF-8');
    const lines = data.split(' ');

    console.log(lines);

    for (var i = 0; i < 2; i++) {
      console.log('************ DNA sequence conversion ************');
      console.log('@READ_${i + 1}');

      let j = i * 2;
      let snippet = lines.slice(0 + j, 2 + j);

      let str = '';
      let ascii = '';
      for (let k = 0; k < 2; k++) {
        if (snippet[k].slice(0, 2) === '00') {
          str += 'A';
        }
        if (snippet[k].slice(0, 2) === '01') {
          str += 'C';
        }
        if (snippet[k].slice(0, 2) === '10') {
          str += 'G';
        }
        if (snippet[k].slice(0, 2) === '11') {
          str += 'T';
        }

        let score = snippet[k].slice(2, 8);
        let adjusted_score = parseInt(score, 2) + 33;
        let char = String.fromCharCode(adjusted_score);

        ascii += String.fromCharCode(adjusted_score);
      }

      console.log(str);
      console.log(`+READ_${i + 1}`);
      console.log(ascii);
      console.log('==================================');
      console.log('');
    }
  } catch (err) {
    console.error(err);
  }
}

console.log(seq_conversion());
