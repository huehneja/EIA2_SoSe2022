"use strict";
/*
Aufgabe: Aufgabe 08 GenerativeKunst
Name: Jason Hühne
Matrikel: 269665
Datum: 07.05.2022
Quellen: /
*/
var GenerativeKunst;
(function (GenerativeKunst) {
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        drawBackground();
        for (let i = 0; i <= Math.floor(Math.random() * 50); i++) {
            crc2.lineWidth = Math.floor(Math.random() * 5);
            drawCircle();
            drawRect();
            drawCurve();
            drawLine();
        }
    }
    function drawBackground() {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        let gradient = crc2.createLinearGradient(0, 0, crc2.canvas.width, crc2.canvas.height);
        gradient.addColorStop(0, `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`);
        gradient.addColorStop(Math.random(), `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`);
        gradient.addColorStop(1, `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`);
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawCircle() {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        crc2.strokeStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        crc2.beginPath();
        crc2.ellipse(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * canvas.width, Math.random() * canvas.width, Math.random() * Math.PI, 0, 2 * Math.PI);
        crc2.stroke();
    }
    function drawRect() {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        crc2.strokeStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        crc2.beginPath();
        crc2.rect(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * canvas.height, Math.random() * canvas.width);
        crc2.stroke();
    }
    function drawCurve() {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        crc2.strokeStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        crc2.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        crc2.quadraticCurveTo(Math.random() * canvas.width, canvas.height, Math.random() * canvas.width, Math.random() * canvas.height);
        crc2.stroke();
    }
    function drawLine() {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        crc2.strokeStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        crc2.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        crc2.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        crc2.stroke();
    }
})(GenerativeKunst || (GenerativeKunst = {}));
//# sourceMappingURL=script.js.map