var displayMin = document.getElementById('displayMin');
var displaySec = document.getElementById('displaySec');
var displayMiliSec = document.getElementById('displayMiliSec');
var min = 0;
var sec = 0;
var miliSec = 0;
var interval;

function timer() {
    miliSec++;
    if (miliSec == 100) {
        miliSec = 0;
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
        }
    }
    displayMin.innerHTML = min;
    displaySec.innerHTML = sec;
    displayMiliSec.innerHTML = miliSec;
}
function startTimer() {
    interval = setInterval(function () { timer() }, 10);
}
function pauseTimer() {
    clearInterval(interval);
}
function resetTimer() {
    clearInterval(interval);
    min = 0;
    sec = 0;
    miliSec = 0;
    displayMin.innerHTML = min;
    displaySec.innerHTML = sec;
    displayMiliSec.innerHTML = miliSec;
}