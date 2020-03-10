const PADDING_COLOR = "#5414fc";
const PADDING_DEFAULT_SPEED = 5;
const PADDING_DEFAULT_HEIGHT = 15;
const PADDING_DEFAULT_WIDTH = 80;
const PADDING_DEFAULT_X = 80;
const PADDING_DEFAULT_Y = 500;

let Padding = function () {
    this.color = PADDING_COLOR;
    this.height = PADDING_DEFAULT_HEIGHT;
    this.width = PADDING_DEFAULT_WIDTH;
    this.x = PADDING_DEFAULT_X + this.width;
    this.y = PADDING_DEFAULT_Y;
    this.radiusSide= this.height/2;
    this.speed = PADDING_DEFAULT_SPEED;
    this.isleft = false;
    this.isright = false;
    this.draw = function (ctx) {
        drawRec(ctx, this.x, this.y, this.width,
            this.height, PADDING_COLOR)
        + drawCir(ctx, this.x, this.y + this.radiusSide,
            this.height / 2, PADDING_COLOR, false);
        +drawCir(ctx, this.x + this.width, this.y + this.radiusSide,
            this.height / 2, PADDING_COLOR, false);
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
        if (this.x-this.height/2 < 0) {
            this.x= this.height/2;
        } else if (this.x > canvas.width - this.width-this.height/2) {
            this.x = canvas.width - this.width-this.height/2;
        }
    };
};