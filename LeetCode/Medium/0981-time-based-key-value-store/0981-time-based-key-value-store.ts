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
            const prev = this.map.get(key);
            let newArr: Array<[string, number]> = [...prev, [value, timestamp]]
            newArr.sort((a,b) => b[1] - a[1]);
            this.map.set(key, newArr)
        }
    }

    get(key: string, timestamp: number): string {
        if(!this.map.get(key)) return ""
        
        const values = this.map.get(key);

        let timestamp_prev;

        for(let [value, pt] of values){
            if(pt <= timestamp){
                timestamp_prev = [value, pt]
                break
            }
        }


        return timestamp_prev?.[0] ?? ""
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */