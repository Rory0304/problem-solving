function searchInsert(nums: number[], target: number): number {
    let right = nums.length -1;
    let left = 0;
    let mid = 0;

    while(left <= right){
        mid = Math.floor((left+right) / 2);

        if(nums[mid] === target){
            return mid;
        }

        else if(nums[mid] > target){
            right = mid -1
        }

        else{
            left = mid + 1
        }
    }

    return left
};