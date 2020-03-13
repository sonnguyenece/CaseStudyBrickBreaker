let ballStats = {
    defaultRadius: 10,
    defaultX: 320,
    defaultY: 520,
    defaultColor: "red",
    defaultSpeed: 2,
    defaultAngle: 70,
    limitedSpace: 10
};

let BorderBoard = {
    left: 0,
    right: 400,
    top: 0,
    bot: 550
};

function Ball() {
    this.x = ballStats.defaultX;
    this.y = ballStats.defaultY;
    this.radius = ballStats.defaultRadius;
    this.color = ballStats.defaultColor;
    this.speed = ballStats.defaultSpeed;
    this.start = false;
    this.isUp = true;
    this.isRight = true;
    this.angle = ballStats.defaultAngle;

    this.draw = function () {
        drawCir(ctx, this.x, this.y, this.radius, this.color, false);
    };

    this.move = function () {
        if (this.start) {
            this.moveUpRight();
            this.moveUpLeft();
            this.moveDownLeft();
            this.moveDownRight();
            this.impact();

        } else {
            this.x = padding.x + padding.width / 2;
            this.y = padding.y - this.radius;
        }
    };

    this.moveUpRight = function () {
        if (this.isUp && this.isRight) {
            this.x += this.speed;
            this.y -= (Math.tan(Math.PI * this.angle / 180)).toFixed(1) * this.speed;
        }
    };

    this.moveUpLeft = function () {
        if (this.isUp && this.isRight === false) {
            this.x -= this.speed;
            this.y -= (Math.tan(Math.PI * this.angle / 180)).toFixed(1) * this.speed;
        }
    };

    this.moveDownRight = function () {
        if (this.isRight && this.isUp === false) {
            this.x += this.speed;
            this.y += (Math.tan(Math.PI * this.angle / 180)).toFixed(1) * this.speed;
        }
    };

    this.moveDownLeft = function () {
        if (this.isUp === false && this.isRight === false) {
            this.x -= this.speed;
            this.y += (Math.tan(Math.PI * this.angle / 180)).toFixed(1) * this.speed;
        }
    };

    this.impact = function () {
        this.impactBorder();
        this.impactPadding(padding);
        this.impactBricks();
    };

    this.impactBorder = function () {
        if (this.isUp) {
            if (this.isRight) {
                if ((this.x + this.radius) >= BorderBoard.right) {
                    this.isRight = false;
                    this.isLeft = true;
                }
                if ((this.y - this.radius) < BorderBoard.top) {
                    this.isRight = true;
                    this.isUp = false
                }
            } else {
                if ((this.x - this.radius) <= BorderBoard.left) {
                    this.isRight = true;
                    this.isLeft = false;
                }
                if ((this.y - this.radius) < BorderBoard.top) {
                    this.isRight = false;
                    this.isUp = false;
                }
            }
        } else {
            if (this.isRight) {
                if ((this.x + this.radius) >= BorderBoard.right) {
                    this.isRight = false;
                    this.isLeft = true;
                }
                // if ((this.y - this.radius) < BorderBoard.top) {
                //     this.isRight = true;
                //     this.isUp = false
                // }
            } else {
                if ((this.x - this.radius) <= BorderBoard.left) {
                    this.isRight = true;
                    this.isLeft = false;
                }
                // if ((this.y - this.radius) < BorderBoard.top) {
                //     this.isRight = false;
                //     this.isUp = false;
                // }
            }

        }
    };

    this.impactPadding = function (padding) {
        if (this.isUp === false) {
            if (padding.y <= (this.y + this.radius)
                && padding.y >= this.y
                && this.x >= padding.x - padding.radiusSide - this.radius
                && this.x <= (padding.x + padding.width + padding.radiusSide + this.radius)) {
                if (this.x <= padding.x) {
                    if (this.isRight) {
                        this.isRight = false;
                        this.angle -= 15;
                    } else {
                        this.angle -= 10;
                    }
                    this.speed += 2;
                }
                if (this.x >= padding.x + padding.width) {
                    if (this.isRight) {
                        this.angle -= 10;
                    } else {
                        this.isRight = true;
                        this.angle -= 15;
                    }
                    this.speed += 2;
                }

                if (this.angle < 10) {
                    this.angle = 80;
                    this.speed = ballStats.defaultSpeed / 2;
                }
                this.isUp = true;
            }
        }
    };

    this.impactBricks = function () {
        for (i = 0; i < brickStats.rowBrick; i++) {
            for (j = 0; j < brickStats.colBrick; j++) {
                if (brickWall.isChange === false) {
                    impactBrick(arrBrick[i][j]);
                }
                if (this.isImpactBrick) {
                    switch (arrBrick[i][j].color) {
                        case brickStats.redBrick:
                            arrBrick[i][j].color = brickStats.blueBrick;
                            break;
                        case brickStats.blueBrick:
                            arrBrick[i][j].color = brickStats.greenBrick;
                            break;
                        case brickStats.greenBrick:
                            arrBrick[i][j] = '';
                            break;
                        case brickStats.lockBrickColor:
                            break;
                        default:
                            brickWall.isChange = true;
                            time.reverse += bonusTime;
                            break;
                    }
                    this.isImpactBrick = false;
                }
            }
        }
    };

    this.restart = function () {
        if (this.y >= canvas.height + 100) {
            this.start = false;
            this.speed = ballStats.defaultSpeed;
            this.angle = ballStats.defaultAngle;
            time.reverse-=penaltyTime;
        }
    };
}

/*Auxiliary Function*/
function impactBrick(arr) {
    if (ball.x > arr.x - ball.radius
        && ball.x < arr.x + arr.width + ball.radius) {
        if (ball.y < arr.y - ball.radius + ballStats.limitedSpace
            && ball.y >= arr.y - ball.radius) {
            ball.isImpactBrick = true;
            if (ball.isUp === false) ball.isUp = true;
        }
        if (ball.y <= arr.y + arr.height + ball.radius
            && ball.y > arr.y + ball.radius + arr.height - ballStats.limitedSpace) {
            ball.isImpactBrick = true;
            if (ball.isUp) ball.isUp = false;
        }
    }
    if (ball.y > arr.y - ball.radius && ball.y < arr.y + arr.height + ball.radius) {
        if (ball.x < arr.x - ball.radius + ballStats.limitedSpace
            && ball.x >= arr.x - ball.radius) {
            ball.isImpactBrick = true;
            if (ball.isRight) ball.isRight = false;
        }
        if (ball.x <= arr.x + arr.width + ball.radius
            && ball.x > arr.x + arr.width + ball.radius - ballStats.limitedSpace) {
            ball.isImpactBrick = true;
            if (ball.isRight === false) ball.isRight = true;
        }
    }
}
