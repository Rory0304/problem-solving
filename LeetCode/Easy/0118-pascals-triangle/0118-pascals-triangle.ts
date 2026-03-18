function generate(numRows: number): number[][] {
    const triangle = Array.from({length: numRows}, (_, index) => Array.from({length: index+1}, () => 1));
    
    let level = 2;

    while(level < numRows){
        for(let i=1;i<triangle[level].length-1;i++){
            triangle[level][i] = triangle[level-1][i-1] + triangle[level-1][i]
        }
        
        level++
    }

    return triangle
};