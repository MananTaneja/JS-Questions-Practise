const input = [1, [2, 3], [4, 5, 6]]

let currentMax = Number.MIN_SAFE_INTEGER

const recurse = (array) => {
    array.forEach((item) => {
        if (Array.isArray(item)) recurse(item)
        else if (item > currentMax) currentMax = item
    })
}

recurse(input)

console.log("nested max:", currentMax)