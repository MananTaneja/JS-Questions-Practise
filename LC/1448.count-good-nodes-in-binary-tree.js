/*
 * @lc app=leetcode id=1448 lang=javascript
 *
 * [1448] Count Good Nodes in Binary Tree
 */

// @lc code=start
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
var goodNodes = function (root, pathMax = Number.NEGATIVE_INFINITY) {
    if (!root) return 0

    const left = goodNodes(root.left, Math.max(pathMax, root.val))
    const right = goodNodes(root.right, Math.max(pathMax, root.val))

    return left + right + ((root.val >= pathMax) ? 1 : 0)
}
// @lc code=end

