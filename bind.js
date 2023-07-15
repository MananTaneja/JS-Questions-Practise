// Implementinmg Function.protoype.bind()

/* Function.prototype.bind = function (context) {
    const fn = this
    
    return function () {
        fn.call(context)
    }
}

function bind(fn, context) {
    return function () {
        fn.call(context)
    }
}
 */
// If we want to pass in arguments

Function.prototype.bind = function () {
    const fn = this
    return function () {
        fn.call(fn, arguments)
    }
}
// alternate
// Function.prototype.bind = function () {
//     const fn = this
//     return function () {
//         // console.log(arguments)
//         fn.apply(fn, [...arguments])
//     }
// }


const foo = function () {
    console.log(this.bar)
}

let baz = foo.bind({ bar: "hello" })

baz()
