function countNegatives(grid: number[][]): number {
    const rSize = grid[0].length - 1
    const cSize = grid.length - 1

    let answer = 0;
    let col = 0;
    let row = rSize;

    while (col <= cSize) {
        if (row < 0) {
            row = rSize
            col += 1
        }

        else {
            if (grid[col][row] < 0) {
                row -= 1
                answer++
            }

            else {
                col++
                row = rSize
            }
        }


    }

    return answer
};