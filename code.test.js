const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

var graph = [];
assert(JSON.stringify(depthFirstSearch(graph, 'A', 'B')) == JSON.stringify([]));
