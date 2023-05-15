const xmlns = 'http://www.w3.org/2000/svg'
const xlinkns = 'http://www.w3.org/1999/xlink'

const todoItems = []

const addItem = (todoText) => {
    todoItems.push(todoText)
}

const addItemFromInput = (todoText) => {
    const listParent = document.querySelector(".todo__items-container")
    todoItems.push(todoText)
    const listNodes = []

    todoItems.forEach(item => {
        const liElement = document.createElement("li")
        liElement.textContent = item
        listNodes.push(liElement)
    })

    listParent.replaceChildren(...listNodes)
}

addEventListener('load', () => {
    addItemFromInput('Read the description')
    addItemFromInput('Solve the task')
    addItemFromInput('Submit the solution')

})
document.querySelector('.todo__input').addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        e.preventDefault()
        addItemFromInput(e.target.value)
    }
})

let inputValue = ''

document.querySelector('.todo__input').addEventListener('change', (e) => {
    inputValue = e.target.value
})

document
    .querySelector('.todo__create')
    .addEventListener('click', () => addItemFromInput(inputValue))
