'use strict';

function printRecurse(node) {
  let res = '';

  if (node.type === 'Program') {
    for (let item of node.body) {
      res += printRecurse(item);
      res += '\n';
    }
  } else if (node.type === 'ExpressionStatement') {
    res += printRecurse(node.expression);
    res += ';';
  } else if (node.type === 'BinaryExpression') {
    res += printRecurse(node.left);
    res += ' ' + node.operator + ' ';
    res += printRecurse(node.right);
  } else if (node.type === 'Identifier') {
    res += node.name;
  } else {
    throw new Error('unknown');
  }

  return res;
}

module.exports = printRecurse;
