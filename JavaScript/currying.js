// Currying

function sum(a) {
    return function (b) {
        return a + b
    }
}

const sumOneLine = a => b => a + b

console.log(sum(1)(2))

// sum(1)(2)(3)()

function infiniteSum(a) {
    return function (b) {
        if (b) return infiniteSum(a + b)
        else return a
    }
}

// Oneliner
const curr = a => b => b ? curr(a + b) : a

console.log(infiniteSum(1)(2)(3)(4)())