const hoursInput = document.querySelector("input#hours")
const minutesInput = document.querySelector("input#minutes")
const secondsInput = document.querySelector("input#seconds")
const startButton = document.querySelector("button.start-button")
const resetButton = document.querySelector("button.reset-button")
let int

const handleSecondsInputLimit = (seconds, event) => {
    if (seconds >= 60) {
        event.target.value = formatNumber(seconds % 60)
        const n = Number(minutesInput.value) + Math.floor(seconds / 60)
        minutesInput.value = formatNumber(n)
    } else if (seconds === "") {
        event.target.value = "00"
    }
}

const handleMinutesInputLimit = (minutes, event) => {
    if (minutes >= 60) {
        event.target.value = formatNumber(minutes % 60)
        const n = Number(hoursInput.value) + Math.floor(minutes / 60)
        hoursInput.value = formatNumber(n)
    } else if (minutes === "") {
        event.target.value = "00"
    }
}

const handleHoursInputLimit = (hours, event) => {
    if (hours === "") {
        event.target.value = 0
    }
}

const formatNumber = (number) => {
    if (number < 10) {
        return "0" + number
    } else {
        return number.toString()
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
                hoursInput.value = formatNumber(hours - 1)
                secondsInput.value = 59
                minutesInput.value = 59
            }
        } else {
            minutesInput.value = formatNumber(minutes - 1)
            secondsInput.value = 59
        }
    } else {
        secondsInput.value = formatNumber(seconds - 1)
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


window.onload = () => {
    resetTimer()
}