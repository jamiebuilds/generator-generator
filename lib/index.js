'use strict';

const printFlat = require('./printFlat');
const printFlatLinkedList = require('./printFlatLinkedList');
const printRecurse = require('./printRecurse');
const printGenRecurse = require('./printGenRecurse');
const generateFromGenerator = require('./generateFromGenerator');
const traverseGenRecurse = require('./traverseGenRecurse');
const traverseGenFlatArray = require('./traverseGenFlatArray');
const traverseGenFlatLinkedList = require('./traverseGenFlatLinkedList');

function generateFlat(ast) {
  return printFlat(ast);
}

function generateFlatLinkedList(ast) {
  return printFlatLinkedList(ast);
}

function generateRecursively(ast) {
  return printRecurse(ast);
}

function generateWithGeneratorRecursively(ast) {
  return generateFromGenerator(ast, traverseGenRecurse);
}

function generateWithGeneratorIterativelyWithArray(ast) {
  return generateFromGenerator(ast, traverseGenFlatArray);
}

function generateWithGeneratorIterativelyWithLinkedList(ast) {
  return generateFromGenerator(ast, traverseGenFlatLinkedList);
}

function generateRecursivelyWithGenerator(ast) {
  return generateFromGenerator(ast, printGenRecurse);
}

module.exports = {
  generateFlat,
  generateFlatLinkedList,
  generateRecursively,
  generateWithGeneratorRecursively,
  generateWithGeneratorIterativelyWithArray,
  generateWithGeneratorIterativelyWithLinkedList,
  generateRecursivelyWithGenerator
};
