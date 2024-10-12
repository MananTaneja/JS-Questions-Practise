// Write a polyfill for Object.groupby(callbackFn)

function groupBy(callbackFn) {
    const data = this
    const res = {}

    data.forEach(dt => {
        const key = callbackFn(dt)

        if (res[key]) {
            res[key].push(dt)
        } else {
            res[key] = [dt]
        }
    })

    return res
}

Array.prototype.groupBy = groupBy

const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
]


console.log(inventory.groupBy(({ type }) => type))
