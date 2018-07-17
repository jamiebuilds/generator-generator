'use strict';

const LinkedList = require('./LinkedList');

function printFlatLinkedList(node) {
  let res = '';
  let list = new LinkedList();

  list.append(node);

  while (list.head) {
    let value = list.shift();

    if (typeof value === 'string') {
      res += value;
    } else if (value && typeof value.type === 'string') {
      let next = new LinkedList();

      if (value.type === 'Program') {
        for (let item of value.body) {
          next.append(item);
          next.append('\n');
        }
      } else if (value.type === 'ExpressionStatement') {
        next.append(value.expression);
        next.append(';');
      } else if (value.type === 'BinaryExpression') {
        next.append(value.left);
        next.append(' ' + value.operator + ' ');
        next.append(value.right);
      } else if (value.type === 'Identifier') {
        next.append(value.name);
      } else {
        throw new Error('unknown');
      }

      list = next.concat(list);
    }
  }

  return res;
}

module.exports = printFlatLinkedList;
