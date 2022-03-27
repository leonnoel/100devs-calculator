function stopwatch() {
    let duration = 0;
    let start;
    let end;
    let running = false;
    this.start = function() {
        if (running) {
            throw new Error('stopwatch already started!')
        } else {
            start = Date.now();
            running = true;
        }
        
    }
    this.stop = function() {
        if (!running) {
            throw new Error('stopwatch is not running!')
        } else {
            running = false;
            end = Date.now();
            const increment =  Number(((end - start)/1000).toFixed(2));
            duration += increment;
        }
        
    }
    this.reset = function() {
        duration = 0;
        running = false;
    }
    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    })
}

const sw = new stopwatch();