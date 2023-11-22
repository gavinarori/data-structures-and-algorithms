//Kruskal's algorithm is a popular minimum-spanning-tree algorithm which finds an edge of the least possible weight that connects any two trees in the forest. It is a greedy algorithm. This tutorial will guide you on how to implement Kruskal's algorithm in JavaScript.
const graph = [
    { source: 'A', destination: 'B', weight: 1 },
    { source: 'A', destination: 'C', weight: 3 },
    { source: 'B', destination: 'C', weight: 2 },
    { source: 'B', destination: 'D', weight: 5 },
    { source: 'C', destination: 'D', weight: 4 },
    { source: 'C', destination: 'E', weight: 6 },
    { source: 'D', destination: 'E', weight: 7 },
  ];
  
  // union-find data structure allows us to efficiently check for cycles and merge disjoint sets.
  class UnionFind {
    constructor(elements) {
      this.parent = {};

      elements.forEach(e => (this.parent[e] = e));
    }

    union(a, b) {
      this.parent[this.find(a)] = this.find(b);
    }

    find(a) {
      while (this.parent[a] !== a) {
        a = this.parent[a];
      }

      return a;
    }

    connected(a, b) {
      return this.find(a) === this.find(b);
    }
  }
  //We start by sorting the edges and creating a new union-find object. We then iterate through the sorted edges, adding them to the MST if they do not form a cycle.
  function kruskal(graph) {
    graph.sort((a, b) => a.weight - b.weight);

    const nodes = new Set(graph.map(e => [e.source, e.destination]).flat());
    const unionFind = new UnionFind(nodes);

    const mst = [];

    for (let edge of graph) {
      if (!unionFind.connected(edge.source, edge.destination)) {
        unionFind.union(edge.source, edge.destination);
        mst.push(edge);
      }
    }

    return mst;
  }

  console.log(kruskal(graph));
  