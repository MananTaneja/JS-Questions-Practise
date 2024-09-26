/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    const n = cost.length
    const store = new Array(n + 1).fill(0)

    for (let i = 2; i <= n; i++) {
        store[i] = Math.min(store[i - 2] + cost[i - 2], store[i - 1] + cost[i - 1])
    }

    return store[n]
}
// @lc code=end

