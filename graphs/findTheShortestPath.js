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
    if (!this.adjacencyList[node1] || !this.adjacencyList[node2]) return console.warn("Invalid node name!");
    this.adjacencyList[node1].push(node2);
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

// console.table(newGraph.adjacencyList);

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
    let currentNodeQueue = [...graph[node1]];
    let nextNodeQueue = [];
    let visitedNodes = new Set([node1]);

    while(currentNodeQueue.length){
      let nextNode = currentNodeQueue.shift();
      if (nextNode === node2){
        return count;
      } else {
        if (!visitedNodes.has(nextNode)){ // track visited nodes
          visitedNodes.add(nextNode);
          nextNodeQueue = nextNodeQueue.concat(graph[nextNode]);
        }
      }

      if (!currentNodeQueue.length){ // level switch
        count++;
        currentNodeQueue = nextNodeQueue;
        nextNodeQueue = [];
      }
    }
    console.warn("Not found!")
    return -1;
  }

  // console.log(shortestPath(newGraph.adjacencyList, "Twin peaks", "Golden bridge"))

  // Exercise 2: Handle cases of loops that will create infinite execution

  let loopedGraph = new Graph();
  loopedGraph.addVertex("0");
  loopedGraph.addVertex("1");
  loopedGraph.addVertex("2");
  loopedGraph.addVertex("3");
  loopedGraph.addVertex("4");
  loopedGraph.addVertex("5");
  loopedGraph.addEdge("0", "1");
  loopedGraph.addEdge("0", "2");
  loopedGraph.addEdge("2", "3");
  loopedGraph.addEdge("3", "0");
  loopedGraph.addEdge("3", "4");
  loopedGraph.addEdge("4", "5");

  console.log(shortestPath(loopedGraph.adjacencyList, "0", "5"));
  console.table(loopedGraph.adjacencyList);

  // Exercise 3: Try to reduce the space usage
      // Just reduced the visitedNodes to a hash table from Array
      // further improvements need to be discussed

  // Exercise 4: Return the path instead of the count
      //

  function shortestPath2(graph, node1, node2){
    let count = 1;
    let currentNodeQueue = [...graph[node1]];
    let nextNodeQueue = [];
    let visitedNodes = new Set([node1]);

    while(currentNodeQueue.length){
      let nextNode = currentNodeQueue.shift();
      if (nextNode === node2){
        return count;
      } else {
        if (!visitedNodes.has(nextNode)){ // track visited nodes
          visitedNodes.add(nextNode);
          nextNodeQueue = nextNodeQueue.concat(graph[nextNode]);
        }
      }

      if (!currentNodeQueue.length){ // level switch
        count++;
        currentNodeQueue = nextNodeQueue;
        nextNodeQueue = [];
      }
    }
    console.warn("Not found!")
    return -1;
  }
