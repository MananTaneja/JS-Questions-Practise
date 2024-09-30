/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
 */

// @lc code=start
let globalMax = Number.NEGATIVE_INFINITY
/**
 * @param {TreeNode} root
 * @return {number}
 */
const util = (root) => {
    if (!root) return 0

    const left = maxPathSum(root.left)
    const right = maxPathSum(root.right)

    globalMax = Math.max(left + right + root.val, globalMax, root.val, left + root.val, right + root.val)

    return Math.max(left, right) + root.val
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
    if (!root) return 0
    util(root)
    return globalMax
}
// @lc code=end

