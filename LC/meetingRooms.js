function solve(meetings) {
    if (!meetings) return 0

    meetings.sort((a, b) => a[1] - b[1])
    console.log(meetings)
    const q = []
    let res

    for (let i = 0; i < meetings.length; i++) {
        const [start, end] = meetings[i]
    }


}

input = [[1, 18], [18, 23], [15, 29], [4, 15], [2, 11], [5, 13]]

console.log(solve(meetings))    