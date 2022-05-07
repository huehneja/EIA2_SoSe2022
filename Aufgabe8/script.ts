/*
Aufgabe: Aufgabe 08 GenerativeKunst
Name: Jason Hühne
Matrikel: 269665
Datum: 07.05.2022
Quellen: /
*/
namespace GenerativeKunst {

window.addEventListener("load", hndLoad);
function hndLoad(_event: Event): void {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext("2d");
    drawBackground();
    for (let i: number = 0; i <= Math.floor(Math.random() * 200); i++) {
    drawCircle();
    drawRect();
    drawCurve();
    drawLine();
    }
    function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, crc2.canvas.width, crc2.canvas.height);

        gradient.addColorStop(0, `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`);
        gradient.addColorStop(Math.random(), `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`);
        gradient.addColorStop(1, `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`);

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawCircle(): void {
        crc2.strokeStyle = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
        crc2.beginPath();
        crc2.ellipse(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 100, Math.random() *  75, Math.random() *  Math.PI, 0, 2 * Math.PI);
        crc2.stroke();
    }
    function drawRect(): void {
        crc2.strokeStyle = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
        crc2.beginPath();
        crc2.rect(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 100, Math.random() *  75);
        crc2.stroke();
    }
    function drawCurve(): void {
        crc2.strokeStyle = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
        crc2.moveTo(Math.random() * canvas.width, 0);
        crc2.quadraticCurveTo(Math.random() * canvas.width, canvas.height, Math.random() * canvas.width, canvas.height);
        crc2.stroke();

    }
    function drawLine(): void {
        crc2.strokeStyle = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
        crc2.moveTo(Math.random() * canvas.width, 0);
        crc2.lineTo(Math.random() * canvas.width, canvas.height);
        crc2.stroke();

    }

}}