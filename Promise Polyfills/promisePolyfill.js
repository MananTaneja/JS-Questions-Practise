// Simple promise polyfill

// Link: https://www.youtube.com/watch?v=HaJdoFp2OEc&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=10&t=3118s

/* 
    promise - you pass the executor function

    (resolve, reject) => {}

    chaining methods

    .then(cb) 
    .catch(cb)

    chaining methods have callbacks



*/


function PromisePolyfill(executor) {

    // Storing callbacks sent via chaining methods to execute later
    let onResolveCb, onRejectCb, value
    // required as the code block sent inside the executor - could be syncronous / asynchronous
    let fulfilled = false, rejected = false, called = false
    // called tells us if it is async or not

    function resolve(val) {
        fulfilled = true
        value = val
        if (typeof onResolveCb === 'function') {
            onResolveCb(val)
            called = true
        }

    }
    function reject(err) {
        rejected = true
        value = err
        if (typeof onRejectCb === "function") {
            onRejectCb(err)
            called = true
        }
    }


    this.then = function (cb) {
        onResolveCb = cb
        // check for syncronous code - which would have already done executing
        if (fulfilled && !called) {
            called = true
            onResolveCb(cb)
        }
        return this
    }

    this.catch = function (cb) {
        onRejectCb = cb
        if (rejected && !called) {
            called = true
            onRejectCb(cb)
        }
        return this
    }

    this.cancel = function (cb) {

    }

    executor(resolve, reject)
}

PromisePolyfill.resolve = (val) => {
    new PromisePolyfill(function executor(resolve, _reject) {
        resolve(val)
    })
}
PromisePolyfill.reject = (reason) => {
    new PromisePolyfill(function executor(_resolve, reject) {
        reject(reason)
    })
}


let samplePromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 10 * 1000)
})

samplePromise
    .then((res) => {
        console.log(res)
    })
    .catch((err) => console.error(err))


let promisePolyFill = new PromisePolyfill((resolve, reject) => {
    // console.log(1)
    // setTimeout(() => resolve(2), 10 * 1000)
    // console.log(3)
    resolve(1)
})

promisePolyFill
    .then((res) => console.log(res))
    .catch((err) => console.error(err))


/* 
Main difference in order

For Syncronous: Executor -> Reslove / Reject -> chaining methods
For Async: Executor -> chaining methods -> Resolve / Reject

*/

