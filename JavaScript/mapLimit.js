/* 
    Question: https://leetcode.com/discuss/interview-question/2409192/Uber-or-Phone-Screen-or-Senior-Front-End-Engineer
*/

// Implement mapLimit, which is a utility function that produces a list of outputs by mapping each input through an asynchronous iteratee function. The provided limit dictates how many operations can occur at once.

// Inputs
// inputs: An array of inputs.
// limit: The maximum number of operations at any one time.
// iterateeFn: The async function that should be called with each input to generate the corresponding output. It will have two arguments:
//      input: The input being processed.
//      callback: A function that will be called when the input is finished processing. It will be provided one argument, the processed output.
// callback: A function that should be called with the array of outputs once all the inputs have been processed.

function getNameById(id, callback) {
    // simulating async request
    const randomRequestTime = Math.floor(Math.random() * 100) + 200

    setTimeout(() => {
        callback("User" + id)
    }, randomRequestTime)
}

function mapLimit(inputs, limit, iterateeFn, callback) {
    // implement here

    let activeCount = 0
    const p = new Array(inputs.length).fill(null)
    let currentIndex = 0

    const constructTask = (id, index) => new Promise((res, rej) => iterateeFn.call(this, id, (input) => { res({ data: input, id: index }) }))

    const init = () => {
        while (activeCount < limit && inputs.length) {
            activeCount++
            const task = constructTask(inputs.shift(), currentIndex++)
            execute(task)
        }
    }

    const execute = (task) => {
        task.then(resp => {
            activeCount--
            p[resp.id] = resp.data
            if (inputs.length) {
                activeCount++
                const nextTask = constructTask(inputs.shift(), currentIndex++)
                execute(nextTask)
            }

            if (!activeCount) {
                callback(p)
            }
        })
    }
    init()

    //

}
//example: 
mapLimit([1, 2, 3, 4, 5], 2, getNameById, (allResults) => {
    console.log("output", allResults) // ["User1", "User2", "User3", "User4", "User5"]
})
