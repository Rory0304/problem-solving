function nextGreatestLetter(letters: string[], target: string): string {
    // non desc
    const alph = 'abcdefghijkqrxtuvwxyz'

    for(let i=0;i<letters.length;i++){
        if(letters[i] > target){
            return letters[i]
        }

        else if(letters[i] === target){
            if(i === letters.length - 1){
                return letters[0]
            }
            
        }
    }

    return letters[0]  
};