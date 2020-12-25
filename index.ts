// #1, the example (slider.onchange) was missing a closing bracket
interface sliderObj {
    ms: number
    cb: () => void
}

let delayedCb = (d: sliderObj): void => {
    let lastTrigger: number
    let amountOfTime: number = 500
    let timer: number = null
    let startTime: Date | any, endTime: Date | any

    function start() {
        startTime = new Date()
    }

    function end() {
        endTime = new Date()
        lastTrigger = endTime - startTime //in ms
    }

    function clearTimeoutTrigger(timerVar: number) {
        clearTimeout(timerVar)
        timerVar = null
    }

    if (timer != null) {
        clearTimeoutTrigger(timer)

        start()
        timer = setTimeout(d.cb, amountOfTime)
        end()
    } else {
        if (lastTrigger < 500) {
            clearTimeoutTrigger(timer)
        }

        start()
        timer = setTimeout(d.cb, amountOfTime)
        end()
    }
}

// #2
// It's trying to remove duplicate numbers in the cont array, for example [1, 1, 2, 2] becomes [1, 2] , unless strict rules are applied to how cont is generated it will provide inconsistent results

// #3
// You should never call readFileSync in a node express/webserver since it will tie up the single thread loop while I/O is performed. You want the node loop to process other requests until the I/O completes and your callback handling code can run.

// here is an async example which I would prefer:
// fs.readFile('/file.md', (err, data) => {
//     if (err) throw err;
// });

// #4
// If you don't do something like this (and there are other variations on this same idea), then each of the timer handler functions will share the same variable "i"

var WORDS: string[] = ['hello', 'my', 'name', 'is', 'laika']

let condition = (i: number): void => {
    setTimeout(function () {
        if (!WORDS[i]) throw Error('Empty word!')
        console.log(WORDS[i])
    }, i * 10)
}

let value = (): void => {
    try {
        for (var i = 0; i <= WORDS.length; ++i) {
            condition(i)
        }
    } catch (e) {
        console.log('Error: ' + e)
    }
}

value()
