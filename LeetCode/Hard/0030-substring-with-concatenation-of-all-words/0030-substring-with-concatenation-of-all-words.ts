function findSubstring(s: string, words: string[]): number[] {
    const answer = []
    const wordMap = new Map<string, number>();

    for(let word of words){
        wordMap.set(word, (wordMap.get(word) ?? 0) + 1);
    }

    const wordLen = words[0].length;
    const wordCount = words.length;

    for(let offset=0;offset<wordLen;offset++){
        let left = offset;
        let temp = new Map();
        let count = 0

        for(let right=offset;right+wordLen<=s.length;right+=wordLen){
            const subStr = s.substring(right, right+wordLen);

            if(wordMap.has(subStr)){
                temp.set(subStr, (temp.get(subStr) ?? 0) + 1)
                count += 1

                // 본래 wordMap 보다 중복 단어가 들어옴
                while((temp.get(subStr) || 0) > (wordMap.get(subStr) || 0)){
                    const leftWord = s.slice(left, left+wordLen);
                    temp.set(leftWord, (temp.get(leftWord) || 1) - 1);
                    count--
                    left += wordLen;
                }

                if(count === wordCount){
                    answer.push(left)
                }
            }
            else{
                temp.clear();
                count = 0
                left  = right + wordLen;
            }
        }
    }

    return answer
};