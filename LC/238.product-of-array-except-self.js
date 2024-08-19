/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {

    let countZero = 0
    const totalProduct = nums.reduce((acc, cur) => {
        if (cur === 0) {
            countZero++
        }
        else acc = acc * cur

        return acc
    }, 1)

    const res = []

    for (let i = 0; i < nums.length; i++) {
        if (countZero === 1) {
            if (nums[i] === 0) {
                res.push(totalProduct)
            } else {
                res.push(0)
            }
        } else if (countZero > 1) {
            res.push(0)
        } else {
            if (nums[i] > 0) {
                res.push(Number(totalProduct / nums[i]))
            } else {
                res.push(-1 * Number(totalProduct / (-1 * nums[i])))
            }
        }
    }

    return res

};
// @lc code=end

