/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const exisiting = new Map()
    let maxLen = 0

    let i = 0

    for (let j = 0; j < s.length; j++) {
        const cur = s[j]
        if (exisiting.has(cur) && exisiting.get(cur) >= i) {
            i = exisiting.get(cur) + 1
        }
        maxLen = Math.max(maxLen, j - i + 1)
        exisiting.set(cur, j)
    }

    return maxLen
}
// @lc code=end

