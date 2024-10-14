// Cache an api call for a given duration

const CACHE_DURATION = 2 * 1000

const fetchCached = () => {
    const cache = {}

    return async (url) => {

        const entry = cache[url]

        if (entry && entry.ttl >= Date.now()) {
            console.log('fetching from cache', entry.ttl, Date.now())
        } else {
            if (entry) {
                console.log('data exists but expired at', entry.ttl, Date.now())
            }
            const data = await fetch(url)
            cache[url] = {
                response: data,
                ttl: Date.now() + CACHE_DURATION
            }
            console.log('fetching from network', cache[url].ttl)
        }

        return cache[url][0]
    }
}

const newFetch = fetchCached()

newFetch('https://jsonplaceholder.typicode.com/todos/1')
setTimeout(() => newFetch('https://jsonplaceholder.typicode.com/todos/1'), 1000)
setTimeout(() => newFetch('https://jsonplaceholder.typicode.com/todos/1'), 10000)
