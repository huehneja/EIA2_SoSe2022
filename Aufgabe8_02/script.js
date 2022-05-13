"use strict";
/*
Aufgabe: Aufgabe 08.02 Strand: Canvas
Name: Jason Hühne
Matrikel: 269665
Datum: 13.05.2022
Quellen: /
*/
var StrandCanvas;
(function (StrandCanvas) {
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        drawHorizon();
        drawSun();
        drawWater();
        drawBeach();
        function drawHorizon() {
            var grad = crc2.createRadialGradient(500, 300, 0, 500, 320, 684.98);
            grad.addColorStop(0, "rgba(212, 182, 0, 1)");
            grad.addColorStop(0.05, "rgba(212, 182, 0, 1)");
            grad.addColorStop(0.1, "rgba(94, 13, 0)");
            crc2.fillStyle = grad;
            crc2.beginPath();
            crc2.fillRect(0, 0, canvas.width, 480);
        }
        function drawWater() {
            var grad = crc2.createRadialGradient(500, 250, 0, 500, 320, 684.98);
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
        function drawSun() {
            crc2.fillStyle = "rgba(212, 182, 0, 1)";
            crc2.ellipse(500, 300, 50, 50, Math.PI, 0, 2 * Math.PI);
            crc2.fill();
        }
        function drawBeach() {
            crc2.fillStyle = "#c2b280";
            crc2.beginPath();
            crc2.moveTo(0, 500);
            crc2.quadraticCurveTo(500, 600, 1000, 500);
            crc2.lineTo(1000, 800);
            crc2.lineTo(0, 800);
            crc2.closePath();
            crc2.fill();
        }
    }
})(StrandCanvas || (StrandCanvas = {}));
//# sourceMappingURL=script.js.map