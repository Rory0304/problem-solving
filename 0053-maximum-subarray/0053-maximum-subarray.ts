function maxSubArray(nums: number[]): number {
    let local = 0;
    let maxNumber = Math.max(...nums);

    for(const num of nums){
        local = Math.max(num, local + num)
        if(local  > maxNumber){
            maxNumber = local
        }
    }
    

    return maxNumber
};