/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const s = new Set(nums)
    let ans = 0

    for (const n of s) {
        if (!s.has(n - 1)) { // to ensure this is O(N)
            let length = 1
            while (s.has(n + length)) {
                length += 1
            }
            ans = Math.max(ans, length)
        }
    }

    return ans
};
// @lc code=end

