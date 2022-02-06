/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrder = function(numCourses, prerequisites) {
    // if (prerequisites.length !== numCourses) return []
    // let result = [];
    // let cache = {};

    // for (let num in prerequisites) {
    //     // cache[num[0]] ? cache[num[0]] += 1 : cache[num[0]] = 1;
    //     // cache[num[1]] ? cache[num[1]] += 1 : cache[num[1]] = 1;
    //     result.push(num[1]);
    //     result.push(num[0]);

    // }
    // for (let num of Object.keys(cache)) {
    //     console.log(num)
    // }

    // // for (let i = 0; i < prerequisites.length; i++) {

    // // }

    // return cache;
    // const kvList = Array.from({length: numCourses}, (_,i)=>[i, {ind: 0, list:[]}]);
    // const adjList = new Map(kvList);
    // prerequisites.forEach(([cur,pre])=>{
    //     adjList.get(pre).list.push(cur);
    //     adjList.get(cur).ind += 1;
    // });

    // const res= []
    // while(true) {
    //     let mutated = false;
    //     for (const [key, value] of adjList.entries()) {
    //         const {ind, list} = value;
    //         if(ind===0) {
    //             adjList.delete(key);
    //             list.forEach(key=>{
    //                 adjList.get(key).ind-=1;
    //             })
    //             res.push(key);
    //             mutated = true;
    //             break;
    //         }
    //     }
    //     if(!mutated) break;
    // }
    // return res.length===numCourses? res : [];

    let adjList = new Array(numCourses).fill(0).map(() => []);
    let visited = new Array(numCourses).fill(false);
    let inDegree = new Array(numCourses).fill(0);
    for (let [course, preCourse] of prerequisites) {
        adjList[preCourse].push(course);
        inDegree[course]++;
    }
    // We can take courses that have no prerequisite or whose pre-requisites have already been taken
    let res = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] == 0 && !visited[i]) {
            dfs(i);
        }
    }

    return res.length === numCourses ? res : [];

    function dfs(node) {
        res.push(node);
        visited[node] = true;
        for (let next of adjList[node]) {
            inDegree[next]--;
            if (inDegree[next] == 0 && !visited[next]) {
                dfs(next);
            }
        }
    }
};
console.log(
    findOrder(4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]),//[0213]
);