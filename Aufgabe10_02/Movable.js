"use strict";
var StrandCanvas;
(function (StrandCanvas) {
    class Movable {
        position;
        velocity;
        constructor(_x, _y, _velX, _velY) {
            let position = new StrandCanvas.Vector(_x, _y);
            this.position = position;
            let velocity = new StrandCanvas.Vector(_velX, _velY);
            this.velocity = velocity;
        }
        draw() {
            return;
        }
        move() {
            return;
        }
    }
    StrandCanvas.Movable = Movable;
})(StrandCanvas || (StrandCanvas = {}));
//# sourceMappingURL=Movable.js.map