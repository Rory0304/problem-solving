function findRightInterval(intervals: number[][]): number[] {
    const newIntervals = intervals.map((value, index) => [...value, index]).sort((a, b) => {
        if(a[0] === b[0]){
            return a[1] - b[1]
        }
        return a[0] - b[0]
    })

    console.log(newIntervals)

    const answer = Array.from({ length: intervals.length }, () => -1)

    for (let i = 0; i < intervals.length; i++) {
        const [startI, endI] = intervals[i];
        let left = 0, right = intervals.length -1

        while(left <= right){
            let mid = Math.floor((left + right) / 2)
            const [startJ, endJ, index] = newIntervals[mid];

            if(startJ >= endI){
                answer[i] = index;
                right = mid -1
            }
            else{
                left = mid+1
            }
        }
    }

    return answer
};