/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

// @lc code=start

const detectCycle = (u, adjList, visited = new Set()) => {

    if (visited.has(u)) return true

    visited.add(u)

    const vertices = Array.from(adjList[u])

    for (let i = 0; i < vertices.length; i++) {
        if (detectCycle(vertices[i], adjList, visited)) return true
    }

    visited.delete(u)

    return false
}

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const adjList = {}

    // add all nodes
    for (let i = 0; i < numCourses; i++) {
        adjList[i] = new Set()
    }

    // add paths
    for (let i = 0; i < prerequisites.length; i++) {
        const [dest, source] = prerequisites[i]
        adjList[dest].add(source)
    }

    for (let entry in adjList) {
        const u = Number(entry[0])
        if (detectCycle(u, adjList)) {
            return false
        }
    }

    return true
}

console.log(canFinish(2, [[1, 0], [0, 1]]))
// @lc code=end

