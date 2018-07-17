'use strict';

function* printGen(node) {
  if (node.type === 'Program') {
    for (let item of node.body) {
      yield item;
      yield '\n';
    }
  } else if (node.type === 'ExpressionStatement') {
    yield node.expression;
    yield ';';
  } else if (node.type === 'BinaryExpression') {
    yield node.left;
    yield ' ' + node.operator + ' ';
    yield node.right;
  } else if (node.type === 'Identifier') {
    yield node.name;
  } else {
    throw new Error('unknown');
  }
}

module.exports = printGen;
