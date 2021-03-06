// Variables

var minutes = 25;
var seconds = 0;
var cycles = 0;
var clock = document.title;
ryuSprite = document.getElementById('ryu-sprite');
taskInput = document.getElementById('user-added-task')
taskButton = document.getElementById('submit-task');
clearBtn = document.getElementById('clear-btn');
currentTask  = document.getElementById('current-task');
stillWorking = document.querySelector('.empty')


//Clock Sounds
var startSound = new Audio('./sounds/resetclocksound.mp3');
var resetSound = new Audio('./sounds/ranksound.mp3');
var stopSound = new Audio('./sounds/pausesound.mp3');
var alarmSound = new Audio('/sounds/GameOver.mp3');
var continueSound = new Audio('./sounds/startsound.mp3');
var shortBreakSound = new Audio('./sounds/hadouken.mp3');
var longBreakSound = new Audio('./sounds/shoryuken.mp3');
var resetCyclesSound = new Audio('./sounds/tatsu.mp3');


//event listeners
document.getElementById('start-button').addEventListener('click', startClock)
document.getElementById('short-break').addEventListener('click', shortBreak);
document.getElementById('long-break').addEventListener('click', longBreak);
document.getElementById('reset-cycles').addEventListener('click', resetCycles)
taskButton.addEventListener('click', assignTask);
clearBtn.addEventListener('click', clearTask);



//Pomodoro Functions

function defaultTiming() {
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('cycle-number').innerHTML = cycles;
}

function startClock() {
    startSound.play();
    ryuSprite.src = './Images/ryu-continue.gif'
document.getElementById('reset-button').addEventListener('click', resetClock)
document.getElementById('stop-button').addEventListener('click', stopClock);
document.getElementById('continue-button').addEventListener('click', continueClock);
    minutes = 24;
    seconds = 59;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('start-button').removeEventListener('click', startClock)
    document.getElementById('long-break').removeEventListener('click', longBreak)
    document.getElementById('short-break').removeEventListener('click', shortBreak)
    minutes_interval = setInterval(minutesTimer, 60000);
    seconds_interval = setInterval(secondsTimer, 1000);
    function minutesTimer() {
        minutes = minutes - 1;
        document.getElementById('minutes').innerHTML = minutes;
    }

    function secondsTimer() {
        seconds = seconds - 1;
        document.getElementById('seconds').innerHTML = seconds;
        if (seconds <= 0) {
        if (seconds <= 0 && minutes <= 0) {
            alarmSound.play();
            document.getElementById('short-break').addEventListener('click', shortBreak);
            document.getElementById('long-break').addEventListener('click', longBreak);
            clearInterval(minutes_interval);
            clearInterval(seconds_interval);
            ryuSprite.src = './Images/ryu-fine.png'
            cycles++
            document.getElementById('cycle-number').innerHTML = cycles;
            
        }
        seconds = 60;
        document.getElementById('start-button').addEventListener('click', startClock)
        }

    }
}

function stopClock() {
    stopSound.play();
    clearInterval(seconds_interval);
    clearInterval(minutes_interval);
    document.getElementById('short-break').addEventListener('click', shortBreak);
document.getElementById('long-break').addEventListener('click', longBreak);
}


function resetClock() {
    document.getElementById('reset-button').removeEventListener('click', resetClock)
    document.getElementById('stop-button').removeEventListener('click', stopClock);
    document.getElementById('continue-button').removeEventListener('click', continueClock);
    clearInterval(seconds_interval);
    clearInterval(minutes_interval)
    resetSound.play();
    var minutes = 25;
    var seconds = 0;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('start-button').addEventListener('click', startClock)
    document.getElementById('short-break').addEventListener('click', shortBreak);
    document.getElementById('long-break').addEventListener('click', longBreak)
    ryuSprite.src = './Images/ryu-continue.gif'
}

