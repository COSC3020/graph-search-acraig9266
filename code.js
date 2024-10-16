// Assuming graph is input as adjacency list

function depthFirstSearch(graph, startNode, targetNode) {
    const result = search(graph, startNode, targetNode);
    if (result == null){
        return [];
    } else{
        return result;
    }
}

function search(graph, currentNode, targetNode, visitedNodes = new Set(), path = []) {
    visitedNodes.add(currentNode);
    path.push(currentNode);
    if (currentNode == targetNode) {
        return path;
    }

    const nextNodes = graph[currentNode] || [];

    for (let i = 0; i < nextNodes.length; i++) {
        if (visitedNodes.has(nextNodes[i]) == false) {
            const result = search(graph, nextNodes[i], targetNode, visitedNodes, path);
            if (result) {
                return result;
            } 
        }
    }

    path.pop();
    return null;
}

const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: [],
    F: []
};

const result = depthFirstSearch(graph, 'A', 'F');
console.log(result); // Output: Path to the target node, e.g., ['A', 'B', 'E', 'F']
