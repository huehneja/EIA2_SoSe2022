/*
Aufgabe: Aufgabe 08.02 Strand: Canvas
Name: Jason Hühne
Matrikel: 269665
Datum: 14.05.2022
Quellen: Die Wolken habe ich von Manuel kopiert
*/
namespace StrandCanvas { 
export let crc2: CanvasRenderingContext2D;
window.addEventListener("load", hndLoad);
function hndLoad(_event: Event): void {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    crc2 = <CanvasRenderingContext2D> canvas.getContext("2d");
    let animatedObjects: Movable [] = [];
    crc2.canvas.width  = window.innerWidth - 4;
    crc2.canvas.height = window.innerHeight - 4;
    drawHorizon(canvas.width, 0.4 * canvas.height);
    drawSun(0.5 * canvas.width, 0.4 * canvas.height );
    drawWater(canvas.width, 0.4 * canvas.height );
    drawBeach(canvas.width, 0.6 * canvas.height);
    animateObjects();
    let imgData: ImageData = crc2.getImageData (0, 0, canvas.width, canvas.height);
    
    function animateObjects(): void {
    createCloud(canvas.width * 0.3 , canvas.height * 0.3, -0.5, 0);
    createCloud(canvas.width * 0.9 , canvas.height * 0.4, -0.3, 0);
    createCloud(canvas.width * 0.7 , canvas.height * 0.2, 0.6, 0);
    createCloud(canvas.width * 0.1 , canvas.height * 0.1, 0.4, 0);
    createBird(canvas.width * 0.2, canvas.height * 0.1, 5, 5);
    createBird(canvas.width * 0.8, canvas.height * 0.6, 10, 10);
    createBird(canvas.width * Math.random(), canvas.height * Math.random(), Math.random() * 10, Math.random() * 10);
    for (let i: number = 0; i < 10; i++){
        createPerson(canvas.width * Math.random(), canvas.height * 0.7 + Math.random() * canvas.height * 0.3, Math.random() * 5, Math.random() * 5);
    }
    requestAnimationFrame(frame);
    function frame(): void {
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        crc2.putImageData (imgData, 0, 0);
        for (let i: number = 0; i < animatedObjects.length; i++) {
            animatedObjects[i].draw;
            animatedObjects[i].move;
        }
        requestAnimationFrame(frame);
    }

    }
    function drawHorizon(_x: number, _y: number): void {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext("2d");
    var grad: CanvasGradient = crc2.createRadialGradient(0.5 * _x, _y, 0, 0.5 * _x, _y, 700);
    grad.addColorStop(0, "rgba(212, 182, 0, 1)");
    grad.addColorStop(0.05, "rgba(212, 182, 0, 1)");
    grad.addColorStop(0.1, "rgba(94, 13, 0)");
    crc2.fillStyle = grad;
    crc2.beginPath();
    crc2.fillRect(0, 0, _x, _y);
    }
    function drawWater(_x: number, _y: number): void {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext("2d");
    var grad: CanvasGradient = crc2.createRadialGradient(0.5 * _x, 0.75 * _y , 0, 0.5 * _x, _y, 684.98);
    grad.addColorStop(0, "rgba(212, 182, 0, 1)");
    grad.addColorStop(0.05, "rgba(212, 182, 0, 1)");
    grad.addColorStop(0.20, "rgba(71, 1, 20)");
    crc2.fillStyle = grad;
    crc2.beginPath();
    crc2.moveTo(0, _y);
    crc2.quadraticCurveTo(0.5 * _x, _y - 0.016 * _y, _x, _y);
    crc2.lineTo(_x, canvas.height);
    crc2.lineTo(0, canvas.height);
    crc2.closePath();
    crc2.fill();
}
    function drawSun(_x: number, _y: number): void {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext("2d");
    crc2.fillStyle = "rgba(212, 182, 0, 1)";
    crc2.ellipse(_x, _y, 50, 50, Math.PI, 0, 2 * Math.PI );
    crc2.fill();
    }
    function drawBeach(_x: number, _y: number): void {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext("2d");
    crc2.fillStyle = "#c2b280";
    crc2.beginPath();
    crc2.moveTo(0, _y);
    crc2.quadraticCurveTo(0.5 * _x, _y + 0.2 * _y, _x, _y);
    crc2.lineTo(_x, canvas.height);
    crc2.lineTo(0, canvas.height);
    crc2.closePath();
    crc2.fill();
    }

    function createPerson(_x: number, _y: number, _velX: number, _velY: number): void {
    let person: Movable = new Person(_x, _y, _velX, _velY);
    animatedObjects.push(person);
    }
    function createBird(_x: number, _y: number, _velX: number, _velY: number): void {
    let bird: Movable = new Bird(_x, _y, _velX, _velY);
    animatedObjects.push(bird);
    }
    function createCloud(_x: number, _y: number, _velX: number, _velY: number): void {
    let cloud: Movable = new Cloud(_x, _y, _velX, _velY);
    animatedObjects.push(cloud);
    }
}
}