function numIslands(grid: string[][]): number {
    // 섬 개수 구하기
    const rows = grid.length;
    const cols = grid[0].length;

    const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]]

    function dfs(x, y) {
        for (let dir of direction) {
            const nextX = x + dir[0]
            const nextY = y + dir[1]

            if (nextX >= 0 && nextY >= 0 && nextX < rows && nextY < cols) {
                if (grid[nextX][nextY] === "1") {
                    grid[nextX][nextY] = "0";
                    dfs(nextX, nextY)
                }

            }
        }
    }

    let island = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                island += 1
                grid[i][j] = '0'
                dfs(i, j)
            }
        }
    }

    return island
};