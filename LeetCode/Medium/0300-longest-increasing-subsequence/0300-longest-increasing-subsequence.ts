function lengthOfLIS(nums: number[]): number {
    if(nums.length < 2){
        return 1
    }

    let answer = 0;
    let size = nums.length;

    const dp = Array.from({ length: size }, () => 0);
    dp[0] = 1;

    for (let i = 1; i < size; i++) {
        let max = 0;
        for(let j=i-1;j>=0;j--){
            if(nums[j] < nums[i] && dp[j] > max){
                max = dp[j]
            }
        }

        dp[i] = max + 1
        answer = Math.max(answer, dp[i])
    }

    return answer
};