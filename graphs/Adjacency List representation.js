class graph{
    constructor(){
        this.list = {}
    }
    addVertex(vertex){
        this.list[vertex] = []
    }
    addEdge(fromNode,toNode){
        this.list[fromNode].push(toNode)
        this.list[toNode].push(fromNode)
    }
    removeEdge(fromNode,toNode){
        this.list[fromNode] = this.list[fromNode].filter((node) => node !== toNode)
        this.list[toNode] = this.list[toNode].filter((node) => node !== fromNode)
    }
    isEdge(fromNode,toNode){
        return this.list[fromNode].includes(toNode)
    }
}