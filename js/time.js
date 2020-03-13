const timeReverseDefault = 100;
const timeSurvivalStart=0;
const penaltyTime = 20;
const bonusTime = 30;
let isSaveSurTime = false;
let incrementSeconds = setInterval(function () {
    time.survival += 1;
    time.reverse--;
}, 1000);

function Time() {
    this.check = function () {
        if (this.reverse <= 0) {
            this.reverse = 0;
            clearInterval(incrementSeconds);
            gameStart = false;
            isFirstStart = false;
            isGameOver = true;
        }
    }
}




