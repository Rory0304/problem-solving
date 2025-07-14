function climbStairs(n: number): number {
    if(n<=3) return n;

    // n = 4, 5
    // 1Step + 1Step + 1Step + 1Step
    // 2Step + 2Step
    // 1Step + 2Step + 1Step
    // 1Step + 1Step + 2Step
    // 2Step + 1Step + 1Step
    let prev1 = 2
    let prev2 = 3
    let cur = 0

    for(let i=4;i<=n;i++){
        cur = prev1 + prev2;
        prev1 = prev2;
        prev2 = cur;       
    }


    return cur
};