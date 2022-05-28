namespace StrandCanvas {
    
    export class Person {
    position: Vector;
    velocity: Vector;
    color: string;
    right: boolean;
    constructor(_x: number, _y: number, _velX: number, _velY: number) {
        let position: Vector = new Vector(_x, _y)
        this.position = position;
        let velocity: Vector = new Vector(_velX, _velY)
        this.velocity = velocity;
        this.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        this.right = true;
    }
    draw(): void {
        crc2.save();
        crc2.translate(this.position.x, this.position.y);
        if (this.right == true) {
            crc2.scale(-1, 1);
        }
        crc2.fillStyle = this.color;
        crc2.rotate(Math.PI);
        crc2.beginPath();
        crc2.moveTo(6, 0);
        crc2.lineTo(12, 0);
        crc2.lineTo(12, 6);
        crc2.lineTo(18, 6);
        crc2.lineTo(18, 0);
        crc2.lineTo(24, 0);
        crc2.lineTo(24, 30);
        crc2.lineTo(6, 30);
        crc2.lineTo(6, 24);
        crc2.lineTo(0, 24);
        crc2.lineTo(0, 12);
        crc2.lineTo(6, 12);
        crc2.closePath();
        crc2.fill();
    
        crc2.fillStyle = `lightblue`;
        crc2.beginPath();
        crc2.rect(12, 18, 12 , 6);
        crc2.fill();
        crc2.restore();
    }
    move(): void {
        if (this.position.y > crc2.canvas.height) {
            this.velocity.y = -this.velocity.y;
        }
        if (this.position.y < crc2.canvas.height * 0.65 ) {
            this.velocity.y = Math.abs(this.velocity.y);
        }
        if (this.position.x > crc2.canvas.width){
            this.velocity.x = -this.velocity.x;
            this.right = false;
        }
        if (this.position.x < 0){
            this.velocity.x = Math.abs(this.velocity.x);
            this.right = true;
        }
        let offset: Vector = this.velocity;
        this.position.add(offset);
    }
}
}