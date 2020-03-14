let brickStats = {
    defaultWidth: 40,
    defaultHeight: 60,
    rowBrick: 4,
    colBrick: 10,
    defaultBrickY: 20,
    defaultBrickX: 0,
    greenBrick: "#3CFF0B",
    blueBrick: "#0207ff",
    redBrick: "#ff0097",
    lockBrickColor: "black",
    keyBrickColor: "#ff0520",
    keyBrickColor1: "#ffff01",
};

let arrBrick = create2DArray(brickStats.rowBrick);

function Brick() {
    this.width = brickStats.defaultWidth;
    this.height = brickStats.defaultHeight;
    this.x = brickStats.defaultBrickX;
    this.y = brickStats.defaultBrickY;
    this.color = brickStats.redBrick;
}

function BrickWall() {
    let j = 0;
    let i = 0;
    let countKeyBrick = 0;
    let countKeyBrick1 = 0;
    this.draw = function (ctx) {
        for (i = 0; i < brickStats.rowBrick; i++) {
            for (j = 0; j < brickStats.colBrick; j++) {
                drawBrickRec(ctx, arrBrick[i][j].x, arrBrick[i][j].y,
                    arrBrick[i][j].width, arrBrick[i][j].height, arrBrick[i][j].color);
                if (arrBrick[i][j].color === brickStats.keyBrickColor) {
                    countKeyBrick++;
                    if (countKeyBrick === 20) {
                        arrBrick[i][j].color = brickStats.keyBrickColor1;
                        countKeyBrick = 0;
                    }
                }
                if (arrBrick[i][j].color === brickStats.keyBrickColor1) {
                    countKeyBrick1++;
                    if (countKeyBrick1 === 20) {
                        arrBrick[i][j].color = brickStats.keyBrickColor;
                        countKeyBrick1 = 0;
                    }
                }
            }
        }
    };
    this.isChange=false;
}

/*Auxiliary Function*/
function drawBrickRec(ctx, x, y, width, height, color) {
    ctx.beginPath();
    ctx.clearRect(x, y, width, height);
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.shadowColor = "rgba(0,0,0,0.82)";
    ctx.shadowOffsetX = shadowPointX;
    ctx.shadowOffsetY = shadowPointY;
    ctx.shadowBlur = 3;
    ctx.closePath();
}

function creatRandomBricks() {
    let keyRow = Math.floor(Math.random() * brickStats.rowBrick);
    let keyCol = Math.floor(Math.random() * brickStats.colBrick);
    for (i = 0; i < brickStats.rowBrick; i++) {
        for (let j = 0; j < brickStats.colBrick; j++) {
            arrBrick[i][j] = creatBrick();
            if (i === keyRow && j === keyCol) {
                arrBrick[i][j].color = brickStats.keyBrickColor;
            }
            arrBrick[i][j].x = j * brickStats.defaultWidth;
            arrBrick[i][j].y = (i + 1) * brickStats.defaultHeight;
        }
    }
}

function creatBrick() {
    let brick = new Brick();
    brick.width = randomWidthBrick();
    brick.height = randomHeightBrick();
    brick.color = randomColorBrick();
    return brick
}

function randomColorBrick() {
    let temp = Math.floor(Math.random() * 3);
    let randomLockBrick = Math.floor(Math.random() * 20);
    if (randomLockBrick === 10) return brickStats.lockBrickColor;
    if (temp === 0) {
        return brickStats.greenBrick;
    } else if (temp === 1) {
        return brickStats.blueBrick;
    } else {
        return brickStats.redBrick;
    }
}

function randomWidthBrick() {
    let temp = Math.floor(Math.random() * 2);
    if (temp === 0) {
        return brickStats.defaultWidth * 0.9;
    } else {
        return brickStats.defaultWidth / 2;
    }
}

function randomHeightBrick() {
    let temp = Math.floor(Math.random() * 2);
    if (temp === 0) {
        return brickStats.defaultHeight * 0.9;
    } else {
        return brickStats.defaultHeight / 2;
    }
}

creatRandomBricks();
