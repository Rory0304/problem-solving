function combine(n: number, k: number): number[][] {
  // 1~n까지 k 를 뽑을 수 있는 모든 경우의 수 구하기
  let answer: number[][] = [];
  let temp = []
  
  function dfs(current: number) {
    if(temp.length === k){
        answer.push(temp.slice());
        return;
    }

    if(current > n){
        return;
    }

    temp.push(current)
    dfs(current+1)
    temp.pop();
    dfs(current+1)
  } 

  dfs(1) 

  return answer
};