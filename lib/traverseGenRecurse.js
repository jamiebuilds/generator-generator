'use strict';

const printGen = require('./printGen');

function* traverseGenRecurse(node) {
  for (let next of printGen(node)) {
    if (typeof next === 'string') {
      yield next;
    } else if (next && typeof next.type === 'string') {
      yield* traverseGenRecurse(next);
    } else {
      throw new Error('unknown');
    }
  }
}

module.exports = traverseGenRecurse;
