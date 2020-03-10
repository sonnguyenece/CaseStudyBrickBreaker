this.impactPadding = function (padding) {
    if (this.isUp === false) {
        if (padding.y === (this.y + this.radius)
            && this.x >= padding.x - 2 * padding.radiusSide
            && this.x <= (padding.x + padding.width + 2 * padding.radiusSide)) {
            if (this.x <= padding.x) {
                if (this.isRight) {
                    this.isRight = false;
                    this.angle -= 10;
                } else {
                    // this.isRight = true;
                    this.angle -= 20;
                }
            }
            if (x >= padding.x + padding.width) {
                if (this.isRight) {
                    // this.isRight = false;
                    this.angle -= 20;
                } else {
                    this.isRight = true;
                    this.angle -= 10;
                }
                this.isUp = true;
            }
        }
    }