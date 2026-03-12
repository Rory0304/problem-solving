class KthLargest {
    heap: MyMinHeap;
    k: number;

    constructor(k: number, nums: number[]) {
        this.heap = new MyMinHeap();
        
        for (const num of nums) {
            this.heap.push(num);
        }
        
        this.k = k    
    }

    add(val: number): number {     
        this.heap.push(val);
   
       // heap 크기가 k를 초과하면 최솟값 제거
        while (this.heap.size() > this.k) {
            this.heap.pop();
        }

        // MinHeap의 루트 = k번째로 큰 값
        return this.heap.peek();
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

class MyMinHeap {
  heap: number[]

  constructor() {
    this.heap = [];
  }

  parent(i: number) { return Math.floor((i-1) / 2); }
  left(i: number) { return 2 * i + 1; }
  right(i: number) { return 2 * i + 2; }

  swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  push(val: number) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(i: number) {
    // 부모가 더 크면 swap (MinHeap)
    while (i > 0 && this.heap[this.parent(i)] > this.heap[i]) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }

  peek() { return this.heap[0]; }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.bubbleDown(0);
    return min;
  }

  bubbleDown(i: number) {
    let smallest = i;
    const l = this.left(i);
    const r = this.right(i);
    const n = this.heap.length;

    // 더 작은 자식을 찾음 (MinHeap)
    if (l < n && this.heap[l] < this.heap[smallest]) smallest = l;
    if (r < n && this.heap[r] < this.heap[smallest]) smallest = r;

    if (smallest !== i) {
      this.swap(i, smallest);
      this.bubbleDown(smallest);
    }
  }

  size() { return this.heap.length; }
}
