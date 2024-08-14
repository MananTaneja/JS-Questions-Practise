// A function to memoize computation based on inputs¸
function memoize(fn) {
    const cache = new Map()
    const memoizedFn = function (...args) {
        const argsStr = args.join('-').toString()
        if (cache.has(argsStr)) {
            console.log('Fetching from cache', cache.get(argsStr))
            return cache.get(argsStr)
        }
        const result = fn.apply(this, args)
        cache.set(argsStr, result)
        console.log('Executing function', result)
        return result
    }

    // Clean up for the above memoize function
    memoizedFn.clearCache = function () {
        cache.clear()
    }

    return memoizedFn
}

// Create a function to sum 2 numbers ¸
function sum(a, b) {
    return a + b
}


// Memoize the sum function¸
const memoizedSum = memoize(sum)

// Call memoizedSum with different inputs¸¸
memoizedSum(1, 2) // 3
memoizedSum(1, 2) // 3
memoizedSum(1, 3) // 4
memoizedSum(1, 3) // 4
memoizedSum(1, 4) // 5
memoizedSum(1, 4) // 5
memoizedSum(1, 5) // 6
memoizedSum(1, 5) // 6
memoizedSum(1, 6) // 7
memoizedSum.clearCache()
memoizedSum(1, 6) // 7
memoizedSum(1, 7) // 8
memoizedSum(1, 7) // 8
memoizedSum(1, 8) // 9
memoizedSum(1, 8) // 9
memoizedSum(1, 9) // 10
memoizedSum(1, 9) // 10
memoizedSum(1, 10) // 11
memoizedSum(1, 10) // 11
memoizedSum(1, 11) // 12
memoizedSum(1, 11) // 12
memoizedSum(1, 12) // 13
memoizedSum(1, 12) // 13
memoizedSum(1, 2) // 3