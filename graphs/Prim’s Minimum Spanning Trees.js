
class Graph {
    constructor(vertices) {
      this.vertices = vertices;
      this.edges = Array(vertices).fill(null).map(() => Array(vertices).fill(Infinity));
      this.visited = Array(vertices).fill(false);
    }
  
    addEdge(src, dest, weight) {
      this.edges[src][dest] = weight;
      this.edges[dest][src] = weight;
    }
  
    primsMST() {
      this.visited[0] = true;
      let pq = new PriorityQueue();
      let result = [];
  
      for (let i = 0; i < this.vertices - 1; i++) {
        let minVertex = this.getMinVertex();
        this.visited[minVertex] = true;
  
        for (let j = 0; j < this.vertices; j++) {
          if (this.edges[minVertex][j] != Infinity && !this.visited[j]) {
            pq.enqueue(j, this.edges[minVertex][j]);
          } 
        }
  
        let edge = pq.dequeue();
        if (edge) result.push(edge);
      }
  
      return result;
    }
  
    getMinVertex() {
      let min = Infinity;
      let minVertex = -1;
  
      for (let i = 0; i < this.vertices; i++) {
        if (!this.visited[i] && this.edges[0][i] < min) {
          min = this.edges[0][i];
          minVertex = i;
        }
      }
  
      return minVertex;
    }
  }
 