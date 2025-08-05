function lengthOfLongestSubstring(s: string): number {
    let left = 0;
    let right = 0;
    let answer = s.length > 0 ? 1 : 0;
    let count = new Map();

    while(left <= right && right < s.length){
        let rw = s[right];
        let lw = s[left];

        // check is duplicate
        if(count[rw] >= 1){
            count[lw] -= 1
            left++
        }
        else {
            count[rw] = (count[rw] ?? 0) + 1
            answer = Math.max(right-left+1, answer)
            right++
        }
    }
    
    return answer
};