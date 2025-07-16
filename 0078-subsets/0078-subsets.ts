function subsets(nums: number[]): number[][] {
    const answer = [];

    if(nums.length === 1){
        return [[], nums]
    }

    function dfs(current, count){
        if(count === nums.length){
            answer.push(current)
            return;
        }
        else {
            dfs(current, count+1)

            const next = nums[count]
            dfs([...current, next], count+1);
            
        }
    }

    dfs([], 0)

    return answer  
};