function maxArea(height: number[]): number {
    let max = 0;
    let left = 0;
    let right = height.length - 1;

    while(left <= right){
        let horizontal = Math.abs(left - right)

        if(height[left] < height[right]){
            max = Math.max(horizontal * height[left], max)
            left++
        }
        else{
            max = Math.max(horizontal * height[right], max)
            right--
        }
    }

    return max
};