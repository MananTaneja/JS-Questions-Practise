/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start

Array.prototype.sortKeys = function () {
    const data = this

    for (let k = 1; k < data.length; k++) {
        for (let i = 0; i < data.length - k; i++) {
            const a = data[i][0]
            const b = data[i + 1][0]
            if (b > a) {
                const temp = data[i]
                data[i] = data[i + 1]
                data[i + 1] = temp
            }
        }
    }

    return data
}


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const occ = {}

    nums.forEach((num) => {
        if (occ[num]) occ[num]++
        else occ[num] = 1
    })

    const countArr = Object.entries(occ).map(([k, v]) => [v, Number(k)])
    countArr.sortKeys()
    const res = []

    for (let i = 0; i < k && i < countArr.length; i++) {
        res.push(countArr[i][1])
    }

    return res

};
// @lc code=end

