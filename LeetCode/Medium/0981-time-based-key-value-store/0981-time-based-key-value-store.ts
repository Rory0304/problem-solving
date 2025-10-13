class TimeMap {
    private map: Map<string, Array<[string, number]>>;

    constructor() {
        this.map = new Map();
    }

    set(key: string, value: string, timestamp: number): void {
        if(!this.map.get(key)){
            this.map.set(key, [[value, timestamp]])
        }
        else{
            const values = this.map.get(key);            
            const index = this.binarySearch(values, timestamp);

            if(index < values.length && values[index][1] === timestamp){
                values[index] = [value, timestamp]
            }
            else {
                values.splice(index, 0, [value, timestamp]) // remove and insert
            }
        }
    }

    get(key: string, timestamp: number): string {
        if(!this.map.get(key)) return ""
        
        const values = this.map.get(key);
        const index = this.binarySearch(values, timestamp);

        return  index > 0 ? values[index-1]?.[0] : ''
    }

    private binarySearch(timestamps: Array<[string, number]>, target: number): number {
        let left = 0
        let right = timestamps.length;

        while(left < right){
            let mid = Math.floor((left + right) / 2)
            if(timestamps[mid][1] <= target){
                left = mid + 1
            }
            else {
                right = mid
            }
        }

        return left
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */