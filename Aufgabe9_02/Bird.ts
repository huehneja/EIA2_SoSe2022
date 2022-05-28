namespace StrandCanvas {
    export class Bird {
    position: Vector;
    velocity: Vector;
    constructor(_x: number, _y: number, _velX: number, _velY: number) {
        let position: Vector = new Vector(_x, _y)
        this.position = position;
        let velocity: Vector = new Vector(_velX, _velY)
        this.velocity = velocity;
    }
    draw(): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext("2d");
        let offset: Vector = new Vector (this.position.x, this.position.y)
        crc2.save();
        crc2.strokeStyle = "white";
        crc2.fillStyle = "white";
        crc2.lineWidth = 6;
        crc2.translate(offset.x, offset.y);
        crc2.rotate(Math.PI);
        crc2.beginPath();
        crc2.moveTo(-10, -10);
        crc2.quadraticCurveTo(17, 10, 30, 0);
        crc2.stroke();
        crc2.beginPath();
        crc2.ellipse(30, 0, 10, 8, 0, 0, 2 * Math.PI);
        crc2.fill();
        crc2.moveTo(30, 0);
        crc2.quadraticCurveTo(43, 10, 70, -10);
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = "orange";
        crc2.moveTo(30, -10);
        crc2.lineTo(27, 3);
        crc2.lineTo(33, 3);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
        
    }
    move(): void {
    if (this.position.y > crc2.canvas.height){
        this.velocity.y = -this.velocity.y;
    }
    if (this.position.y < 0 ){
        this.velocity.y = Math.abs(this.velocity.y);
    }
    if (this.position.x > crc2.canvas.width){
        this.velocity.x = -this.velocity.x;
    }
    if (this.position.x < 0){
        this.velocity.x = Math.abs(this.velocity.x);
    }
    let offset: Vector = this.velocity;
    this.position.add(offset);

    }
}
}