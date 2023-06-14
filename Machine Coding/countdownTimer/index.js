const hoursInput = document.querySelector("input#hours")
const minutesInput = document.querySelector("input#minutes")
const secondsInput = document.querySelector("input#seconds")
const startButton = document.querySelector("button.start-button")
const resetButton = document.querySelector("button.reset-button")
let int

const handleSecondsInputLimit = (seconds, event) => {
    if (seconds >= 60) {
        event.target.value = seconds % 60
        minutesInput.value = Number(minutesInput.value) + Math.floor(seconds / 60)
    } else if (seconds === "") {
        event.target.value = 0
    }
}

const handleMinutesInputLimit = (minutes, event) => {
    if (minutes >= 60) {
        event.target.value = minutes % 60
        hoursInput.value = Number(hoursInput.value) + Math.floor(minutes / 60)
    } else if (minutes === "") {
        event.target.value = 0
    }
}

const handleHoursInputLimit = (hours, event) => {
    if (hours === "") {
        event.target.value = 0
    }
}



hoursInput.addEventListener("change", (e) => {
    handleHoursInputLimit(e.target.value, e)
})
minutesInput.addEventListener("change", (e) => {
    handleMinutesInputLimit(e.target.value, e)
})
secondsInput.addEventListener("change", (e) => {
    handleSecondsInputLimit(e.target.value, e)
})

function updateCountdownTimer() {
    const hours = Number(hoursInput.value)
    const minutes = Number(minutesInput.value)
    const seconds = Number(secondsInput.value)

    if (seconds === 0) {
        if (minutes === 0) {
            if (hours === 0) {
                console.log("Timer Done")
                resetTimer()
            } else {
                hoursInput.value = hours - 1
                secondsInput.value = 59
                minutesInput.value = 59
            }
        } else {
            minutesInput.value = minutes - 1
            secondsInput.value = 59
        }
    } else {
        secondsInput.value = seconds - 1
    }
}



function startTimer() {
    int = setInterval(() => {
        updateCountdownTimer()
    }, 1000)
}

function resetTimer() {
    clearInterval(int)
    hoursInput.value = "00"
    secondsInput.value = "00"
    minutesInput.value = "00"
}

startButton.addEventListener("click", () => {
    startTimer()
})

resetButton.addEventListener("click", () => {
    resetTimer()
})