"use strict";
var StrandCanvas;
(function (StrandCanvas) {
    class Cloud {
        position;
        velocity;
        constructor(_x, _y, _velocity) {
            let position = new StrandCanvas.Vector(_x, _y);
            this.position = position;
            let velocity = new StrandCanvas.Vector(_velocity, 0);
            this.velocity = velocity;
        }
        draw() {
            let canvas = document.querySelector("canvas");
            let crc2 = canvas.getContext("2d");
            crc2.fillStyle = "rgba(255, 255, 255, 0.5)";
            crc2.beginPath();
            crc2.arc(this.position.x + 10, this.position.y + 30, 25, 0, 2 * Math.PI);
            crc2.arc(this.position.x + 80, this.position.y + 30, 40, 0, 2 * Math.PI);
            crc2.arc(this.position.x + 50, this.position.y + 20, 35, 0, 2 * Math.PI);
            crc2.arc(this.position.x + 100, this.position.y + 40, 25, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }
        move() {
            let offset = this.velocity;
            this.position.add(offset);
            if (this.position.x > StrandCanvas.crc2.canvas.width + 50) {
                this.position.set(-150, this.position.y);
            }
            if (this.position.x < -150) {
                this.position.set(StrandCanvas.crc2.canvas.width + 50, this.position.y);
            }
        }
    }
    StrandCanvas.Cloud = Cloud;
})(StrandCanvas || (StrandCanvas = {}));
//# sourceMappingURL=Cloud.js.map