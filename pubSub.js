// Implement a publisher shubscribe design pattern

function pubSub() {
    const subscribers = {}

    function subscribe(eventName, callback) {
        if (!Array.isArray(subscribers[eventName])) {
            subscribers[eventName] = []
        }
        subscribers[eventName].push(callback)

        const index = subscribers[eventName].length - 1

        return {
            // faster
            unsubscribe() { // removes the required callback
                subscribers[eventName].splice(index, 1)
            }

            // alternate easier to explain
            // unsubscribe() {
            //     subscribers[eventName] = subscribers[eventName].filter(cb => cb !== callback)
            // }
        }
    }

    function publish(eventName, data) {
        if (!Array.isArray(subscribers[eventName])) return

        subscribers[eventName].forEach(callback => {
            callback(data)
        })
    }

    return {
        subscribe,
        publish
    }
}

function showMeTheMoney(money) {
    console.log(money)
}

function updateBalance(money) {
    console.log('balance is:', money)
}

const ps = pubSub()

const ub1 = ps.subscribe('show-money', showMeTheMoney)
const ub2 = ps.subscribe('show-money', updateBalance)

ps.publish('show-money', 1000)

ub2.unsubscribe()

ps.publish('show-money', 10000)