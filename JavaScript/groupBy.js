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

// TODO; figure out how to add callback function when using prototypical inheritance
Array.prototype.groupBy = groupBy