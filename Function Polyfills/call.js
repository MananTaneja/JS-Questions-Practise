Function.prototype.callPolyFill = function (context, ...args) {
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

printAge.call(person, 10)
printAge.callPolyFill(person, 10)