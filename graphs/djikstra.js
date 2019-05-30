class WeightedGraph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacencyList = {};
  }

  addVertex(node) {
    this.adjacencyList[node] = [];
    this.numberOfNodes++;
    return this.numberOfNodes;
  }
  addEdge(node1, node2, weight) {
    if (!this.adjacencyList[node1] || !this.adjacencyList[node2]) return console.warn("Invalid node name!");
    this.adjacencyList[node1].push({
      name: node2,
      weight: weight
    });
    return this;
  }
  showConnections() {
    Object.keys(this.adjacencyList).forEach(key => {
      console.log(key, "-->", ...this.adjacencyList[key]);
    });
  }
}

let newGraph = new WeightedGraph();
newGraph.addVertex("Twin peaks");
newGraph.addVertex("R1S1");
newGraph.addVertex("R2S1");
newGraph.addVertex("R21S2");
newGraph.addVertex("R22S2");
newGraph.addVertex("RS3");
newGraph.addVertex("Golden bridge");

newGraph.addEdge("Twin peaks", "R1S1", 4);
newGraph.addEdge("Twin peaks", "R2S1", 10);
newGraph.addEdge("R1S1", "RS3", 21);
newGraph.addEdge("R2S1","R21S2", 5);
newGraph.addEdge("R2S1","R22S2", 8);
newGraph.addEdge("R21S2", "RS3", 5);
newGraph.addEdge("R22S2", "RS3", 12);
newGraph.addEdge("RS3", "Golden bridge", 4);

// console.table(newGraph.adjacencyList);
// newGraph.showConnections();

function djikstraShortestPath(graph, node1, node2){
  // have a object to keep every node and best case distance
  // travese through all the adjacent nodes of the currentNode
    // check if they are available in the object
      // if yes, check if the current weight + edge weight is less than the current value in the object
      // if not, add the weight mapping to the object
    // move to the next node which has lowest value
  let currentNode = node1;
  let visitedNodes = [node1];
  let bestWeight = {
    [node1]: 0
  }

  while(currentNode !== node2){
    graph[currentNode].forEach(nextNode => {
      let nextValue = nextNode.name;
      if (bestWeight[nextValue]){
        if (bestWeight[nextValue] > bestWeight[currentNode] + nextNode.weight ){
          bestWeight[nextValue] = bestWeight[currentNode] + nextNode.weight;
        }
      } else {
        bestWeight[nextValue] = bestWeight[currentNode] + nextNode.weight;
      }
    })
    currentNode = Object.keys(bestWeight)
                  .filter(item=>item !== node1 && !visitedNodes.includes(item))
                  .reduce((acc, key)=>{
                    return bestWeight[acc] > bestWeight[key] ? key: acc;
                  })
    visitedNodes.push(currentNode);
  }
  return bestWeight[node2];
}

let shortestValue = djikstraShortestPath(newGraph.adjacencyList, "Twin peaks","Golden bridge")
console.log(shortestValue)
