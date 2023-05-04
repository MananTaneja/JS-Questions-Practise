/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const res = new Array()

    res.push([1])

    for (let i = 1; i < numRows; i++) {
        const row = new Array(i + 1)
        row[0] = 1
        row[i] = 1

        for (let j = 1; j < i; j++) {
            row[j] = res[res.length - 1][j - 1] + res[res.length - 1][j]
        }

        res.push(row)
    }
    return res
}