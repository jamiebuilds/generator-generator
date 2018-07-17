'use strict';

const printGen = require('./printGen');
const LinkedList = require('./LinkedList');

function* traverseGenFlatLinkedList(node) {
  let list = new LinkedList();

  list.append(node);

  while (list.head) {
    let value = list.shift();

    if (typeof value === 'string') {
      yield value;
    } else if (value && typeof value.type === 'string') {
      let sublist = new LinkedList();

      for (let item of printGen(value)) {
        sublist.append(item);
      }

      list = sublist.concat(list);
    } else {
      throw new Error('unknown');
    }
  }
}

module.exports = traverseGenFlatLinkedList;
