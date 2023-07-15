// Implement polyfill for Promise.any()

// https://bigfrontend.dev/problem/implement-Promise-any


/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function any(promises) {
    let isResolved = false
    let errors = []

    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            promise.then(res => {
                if (!isResolved) {
                    isResolved = true
                    resolve(res)
                }
            }).catch(err => {
                errors.push(err)
                if (errors.length === promises.length) reject(new Error('could not resolve any promise'))
            })
        })
    })
}