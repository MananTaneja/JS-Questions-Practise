/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function all(promises) {
    const resolvedPromises = []
    if (!promises.length) return resolvedPromises
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            Promise.resolve(promise).then(res => {
                resolvedPromises.push(res)
                if (resolvedPromises.length === promises.length) resolve(resolvedPromises)
            }).catch(err => reject(err))
        })
    })
}