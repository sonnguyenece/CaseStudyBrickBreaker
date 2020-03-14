function Text() {
    this.draw = function (ctx) {
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
        ctx.shadowColor="rgba(56,55,44,0.4)";
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
        ctx.shadowColor = "rgba(0,0,0,0.39)";
        ctx.font = "20px Comic Sans MS";
        ctx.fillStyle = "rgba(0,18,244,0.98)";
        ctx.fillText("Survive as long as you can ", 0.5 * canvas.width, 0.50 * canvas.height);
        ctx.fillStyle = "#000000";
        ctx.font = "15px Comic Sans MS";
        ctx.fillText("Press SPACE to release the ball ", 0.5 * canvas.width, 0.55 * canvas.height);
        ctx.fillText("ECS to pause or restart", 0.5 * canvas.width, 0.60 * canvas.height);
        ctx.fillText("LEFT or RIGHT to move ", 0.5 * canvas.width, 0.65 * canvas.height);
    };
    this.pause = function () {
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;
        ctx.shadowColor = "rgba(64,64,64,0.43)";
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "#290215";
        ctx.textAlign = "center";
        ctx.fillText("Paused", 0.5 * canvas.width, 0.35 * canvas.height);
        ctx.shadowColor = "rgba(0,0,0,0.31)";
        ctx.font = "20px Comic Sans MS";
        ctx.fillText("Click left button to continue ", 0.5 * canvas.width, 0.55 * canvas.height);
        ctx.fillText("or click the another to restart ", 0.5 * canvas.width, 0.60 * canvas.height);
    };
    this.gameOver= function () {
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;
        ctx.font = "20px Comic Sans MS";
        ctx.fillStyle = "#290215";
        ctx.textAlign = "center";
        ctx.fillText("Game over!!!", 0.5 * canvas.width, 0.35 * canvas.height);
        ctx.font = "20px Comic Sans MS";
        ctx.fillStyle = "#290215";
        ctx.textAlign = "center";
        ctx.fillText("Your last survival "+time.survival+" sec", 0.5 * canvas.width, 0.5 * canvas.height);
        ctx.font = "20px Comic Sans MS";
        ctx.fillStyle = "#290215";
        ctx.textAlign = "center";
        ctx.fillText("Highest score: "+" sec", 0.5 * canvas.width, 0.6 * canvas.height);
    }
}