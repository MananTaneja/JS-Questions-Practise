/*
 * @lc app=leetcode id=695 lang=javascript
 *
 * [695] Max Area of Island
 */

// @lc code=start

const getAreaFromIndex = (x, y, grid) => {
    // base
    if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] !== 1) {
        return 0
    }

    grid[x][y] = 'x'

    const a = getAreaFromIndex(x + 1, y, grid)
    const b = getAreaFromIndex(x - 1, y, grid)
    const c = getAreaFromIndex(x, y + 1, grid)
    const d = getAreaFromIndex(x, y - 1, grid)

    return a + b + c + d + 1
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {

    let res = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                const area = getAreaFromIndex(i, j, grid)
                res = Math.max(res, area)
            }
        }
    }

    return res
}

// const grid = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]

// maxAreaOfIsland(grid)

// @lc code=end

