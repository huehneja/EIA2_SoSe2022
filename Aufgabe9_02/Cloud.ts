namespace StrandCanvas {
    
    export class Cloud {
    position: Vector;
    velocity: Vector;
    constructor(_x: number, _y: number, _velocity: number) {
        let position: Vector = new Vector(_x, _y)
        this.position = position;
        let velocity: Vector = new Vector (_velocity, 0);
        this.velocity = velocity;
    }
    draw(): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext("2d");
        crc2.fillStyle = "rgba(255, 255, 255, 0.5)";
        crc2.beginPath();
        crc2.arc(this.position.x + 10, this.position.y + 30, 25, 0, 2 * Math.PI);
        crc2.arc(this.position.x + 80, this.position.y + 30, 40, 0, 2 * Math.PI);
        crc2.arc(this.position.x + 50, this.position.y + 20, 35, 0, 2 * Math.PI);
        crc2.arc(this.position.x + 100, this.position.y + 40, 25, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        
    }
    move(): void {
        let offset: Vector = this.velocity;
        this.position.add(offset);
        if (this.position.x > crc2.canvas.width + 50) {
            this.position.set(-150, this.position.y);
        }
        if (this.position.x < - 150) {
            this.position.set(crc2.canvas.width + 50, this.position.y);
        }
    }
}
}