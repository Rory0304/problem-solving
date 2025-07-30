class LRUCache {
    cache: Map<number, number>;
    capacity: number;

    constructor(capacity: number) {
        this.cache = new Map();
        this.capacity = capacity;
    }

    get(key: number): number {
        const value = this.cache.get(key);
        
        if(value === undefined){
            return -1
        }

        this.cache.delete(key);
        this.cache.set(key, value)

        return value
    }

    put(key: number, value: number): void {
        if(this.cache.size === this.capacity && !this.cache.has(key)){
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey)
        }

        this.cache.delete(key);
        this.cache.set(key, value);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */