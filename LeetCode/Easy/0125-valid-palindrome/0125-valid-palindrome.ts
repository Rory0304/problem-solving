function isPalindrome(s: string): boolean {
    const newStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = newStr.length - 1;

    let flag = true;

    while (left < right) {
        const l = newStr[left];
        const r = newStr[right]

        if (l === r) {
            left++;
            right--;
        }
        else {
            flag = false
            break;
        }
    }

    return flag



    return flag
};