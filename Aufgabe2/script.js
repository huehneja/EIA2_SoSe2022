"use strict";
/*
Aufgabe: Aufgabe 1.03 EventInspector
Name: Jason Hühne
Matrikel: 269665
Datum: 01.04.2022
Quellen: Habe mit Richard zusammengearbeitet
*/
var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        let div1 = document.querySelector("#div1");
        let div2 = document.querySelector("#div2");
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        div1.addEventListener("click", logInfo);
        div2.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        document.addEventListener("keyup", logInfo);
        div1.addEventListener("keyup", logInfo);
        div2.addEventListener("keyup", logInfo);
        document.body.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        let span = document.querySelector("span");
        let posX = `${_event.clientX}`;
        let posY = `${_event.clientY}`;
        span.innerHTML = `X: ${posX}, Y: ${posY}, ${_event.target}`;
        let posXoffset = 10 + _event.clientX;
        let posYoffset = 10 + _event.clientY;
        span.style.left = `${posXoffset}px`;
        span.style.top = `${posYoffset}px`;
    }
    function logInfo(_event) {
        console.log("Event Type: ", _event.type);
        console.log("Event Target: ", _event.target);
        console.log("Current Target: ", _event.currentTarget);
        console.log("Event Object: ", _event);
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=script.js.map