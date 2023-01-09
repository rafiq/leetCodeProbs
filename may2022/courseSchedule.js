/*
Topological Sorting (Kahn's Algorithm)

1. Fill an array inDegree[], where inDegree[i] is the number of incoming edges to node i;
i represents a course and incoming edges represent the pre-requisites.
2. Fill an adjacency list.
3. Use queue to traverse nodes in topological order.
    - start with nodes that have 0 in-degree as it means they have no dependency
    - when visiting a node, delete outgoing edges from the node; if this causes other nodes
    to have 0 in-degree, push those nodes into queue
    - repeat this until queue is empty
4. if the total number of visited nodes in topological order is equal to n, return true;
otherwise, return false. This is because, if there is no cycle in the graph, we should be able to
traverse all nodes in topological order.
*/
var canFinish = function(numCourses, prerequisites) {
    // Fill an adjacency list and inDegree array
    let adjList = new Array(numCourses).fill(0).map(() => []);
    let inDegree = new Array(numCourses).fill(0);
    for (let [course, preCourse] of prerequisites) {
        inDegree[course]++;
        adjList[preCourse].push(course);
    }
    // find nodes with 0 in-degree and push them to queue
    let queue = [];
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }
    // traverse nodes in topological order until queue is empty
    // and count the number of nodes traversed
    let count = 0;
    while (queue.length > 0) {
        let node = queue.shift();
        count++;
        for (let v of adjList[node]) {
            inDegree[v] -= 1;
            if (inDegree[v] === 0) {
                queue.push(v);
            }
        }
    }
    return count == numCourses;
    // T.C: O(V+E), we visit every node and every neighbour of the node
    // S.C: O(V+E), for adjacency list
};

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}          DFS
 */
 var canFinish = function(numCourses, prereq) {
    map = {};
    prereq.map(e => map[e[1]] ? map[e[1]].push(e[0]) : map[e[1]] = [e[0]]);
    console.log(map);

    visited = new Set();
    visiting = new Set();
    for (let course = 0; course < numCourses; ++course) {
        if (hasCycle(course)) return false;
    }
    return true;


    function hasCycle(course) {
        if (visited.has(course)) return false;
        if (visiting.has(course)) return true;
        visiting.add(course);

        if (map[course]) {
            for (let nextCourse of map[course]) {
                if (hasCycle(nextCourse)) return true;
            }
        }
        visiting.delete(course);
        visited.add(course);
    }
};

var canFinish = function(numCourses, prerequisites) {
    // prereqs for each course
    const prereq = {};
    // courses we have completed
    const taken = new Set();
    // courses we are currently taking
    const taking = new Set();

    // gather the prerequisites for each class into an adjacency list
    for (let [a, b] of prerequisites)
      if (!prereq[a]) prereq[a] = [b];
      else prereq[a].push(b);

    // for simplification purposes mark all courses that have no prereqs as taken
    for (let i = 0; i < numCourses; i++) if (!prereq[i]) taken.add(i);

    // for each course with a prereq check if a cycle exist
    for (let course in prereq) if (isCycle(course)) return false;

    // no cycles found : we can complete the curriculum
    return true;

    // isCycle starts with a course and recursively calls isCycle on each of that courses prereqs
    // each time we visit a new course we mark it as TAKING
    // if at some point in our recursive calls we find a course that is already marked TAKING
    // we found a cycle and therefor are unable to finish the curriculum
    // once we successfully take all the prereqs for a given course we mark it as TAKEN
    // if we successfully mark all courses as TAKEN we are able to finish the curriculum
    function isCycle(course) {
      // we already completed the course - we don't need to worry about this course : return false
      if (taken.has(course)) return false;
      // we are taking the course hence there is a cycle : return true
      if (taking.has(course)) return true;
      // add the current course to TAKING set
      taking.add(course);
      // for each prereq in the current course recursively call isCycle
      for (let c of prereq[course]) if (isCycle(c)) return true;
      // add to TAKEN
      taken.add(course);
      // return false : there are no cycles
      return false;
    }
  };