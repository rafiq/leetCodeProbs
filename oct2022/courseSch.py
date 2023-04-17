class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        #check to see if there are any loops because DAG is good also all have to be connected
        visit = set()
        n = numCourses
        adjList = [[] for _ in range(numCourses)]
        departures = [-1] * n
        #adjlist
        for v,u in prerequisites:
            adjList[v].append(u)
        time = 0

        #dfs
        def dfs(node):
            nonlocal time
            time += 1
            #base case
            if not node:
                return True

            visit.add(node)
            print(node, visit, departures)
            #recursive case
            for nei in adjList[node]:
                if nei not in visit:
                    if not dfs(nei):
                        return False
                else:
                    if departures[node] == -1:
                        return False
            time += 1
            departures[node] = time
            return True#if we get here then is a valid route

        #main body
        for i in range(n):
            if i not in visit:
                if not dfs(i):
                    print(i,time,visit)
                    return False

        return len(visit) == n
blob = Solution
blob.canFinish([[1,0]])