function findMinFibonacciNumbers(k: number): number {
    let fibArr = [1, 1]
    let count = 0;

    function getFib(n) {
        for (let i = 2; i <= n; i++) {
            fibArr.push(fibArr[i - 1] + fibArr[i - 2])

            if (fibArr[i] > n) {
                return;
            }
        }
    }

    getFib(k)

    while (k > 0) {
        if (fibArr.includes(k)) {
            count++;
            return count
        }

        else {
            while (k < fibArr[fibArr.length - 1]) {
                fibArr.pop();
            }

            k = k - fibArr[fibArr.length - 1]
            count++
        }
    }

    return count
};