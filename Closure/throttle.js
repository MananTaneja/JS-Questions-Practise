function throttle(fn, timeout) {
    let coolDown = false
    return function (...args) {
        if (!coolDown) {
            fn.apply(this, args)
            coolDown = true
            setTimeout(() => {
                coolDown = false
            }, timeout)
        }
    }
}