interface Node {
    val: number
    next: Node
}


// 
class MyLinkedList {
    head: Node;
    size: number;

    constructor() {
        this.head = null
        this.size = 0
    }

    getNode(index: number): Node | null {
        let node = this.head;
        let count = 0;

        while (count < index) {
            node = node.next
            count++
        }

        return node
    }

    get(index: number): number {
        const node = this.getNode(index);
        if (!node) return -1
        return node.val
    }

    addAtHead(val: number): void {
        const next = this.head
        this.head = { val, next }
        this.size++
    }

    addAtTail(val: number): void {
        if(this.size === 0){
            this.addAtHead(val)
            return 
        }
        const node = this.getNode(this.size - 1)
        node.next = { val, next: null }
        this.size++
    }

    addAtIndex(index: number, val: number): void {
        if (index === 0) {
            this.addAtHead(val)
            return;
        }

        if (index === this.size) {
            this.addAtTail(val)
            return
        }

        const node = this.getNode(index - 1)
        node.next = { val, next: node.next }
        this.size++
    }

    deleteAtIndex(index: number): void {
        if(index >= this.size){
            return;
        }

        if(this.size === 0){
            return
        }

        if (index === 0) {
            this.head = this.head.next;
            this.size--
            return
        }

        const prevNode = this.getNode(index - 1);
        prevNode.next = prevNode.next?.next || null
        this.size--
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