/*
 * @lc app=leetcode id=1584 lang=javascript
 *
 * [1584] Min Cost to Connect All Points
 */

// @lc code=start
const calculateDistance = (x1, y1, x2, y2) => {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2)
}
/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
    const n = points.length
    const adj = new Array(n).fill().map(() => Array(n).fill(-1))
    const minHeap = []
    const visited = new Set()

    for (let source = 0; source < n; source++) {
        for (let dest = 0; dest < n; dest++) {
            const [x1, y1] = points[source]
            const [x2, y2] = points[dest]
            adj[source][dest] = calculateDistance(x1, y1, x2, y2)
        }
    }


    const initial = 0
    visited.add(initial)

    for (let i = 0; i < points.length; i++) {
        if (!visited.has(i)) {
            minHeap.push([adj[initial][i], i])
        }
    }

    minHeap.sort((a, b) => {
        return a[0] - b[0]
    })

    const top = minHeap[0]

    console.log('path between', initial, top[1])

    return 0
}

minCostConnectPoints([[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]])
// @lc code=end

