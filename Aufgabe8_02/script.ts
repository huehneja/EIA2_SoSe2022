/*
Aufgabe: Aufgabe 08.02 Strand: Canvas
Name: Jason Hühne
Matrikel: 269665
Datum: 13.05.2022
Quellen: Die Wolken habe ich von Manuel kopiert
*/
namespace StrandCanvas { 
window.addEventListener("load", hndLoad);
function hndLoad(_event: Event): void {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext("2d");
    drawHorizon();
    drawSun();
    drawWater();
    drawBeach();
    drawClouds(200, 200);
    drawClouds(700, 150);
    for (let i: number = 0; i <= 6; i++) {    
        drawPerson(30 + Math.random() * 940 , 550 + Math.random() * 250);
        }
    for (let i: number = 0; i <= 2; i++) {    
        drawBird(70 + Math.random() * 930 , 512 - Math.random()* 288);
    }
    function drawHorizon(): void {

        var grad: CanvasGradient = crc2.createRadialGradient(500, 300, 0, 500, 320, 684.98);
        grad.addColorStop(0, "rgba(212, 182, 0, 1)");
        grad.addColorStop(0.05, "rgba(212, 182, 0, 1)");
        grad.addColorStop(0.1, "rgba(94, 13, 0)");
        crc2.fillStyle = grad;
        crc2.beginPath();
        crc2.fillRect(0, 0, canvas.width, 480);
    }
    function drawWater(): void {
        var grad: CanvasGradient = crc2.createRadialGradient(500, 250, 0, 500, 320, 684.98);
        grad.addColorStop(0, "rgba(212, 182, 0, 1)");
        grad.addColorStop(0.05, "rgba(212, 182, 0, 1)");
        grad.addColorStop(0.2, "rgba(71, 1, 20)");
        crc2.fillStyle = grad;
        crc2.beginPath();
        crc2.moveTo(0, 320);
        crc2.quadraticCurveTo(500, 310, 1000, 320);
        crc2.lineTo(1000, 800);
        crc2.lineTo(0, 800);
        crc2.closePath();
        crc2.fill();
}
    function drawSun(): void {
        crc2.fillStyle = "rgba(212, 182, 0, 1)";
        crc2.ellipse(500, 300, 50, 50, Math.PI, 0, 2 * Math.PI );
        crc2.fill();
    }
    function drawBeach(): void {
        crc2.fillStyle = "#c2b280";
        crc2.beginPath();
        crc2.moveTo(0, 500);
        crc2.quadraticCurveTo(500, 600, 1000, 500);
        crc2.lineTo(1000, 800);
        crc2.lineTo(0, 800);
        crc2.closePath();
        crc2.fill();
    }
    function drawClouds(_x: number, _y: number): void {
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
        crc2.save();
        crc2.translate(_x, _y);
        if (Math.floor(Math.random() * 2) == 1) {
        crc2.scale(-1, 1);}
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
        crc2.save();
        crc2.strokeStyle = "white";
        crc2.fillStyle = "white";
        crc2.lineWidth = 6;
        crc2.translate(_x, _y);
        crc2.rotate(Math.PI);
        crc2.beginPath();
        crc2.moveTo(-10, -10)
        crc2.quadraticCurveTo(17, 10, 30, 0);
        crc2.stroke();
        crc2.beginPath();
        crc2.ellipse(30, 0, 10, 8, 0, 0, 2 * Math.PI);
        crc2.fill();
        crc2.moveTo(30, 0)
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
}