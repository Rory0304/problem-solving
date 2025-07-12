function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const hashMap = new Map();

    // input 의 규칙을 발견해서, 최적의 방법을 구하는게 관건임
    for(let i=0;i<nums.length;i++){
        const value = nums[i]
        if(hashMap.has(value) && Math.abs(i-hashMap.get(value)) <= k) return true;
        hashMap.set(value, i)
    }

    return false    
};