var status = 1

function sample() {
    const status = 4
    setTimeout(function () {
        const status = 2

        const data = {
            status: 3,
            getStatus: function () {
                return this.status
            }
        }
        console.log(data.getStatus())
        console.log(data.getStatus.call(this))
    }, 0)
}

console.log(window.status)

sample()