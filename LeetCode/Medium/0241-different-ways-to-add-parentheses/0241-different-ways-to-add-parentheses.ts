function diffWaysToCompute(expression: string): number[] {
    let memo = [];

    const calc = (left, right, op) => {
        if(op === '+'){
            return left + right
        }

        if(op === '-'){
            return left - right
        }

        if(op === '*'){
            return left * right
        }
    }

    function comp() {
        // 더이상 나눌 수 없을 때까지 나눠야 함
        if (Number.isInteger(Number(expression))) {
            return [Number(expression)]
        }

        let result = []

        if(memo[expression]){
            return memo[expression]
        }

        for(let i=0;i<expression.length;i++){
            let op = expression[i]

            // 연산자임
            if(Number.isNaN(Number(op))){
                let left = diffWaysToCompute(expression.slice(0, i))
                let right = diffWaysToCompute(expression.slice(i+1))

                for(let l of left){
                    for(let r of right){
                        result.push(calc(l, r, op))
                    }
                }
            }
        }

        memo[expression] = result;
        return result
    }

    return comp()
};