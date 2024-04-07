class Task {
    dependencies
    job
    currentDependencyCount
    isCompleted
    subscribedList
    jobName

    constructor(dependencies = [], job, jobName = "") {
        this.jobName = jobName
        this.dependencies = dependencies ? dependencies.filter(dependency => dependency instanceof Task && !dependency.isCompleted) : []
        this.currentDependencyCount = this.dependencies.length
        this.job = job
        this.isCompleted = false
        this.processJob()
        this.subscribedList = []
    }

    processJob() {
        if (this.dependencies && this.dependencies.length) {
            for (let dependency of this.dependencies) {
                dependency.subscribe(this.trackDependency.bind(this))
            }
        } else {
            this.job(this.done.bind(this))
        }
    }

    trackDependency() {
        this.currentDependencyCount--
        if (this.currentDependencyCount === 0) {
            this.job(this.done.bind(this))
        }
    }

    subscribe(cb) {
        this.subscribedList.push(cb)
    }

    done() {
        this.isCompleted = true
        for (const callback of this.subscribedList) {
            callback()
        }
    }
}

const processA = new Task(null, (done) => {
    setTimeout(() => {
        console.log('Process A')
        done()
    }, 100)
}, "A")

const processB = new Task(null, (done) => {
    setTimeout(() => {
        console.log('Process B')
        done()
    }, 1500)
}, "B")

const processC = new Task(null, (done) => {
    setTimeout(() => {
        console.log('Process C')
        done()
    }, 1000)
}, "C")

const processD = new Task([processA, processB], (done) => {
    setTimeout(() => {
        console.log('Process D')
        done()
    }, 1000)
}, "D")

const processE = new Task([processC, processD], (done) => {
    setTimeout(() => {
        console.log('Process E')
        done()
    }, 100)
}, "E")

const createAllDoneInstance = (allDoneCallback) => new Task([processA, processB, processC, processD, processE], allDoneCallback, "ALL")

createAllDoneInstance((done) => {
    console.log('All is done!')
    done()
})