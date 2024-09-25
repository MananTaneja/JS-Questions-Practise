/*
 * @lc app=leetcode id=210 lang=javascript
 *
 * [210] Course Schedule II
 */

// @lc code=start

const detectCycle = (u, adj, stack, visited, localVisited) => {
    visited.add(u)
    localVisited.add(u)
    const vertices = adj[u]

    for (let i = 0; i < vertices.length; i++) {
        const v = vertices[i]
        if (localVisited.has(v)) return true
        if (!visited.has(v)) {
            if (detectCycle(vertices[i], adj, stack, visited, localVisited)) return true
        }
    }

    localVisited.delete(u)
    stack.push(u)

    return false
}

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    const adj = {}

    for (let i = 0; i < numCourses; i++) {
        adj[i] = []
    }

    for (let i = 0; i < prerequisites.length; i++) {
        const [u, v] = prerequisites[i]
        adj[v].push(u)
    }

    const stack = []
    const visited = new Set()
    const localVisited = new Set()

    for (const [u, _] in adj) {
        const num = Number(u)
        if (!visited.has(num)) {
            const isCyclic = detectCycle(num, adj, stack, visited, localVisited)
            if (isCyclic) return []

        }
    }

    return stack.reverse()
}

findOrder(2, [[1, 0]])
// @lc code=end

