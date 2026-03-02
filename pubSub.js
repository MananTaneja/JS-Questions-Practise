// {
//     eventName1: [callback1, callback2],
//     eventName2: [callback3, callback4]
// }


function pubSub() {
    const subscribers = new Map()

    function subscribe(eventName, callback) {
        if (!subscribers.has(eventName)) {
            subscribers.set(eventName, [])
        }

        const callbacks = subscribers.get(eventName)
        callbacks.push(callback)
        subscribers.set(eventName, callbacks)

        function unsubscribe() {
            if (!subscribers.has(eventName)) return
            const callbacks = subscribers.get(eventName)
            const filtered = callbacks.filter((curCallback) => curCallback != callback)
            if (!filtered.length) { subscribers.delete(eventName) }
            else {
                subscribers.set(eventName, filtered)
            }
        }

        return {
            unsubscribe
        }
    }

    function publish(eventName, args) {
        if (!subscribers.has(eventName)) return
        const callbacks = subscribers.get(eventName)
        callbacks.forEach((callback) => callback(args))
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