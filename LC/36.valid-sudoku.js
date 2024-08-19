/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const rows = new Map()
    const cols = new Map()
    const sq = new Map()

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            const currentCell = board[i][j]
            const sqKey = [i / 3, j / 3].toString()

            if (!rows[i]) rows[i] = new Set()
            if (!cols[j]) cols[j] = new Set()
            if (!sq[sqKey]) sq[sqKey] = new Set()

            if (currentCell === ".") {
                continue
            } else if (rows[i].has(currentCell) || cols[i].has(currentCell) || sq[sqKey].has(currentCell)) {
                return false
            } else {
                rows[i].add(currentCell)
                cols[j].add(currentCell)
                sq[sqKey].add(currentCell)
            }
        }
    }
    return true
};
// @lc code=end

