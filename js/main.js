const PARAMETERKEYBOARD = {
    KEYLEFT: 37,
    KEYRIGHT: 39,
    SPACE: 32
};
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let padding = new Padding();
let ball = new Ball();

function onKeyup(event) {
    switch (event.which) {
        case PARAMETERKEYBOARD.KEYLEFT:
            padding.isleft = false;
            break;
        case PARAMETERKEYBOARD.KEYRIGHT:
            padding.isright = false;
            break;
        default:
            break;
    }
}

function onKeydown(event) {
    switch (event.which) {
        case PARAMETERKEYBOARD.KEYLEFT:
            padding.isleft = true;
            break;
        case PARAMETERKEYBOARD.KEYRIGHT:
            padding.isright = true;
            break;
        case PARAMETERKEYBOARD.SPACE:
            ball.start=true;
            break;
        default:
            break;
    }
}

document.addEventListener('keyup', onKeyup);
document.addEventListener('keydown', onKeydown);

function playGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    padding.draw(ctx);
    padding.move();
    ball.draw(ctx);
    ball.move(padding);
    window.requestAnimationFrame(playGame);
}

playGame();
