function search(nums: number[], target: number): number {
    // nums: k번의 반시계 회전의 결과 
    // return the index of target if it is in nums, or -1 if it is not in nums
    for(let i=0;i<nums.length;i++){
        if(nums[i] === target){
            return i
        }
    }  

    return -1
};