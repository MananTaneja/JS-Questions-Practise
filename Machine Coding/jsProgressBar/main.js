// Input Fields
const visaType = document.querySelector('#visaType')
const university = document.querySelector('#university')
const country = document.querySelector('#country')
const email = document.querySelector('#email')

// Output Fields
const progressText = document.querySelector('.check-mark')
const progressBar = document.querySelector('.complete-line')

let progressScore = 0

function isValidEmail(email) {
    // Add regex match for email
}

function calculateScore() {
    let count = 0

    if (visaType.value !== '') count++
    if (university.value) count++
    if (country.value) count++
    if (email.value) count++

    progressScore = count * 25

    progressText.textContent = `${progressScore}%`
    progressBar.style.width = `${progressScore}%`
}

visaType.addEventListener('input', calculateScore)
university.addEventListener('input', calculateScore)
country.addEventListener('input', calculateScore)
email.addEventListener('input', calculateScore)