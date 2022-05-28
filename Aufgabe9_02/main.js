"use strict";
/*
Aufgabe: Aufgabe 08.02 Strand: Canvas
Name: Jason Hühne
Matrikel: 269665
Datum: 14.05.2022
Quellen: Die Wolken habe ich von Manuel kopiert
*/
var StrandCanvas;
(function (StrandCanvas) {
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        let canvas = document.querySelector("canvas");
        StrandCanvas.crc2 = canvas.getContext("2d");
        let clouds = [];
        let birds = [];
        let persons = [];
        StrandCanvas.crc2.canvas.width = window.innerWidth - 4;
        StrandCanvas.crc2.canvas.height = window.innerHeight - 4;
        drawHorizon(canvas.width, 0.4 * canvas.height);
        drawSun(0.5 * canvas.width, 0.4 * canvas.height);
        drawWater(canvas.width, 0.4 * canvas.height);
        drawBeach(canvas.width, 0.6 * canvas.height);
        animateObjects();
        let imgData = StrandCanvas.crc2.getImageData(0, 0, canvas.width, canvas.height);
        function animateObjects() {
            createCloud(canvas.width * 0.3, canvas.height * 0.3, -0.5);
            createCloud(canvas.width * 0.9, canvas.height * 0.4, -0.3);
            createCloud(canvas.width * 0.7, canvas.height * 0.2, 0.6);
            createCloud(canvas.width * 0.1, canvas.height * 0.1, 0.4);
            createBird(canvas.width * 0.2, canvas.height * 0.1, 5, 5);
            createBird(canvas.width * 0.8, canvas.height * 0.6, 10, 10);
            createBird(canvas.width * Math.random(), canvas.height * Math.random(), Math.random() * 10, Math.random() * 10);
            for (let i = 0; i < 10; i++) {
                createPerson(canvas.width * Math.random(), canvas.height * 0.7 + Math.random() * canvas.height * 0.3, Math.random() * 5, Math.random() * 5);
            }
            requestAnimationFrame(frame);
            function frame() {
                StrandCanvas.crc2.clearRect(0, 0, canvas.width, canvas.height);
                StrandCanvas.crc2.putImageData(imgData, 0, 0);
                for (let i = 0; i < clouds.length; i++) {
                    clouds[i].move();
                    clouds[i].draw();
                }
                for (let i = 0; i < birds.length; i++) {
                    birds[i].move();
                    birds[i].draw();
                }
                for (let i = 0; i < persons.length; i++) {
                    persons[i].move();
                    persons[i].draw();
                }
                requestAnimationFrame(frame);
            }
        }
        function drawHorizon(_x, _y) {
            let canvas = document.querySelector("canvas");
            let crc2 = canvas.getContext("2d");
            var grad = crc2.createRadialGradient(0.5 * _x, _y, 0, 0.5 * _x, _y, 700);
            grad.addColorStop(0, "rgba(212, 182, 0, 1)");
            grad.addColorStop(0.05, "rgba(212, 182, 0, 1)");
            grad.addColorStop(0.1, "rgba(94, 13, 0)");
            crc2.fillStyle = grad;
            crc2.beginPath();
            crc2.fillRect(0, 0, _x, _y);
        }
        function drawWater(_x, _y) {
            let canvas = document.querySelector("canvas");
            let crc2 = canvas.getContext("2d");
            var grad = crc2.createRadialGradient(0.5 * _x, 0.75 * _y, 0, 0.5 * _x, _y, 684.98);
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
        function drawSun(_x, _y) {
            let canvas = document.querySelector("canvas");
            let crc2 = canvas.getContext("2d");
            crc2.fillStyle = "rgba(212, 182, 0, 1)";
            crc2.ellipse(_x, _y, 50, 50, Math.PI, 0, 2 * Math.PI);
            crc2.fill();
        }
        function drawBeach(_x, _y) {
            let canvas = document.querySelector("canvas");
            let crc2 = canvas.getContext("2d");
            crc2.fillStyle = "#c2b280";
            crc2.beginPath();
            crc2.moveTo(0, _y);
            crc2.quadraticCurveTo(0.5 * _x, _y + 0.2 * _y, _x, _y);
            crc2.lineTo(_x, canvas.height);
            crc2.lineTo(0, canvas.height);
            crc2.closePath();
            crc2.fill();
        }
        function createPerson(_x, _y, _velX, _velY) {
            let person = new StrandCanvas.Person(_x, _y, _velX, _velY);
            persons.push(person);
        }
        function createBird(_x, _y, _velX, _velY) {
            let bird = new StrandCanvas.Bird(_x, _y, _velX, _velY);
            birds.push(bird);
        }
        function createCloud(_x, _y, _velX) {
            let cloud = new StrandCanvas.Cloud(_x, _y, _velX);
            clouds.push(cloud);
        }
    }
})(StrandCanvas || (StrandCanvas = {}));
//# sourceMappingURL=main.js.map