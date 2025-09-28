function generateParenthesis(n: number): string[] {
    const parenthesis = [{open: 0, close: 0, str: ''}]
    const result = []

    while(parenthesis.length){
        let { open, close, str } = parenthesis.pop();

        if(str.length === n * 2){
            result.push(str)
        }

        if(open > close){
            parenthesis.push({ open, close: close + 1, str: str + ')' })
        }

        if(open < n){
            parenthesis.push({ open: open + 1, close, str: str + '(' })
        }
    }

    return result
};