function findLHS(nums: number[]): number {
    // 풀이 방법
    // 1. HashMap
    // 2. Windowing
    if(nums.length < 2){
        return 0
    }

    // 단순 sort 는 문자열 기준이기 때문에 수치 정렬로 변환한다.
    const sortedNums = new Int32Array(nums);
    sortedNums.sort();

    let left = 0;
    let maxLength = 0;
    
    for(let right=0;right<sortedNums.length;right++){       
        while (sortedNums[right] - sortedNums[left] > 1) {
            left++
        } 

        if(sortedNums[right] - sortedNums[left] === 1){
            maxLength = Math.max(maxLength, right-left+1)
        }
    }
    
    return maxLength
};