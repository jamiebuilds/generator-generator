'use strict';

function* printGenRecurse(node) {
  if (node.type === 'Program') {
    for (let item of node.body) {
      yield* printGenRecurse(item);
      yield '\n';
    }
  } else if (node.type === 'ExpressionStatement') {
    yield* printGenRecurse(node.expression);
    yield ';';
  } else if (node.type === 'BinaryExpression') {
    yield* printGenRecurse(node.left);
    yield ' ' + node.operator + ' ';
    yield* printGenRecurse(node.right);
  } else if (node.type === 'Identifier') {
    yield node.name;
  } else {
    throw new Error('unknown');
  }
}

module.exports = printGenRecurse;
