function letterCombinations(digits: string): string[] {
    if(digits.length === 0) return [];

    const numberPad = {
        '0': '',
        '1': '',
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }

    const num = Array.from({ length: 10 }, (_, index) => numberPad[index + ''].split(''))
    const memo = Array.from({length: digits.length}, () => [])

    for(let i=0;i<digits.length;i++){
        const letter = digits[i];
        if(i === 0){
            memo[i].push(...num[parseInt(letter)])
        }

        else{
            for(let prev of memo[i-1]){
                for(let next of num[parseInt(letter)]){
                    memo[i].push(prev + next)
                }
            }
        }
    }

    return memo[digits.length-1]
};