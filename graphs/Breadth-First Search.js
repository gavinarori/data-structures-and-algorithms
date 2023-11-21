class Graph {
    constructor(numOfNodes) {
        this.adjacencyList = new Array(numOfNodes).fill([]).map(() => new Set());
    }

    addEdge(node1, node2) {
        this.adjacencyList[node1].add(node2);
        this.adjacencyList[node2].add(node1);
    }

    bfs(startNode) {
        const visited = new Set();
        const queue = [startNode];
        visited.add(startNode);

        while (queue.length > 0) {
            const currentNode = queue.shift();
            console.log(currentNode);

            this.adjacencyList[currentNode].forEach((neighbor) => {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            });
        }
    }
}

const graph = new Graph(5);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);

console.log("BFS starting from node 0:");
graph.bfs(0);
