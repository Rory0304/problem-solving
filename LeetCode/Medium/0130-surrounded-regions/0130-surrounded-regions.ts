/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    // board 이거나, board 와 인접한 O 라면 'S' 로 치환
    const rows = board.length;
    const columns = board[0].length;
    const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]]

    function dfs(r: number, c: number) {
        if (board[r][c] === 'S' || board[r][c] === 'X') {
            return;

        }

        board[r][c] = 'S'

        for (let dir of direction) {
            const nextCol = dir[0] + c
            const nextRow = dir[1] + r

            if (nextRow >= 0 && nextCol >= 0 && nextRow < rows && nextCol < columns) {
                dfs(nextRow, nextCol)
            }
        }
    }

    // 1. "Save" all regions that are adjacent to the border
    // top border
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (r === 0 || c === 0 || r === rows - 1 || c === columns - 1) {
                dfs(r, c)
            }
        }
    }

    // 2. now iterate through all cells and convert all 'S' cells to 'O'
    // and everything else flips to 'X'
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X'
            } else if (board[i][j] === 'S') {
                board[i][j] = 'O'
            }
        }
    }
}; 