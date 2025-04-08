/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // Two pointer
    let k = m + n - 1; // 가장 마지막 포인터
    let i = m - 1 // m 배열의 가장 마지막 포인터
    let j = n - 1 // n 배열의 가장 마지막 포인터

    while(j >= 0){
        if(i >= 0 && nums1[i] > nums2[j]){
            nums1[k] = nums1[i];
            i--;
        }
        else {
            nums1[k] = nums2[j];
            j--;
        }
        k--
    }
};