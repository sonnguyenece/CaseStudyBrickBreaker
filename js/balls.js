let BallStats = {
    defaultRadius: 10,
    defaultX: 320,
    defaultY: 520,
    defaultColor: "red",
    defaultSpeed: 3
};
let BorderBoard = {
    left: 0,
    right: 400,
    top: 0,
    bot: 550
};

function Ball() {
    this.x = BallStats.defaultX;
    this.y = BallStats.defaultY;
    this.radius = BallStats.defaultRadius;
    this.color = BallStats.defaultColor;
    this.speed = BallStats.defaultSpeed;
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
    this.impact = function () {
        this.impactBorder();
        this.impactPadding(padding);
        // this.impactBrick();
    };
    this.impactPadding = function (padding) {
        if (this.isUp === false) {
            if (padding.y === (this.y + this.radius)
                && this.x >= padding.x - 2 * padding.radiusSide
                && this.x <= (padding.x + padding.width + 2 * padding.radiusSide)) {
                if (this.x <= padding.x) {
                    if (this.isRight) {
                        this.isRight = false;
                        this.angle -= 20;
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
                        this.angle -= 20;
                    }
                    this.speed += 2;
                }

                if (this.angle <= 10) {
                    this.angle = 70;
                    this.speed=BallStats.defaultSpeed;
                }
                this.isUp = true;
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
    }
}