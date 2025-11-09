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
    if(head === null) return null;

    let first = head
    let second = head.next
    let dummy = new ListNode(-1, head);
    let pointer = dummy;

    while(second){
        // skip
        if(second.val === first.val){
            pointer.next = second.next
            // 중복 발견 → pointer는 그대로, 연결만 끊음
            // pointer 가 가르키는 객체의 내용을 바꿔서 dummy 에 반영
        }
        else{
            if(pointer.next !== second){
               pointer = first
               // 중복 구간이 끝났으니, 이제 새로운 고유 값부터 다시 추적을 시작
               // 이건 pointer 만 바뀌는 코드임
            }  
        }

        first = first.next
        second = second.next
    }
    
    return dummy.next
};