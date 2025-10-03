function wordBreak(s: string, wordDict: string[]): string[] {

    // c: 0
    // ca: 0
    // cat: starts with cat 
        // [cat]
        // continue with ;sand
    // cats: starts with cats
        // [cats]
        // continue with ;and
    // catsa: 0
    // catsan: 0
    let result = []

    function dfs(index, arr){
        if(index >= s.length){  
            result.push(arr.join(' '))
            return;
        }
        
        for(let i=index;i<s.length;i++){
            const value = s.slice(index, i+1)
            const matched = wordDict.find(x => x === value)
            if(matched){
                dfs(i+1, [...arr, matched])
            }
        }
    }
    
    dfs(0, [])

    return result
};