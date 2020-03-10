function drawRec(ctx, x, y, width, height, color) {
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
