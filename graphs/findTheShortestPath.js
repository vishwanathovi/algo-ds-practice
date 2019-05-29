class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacencyList = {};
  }

  addVertex(node) {
    this.adjacencyList[node] = [];
    this.numberOfNodes++;
    return this.numberOfNodes;
  }
  addEdge(node1, node2) {
    this.adjacencyList[node1].push(node2);
    // this.adjacencyList[node2].push(node1);
    return this;
  }
  showConnections() {
    Object.keys(this.adjacencyList).forEach(key => {
      console.log(key, "-->", ...this.adjacencyList[key]);
    });
  }
}

let newGraph = new Graph();
newGraph.addVertex("Twin peaks");
newGraph.addVertex("R1S1");
newGraph.addVertex("R2S1");
newGraph.addVertex("R21S2");
newGraph.addVertex("R22S2");
newGraph.addVertex("RS3");
newGraph.addVertex("Golden bridge");
newGraph.addEdge("Twin peaks", "R1S1");
newGraph.addEdge("Twin peaks", "R2S1");
newGraph.addEdge("R1S1", "RS3");
newGraph.addEdge("R2S1","R21S2");
newGraph.addEdge("R2S1","R22S2");
newGraph.addEdge("R21S2", "RS3");
newGraph.addEdge("R22S2", "RS3");
newGraph.addEdge("RS3", "Golden bridge");

console.table(newGraph.adjacencyList);

// Use BFS for finding the shortest path between two nodes
// no weightage on the edges. Just find the route with less nodes to traverse

 /**
 * find the shortest path using BFS
 * @param {Array} graph adjacency-list
 * @param {String} node1
 * @param {String} node2
 * @return {Number} distance
 */
  function shortestPath(graph, node1, node2){
    let count = 1;
    let currentNodeQueue = graph[node1]
    let nextNodeQueue = [];
    while(currentNodeQueue.length){
      let nextNode = currentNodeQueue.shift();
      if (nextNode === node2){
        break;
      } else {
        nextNodeQueue = nextNodeQueue.concat(graph[nextNode]);
      }

      if (!currentNodeQueue.length){
        count++;
        currentNodeQueue = nextNodeQueue;
        nextNodeQueue = [];
      }
    }
    return count;
  }

  console.log(shortestPath(newGraph.adjacencyList, "Twin peaks", "Golden bridge"))
