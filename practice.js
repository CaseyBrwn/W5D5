
class Clock {
    constructor() {
        const date = new Date();
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        
        this.printTime();
        this._tick();
      
        setInterval(this._tick.bind(this), 1000);


        // 3. Call printTime.
        // 4. Schedule the tick at 1 second intervals.  
    }

    printTime() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

    _tick() {
        if (this.seconds < 59){
        this.seconds += 1;
        this.printTime();
        }else{ 
            if (this.minutes < 59){
            this.seconds = 0;
            this.minutes += 1;
            this.printTime();
            }else{
                if (this.hours <24){
                    this.hours += 1;
                    this.minutes = 0;
                    this.seconds = 0;
                    this.printTime();
                }else{
                    this.hours = 0;
                    this.minutes = 0;
                    this.seconds = 0;
                    this.printTime();
                }
            }
        } 
    }
}

const clock = new Clock();