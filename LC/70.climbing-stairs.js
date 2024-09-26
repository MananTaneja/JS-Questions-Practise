/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let first = 1
    let second = 1

    if (n <= 1) return first

    let res = -1

    for (let i = 2; i < n; i++) {
        res = first + second
        first = second
        second = res
    }

    return first + second
}

// @lc code=end

