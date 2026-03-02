// {
//     eventName1: [callback1, callback2],
//     eventName2: [callback3, callback4]
// }


function pubSub() {
    const subscribers = new Map()

    function subscribe(eventName, callback) {
        if (!subscribers.has(eventName)) {
            subscribers.set(eventName, new Set())
        }

        const callbacks = subscribers.get(eventName)
        callbacks.add(callback)

        function unsubscribe() {
            if (!subscribers.has(eventName)) return
            const callbacks = subscribers.get(eventName)
            callbacks.delete(callback)
            if (callbacks.size == 0) { subscribers.delete(eventName) }
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


function callback1(data) {
    console.log('callback1: ', data)
}

function callback2(data) {
    console.log('callback2: ', data)
}

const ps = pubSub()

const ub1 = ps.subscribe('event1', callback1)
const ub2 = ps.subscribe('event1', callback2)

ps.publish('event1', 1000)

ub2.unsubscribe()

ps.publish('event1', 10000)