const timeReverseDefault = 60;
const timeSurvivalStart=0;
const penaltyTime = 20;
const bonusTime = 20;
let isSaveSurTime = false;
setInterval(function () {
    time.survival += 1;
    time.reverse--;
}, 1000);

function Time() {
    this.check = function () {
        if (this.reverse <= 0) {
            this.reverse = 0;
            gameStart = false;
            isFirstStart = false;
            isGameOver = true;
        }
    }
}




