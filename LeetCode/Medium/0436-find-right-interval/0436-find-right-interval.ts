function findRightInterval(intervals: number[][]): number[] {
    // right Interval for i is j
    // - start(j) >= end(i) 
    // - stsart(j) is minimum
    // - i may equal j
    const answer = Array.from({ length: intervals.length }, () => -1)

    for (let i = 0; i < intervals.length; i++) {
        const [startI, endI] = intervals[i];

        for (let j = 0; j < intervals.length; j++) {

            const [startJ, endJ] = intervals[j]

            if (startJ >= endI) {
                if (answer[i] === -1) {
                    answer[i] = j
                }
                else {
                    let idx = intervals[answer[i]][0] > intervals[j][0] ? j : answer[i]
                    answer[i] = idx
                }
            }

        }
    }

    return answer
};