function continueClock() {
    continueSound.play();
    minutes_interval = setInterval(minutesTimer, 60000);
    seconds_interval = setInterval(secondsTimer, 1000);

    function minutesTimer() {
        minutes = minutes - 1;
        document.getElementById('minutes').innerHTML = minutes;
    }

    function secondsTimer() {
        seconds = seconds - 1;
        document.getElementById('seconds').innerHTML = seconds;
        if (seconds <= 0) {
        if (seconds <= 0 && minutes <= 0) {
            alarmSound.play()
            document.getElementById('start-button').addEventListener('click', startClock)
            document.getElementById('reset-button').addEventListener('click', resetClock)
            clearInterval(minutes_interval);
            clearInterval(seconds_interval);
            ryuSprite.src = './Images/ryu-fine.png'
            cycles++
            document.getElementById('cycle-number').innerHTML = cycles;
        }
        seconds = 60;
        }
    }
}


//Break Functions

function shortBreak() {
    shortBreakSound.play();
    ryuSprite.src = './Images/ryu-fine.png'
    document.getElementById('start-button').removeEventListener('click', startClock)
    document.getElementById('long-break').removeEventListener('click', longBreak)
    document.getElementById('short-break').removeEventListener('click', shortBreak)
    var minutes = 4;
    var seconds = 59;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    minutes_interval = setInterval(minutesTimer, 60000);
    seconds_interval = setInterval(secondsTimer, 1000);

    function minutesTimer() {
        minutes = minutes - 1;
        document.getElementById('minutes').innerHTML = minutes;
    }

    function secondsTimer() {
        seconds = seconds - 1;
        document.getElementById('seconds').innerHTML = seconds;
        if (seconds <= 0) {

        if (seconds <= 0 && minutes <= 0) {
            alarmSound.play()
            clearInterval(minutes_interval);
            clearInterval(seconds_interval);
            document.getElementById('short-break').addEventListener('click', shortBreak);
            document.getElementById('long-break').addEventListener('click', longBreak);
            document.getElementById('start-button').addEventListener('click', startClock);
        }
        seconds = 60;
        document.getElementById('start-button').addEventListener('click', startClock)
    }
    }
}



function longBreak() {
    longBreakSound.play();
    ryuSprite.src = './Images/ryu-fine.png'
    document.getElementById('start-button').removeEventListener('click', startClock)
    document.getElementById('long-break').removeEventListener('click', longBreak)
    document.getElementById('short-break').removeEventListener('click', shortBreak)
    var minutes = 14;
    var seconds = 59;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    minutes_interval = setInterval(minutesTimer, 60000);
    seconds_interval = setInterval(secondsTimer, 1000);

    function minutesTimer() {
        minutes = minutes - 1;
        document.getElementById('minutes').innerHTML = minutes;
    }

    function secondsTimer() {
        seconds = seconds - 1;
        document.getElementById('seconds').innerHTML = seconds;
        if (seconds <= 0) {
    
        if (seconds <= 0 && minutes <= 0) {
            alarmSound.play();
            clearInterval(minutes_interval);
            clearInterval(seconds_interval);
            document.getElementById('short-break').addEventListener('click', shortBreak);
            document.getElementById('long-break').addEventListener('click', longBreak);
            document.getElementById('start-button').addEventListener('click', startClock);
            ryuSprite.src = './Images/ryu-fine.png'
        }
        seconds = 60;
        document.getElementById('start-button').addEventListener('click', startClock)
    }
    }

}

//Reset Cycles

function resetCycles() {
    if (cycles >= 1) {
     ryuSprite.src = './Images/ryu-fine.png'
    cycles = 0;
    document.getElementById('cycle-number').innerHTML = cycles
    resetCyclesSound.play();
    currentTask.innerHTML  = '';
    }
}

//Display Task

function assignTask() {
 currentTask.innerHTML  = taskInput.value;
taskInput.value = '';
}

//clear task

function clearTask() {
  currentTask.innerHTML  = '';
}