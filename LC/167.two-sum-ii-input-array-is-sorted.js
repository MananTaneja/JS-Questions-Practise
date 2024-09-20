/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */
// @lc code=start
const binarySearch = (array, target, l, r) => {
    while (l <= r) {
        // remember this!
        const m = Math.floor(l + ((r - l) / 2))
        if (array[m] > target) {
            r = m - 1
        } else if (array[m] < target) {
            l = m + 1
        } else {
            return m + 1
        }
    }

    return false
}
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {

    for (let i = 0; i < numbers.length; i++) {
        const first = numbers[i]
        const req = target - first
        const second = binarySearch(numbers, req, i + 1, numbers.length - 1)

        if (second) {
            return [i + 1, second]
        }
    }

    return [0, 0]

}

// twoSum([5, 25, 75], 100)
// @lc code=end

