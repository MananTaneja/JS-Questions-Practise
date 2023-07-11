// Using setTimeout to get the functionality of setInterval

// set interval example

// const timerId = setInterval(() => console.log('hi'), 2000)


const timerId2 = setTimeout(function sayHi() {
    console.log('hi')
    setTimeout(sayHi, 2000)
})
