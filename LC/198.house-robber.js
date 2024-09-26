/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const n = nums.length
    if (n === 1) return nums[0]
    let first = nums[0]
    let second = nums[1]
    let cur = Math.max(first, second)
    for (let i = 2; i < n; i++) {
        cur = Math.max(first + nums[i], second)
        first = Math.max(first, second)
        second = cur
        // console.log(i, cur, first, second)
    }

    return cur
}

// rob([2, 1, 1, 2])

// @lc code=end

