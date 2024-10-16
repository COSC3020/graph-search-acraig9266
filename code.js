function depthFirstSearch(graph, currentNode, targetNode, visitedNodes = new Set(), path = []) {
    visitedNodes.add(currentNode);
    path.push(currentNode);
    if (currentNode == targetNode) {
        return path;
    }

    for (i = 0; i < graph[currentNode].length; i++) {
        if (visitedNodes.has(graph[currentNode][i]) == false) {
            const found = depthFirstSearch(graph, graph[currentNode][i], targetNode, visitedNodes, path);
            if (found != null) {
                return found;
            } 
        }
    }

    path.pop();
    if (path.length != 0){
        return path;
    } else {
        return null;
    }
}
