function largestPerimeter(nums: number[]): number {
    // 3변의 길이가 주어질때, 대각선 길이 > 나머지 두 변 길이의 합
    let result = 0;

    nums.sort((a, b) => b-a);

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] < nums[i + 1] + nums[i + 2]) {
            return nums[i] + nums[i + 1] + nums[i + 2];
        }
    }
    
    return 0
};