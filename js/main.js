const PARAMETERKEYBOARD = {
    KEYLEFT: 37,
    KEYRIGHT: 39,
    SPACE: 32,
    ESC: 27
};
let Temp = {
    ballSpeed: 0,
    paddingSpeed: 0,
    reverseTime: 0,
    survivalTime: 0,
};
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let padding = new Padding();
let ball = new Ball();
let brickWall = new BrickWall();
let noticeBoard = new NoticeBoard();
let time = new Time();
let text = new Text();
let gameStart = false;
let isFirstStart = true;
let isPause = false;
let paraIsSave = false;
let isGameOver = false;
let timeIsSave = false;

// function init() {
//     localStorage.display += "resultTime:" + localStorage.timeResult + "\n";
//     console.log(localStorage.display);
//     let player = null;
//     while (player === null || player === "" || player === " ") {
//         player = prompt("Please enter your nickname. I just want to know how many people play my game:) ");
//         if (player === "clearAllData") {
//             resetLocalStorage();
//             alert("clear!!!");
//             player = null;
//         }
//     }
//
//     if (typeof (Storage) !== "undefined") {
//         localStorage.countPlay = Number(localStorage.countPlay) + 1;
//         localStorage.display = localStorage.display + "player name :" + player +
//             " no." + localStorage.countPlay;
//     }
// }

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
            ball.start = true;
            break;
        case PARAMETERKEYBOARD.ESC:
            isPause = true;
            break;
        default:
            break;
    }
}

document.addEventListener('keyup', onKeyup);
document.addEventListener('keydown', onKeydown);

function playGame() {
    if (gameStart && isFirstStart) {
        if (isPause) {
            noticeBoard.pauseGame();
        } else {
            paraIsSave = false;
            if (ball.speed === 0 || padding.speed === 0) {
                ball.speed = Temp.ballSpeed;
                padding.speed = Temp.paddingSpeed;
                time.reverse = Temp.reverseTime;
                time.survival = Temp.survivalTime;
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            text.draw(ctx);
            padding.draw(ctx);
            padding.move();
            ball.draw(ctx);
            ball.move();
            if (brickWall.isChange) {
                creatRandomBricks();
                brickWall.isChange = false;
            }
            brickWall.draw(ctx);
            time.check();
            ball.restart();

        }
    } else {
        if (isGameOver) {
            noticeBoard.gameOver();
        } else {
            noticeBoard.draw(ctx);
            noticeBoard.action();
            text.start(ctx);
        }
    }
    window.requestAnimationFrame(playGame);
}

function resetLocalStorage() {
    localStorage.display = '';
    localStorage.highScore = 0;
    localStorage.timeResult = 0;
    localStorage.countPlay = 0;
}

// init();
playGame();
