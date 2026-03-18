function uniquePaths(m: number, n: number): number {
    const board = Array.from({ length: m }, () => Array.from({ length: n }, () => 0))

    board[0][0] = 1

    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(i === 0 && j === 0) continue

            let top = board[i-1]?.[j] || 0;
            let left = board[i][j-1] || 0;

            board[i][j] = top + left
        }
    }

    
    return board[m-1][n-1]
};