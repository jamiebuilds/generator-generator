'use strict';

function generateFromGenerator(ast, generator) {
  let res = '';
  for (let str of generator(ast)) res += str;
  return res;
}

module.exports = generateFromGenerator;
