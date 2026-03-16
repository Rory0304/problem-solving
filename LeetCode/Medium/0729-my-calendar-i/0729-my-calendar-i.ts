class MyCalendar {
    calendar: number[][];

    constructor() {
        this.calendar = []
    }

    book(startTime: number, endTime: number): boolean {

        if(this.calendar.filter(e => e[0] < endTime && e[1] > startTime).length !== 0) return false

        this.calendar.push([startTime, endTime])

        return true
    }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(startTime,endTime)
 */