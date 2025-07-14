function findContentChildren(g: number[], s: number[]): number {
    // 최소 하나씩 주어야 함
    // cookie j
    // s[j] (j의 size) >= g[i] => j를 i에 할당 가능

    g.sort((a, b) => a-b);
    s.sort((a, b) => a-b);

    let i=0, j=0, count=0;

    while(i<g.length && j<s.length){
        if(s[j] >= g[i]){
            count++;
            i++;
        }
        j++
    }

    return count
};