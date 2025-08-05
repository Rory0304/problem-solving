function minSubArrayLen(target: number, nums: number[]): number {
    let minLength = nums.length, temp = 0, left = 0, right = 0, found = false;

    for(let right=0;right<nums.length;right++){
        temp += nums[right]

        if(temp >= target){
            minLength = Math.min(right - left + 1, minLength);
            found = true
        }

        while(temp >= target){
            temp -= nums[left++]
            
            if(temp >= target){
                minLength = Math.min(right - left + 1, minLength);
            }
        }
    }

    if(found === false){
        return 0
    }

    return minLength;
};