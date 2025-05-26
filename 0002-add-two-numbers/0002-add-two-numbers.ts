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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry = 0;
    let result = new ListNode(0);
    let curr = result;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let value = 0;

        if (l1) {
            value += l1.val
            l1 = l1.next
        }

        if (l2) {
            value += l2.val
            l2 = l2.next
        }

        value += carry;
        carry = Math.floor(value / 10)
        curr.next = new ListNode(Math.floor(value % 10));
        curr = curr.next;
    }

    console.log(result)

    return result.next
};