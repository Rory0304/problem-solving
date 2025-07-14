function arrayPairSum(nums: number[]): number {
    // 2개씩 pair 를 만들고, 그 중 min 값의 합을 리턴
   
  return  nums.sort((a, b) => a-b).reduce((acc, cur, index) => {
    return index%2 === 0 ? cur + acc : acc
   }, 0);
};