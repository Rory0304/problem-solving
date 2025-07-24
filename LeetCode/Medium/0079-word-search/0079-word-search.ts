function exist(board: string[][], word: string): boolean {
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    const ySize = board[0].length;
    const xSize = board.length;

    const visited = Array.from({length: xSize}, () => Array.from({length: ySize}, () => 0));

    let flag = false;

    function dfs(x, y, index){
        console.log(x, y, index, word[index])
        if(flag){
            return;
        }

        if(index === word.length){
            return flag = true;
        }        

        for(let i=0;i<4;i++){
            const nextX = x + dx[i];
            const nextY = y + dy[i];

            if(nextX >= 0 && nextY >= 0 && nextX < xSize && nextY < ySize && board[nextX][nextY] === word[index]){
                if(visited[nextX][nextY] === 0){
                    visited[nextX][nextY] = 1;
                    dfs(nextX, nextY, index+1);
                    visited[nextX][nextY] = 0;
                }
            }
        }
    } 

    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            if(board[i][j] === word[0]){
                visited[i][j] = 1;
                dfs(i, j, 1);
                visited[i][j] = 0;
            }
        }
    }

    // A B C E
    // S F C S
    // A D E E

    return flag
};