"use strict";
/*
Aufgabe: Aufgabe 03 MemorySettings
Name: Jason Hühne
Matrikel: 269665
Datum: 23.04.2022
Quellen: /
*/
var MemorySettings;
(function (MemorySettings) {
    window.addEventListener("load", hndLoad);
    let settings = [];
    let memorySet = ["25", "24", "23", "22", "21", "20", "19", "18", "17", "16", "15", "14", "13", "12", "11", "10", "09", "08", "07", "06", "05", "04", "03", "02", "01"];
    let isFirstCard = true;
    let turnEnded = false;
    let endCondition = 0;
    let timeStarted = 0;
    function hndLoad(_event) {
        let submitButton = document.getElementById("submit");
        submitButton.addEventListener("click", hndSubmit);
        submitButton.addEventListener("touchend", hndSubmit);
    }
    function hndSubmit(_event) {
        let formdata = new FormData(document.forms[0]);
        let form = document.querySelector("form");
        for (let value of formdata.values())
            settings.push(value);
        form.style.display = "none";
        startMemory(settings[0], settings[1], settings[2], settings[3], settings[4], settings[5]);
    }
    function startMemory(pairAmount, cardSize, bgColor, fontColor, cardColor, font) {
        timeStarted = Date.now();
        endCondition = parseInt(`${pairAmount}`);
        memorySet.splice(0, (parseInt(`${pairAmount}`) - memorySet.length) * -1);
        let memorySetPairs = memorySet;
        let wrapper = document.getElementById("wrapper");
        for (let i = parseInt(`${pairAmount}`); i >= 1; i--) {
            memorySet.push(memorySetPairs[i - 1]);
        }
        for (let i = 0; i < 1337; i++) {
            let loc1 = Math.floor((Math.random() * memorySet.length));
            let loc2 = Math.floor((Math.random() * memorySet.length));
            let position = memorySet[loc1];
            memorySet[loc1] = memorySet[loc2];
            memorySet[loc2] = position;
        }
        for (let i = 0; i < memorySet.length; i++) {
            let card = document.createElement("div");
            let size = parseFloat(`${cardSize}`) * (150 - parseInt(`${pairAmount}`));
            let background = document.body;
            wrapper.appendChild(card);
            card.style.height = `${size}px`;
            card.style.width = `${size}px`;
            card.style.lineHeight = `${size}px`;
            background.style.backgroundColor = `${bgColor}`;
            card.style.color = `${fontColor}`;
            card.style.backgroundColor = `${cardColor}`;
            card.style.fontFamily = `${font}`;
            card.addEventListener("click", function () { if (!turnEnded) {
                hndChange(i, card);
            } });
        }
        const myInterval = setInterval(endTimer, 200);
        function endTimer() { if (endCondition == 0) {
            clearInterval(myInterval);
            endGame();
        } }
        function endGame() {
            let form = document.querySelector("form");
            alert(`Du hast Gewonnen in ${Math.floor((Date.now() - timeStarted)) / 1000} Sekunden`);
            wrapper.replaceChildren();
            memorySet = ["25", "24", "23", "22", "21", "20", "19", "18", "17", "16", "15", "14", "13", "12", "11", "10", "09", "08", "07", "06", "05", "04", "03", "02", "01"];
            form.style.display = "inline";
        } //Ich habe hier testweise noch hinzugefügt, dass das Spiel wieder von vorne startet, wenn es gewonnen wurde, steht nicht in meinem AD drin
    }
    let firstCard = { value: "", position: document.querySelector("body") };
    function hndChange(_i, _card) {
        function endTurn() {
            turnEnded = true;
            setTimeout(function () { turnEnded = false; }, 2000);
            if (firstCard.position.innerHTML != memorySet[_i]) {
                setTimeout(function () {
                    let m = 25;
                    let o = 4;
                    let id = setInterval(frame, 1);
                    function frame() {
                        if (_card.style.filter != `grayscale(0)`) {
                            _card.style.filter = `grayscale(${m}%)`;
                            firstCard.position.style.filter = `grayscale(${m}%)`;
                            m -= 1;
                        }
                        if (_card.style.borderRadius != `0.2em`) {
                            _card.style.borderRadius = `${o}em`;
                            firstCard.position.style.borderRadius = `${o}em`;
                            o -= 0.2;
                        }
                        else {
                            clearInterval(id);
                        }
                    }
                    _card.innerHTML = "";
                    firstCard.position.innerHTML = "";
                }, 2000);
            }
            else {
                setTimeout(function () {
                    let n = 1.0;
                    let i = 20;
                    let id = setInterval(frame, 5);
                    function frame() {
                        if (i != 0) {
                            _card.style.opacity = `${n}`;
                            firstCard.position.style.opacity = `${n}`;
                            n -= 0.05;
                            i--;
                        }
                        else {
                            clearInterval(id);
                            _card.style.visibility = "hidden";
                            firstCard.position.style.visibility = "hidden";
                        }
                    }
                    endCondition--;
                }, 2000);
            }
        }
        if (!isFirstCard && _card != firstCard.position) {
            _card.innerHTML = memorySet[_i];
            let n = 0;
            let m = 0;
            let o = 0.2;
            let id = setInterval(frame, 1);
            function frame() {
                if (_card.style.fontSize != `${16}px`) {
                    _card.style.fontSize = `${n}px`;
                    n += 1;
                }
                if (_card.style.filter != `grayscale(60%)`) {
                    _card.style.filter = `grayscale(${m}%)`;
                    m += 5;
                }
                if (_card.style.borderRadius != `4em`) {
                    _card.style.borderRadius = `${o}em`;
                    o += 0.2;
                }
                else {
                    clearInterval(id);
                }
            }
            endTurn();
            isFirstCard = true;
        }
        else if (isFirstCard) {
            _card.innerHTML = memorySet[_i];
            let n = 0;
            let m = 0;
            let o = 0.2;
            let id = setInterval(frame, 1);
            function frame() {
                if (_card.style.fontSize != `${16}px`) {
                    _card.style.fontSize = `${n}px`;
                    n += 1;
                }
                if (_card.style.filter != `grayscale(60%)`) {
                    _card.style.filter = `grayscale(${m}%)`;
                    m += 5;
                }
                if (_card.style.borderRadius != `4em`) {
                    _card.style.borderRadius = `${o}em`;
                    o += 0.2;
                }
                else {
                    clearInterval(id);
                }
            }
            firstCard.value = memorySet[_i];
            firstCard.position = _card;
            isFirstCard = false;
        }
    }
})(MemorySettings || (MemorySettings = {}));
//# sourceMappingURL=script.js.map