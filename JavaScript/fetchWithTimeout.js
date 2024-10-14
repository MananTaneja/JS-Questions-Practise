const fetchFn = (signal) => fetch('https://jsonplaceholder.typicode.com/todos/1', { signal }).then((res) => res.json())

const fetchWithTimeout = async (fetchFn, timeout) => {
    const controller = new AbortController()
    const { signal } = controller

    let timerId = setTimeout(() => controller.abort(), timeout)

    try {
        const d = await fetchFn(signal)
        clearTimeout(timerId)
        return d
    } catch (e) {
        console.error(e)
    }
    return null
}


(async function init() {
    const ans = await fetchWithTimeout(fetchFn, 1 * 1000)

    console.log(ans)
})()
