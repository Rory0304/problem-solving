function strStr(haystack: string, needle: string): number {
    // check is first letter matched with needle
    for(let i=0;i<haystack.length;i++){
        if(haystack[i] === needle[0]){
            let start = i
            let count = 1
            // check for loop
            while(count < needle.length){
                if(haystack[i+count] === needle[count]){
                    count++
                }
                else{
                    break;
                }
            }

            if(count === needle.length){
                return i
            }
        }
    }

    return -1
};