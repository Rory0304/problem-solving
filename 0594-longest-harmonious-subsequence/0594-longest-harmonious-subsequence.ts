function findLHS(nums: number[]): number {
    // 꼭 연속적일 필요는 없음
    const hashMap = new Map();

    for(let num of nums){
        hashMap.set(num, (hashMap.get(num) || 0) + 1);
    }

    const keys = hashMap.keys();
    let maxLength = 0;

    for(let key of keys){
        if(hashMap.get(key+1)){
            maxLength = Math.max(hashMap.get(key) + hashMap.get(key+1))
        }
    }

    return maxLength
};