'use strict';

const methods = require('./lib');
const ast = require('./ast');

for (let [name, method] of Object.entries(methods)) {
  console.time(name);
  for (let i = 0; i < 10000; i++) {
    method(ast);
  }
  console.timeEnd(name);
  console.log(method(ast));
}
