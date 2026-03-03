// LC link: https://leetcode.com/problems/nested-list-weight-sum/description (Premium)
// Alt link: https://algo.monster/liteproblems/339 

/**
 * 
 * @param {Array} arr 
 * @returns 
 */
function nestedListWeightSum(arr, depth = 1) {
    let sum = 0

    arr.forEach(val => {
        if (Array.isArray(val)) {
            sum += nestedListWeightSum(val, depth + 1)
        } else {
            sum += (val * depth)
        }
    })

    return sum
}


const res = nestedListWeightSum(Array.from([1, [2, 2], [[3], 2], 1]))
console.log(res)