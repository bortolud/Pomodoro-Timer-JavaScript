const pomButton = document.querySelector('#pomButton');
const shortButton = document.querySelector('#shortButton');
const longButton = document.querySelector('#longButton');
const startButton = document.querySelector('#startButton');
const timerDisplay = document.querySelector('#timerDisplay');

let intervalId = 0;
let cycle = 0;

let isRunning = false;

let timerMinutes = 25;
let timerSeconds = 0;

const updateDisplay = () => {
    if (timerSeconds < 10 && timerMinutes < 10) {
        timerDisplay.innerText = `0${timerMinutes}:0${timerSeconds}`;
    }
    else if (timerSeconds < 10) {
        timerDisplay.innerText = `${timerMinutes}:0${timerSeconds}`;
    }
    else if (timerMinutes < 10) {
        timerDisplay.innerText = `0${timerMinutes}:${timerSeconds}`;
    }
    else {
        timerDisplay.innerText = `${timerMinutes}:${timerSeconds}`;
    }
}

const setTimer = function (min, sec) {
    if (intervalId) {
        isRunning = false;
        console.log('isRunning is, ', isRunning);
        startButton.innerText = 'Start';
        clearInterval(intervalId);
    }
    timerMinutes = min;
    timerSeconds = sec;
    updateDisplay();
}

const timerFinished = () => {
    isRunning = false;
    console.log('isRunning is, ', isRunning);
    startButton.innerText = 'Start';
    clearInterval(intervalId);
    cycle++;
    if (cycle % 7 === 0) {
        setTimer(15, 0);
        pomButton.classList.remove('selected');
        shortButton.classList.remove('selected');
        longButton.classList.add('selected');
    }
    else if (cycle % 2 === 0) {
        setTimer(25, 0);
        pomButton.classList.add('selected');
        shortButton.classList.remove('selected');
        longButton.classList.remove('selected');
    }
    else {
        setTimer(5, 0);
        pomButton.classList.remove('selected');
        shortButton.classList.add('selected');
        longButton.classList.remove('selected');
    }
    alert('Timer Finished');
}

startButton.addEventListener('click', () => {
    if (isRunning === true) {
        isRunning = false;
        console.log('isRunning is, ', isRunning);
        startButton.innerText = 'Start';
        clearInterval(intervalId);
    } else {
        isRunning = true;
        console.log('isRunning is, ', isRunning);
        startButton.innerText = 'Stop';
        intervalId = setInterval(() => {
            if (timerSeconds === 0) {
                if (timerMinutes === 0) {
                    timerFinished();
                }
                else {
                    timerMinutes--;
                    timerSeconds = 59;
                    updateDisplay();
                }
            }
            else {
                timerSeconds--;
                updateDisplay();
            }
        }, 1000);
    }
})

pomButton.addEventListener('click', () => {
    setTimer(25, 0);
    pomButton.classList.add('selected');
    shortButton.classList.remove('selected');
    longButton.classList.remove('selected');
})

shortButton.addEventListener('click', () => {
    setTimer(5, 0);
    pomButton.classList.remove('selected');
    shortButton.classList.add('selected');
    longButton.classList.remove('selected');
})

longButton.addEventListener('click', () => {
    setTimer(15, 0);
    pomButton.classList.remove('selected');
    shortButton.classList.remove('selected');
    longButton.classList.add('selected');
})

updateDisplay();
