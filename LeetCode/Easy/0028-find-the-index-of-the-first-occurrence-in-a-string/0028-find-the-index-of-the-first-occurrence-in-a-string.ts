function strStr(haystack: string, needle: string): number {
    // check is first letter matched with needle
    for(let i=0;i<haystack.length;i++){
        if(haystack[i] === needle[0]){
            let window = haystack.substring(i, i + needle.length)
            if(window === needle){
                return i
            }
        }
    }

    return -1
};