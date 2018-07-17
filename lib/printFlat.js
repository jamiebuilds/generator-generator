'use strict';

function printFlat(node) {
  let res = '';
  let queue = [node];

  while (queue.length) {
    let value = queue.shift();

    if (typeof value === 'string') {
      res += value;
    } else if (value && typeof value.type === 'string') {
      let next = [];

      if (value.type === 'Program') {
        for (let item of value.body) {
          next.push(item);
          next.push('\n');
        }
      } else if (value.type === 'ExpressionStatement') {
        next.push(value.expression);
        next.push(';');
      } else if (value.type === 'BinaryExpression') {
        next.push(value.left);
        next.push(' ' + value.operator + ' ');
        next.push(value.right);
      } else if (value.type === 'Identifier') {
        next.push(value.name);
      } else {
        throw new Error('unknown');
      }

      queue = next.concat(queue);
    }
  }

  return res;
}

module.exports = printFlat;
