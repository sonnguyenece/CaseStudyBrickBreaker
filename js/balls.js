let ballStats = {
    defaultRadius: 10,
    defaultX: 320,
    defaultY: 520,
    defaultColor: "red",
    defaultSpeed: 2,
    defaultAngle:60
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
    this.angle = 70;

    this.draw = function () {
        drawCir(ctx, this.x, this.y, this.radius, this.color, false);
    };
    this.moveUpRight = function () {
        if (this.isUp && this.isRight) {
            this.x += this.speed;
            this.y -= (Math.tan(Math.PI * this.angle / 180)).toFixed(1) * this.speed;
        }
    };
    this.upLeft = false;
    this.moveUpLeft = function () {
        if (this.isUp && this.isRight === false) {
            this.x -= this.speed;
            this.y -= (Math.tan(Math.PI * this.angle / 180)).toFixed(1) * this.speed;
        }
    };
    this.downRight = false;
    this.moveDownRight = function () {
        if (this.isRight && this.isUp === false) {
            this.x += this.speed;
            this.y += (Math.tan(Math.PI * this.angle / 180)).toFixed(1) * this.speed;
        }
    };
    this.downLeft = false;
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
                && this.x >= padding.x - 2 * padding.radiusSide
                && this.x <= (padding.x + padding.width + 2 * padding.radiusSide)) {
                if (this.x <= padding.x) {
                    if (this.isRight) {
                        this.isRight = false;
                        this.angle -= 15;
                    } else {
                        this.angle -= 10;
                    }
                    this.speed += 3;
                }
                if (this.x >= padding.x + padding.width) {
                    if (this.isRight) {
                        this.angle -= 10;
                    } else {
                        this.isRight = true;
                        this.angle -= 15;
                    }
                    this.speed += 3;
                }

                if (this.angle < 10) {
                    this.angle = 80;
                    this.speed = ballStats.defaultSpeed;
                }
                this.isUp = true;
            }
        }
    };

    this.impactBricks = function () {
        for (i = 0; i < brickStats.rowBrick; i++) {
            for (j = 0; j < brickStats.colBrick; j++) {
                impactBrick(arrBrick[i][j]);
                if (this.isImpactBrick) {
                    arrBrick[i][j] = '';
                    this.isImpactBrick = false;
                }
            }
        }
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
    this.restart = function () {
        if (this.y >= canvas.height+100){
            this.start=false;
            this.speed=ballStats.defaultSpeed;
            this.angle=ballStats.defaultAngle;
        }
    };
}

function impactBrick(arr) {
    if (ball.x + ball.radius >= arr.x
        && ball.x + ball.radius <= arr.x + arr.width) {
        if (ball.y + ball.radius <= arr.y + arr.height
            && ball.y + ball.radius >= arr.y) {
            ball.isImpactBrick = true;
            impactTopBot();

        }
        if (ball.y - ball.radius <= arr.y + arr.height
            && ball.y - ball.radius >= arr.y) {
            ball.isImpactBrick = true;
            impactTopBot();
        }
    }
    if (ball.y >= arr.y && ball.y <= arr.y + arr.height) {
        if (ball.x + ball.radius < arr.x + arr.width
            && ball.x + ball.radius >= arr.x) {
            ball.isImpactBrick = true;
            impactSide();
        }
        if (ball.x - ball.radius <= arr.x + arr.width
            && ball.x - ball.radius > arr.x) {
            ball.isImpactBrick = true;
            impactSide();
        }
    }
}

function impactTopBot() {
    if (ball.isUp) ball.isUp = false;
    else ball.isUp = true;
}

function impactSide() {
    if (ball.isRight) ball.isRight = false;
    else ball.isRight = true;
}