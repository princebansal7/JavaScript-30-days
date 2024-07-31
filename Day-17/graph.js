class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }

    // Add an edge between vertices
    addEdge(v1, v2) {
        this.adjacencyList.get(v1).push(v2);
        this.adjacencyList.get(v2).push(v1);
    }

    // Breadth-First Search (BFS)
    bfs(startVertex) {
        const visited = new Set();
        const queue = [startVertex];
        visited.add(startVertex);

        while (queue.length > 0) {
            const vertex = queue.shift();
            console.log(vertex);
            for (const neighbor of this.adjacencyList.get(vertex)) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("D", "E");

console.log("BFS starting from vertex A:");
graph.bfs("A");
