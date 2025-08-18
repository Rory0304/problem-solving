function findRightInterval(intervals: number[][]): number[] {
    // right Interval for i is j
    // - start(j) >= end(i) 
    // - stsart(j) is minimum
    // - i may equal j

    const newIntervals = intervals.map((value, index) => [...value, index]).sort((a, b) => {
        if(a[0] === b[0]){
            return a[1] - b[1]
        }
        return a[0] - b[0]
    })

    console.log(newIntervals);

    const answer = Array.from({ length: intervals.length }, () => -1)

    for (let i = 0; i < intervals.length; i++) {
        const [startI, endI] = intervals[i];

        for (let j = 0; j < newIntervals.length; j++) {
            const [startJ, endJ, index] = newIntervals[j]

            if (startJ >= endI) {
                answer[i] = index
                break;
            }
        }
    }

    return answer
};