function topologicalSort(jobs, deps) {
  const topologicalOrderList = [];
  const graph = buildGraph(jobs, deps);

  // This works because the jobs are distinct numbers starting from 0 or 1
  const visited = new Array(jobs.length + 1).fill(false);
  const visiting = new Array(jobs.length + 1).fill(false);

  for (const job of jobs) {
    const containsCycle = dfsForNoPrereqs(
      graph,
      job,
      visited,
      visiting,
      topologicalOrderList
    );
    if (containsCycle) return [];
  }

  return topologicalOrderList;
}

/*
GRAPH
{
  [ID int]: int[]
}

Keep Visited Array and a Visiting Array
*/

function dfsForNoPrereqs(graph, job, visited, visiting, topologicalOrderList) {
  if (visiting[job]) return true;
  if (visited[job]) return false;

  visiting[job] = true;
  visited[job] = true;

  for (const prereq of graph[job]) {
    if (
      dfsForNoPrereqs(graph, prereq, visited, visiting, topologicalOrderList)
    ) {
      return true;
    }
  }

  topologicalOrderList.push(job);
  visiting[job] = false;

  return false;
}

function buildGraph(jobs, deps) {
  const graph = {};
  for (const job of jobs) {
    graph[job] = [];
  }

  for (const [prereq, job] of deps) {
    graph[job].push(prereq);
  }

  return graph;
}

// -------------------------------------------------------------------------------------------------

// OOP approach

function topologicalSort(jobs, deps) {
  // Review
  // watch out for cycles, not valid if there is a cycle

  const graph = new JobGraph(jobs);

  // add prereqs
  for (const [prereq, job] of deps) {
    graph.addPrereq(job, prereq);
  }

  const topologicalList = [];
  for (const job of jobs) {
    if (traverse(graph.getJob(job), topologicalList)) {
      return [];
    }
  }
  return topologicalList;
}

function traverse(node, topologicalList) {
  if (node.visiting) return true;
  if (node.visited) return false;

  node.visiting = true;
  node.visited = true;

  for (const prereqNode of node.prereq) {
    // checking for cycles
    if (traverse(prereqNode, topologicalList)) {
      return true;
    }
  }
  node.visiting = false;
  topologicalList.push(node.job);

  return false;
}

class JobGraph {
  constructor(jobs) {
    this.graph = {};
    for (const job of jobs) this.addJob(job);
  }

  addJob(job) {
    const jobNode = new JobNode(job);
    this.graph[job] = jobNode;
  }

  getJob(job) {
    return this.graph[job];
  }

  addPrereq(job, prereq) {
    const jobNode = this.getJob(job);
    const prereqNode = this.getJob(prereq);
    jobNode.prereq.push(prereqNode);
  }
}

class JobNode {
  constructor(job) {
    this.visited = false;
    this.visiting = false;
    this.job = job;
    this.prereq = [];
  }
}
