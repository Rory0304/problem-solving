function minCostConnectPoints(points: number[][]): number {
    // 각 노드를 연결했을 때의 비용을 계산
    const costs = [];
    let answer = 0;

    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            const [x1, y1] = points[i]
            const [x2, y2] = points[j]

            const distance = Math.abs(x1 - x2) + Math.abs(y1 - y2)
            costs.push([i, j, distance]);
        }
    }

    // 정렬
    costs.sort((a, b) => a[2] - b[2])

    // parent 초기화
    const parent = new Map();
    for(let i=0;i<points.length;i++){
        parent.set(i, i)
    }

    const getParent = (parent, n1) => {
        if (parent.get(n1) === n1) return n1

        return parent[n1] = getParent(parent, parent.get(n1))
    }

    const sameParent = (parent, n1, n2) => {
        return getParent(parent, n1) === getParent(parent, n2)
    }

    const union = (parent, n1, n2) => {
        const n1Parent = getParent(parent, n1)
        const n2Parent = getParent(parent, n2)

        if(n1Parent === n2Parent){
            return false
        }

        parent.set(n2Parent, n1Parent)
        return true
    }

    // union-find 실행
    costs.forEach((cost) => {
        const [start, end, dist] = cost

        if (union(parent, start, end)) {
            answer += dist;
        }
    })

    return answer
};