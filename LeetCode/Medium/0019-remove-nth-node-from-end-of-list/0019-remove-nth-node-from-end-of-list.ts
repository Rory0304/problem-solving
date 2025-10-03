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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // size 를 먼저 계산
    let size = 0
    let temp = head
    while(temp){
        size++
        temp = temp.next
    }

    let traverseTill = size - n

    if(traverseTill === 0) return head.next

    let result = new ListNode(0)
    let pointer = result;
    let index = 0

    while(index < traverseTill){
        pointer.next = head
        head = head.next
        index++
        pointer = pointer.next
    }

    pointer.next = head.next

    return result.next
};