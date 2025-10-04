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

function swapPairs(head: ListNode | null): ListNode | null {    
    if(!head) return head;

    const headPair = head.next;
    if(!headPair) return head;

    const nextPair = headPair.next;

    // swap (headPair -> head -> swap(nextPair)
    // step1
    //// head = 1, headPair = 2, nextPair = 3
    //// 2.next = 1
    //// 1.next = swapPairs([3, 4])

    // step2
    //// head = 3, headPair = 4, nextPair = null
    //// 4.next = 3
    //// 3.next = swapPair(null) = null

    headPair.next = head;
    head.next = swapPairs(nextPair);

    return headPair
};