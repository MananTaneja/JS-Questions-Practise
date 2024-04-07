// invokes functions with array argument and a this context
Function.prototype.applyPolyfill = function (context, args) {
    if (typeof this !== "function") throw new TypeError("Not callable")
    context.fn = this
    context.fn(...args)
}

function printAge(age) {
    console.log(`${this.name} is ${age} is years old`)
}

const person = {
    name: "Sample Name",
}

printAge.apply(person, [10])
printAge.applyPolyfill(person, [10])