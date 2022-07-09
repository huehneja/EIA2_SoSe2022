"use strict";
var StrandCanvas;
(function (StrandCanvas) {
    class Person {
        position;
        velocity;
        color;
        right;
        constructor(_x, _y, _velX, _velY) {
            let position = new StrandCanvas.Vector(_x, _y);
            this.position = position;
            let velocity = new StrandCanvas.Vector(_velX, _velY);
            this.velocity = velocity;
            this.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
            this.right = true;
        }
        draw() {
            StrandCanvas.crc2.save();
            StrandCanvas.crc2.translate(this.position.x, this.position.y);
            if (this.right == true) {
                StrandCanvas.crc2.scale(-1, 1);
            }
            StrandCanvas.crc2.fillStyle = this.color;
            StrandCanvas.crc2.rotate(Math.PI);
            StrandCanvas.crc2.beginPath();
            StrandCanvas.crc2.moveTo(6, 0);
            StrandCanvas.crc2.lineTo(12, 0);
            StrandCanvas.crc2.lineTo(12, 6);
            StrandCanvas.crc2.lineTo(18, 6);
            StrandCanvas.crc2.lineTo(18, 0);
            StrandCanvas.crc2.lineTo(24, 0);
            StrandCanvas.crc2.lineTo(24, 30);
            StrandCanvas.crc2.lineTo(6, 30);
            StrandCanvas.crc2.lineTo(6, 24);
            StrandCanvas.crc2.lineTo(0, 24);
            StrandCanvas.crc2.lineTo(0, 12);
            StrandCanvas.crc2.lineTo(6, 12);
            StrandCanvas.crc2.closePath();
            StrandCanvas.crc2.fill();
            StrandCanvas.crc2.fillStyle = `lightblue`;
            StrandCanvas.crc2.beginPath();
            StrandCanvas.crc2.rect(12, 18, 12, 6);
            StrandCanvas.crc2.fill();
            StrandCanvas.crc2.restore();
        }
        move() {
            if (this.position.y > StrandCanvas.crc2.canvas.height) {
                this.velocity.y = -this.velocity.y;
            }
            if (this.position.y < StrandCanvas.crc2.canvas.height * 0.65) {
                this.velocity.y = Math.abs(this.velocity.y);
            }
            if (this.position.x > StrandCanvas.crc2.canvas.width) {
                this.velocity.x = -this.velocity.x;
                this.right = false;
            }
            if (this.position.x < 0) {
                this.velocity.x = Math.abs(this.velocity.x);
                this.right = true;
            }
            let offset = this.velocity;
            this.position.add(offset);
        }
    }
    StrandCanvas.Person = Person;
})(StrandCanvas || (StrandCanvas = {}));
//# sourceMappingURL=Person.js.map