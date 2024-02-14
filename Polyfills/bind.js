let person1 = {
    name: 'person1'
}

let displayPerson = function (city, state, country, continent) {
    console.log(this.name, city, state, country, continent)
}

let displayPerson1 = displayPerson.bind(person1, 'blr', 'ka')

console.log('usage')
displayPerson1('ind', 'asia')

// Custom Implementation

Function.prototype.bindPolyfill = function (context = {}, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError(`is not a function`)
    }

    let fn = this
    return function () {
        fn.call(context, ...args, ...arguments)
    }
}

let displayPerson1Polyfill = displayPerson.bindPolyfill(person1, 'blr', 'ka')

console.log('polyfill')
displayPerson1Polyfill('ind', 'asia')