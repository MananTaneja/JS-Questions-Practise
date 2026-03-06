/*
The Interviewer's Prompt

"In a high-traffic environment like LinkedIn, we often need to fetch large amounts of data or assets simultaneously. However, browsers have a limit on concurrent connections, and we don't want to overwhelm our backend services.

I want you to implement a Task Runner or Promise Pool function. This function should manage a queue of asynchronous tasks and ensure that only a specific number of them are running at any given time."
Functional Requirements

    promisePool(tasks, limit):

        tasks: An array of functions. Each function, when called, returns a Promise.

        limit: A positive integer representing the maximum number of tasks allowed to run in parallel.

    Execution:

        As soon as one task finishes, the next task in the queue should start immediately.

        The function should return a single Promise that resolves with an array of all the results (preserving the original order of the tasks) once all tasks have been completed.

    Efficiency:

        You should not wait for a 'batch' of 3 to finish before starting the next batch. The pool should always be "full" if there are tasks remaining.

Technical Constraints & Discussion Points

    Error Handling: If one task fails, should the entire pool reject, or should it continue with the other tasks? (For this exercise, assume we want the same behavior as Promise.all—reject immediately if one fails).

    Scale: How does your solution handle an array of 1,000 tasks?

    Edge Cases: What if the limit is greater than the number of tasks? What if the tasks array is empty?

*/
const promisePool = (tasks, limit) => {
    return new Promise((resolve, reject) => {
        let completedCount = 0
        let index = 0
        let results = []

        const runWorker = () => {
            if (index >= tasks.length) return

            const currentIndex = index++
            const currentTask = tasks[currentIndex]

            currentTask().then((res) => {
                results[currentIndex] = res
                completedCount++
                console.log('finished executing index:', currentIndex)

                if (completedCount === tasks.length) {
                    resolve(results)
                } else {
                    runWorker()
                }
            }).catch(reject)
        }

        // initially execute all tasks till we reach the limit
        for (let i = 0; i < Math.min(limit, tasks.length); i++) {
            runWorker()
        }
    })
}

const taskA = () => new Promise((res, rej) => setTimeout(() => res('taskA completed'), 200)) // 0
const taskB = () => new Promise((res, rej) => setTimeout(() => res('taskB completed'), 2000)) // 1
const taskC = () => new Promise((res, rej) => setTimeout(() => res('taskC completed'), 100)) // 2
const taskD = () => new Promise((res, rej) => setTimeout(() => res('taskD completed'), 1500)) // 3
const taskE = () => new Promise((res, rej) => setTimeout(() => res('taskE completed'), 200)) // 4
const taskF = () => new Promise((res, rej) => setTimeout(() => res('taskF completed'), 200)) // 5

const tasks = [taskA, taskB, taskC, taskD, taskE, taskF]

const p = promisePool(tasks, 2)

p.then(console.log)