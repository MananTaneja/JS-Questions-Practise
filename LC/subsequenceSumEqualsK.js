// Given an array find all the subsequences with sum k

function backtrack(arr, ind, sum, target, temp) {
    if (ind >= arr.length) {
        if (sum === target) console.log(temp)
        return
    }

    backtrack(arr, ind + 1, sum + arr[ind], target, [...temp, arr[ind]])
    backtrack(arr, ind + 1, sum, target, temp)
}

function subsequences(arr, target) {
    backtrack(arr, 0, 0, target, [])
}


subsequences([1, 2, 1], 2)