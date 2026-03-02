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

    function subscribeOnce(eventName, callback) {
        let ub
        const wrappedCallback = (...args) => {
            callback(...args)

            if (ub) {
                ub.unsubscribe()
            }
        }
        ub = subscribe(eventName, wrappedCallback)
        return ub
    }

    function publish(eventName, ...args) {
        const callbacks = subscribers.get(eventName)
        if (!callbacks) return;

        // Take a snapshot to handle unsubscriptions during the loop safely
        [...callbacks].forEach((cb) => cb(...args))
    }

    return {
        subscribe,
        subscribeOnce,
        publish
    }
}


function callback1(data) {
    console.log('callback1: ', data)
}

function callback2(data) {
    console.log('callback2: ', data)
}

function callback3(data) {
    console.log('callback3: ', data)
}

const ps = pubSub()

const ub1 = ps.subscribe('event1', callback1)
const ub2 = ps.subscribe('event1', callback2)
const ub3 = ps.subscribeOnce('event1', callback3)

ps.publish('event1', 1000)

ub2.unsubscribe()

ps.publish('event1', 10000)

/*
Follow ups:
1. subscribeOnce - done
2. publish - should take an array of arguments instead of just one - done
3. in some cases a subscriber may unsubscribe - while the publish is being executed - how can you handle that - done
4. preserving `this` - take context when subscribing and inside the publish method use apply to add the context as well

done:
1. using set - for performance
*/