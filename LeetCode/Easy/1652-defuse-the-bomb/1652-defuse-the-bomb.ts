function decrypt(code: number[], k: number): number[] {
    if(k === 0){
        return Array.from({length: code.length}, () => 0)
    }

    const answer = []
    const codeLen = code.length;

    for(let i=0;i<codeLen;i++){
        let sum = 0

        for(let j=1;j<=Math.abs(k);j++){
            let _j = k > 0 ? j : -j;
            let index = Math.abs((codeLen+i+_j)%codeLen);
            sum += code[index]
        }

        answer.push(sum)
    }


    return answer
};