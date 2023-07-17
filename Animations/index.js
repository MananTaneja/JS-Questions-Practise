const box = document.getElementById('box')


// document.addEventListener('click', (e) => {
//     box.style.transform = `translateY(${e.clientY - 25}px)`
//     box.style.transform += `translateX(${e.clientX - 25}px)`
// })

async function fetchRestaurantListPromise() {
    const url = 'http://localhost:3000/restaurantList'

    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json()).then(res => resolve(res)).catch(err => reject(err))
    })
}


async function getDataPromise() {
    const data = await fetchRestaurantListPromise()
    console.log(data)
}

getDataPromise()