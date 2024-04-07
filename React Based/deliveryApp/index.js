// Selectors
const cardGroup = document.querySelector('.card-group')
const searchInput = document.getElementById('search-input')
const sortButton = document.getElementById('sort-button')

// utils
const debounce = require('./debounce')

// Init Data
let initRestaurantData = []
let sorted = false
let tags
let favorites = new Set()

// API Handler
async function fetchRestaurantList() {
    const url = 'http://localhost:3000/restaurantList'

    const res = await fetch(url)

    if (res.ok) {
        const json = await res.json()
        return json
    } else {
        console.error('Unable to fetch restaurant data')
    }
}

function fillTags(data) {
    const allTags = data.reduce((acc, cur) => {
        return acc = acc.concat(cur['tags'])
    }, [])
    const uniqueTags = new Set(allTags)
    return uniqueTags
}

// Markup Generation
/**
 * renders html for card
 * @param {*} cardData 
 */
function getCardMarkup(cardData) {
    if (!cardData) return

    const html = `<div class="card" data-card-id=${cardData.id}>
                <div class="image">
                    <img src=${cardData.img} alt="${cardData.altText}">
                </div>
                <h3>${cardData.restaurantName}</h3>
                <div class="flex">
                    <h4>${cardData.location}</h4>
                    <span>Favorite</span>
                </div>
                <p>Price: Rs. ${cardData.estimatedPrice}</p>
            </div>`
    return html
}

function getCardListMarkup(data) {
    const list = data.map(d => getCardMarkup(d))
    return list
}

function renderRestaurants(data) {
    const cardList = getCardListMarkup(data)
    cardGroup.innerHTML = cardList
}

(async function initialize() {
    initRestaurantData = await fetchRestaurantList()
    if (initRestaurantData.length) {
        renderRestaurants(initRestaurantData)
    }
    tags = fillTags(initRestaurantData)
    favorites = getFavorites()
})()


// Event Listeners
cardGroup.addEventListener('click', (event) => {
    const card = event.target.closest('DIV.card')
    if (!card) return
    const cardId = card.dataset.cardId
    const d = find('id', cardId)
    console.log('selected:', d.restaurantName)
    toggleFavorite(cardId)
})

searchInput.addEventListener('keyup', debounce(searchHandler, 300))

sortButton.addEventListener('click', function () {
    if (!sorted) {
        const sortedRestaurantData = sortBy('estimatedPrice')
        renderRestaurants(sortedRestaurantData)
    } else {
        renderRestaurants(initRestaurantData)
    }
    sorted = !sorted
})

// Helper Utility Functions
function find(key, val) {
    return initRestaurantData.find(d => d[key] == val)
}

function searchByName(val) {
    return initRestaurantData.filter(d => d.restaurantName.toLowerCase().includes(val.toLowerCase()))
}

function searchHandler() {
    const searchQuery = searchInput.value.toLowerCase()
    if (!searchQuery || searchQuery === '') renderRestaurants(initRestaurantData)
    const filteredRestaurantData = searchByName(searchQuery)
    renderRestaurants(filteredRestaurantData)
}

function sortBy(key) {
    return initRestaurantData.toSorted(function (a, b) {
        return a[key] - b[key]
    })
}


// Local Storage
function getFavorites() {
    const storage = localStorage.getItem('favorite-restaurants')
    if (!storage) return new Set()
    const fav = JSON.parse(localStorage.getItem('favorite-restaurants'))
    return new Set(fav)
}

function toggleFavorite(restaurantId) {
    if (favorites.has(restaurantId)) {
        favorites.delete(restaurantId)
    } else {
        favorites.add(restaurantId)
    }
    console.log('setting', favorites)
    localStorage.setItem('favorite-restaurants', JSON.stringify(Array.from(favorites)))
}


// Additional functionality
// Memoize Search Input
// Store API data in localStorage for caching - cache first
// Store Favorites in localStorage ✅
// Implement Filter - simple - added tags
// Debounce Search Input  ✅
// Implement Pagination - complete the infite scroll component