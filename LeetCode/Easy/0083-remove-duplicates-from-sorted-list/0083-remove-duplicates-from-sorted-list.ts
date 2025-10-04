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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let op = head;

    // 현재의 값이 다음의 값과 같다면 제거
    while(op){
        if(op.next !== null){
            if(op.val === op.next.val){
                op.next = op.next.next;
                
            }
        }

        op = op.next
    }

    return head
};