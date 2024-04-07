function calcMinTransactions(transactions) {
    const nodes = new Set()
    for (const [src, dest, _amount] of transactions) {
        nodes.add(dest)
        nodes.add(src)
    }
    const n = nodes.size
    const scores = Array(n).fill(0)

    for (const [src, dest, amount] of transactions) {
        scores[src] -= amount
        scores[dest] += amount
    }

    const pos = [], neg = []

    for (let i = 0; i < n; ++i) {
        if (scores[i] < 0) {
            neg.push(scores[i])
        }
        if (scores[i] > 0) {
            pos.push(scores[i])
        }
    }

    function recurse(pos, neg) {
        if (pos.length === 0 || neg.length === 0) return 0

        const currentNeg = neg.shift()
        let count = Number.MAX_VALUE

        for (let currentPositive of pos) {
            pos.shift()
            if (-1 * currentNeg === currentPositive) {
            }
            else if (-1 * currentNeg > currentPositive) {

                neg.push(currentPositive + currentNeg)
            } else {
                pos.push(currentPositive + currentNeg)
            }

            count = Math.min(count, recurse(pos, neg))

        }

        return count + 1
    }

    const c = recurse(pos, neg)

    console.log(c)
}


calcMinTransactions([[0, 1, 10], [1, 0, 1], [1, 2, 5], [2, 0, 5]])
calcMinTransactions([[0, 1, 10], [2, 0, 5]])