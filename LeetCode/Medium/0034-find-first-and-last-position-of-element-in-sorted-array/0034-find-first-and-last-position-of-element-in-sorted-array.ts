function searchRange(nums: number[], target: number): number[] {
    // find start and end position
    const answer = Array.from({length: 2}, () => -1)
    let right = nums.length - 1;
    let left = 0;

    while(left <= right){
        if(answer[0] !== -1 && answer[1] !== -1){
            break;
        }

        if(nums[left] === target){
            answer[0] = left;
        }
        else {
            left++
        }

        if(nums[right] === target){
            answer[1] = right;
        }
        else {
            right--
        }
    }

    return answer
    
};