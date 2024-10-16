const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

var graph = {
  A: ['B']
  B: ['A', 'C']
  C: ['D']
  D: []
};
assert(JSON.stringify(depthFirstSearch(graph, 'A', 'A')) == JSON.stringify(['A']));
assert(JSON.stringify(depthFirstSearch(graph, 'A', 'D')) == JSON.stringify(['A', 'B', 'C', 'D'));
