class Graph{
    constructor(numOfNodes){
        this.matrix = []
        for(let i = 0; i < numOfNodes; i++){
            this.matrix.push(new Array(numOfNodes).fill(0))
        }
    }
    addEdge(fromNode,toNode){
        this.matrix[fromNode][toNode] = 1
        this.matrix[toNode][fromNode] = 1
    }
    removeEdge(fromNode,toNode){
        this.matrix[fromNode][toNode] = 0;
        this.matrix[toNode][fromNode] = 0;
    }
    isEdge(){
        return this.matrix[fromNode][toNode] === 1
    }
}