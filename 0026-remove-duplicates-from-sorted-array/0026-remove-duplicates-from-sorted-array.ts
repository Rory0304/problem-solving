function removeDuplicates(nums: number[]): number {

    let lastIndex = 1;
    for(let i=1;i<nums.length;i++){
        if(nums[i-1] !== nums[i]){
            nums[lastIndex] = nums[i]
            lastIndex += 1
        }
    }

    return lastIndex
};