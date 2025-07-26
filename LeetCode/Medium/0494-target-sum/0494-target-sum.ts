function findTargetSumWays(nums: number[], target: number): number {
    let visited = new Map();

    visited.set(nums[0] * -1, 1);
    visited.set(nums[0], (visited.get(nums[0]) ?? 0) + 1) // 0 대응

    for(let i=1;i<nums.length;i++){
        const temp = new Map();

        for(let [value, total] of visited){
            const minus = value - nums[i]
            temp.set(minus, (temp.get(minus) ?? 0) + total)

            const plus = value + nums[i]
            temp.set(plus, (temp.get(plus) ?? 0) + total)
        }

        visited = temp
    }

    return visited.get(target) || 0
};