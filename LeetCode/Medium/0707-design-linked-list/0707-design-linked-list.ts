type Node = {
    val: number;
    next: Node;
}

class MyLinkedList {
    head: Node;
    size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    get(index: number): number {
        if (index < 0 || index >= this.size) return -1;

        let current = this.head;

        for (let i = 0; i < index; i += 1) {
            current = current.next;
        }

        return current.val;
    }

    addAtHead(val: number): void {
        this.addAtIndex(0, val);
    }

    addAtTail(val: number): void {
        this.addAtIndex(this.size, val)
    }

    addAtIndex(index: number, val: number): void {
        // 예외 케이스
        if (index < 0 || index > this.size) return;

        this.size++;

        if (index === 0) {
            const newHead = { val, next: this.head };
            this.head = newHead;
            return;
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current?.next;
        }

        current.next = { val, next: current.next }
    }

    deleteAtIndex(index: number): void {
        // 예외 케이스
        if (index < 0 || index >= this.size) return;

        this.size--;

        if (index === 0) {
            this.head = this.head?.next;
            return;
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current?.next;
        }

        current.next = current.next?.next;
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */