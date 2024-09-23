/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start

// DFS
const markFromIndex = (x, y, grid) => {
    // base case
    if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] !== '1') {
        return
    }

    grid[x][y] = "x"

    markFromIndex(x + 1, y, grid)
    markFromIndex(x, y + 1, grid)
    markFromIndex(x - 1, y, grid)
    markFromIndex(x, y - 1, grid)
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {

    let res = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                res++
                markFromIndex(i, j, grid)
            }
        }
    }

    return res
}
// @lc code=end

