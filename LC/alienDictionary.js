function dfs(i, visited, stack, adj, charIndex) {
    if (visited[i]) return
    visited[i] = true;
    [...adj[i]].forEach((node) => dfs(charIndex.indexOf(node), visited, stack, adj, charIndex))
    stack.push(i)
}

function solve(words) {
    console.log(words)
    let chars = new Set()
    for (let i = 0; i < words.length; i++) {
        const chs = words[i].split("")
        chs.forEach(ch => { chars.add(ch) })
    }
    const n = chars.size
    let adj = Array(n).fill().map(() => new Set())
    for (let i = 0; i < words.length - 1; i++) {
        const first = words[i].split('')
        const second = words[i + 1].split(''
        // console.log(second)
        for (let j = 0; j < first.length && j < second.length; j++) {
            if (first[j] !== second[j]) {
                // console.log(first[j], second[j])
                adj[[...chars].indexOf(first[j])] = second[j]
                break
            }
        }
    }
    printAdj(adj, [...chars])
    // topological sort
    const stack = []
    const visited = Array(n).fill(false)
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i, visited, stack, adj, [...chars])
        }
    }
    const res = []
    // stack.forEach((s) => res.push([...chars][s]))
    while (stack.length > 0) {
        const el = stack.pop()
        res.push([...chars][el])
    }

    console.log(res.toString())
}



function printAdj(adj, chars) {
    adj.forEach((row, i) => {
        console.log(`${chars[i]} -> ${[...row]}`)
    })
}

const inp = [
    "wrt",
    "wrf",
    "er",
    "ett",
    "rftt"
]

solve(inp)