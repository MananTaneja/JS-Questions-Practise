/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let max = 0
    let current = 0
    let min = prices[0]

    for (let i = 1; i < prices.length; i++) {
        current = prices[i] - min
        min = Math.min(prices[i], min)
        max = Math.max(max, current)
    }

    return max
}
// @lc code=end

