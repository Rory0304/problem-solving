/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const result: ListNode | null = new ListNode(0); // 전체 연결 리스트의 시작점
    let pointer = result; // 연결 리스트의 포인터
    
    while(list1 !== null && list2 !== null){
        if(list1.val > list2.val){
            pointer.next = list2
            list2 = list2.next
        }
        else{
            pointer.next = list1
            list1 = list1.next
        }

        pointer = pointer.next
    }

    pointer.next = list1 || list2

    return result.next
};