function combine(n: number, k: number): number[][] {
    let answer: number[][] = []
    let temp = []

    function dfs(current){
        if(temp.length === k){
            answer.push(temp.slice())
            return;
        }

        if(current > n){
            return;
        }
        
        for(let i=current;i<=n;i++){
            temp.push(i)
            dfs(i+1);
            temp.pop()
        }
    }

    dfs(1)

    return answer    
};