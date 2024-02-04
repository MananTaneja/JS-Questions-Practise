const openBtn = document.getElementById("open-btn")
const closeBtn = document.getElementById("close-btn")
const modal = document.getElementById("modal")
const body = document.getElementsByTagName('body')[0]

openBtn.addEventListener("click", () => {
    console.log('open button clicked')
    modal.style.display = "block"
    body.style.backgroundColor = "grey"
    openBtn.setAttribute('disabled', 'disabled')
})
closeBtn.addEventListener("click", () => {
    console.log('close button clicked')
    modal.style.display = "none"
    body.style.backgroundColor = "unset"
    openBtn.removeAttribute('disabled')
})