function Text() {
    this.draw = function (ctx) {
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
        ctx.shadowColor="rgba(56,55,44,0.4)"
        ctx.font = "40px Comic Sans MS";
        ctx.fillStyle = "#290215";
        ctx.textAlign = "center";
        ctx.fillText(time.reverse, 0.5 * canvas.width, 0.7 * canvas.height);
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
        ctx.shadowColor="rgba(41,2,21,0.9)"
    };
    this.start = function () {
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 3;
        ctx.shadowColor = "#000000";
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "rgba(15,244,38,0.98)";
        ctx.textAlign = "center";
        ctx.fillText("Brick Breaker", 0.5 * canvas.width, 0.35 * canvas.height);
        ctx.shadowColor = "#000000";
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "rgba(244,6,0,0.98)";
        ctx.textAlign = "center";
        ctx.fillText("High Score :", 0.5 * canvas.width, 0.55 * canvas.height);
    };
    this.pause = function () {
        ctx.shadowColor = "rgba(64,64,64,0.43)";
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "#290215";
        ctx.textAlign = "center";
        ctx.fillText("Paused", 0.5 * canvas.width, 0.35 * canvas.height);
        ctx.shadowColor = "rgba(0,0,0,0.31)";
    };
    this.gameOver= function () {
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;
        ctx.font = "20px Comic Sans MS";
        ctx.fillStyle = "#290215";
        ctx.textAlign = "center";
        ctx.fillText("Game is over!!!", 0.5 * canvas.width, 0.35 * canvas.height);
        ctx.font = "20px Comic Sans MS";
        ctx.fillStyle = "#290215";
        ctx.textAlign = "center";
        ctx.fillText("Your last survival "+time.survival+"sec", 0.5 * canvas.width, 0.5 * canvas.height);
        ctx.font = "20px Comic Sans MS";
        ctx.fillStyle = "#290215";
        ctx.textAlign = "center";
        ctx.fillText("Highest score: "+" sec", 0.5 * canvas.width, 0.6 * canvas.height);
    }
}