/*
Aufgabe: Aufgabe 08.02 Strand: Canvas
Name: Jason Hühne
Matrikel: 269665
Datum: 14.05.2022
Quellen: Die Wolken habe ich von Manuel kopiert
*/
namespace StrandCanvas { 
window.addEventListener("load", hndLoad);
function hndLoad(_event: Event): void {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext("2d");
    crc2.canvas.width  = window.innerWidth - 4;
    crc2.canvas.height = window.innerHeight - 4;
    drawHorizon(canvas.width, 0.4 * canvas.height);
    drawSun(0.5 * canvas.width, 0.4 * canvas.height );
    drawWater(canvas.width, 0.4 * canvas.height );
    drawBeach(canvas.width, 0.6 * canvas.height);
    drawClouds(0.2 * canvas.width, 0.3 * canvas.height);
    drawClouds(0.7 * canvas.width, 0.3 * canvas.height);
    for (let i: number = 0; i <= 6; i++) {    
        drawPerson(24 + Math.random() * (canvas.width - 48) , 0.7 * canvas.height + Math.random() * 0.3 * canvas.height);
        }
    for (let i: number = 0; i <= 2; i++) {    
        drawBird(60 + Math.random() * (canvas.width - 120) , Math.random() * 0.6 * canvas.height);
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
function drawClouds(_x: number, _y: number): void {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext("2d");
    crc2.fillStyle = "rgba(255, 255, 255, 0.5)";
    crc2.beginPath();
    crc2.arc(_x + 10, _y + 30, 25, 0, 2 * Math.PI);
    crc2.arc(_x + 80, _y + 30, 40, 0, 2 * Math.PI);
    crc2.arc(_x + 50, _y + 20, 35, 0, 2 * Math.PI);
    crc2.arc(_x + 100, _y + 40, 25, 0, 2 * Math.PI);
    crc2.closePath();
    crc2.fill();
    }
function drawPerson(_x: number, _y: number): void {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext("2d");
    crc2.save();
    crc2.translate(_x, _y);
    if (Math.floor(Math.random() * 2) == 1) {
        crc2.scale(-1, 1); }
    crc2.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
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
function drawBird(_x: number, _y: number): void {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext("2d");
    crc2.save();
    crc2.strokeStyle = "white";
    crc2.fillStyle = "white";
    crc2.lineWidth = 6;
    crc2.translate(_x, _y);
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
}
