function drawRec(ctx, x, y, width, height, color) {
    // ctx.shadowOffsetX=0;
    // ctx.shadowOffsetY=0;
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}


function drawCir(ctx, x, y, radius, color, clockwise) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, clockwise);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function drawArc(ctx, x, y, radius, color, startAngle, endAngle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function drawTriangle(ctx, x1, y1, x2, y2, x3, y3, color) {
    ctx.beginPath();
    ctx.shadowOffsetX=0;
    ctx.shadowOffsetY=0;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.shadowOffsetX=shadowPointX;
    ctx.shadowOffsetY=shadowPointY;
    ctx.closePath()
}

function drawArcStroke(ctx, x, y, radius, color, startAngle, endAngle)
{
    ctx.beginPath();
    ctx.shadowOffsetX=0;
    ctx.shadowOffsetY=0;
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.strokeStyle = color;
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.shadowOffsetX=shadowPointX;
    ctx.shadowOffsetY=shadowPointY;
    ctx.closePath();

}

function drawRecAndShadow(ctx, x, y, width, height, color,shadowSize) {
    ctx.beginPath();
    ctx.shadowOffsetX = shadowPointX;
    ctx.shadowOffsetY = shadowPointY;
    ctx.shadowBlur = shadowSize;
    ctx.clearRect(x, y, width, height);
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.shadowColor = "rgba(0,0,0,0.45)";
    ctx.closePath();
    ctx.shadowOffsetX=0;
    ctx.shadowOffsetY=0;
}

