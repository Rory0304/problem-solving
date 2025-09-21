function threeSum(nums: number[]): number[][] {
    const answer = []
    const n = nums.length;

    nums.sort((a, b) => a - b);

    function twoSum(index) {
        let start = index + 1;
        let end = n - 1;
        let result = []

        while (start < end) {
            let sum = nums[index] + nums[start] + nums[end];

            if (sum === 0) {
                result.push([nums[index], nums[start], nums[end]])
                start++

                // check again
                while(nums[start] === nums[start-1] && start < end){
                    start++
                }
            }

            else if (sum > 0) {
                end--
            }

            else {
                start++
            }
        }

        return result
    }

    // select start number
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }

        const result = twoSum(i);

        if (result.length > 0) {
            answer.push(...result)
        }
    }

    return answer
};