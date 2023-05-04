// Time Complexity = O(M*N)
// Space Complexity = O(M + N)
// where M is number of rows and N is number of cols
// /**
//  * @param {number[][]} matrix
//  * @return {void} Do not return anything, modify matrix in-place instead.
//  */
// var setZeroes = function (matrix) {

//     const colZero = new Set()
//     const rowZero = new Set()

//     // First pass 
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             const element = matrix[i][j]
//             if (element === 0) {
//                 rowZero.add(i)
//                 colZero.add(j)
//             }
//         }
//     }

//     // setting rows and cols zero
//     rowZero.forEach((row, _index) => {
//         for (let j = 0; j < matrix[row].length; j++) {
//             matrix[row][j] = 0
//         }
//     })
//     colZero.forEach((col, _index) => {
//         for (let i = 0; i < matrix.length; i++) {
//             matrix[i][col] = 0
//         }
//     })

//     console.log(matrix)
// }

// Time Complexity = O(M*N)
// Space Complexity = O(1)
// where M is number of rows and N is number of cols
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let isCol0 = false

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0 && !isCol0) {
            isCol0 = true
        }

        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0
        }
    }

    if (matrix[0][0] === 0) {
        console.log('0th position', matrix[0][0])
        for (let j = 1; j < matrix[0].length; j++) {
            matrix[0][j] = 0

        }
    }
    if (isCol0 === true) {
        console.log('isCol0', isCol0)
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0
        }
    }
}

setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]])
setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]])