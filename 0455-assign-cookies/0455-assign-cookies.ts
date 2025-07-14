function findContentChildren(g: number[], s: number[]): number {
    // 최소 하나씩 주어야 함
    // cookie j
    // s[j] (j의 size) >= g[i] => j를 i에 할당 가능

    let count = 0
    g.sort((a, b) => a-b);
    s.sort((a, b) => a-b);

    for(const cookie of s){
        if(cookie >= g[count]) count++
        // 이보다 큰 지수의 child 에게 제공하지 못하면, 해당 count 를 반환
    }

    return count
};