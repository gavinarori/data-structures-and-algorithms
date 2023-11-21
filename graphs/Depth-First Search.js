class Graph {
    constructor(numOfNodes) {
        this.adjacencyList = new Array(numOfNodes).fill([]).map(() => new Set());
    }

    addEdge(node1, node2) {
        this.adjacencyList[node1].add(node2);
        this.adjacencyList[node2].add(node1);
    }

    dfs(startNode, visited = new Set()) {
        visited.add(startNode);
        console.log(startNode);
        this.adjacencyList[startNode].forEach((neighbor) => {
            if (!visited.has(neighbor)) {
                this.dfs(neighbor, visited);
            }
        });
    }
}


const graph = new Graph(5);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);

console.log("DFS starting from node 0:");
graph.dfs(0);
