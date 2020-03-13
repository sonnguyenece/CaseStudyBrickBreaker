const PADDING_COLOR = "#5414fc";
const PADDING_SIDE_COLOR = "#08ebff";
const PADDING_DEFAULT_SPEED = 5;
const PADDING_DEFAULT_HEIGHT = 15;
const PADDING_DEFAULT_WIDTH = 80;
const PADDING_DEFAULT_X = 80;
const PADDING_DEFAULT_Y = 500;
const shadowPointX = 4;
const shadowPointY = 5;

function Padding() {
    this.color = PADDING_COLOR;
    this.height = PADDING_DEFAULT_HEIGHT;
    this.width = PADDING_DEFAULT_WIDTH;
    this.x = PADDING_DEFAULT_X + this.width;
    this.y = PADDING_DEFAULT_Y;
    this.radiusSide = this.height / 2;
    this.speed = PADDING_DEFAULT_SPEED;
    this.isleft = false;
    this.isright = false;
    this.draw = function (ctx) {
        drawPadding(ctx, padding, PADDING_COLOR);
    };
    this.moveLeft = function () {
        if (this.isleft) this.x -= this.speed;
    };

    this.moveRight = function () {
        if (this.isright) {
            this.x += this.speed;
        }
    };
    this.move = function () {
        this.moveLeft();
        this.moveRight();
        if (this.x - this.radiusSide < 0) {
            this.x = this.radiusSide;
        } else if (this.x > canvas.width - this.width - this.radiusSide) {
            this.x = canvas.width - this.width - this.radiusSide;
        }
        if (ball.y < this.y - 50) {
            this.y = PADDING_DEFAULT_Y;
        }
        if (ball.y >= this.y - ball.radius
            && ball.y < this.y - ball.radius + ballStats.limitedSpace) {
            if (ball.x >= this.x - this.radiusSide - ball.radius
                && ball.x <= (this.x + this.width + this.radiusSide + ball.radius)) {
                this.y = PADDING_DEFAULT_Y + 10;
            }
        }
    };
}

function drawPadding(ctx, padding, PADDING_COLOR) {
    drawArc(ctx, padding.x, padding.y + padding.radiusSide,
        padding.radiusSide, PADDING_SIDE_COLOR, Math.PI * 0.5, Math.PI * 1.5);
    +drawRec(ctx, padding.x, padding.y, padding.width, padding.height, PADDING_COLOR)
    + drawArc(ctx, padding.x + padding.width, padding.y + padding.radiusSide,
        padding.radiusSide, PADDING_SIDE_COLOR, -Math.PI * 0.5, Math.PI * 0.5);
}