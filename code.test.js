const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

var graph = {
  A: ['B'],
  B: ['A', 'C'],
  C: ['D'],
  D: []
};
assert(JSON.stringify(depthFirstSearch(graph, 'A', 'A')) == JSON.stringify(['A']));
assert(JSON.stringify(depthFirstSearch(graph, 'A', 'D')) == JSON.stringify(['A', 'B', 'C', 'D']));
assert(JSON.stringify(depthFirstSearch(graph, 'D', 'A')) == JSON.stringify([]));

var graph = {
    A: ['B'],
    B: [],
    C: ['D'],
    D: []
};
assert(JSON.stringify(depthFirstSearch(graph, 'A', 'E')) == JSON.stringify([]));
assert(JSON.stringify(depthFirstSearch(graph, 'A', 'C')) == JSON.stringify([]));

var graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F', 'G'],
    D: [],
    E: ['H'],
    F: [],
    G: [],
    H: []
};
assert(JSON.stringify(depthFirstSearch(graph, 'A', 'H')) == JSON.stringify(['A', 'B', 'E', 'H']));

var graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: ['F'],
    F: []
};
assert(JSON.stringify(depthFirstSearch(graph, 'A', 'F')) == JSON.stringify(['A', 'C', 'F']) || JSON.stringify(depthFirstSearch(graph, 'A', 'F')) == JSON.stringify(['A', 'B', 'E', 'F']));

var graph = { };
assert(JSON.stringify(depthFirstSearch(graph, 'A', 'B')) == JSON.stringify([]));
