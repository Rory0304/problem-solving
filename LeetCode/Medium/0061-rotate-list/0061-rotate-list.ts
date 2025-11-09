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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if(head === null) return null;

    let root = head;
    let len = 1;

    while(root.next){
        root = root.next
        len++
    }

    let count = len - (k % len)
    if(count === 0) return head;

    root.next = head;
    while(count){
        root = root.next
        count--
    }

    head = root.next;
    root.next = null;
    return head;
};