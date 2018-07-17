'use strict';

const printGen = require('./printGen');

function* traverseGenFlatArray(node) {
  let stack = [node];

  while (stack.length) {
    let value = stack.shift();

    if (typeof value === 'string') {
      yield value;
    } else if (value && typeof value.type === 'string') {
      stack = [...printGen(value), ...stack];
    } else {
      throw new Error('unknown');
    }
  }
}

module.exports = traverseGenFlatArray;
