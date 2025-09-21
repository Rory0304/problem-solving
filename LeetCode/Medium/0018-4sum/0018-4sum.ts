function fourSum(nums: number[], target: number): number[][] {
    const n = nums.length;
    const answer = []

    nums.sort((a, b) => a - b);

    function twoSum(i, j) {
        let result = [];
        let start = j+1
        let end = nums.length-1

        while (start < end) {
            let sum = nums[i] + nums[j] + nums[start] + nums[end];
            if (sum === target) {
                result.push([nums[i], nums[j], nums[start], nums[end]])
                start++

                while (nums[start] === nums[start-1] && start < end) {
                    start++
                }
            }
            else if (sum > target) {
                end--
            }
            else {
                start++
            }
        }

        return result
    }


    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        for (let j = i + 1; j < n; j++) {
            if(j-i > 1 && nums[j-1] === nums[j]) continue;

            const res = twoSum(i, j)
            if (res.length > 0) {
                answer.push(...res)
            }
        }
    }



    return answer
};