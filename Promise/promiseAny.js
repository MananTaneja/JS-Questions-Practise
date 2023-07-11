// Implement polyfill for Promise.any()

// https://bigfrontend.dev/problem/implement-Promise-any


/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function any(promises) {


    return new Promise((resolve, reject) => {
        promises.forEach(promise => {

        })
    })
}