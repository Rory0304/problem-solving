function isPalindrome(x: number): boolean {
    const xString = x.toString();
    let left = 0;
    let right = xString.length - 1;

    while(left < right){
        if(xString[left] !== xString[right]){
            return false
        }

        left++;
        right--;
    }

    return true
};