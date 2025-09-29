function minCostConnectPoints(points: number[][]): number {
    const costs = [];
    let answer = 0

    // 간선들의 가중치를 먼저 구한다
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            const [x1, y1] = points[i]
            const [x2, y2] = points[j]

            const distance = Math.abs(x1 - x2) + Math.abs(y1 - y2)
            costs.push([i, j, distance])
        }
    }

    // 가중치를 기준으로 정렬한다.
    costs.sort((a, b) => a[2] - b[2])

    // 각 정점의 parent 초기화
    const parent = new Map();
    for (let i = 0; i < points.length; i++) {
        parent.set(i, i)
    }

    function getParent(parent, n) {
        if (parent.get(n) === n) return n;

        return getParent(parent, parent.get(n))
    }

    function union(parent, a, b) {
        const aParent = getParent(parent, a)
        const bParent = getParent(parent, b)

        if (aParent === bParent) {
            return false
        }

        parent.set(bParent, aParent)

        return true
    }

    // union-find 실행
    costs.forEach((cost) => {
        const [start, end, dist] = cost

        // 
        if (union(parent, start, end)) {
            answer += dist;
        }
    })

    return answer
};