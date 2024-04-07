String.prototype.mySplit = function (delimiter) {
    const ans = []
    const s = this
    let t = ""
    for (let i = 0; i < s.length; i++) {
        if (s[i] === delimiter) {
            ans.push(t)
            t = ""
        } else {
            t += s[i]
        }
    }
    ans.push(t)
    return ans
}


const a = 'some sample string'
const b = a.mySplit(" ")
console.log(b)
a.substring()