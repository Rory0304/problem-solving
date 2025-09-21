function twoSum(numbers: number[], target: number): number[] {
    let start = 0;
    let end = numbers.length -1;

    while(start >= 0 && end >= 0 && start < numbers.length && end < numbers.length){
        const sum = numbers[start] + numbers[end];

        if(sum === target){
            break; 
        }

        if(sum > target){
            end -= 1
        }
        else{
            start += 1
        }
    }

    return [start +1, end +1]
};