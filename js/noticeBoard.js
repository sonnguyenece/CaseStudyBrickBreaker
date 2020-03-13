let boardStats = {
    width: 250,
    height: 200,
    color: "#ffc247",
    x: 80,
    y: 160,
};

let button = {
    color: "rgba(42,0,214,0.91)",
    startX: 140,
    restartX: 220,
    y: 200,
    height: 50,
    width: 50,
    pressRestart: false,
    pressStart: false
};

function NoticeBoard() {
    this.draw = function (ctx) {
        drawRecAndShadow(ctx, boardStats.x, boardStats.y, boardStats.width, boardStats.height, boardStats.color);
        if (button.pressStart) {
            drawPlayPress(ctx);
        } else {
            drawPlayButton(ctx);
        }
        if (button.pressRestart) {
            drawReplayPress(ctx);
        } else {
            drawReplayButton(ctx);
        }
        ctx.canvas.addEventListener('mousedown', function (event) {
            NoticeBoard.x = event.clientX - ctx.canvas.offsetLeft;
            NoticeBoard.y = event.clientY - ctx.canvas.offsetTop;
        });
        ctx.canvas.addEventListener('mouseup', function (event) {
            NoticeBoard.x = false;
            NoticeBoard.y = false;
        });

    };
    this.action = function () {
        if (NoticeBoard.x >= button.startX
            && NoticeBoard.x <= button.startX + button.width
            && NoticeBoard.y >= button.y
            && NoticeBoard.y <= button.y + button.height) {
            button.pressStart = true;
            setTimeout(playPauseGame, 500);
        } else {
            button.pressStart = false;
        }

        if (NoticeBoard.x >= button.restartX
            && NoticeBoard.x <= button.restartX + button.width
            && NoticeBoard.y >= button.y
            && NoticeBoard.y <= button.y + button.height) {
            button.pressRestart = true;
            setTimeout(restartGame, 500);
        } else {
            button.pressRestart = false;
        }
    };
}

/*Auxiliary Function*/
function drawPlayButton(ctx) {
    drawRecAndShadow(ctx, button.startX, button.y, button.width,
        button.height, button.color);
    drawTriangle(ctx, 150, 240, 150, 210, 180, 225, "rgb(157,255,102)")
}

function drawPlayPress(ctx) {
    drawButtonPress(ctx, button.startX + 5, button.y + 5, button.width,
        button.height, button.color);
    drawTriangle(ctx, 155, 245, 155, 215, 185, 230, "rgb(157,255,102)")
}

function drawReplayButton(ctx) {
    drawRecAndShadow(ctx, button.restartX, button.y, button.width,
        button.height, button.color);
    drawArcStroke(ctx, 245, 225, 15, "#ff0617", Math.PI, 0.5 * Math.PI);
    drawTriangle(ctx, 240, 225, 220, 225, 230, 235, "#ff0617")
}

function drawReplayPress(ctx) {
    drawButtonPress(ctx, button.restartX + 5, button.y + 5, button.width,
        button.height, button.color);
    drawArcStroke(ctx, 245 + 5, 225 + 5, 15, "#ff0617", Math.PI, 0.5 * Math.PI);
    drawTriangle(ctx, 240 + 5, 225 + 5, 220 + 5, 225 + 5, 230 + 5, 235 + 5, "#ff0617")
}

function drawButtonPress(ctx, x, y, width, height, color) {
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function playPauseGame() {
    if (isPause) {
        time.reverse = Temp.reverseTime;
        time.survival = Temp.survivalTime;
        isPause = false;
    } else if (isFirstStart) {
        gameStart = true;
        if (Temp.survivalTime !== timeSurvivalStart) {
            time.survival = Temp.survivalTime;
            time.reverse = Temp.reverseTime;
        } else {
            time.survival = timeSurvivalStart;
            time.reverse = timeReverseDefault ;
        }
    }
}

function restartGame() {
    timeIsSave=false;
    gameStart = true;
    isFirstStart = true;
    isGameOver=false;
    Temp.survivalTime = 0;
    time.survival = timeSurvivalStart;
    time.reverse = timeReverseDefault ;
    isPause = false;
    changeBrickWall();
    ball.x = padding.x + padding.width / 2;
    ball.y = padding.y - ball.radius;
}
