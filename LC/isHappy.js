/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const numberHistory = new Set()

    let newNum = n

    while (!numberHistory.has(newNum)) {
        const digits = newNum.toString().split()
        const squaredSum = digits.reduce((acc, cur) => acc + (Number.parseInt(cur) ** 2), 0)
        if (squaredSum === 1) return true
        numberHistory.add(squaredSum)
        newNum = squaredSum
    }

    return false
}

// This is incomplete
