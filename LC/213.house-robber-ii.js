/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function (nums) {
    const n = nums.length
    if (n === 1) return nums[0]

    const maxRob = (input) => {
        let f = 0, s = 0, c = 0

        for (let i = 0; i < input.length; i++) {
            c = Math.max(f + input[i], s)
            f = s
            s = c
        }

        return c
    }

    return Math.max(maxRob(nums.slice(0, -1)), maxRob(nums.slice(1)))
}
// @lc code=end

