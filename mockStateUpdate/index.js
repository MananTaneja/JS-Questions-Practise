const root = document.getElementById('root')

// data store - existing, next

let currentState = '23'

setTimeout((arg) => {
    // not valid for objects just primitives
    if (currentState === arg) {
        return
    } else {
        updateComponents(arg)
        currentState = arg
    }
}, 2 * 1000, '43')

// setting logic

function updateComponents(state) {
    root.textContent = state
}

function mountComponents() {
    root.textContent = currentState
}

mountComponents()