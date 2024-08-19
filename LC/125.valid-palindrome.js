/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start

const isAlphaNum = (ch) => {
    const charCode = ch.charCodeAt(0)

    return (
        (65 <= charCode && charCode <= 90) ||
        (97 <= charCode && charCode <= 122) ||
        (48 <= charCode && charCode <= 57)
    )
}


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let formattedString = ""
    s.split('').forEach(ch => {
        if (isAlphaNum(ch)) {
            formattedString += ch.toLowerCase()
        }
    })

    let l = 0
    let r = formattedString.length - 1
    let res = true

    while (l < r && res) {
        const lCh = formattedString[l]
        const rCh = formattedString[r]

        if (lCh === rCh) {
            l++
            r--
        } else {
            res = false
        }
    }

    return res

};
// @lc code=end

