// Implement Promise.race()

// https://bigfrontend.dev/problem/implement-Promise-race


/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function race(promises) {
    const isDone = false
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            promise.then(data => {
                if (!isDone) resolve(data)
                isDone = true
            }).catch(error => {
                if (!isDone) reject(error)
                isDone = true
            })
        })
    })
}