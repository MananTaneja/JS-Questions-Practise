function throttle(fn, timeout) {
    let invoked = false
    return function (...args) {
        if (!invoked) {
            fn.apply(this, args)
            invoked = true
            setTimeout(() => {
                invoked = false
            }, timeout)
        }
    }
}