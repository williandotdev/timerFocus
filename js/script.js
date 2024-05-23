const section = document.querySelector('section')
const play = document.querySelector('#play')
const stop = document.querySelector('#stop')
const timer = document.querySelector('#timer')
const stopTimer = document.querySelector('#stopTimer')
const mute = document.querySelector('#mute')
const vol = document.querySelector('#vol')
const sun = document.querySelector('#sun')
const moon = document.querySelector('#moon')
let second = 0;
let minute = 23;
const stopwatch = document.querySelector('#stopwatch')


sun.addEventListener('click', toggleMode);
moon.addEventListener('click', toggleMode);
play.addEventListener('click', togglePlay);
play.addEventListener('click', toggleTimer);
// play.addEventListener('click', startStopwatch(minute, second));
stop.addEventListener('click', togglePlay);
stop.addEventListener('click', toggleTimer);
vol.addEventListener('click', toggleVol);
mute.addEventListener('click', toggleVol);
// timer.addEventListener('click', toggleTimer);
stopTimer.addEventListener('click', toggleTimer);
stopTimer.addEventListener('click', togglePlay);

function toggleMode(){ 
    section.classList.toggle('dark-mode')
    section.classList.toggle('clean-mode')
    sun.classList.toggle('hide')
    moon.classList.toggle('hide')
}
function togglePlay(){
    play.classList.toggle('hide')
    stop.classList.toggle('hide')
}
function toggleVol(){
    vol.classList.toggle('hide')
    mute.classList.toggle('hide')
}
function toggleTimer(){
    timer.classList.toggle('hide')
    stopTimer.classList.toggle('hide')
}


function startStopwatch(minutes, seconds) {
    let remainingTime = minutes * 60 + seconds; 
    const interval = setInterval(function() {
        const remainingMinutes = Math.floor(remainingTime / 60);
        const remainingSeconds = remainingTime % 60;

        if (remainingTime <= 0) {
            clearInterval(interval);
            alert('Timer reached zero!');
        } else {
            stopwatch.innerText = (`${remainingMinutes}:${remainingSeconds}`);
            remainingTime--;
        }
    }, 1000);
}

