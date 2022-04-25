/*
Aufgabe: Aufgabe 03 MemorySettings
Name: Jason Hühne
Matrikel: 269665
Datum: 23.04.2022
Quellen: /
*/
namespace MemorySettings {
    window.addEventListener("load", hndLoad);
    let settings: FormDataEntryValue [] = [];
    let memorySet: string [] = ["25", "24", "23", "22", "21", "20", "19", "18", "17", "16", "15", "14", "13", "12", "11", "10", "09", "08", "07", "06", "05", "04", "03", "02", "01"];
    let isFirstCard: boolean = true;
    let turnEnded: boolean = false;
    let endCondition: number = 0;
    let timeStarted: number = 0;
    function hndLoad(_event: Event): void {
        let submitButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("submit");
        submitButton.addEventListener("click", hndSubmit);
        submitButton.addEventListener("touchend", hndSubmit);
    }
  
    function hndSubmit(_event: Event): void {
        let formdata: FormData = new FormData (document.forms[0]);
        let form: HTMLElement = <HTMLElement> document.querySelector("form");
        for (let value of formdata.values())
        settings.push(value);
        form.style.display = "none";
        startMemory(settings[0], settings[1], settings[2], settings[3], settings[4], settings[5]);

    }
    function startMemory(pairAmount: FormDataEntryValue, cardSize: FormDataEntryValue, bgColor: FormDataEntryValue, fontColor: FormDataEntryValue, cardColor: FormDataEntryValue, font: FormDataEntryValue): void {
        timeStarted = Date.now();
        endCondition = parseInt(`${pairAmount}`);
        memorySet.splice(0, (parseInt(`${pairAmount}`) - memorySet.length) * -1);
        let memorySetPairs: string [] = memorySet;
        let wrapper: HTMLElement = <HTMLElement> document.getElementById("wrapper");
        for (let i: number = parseInt(`${pairAmount}`); i >= 1 ; i-- ) {
            memorySet.push(memorySetPairs[i - 1]);
        }
        for (let i: number = 0; i < 1337; i++) {
           let loc1: number = Math.floor((Math.random() * memorySet.length));
           let loc2: number = Math.floor((Math.random() * memorySet.length));
           let position: string = memorySet[loc1];
           memorySet[loc1] = memorySet[loc2];
           memorySet[loc2] = position;
        }
        for (let i: number = 0; i < memorySet.length; i++) {
            let card: HTMLElement = document.createElement("div");
            let size: number = parseFloat(`${cardSize}`) * (150 - parseInt(`${pairAmount}`));
            let background: HTMLElement = document.body;
           
            wrapper.appendChild(card);
            card.style.height = `${size}px`;
            card.style.width = `${size}px`;
            card.style.lineHeight = `${size}px`;
            background.style.backgroundColor = `${bgColor}`;
            card.style.color = `${fontColor}`;
            card.style.backgroundColor = `${cardColor}`;
            card.style.fontFamily = `${font}`;
            card.addEventListener("click", function(): void {if (!turnEnded) {hndChange(i , card); }});

        }
        const myInterval: any = setInterval(endTimer, 200);
        function endTimer(): void {if (endCondition == 0) {clearInterval(myInterval); endGame(); }}
        function endGame(): void {
            let form: HTMLElement = <HTMLElement> document.querySelector("form");
            alert(`Du hast Gewonnen in ${Math.floor((Date.now() - timeStarted)) / 1000} Sekunden`); 
            wrapper.replaceChildren();
            memorySet = ["25", "24", "23", "22", "21", "20", "19", "18", "17", "16", "15", "14", "13", "12", "11", "10", "09", "08", "07", "06", "05", "04", "03", "02", "01"]; 
            form.style.display = "inline";
        }
        
    }
    interface FirstCard {value: string; position: HTMLElement; }
    let firstCard: FirstCard = {value: "", position: <HTMLElement>document.querySelector("body")};
    function hndChange(_i: number, _card: HTMLElement): void {
        function endTurn(): void {
            turnEnded = true;
            setTimeout(function(): void {turnEnded = false; }, 2000);
            if (firstCard.position.innerHTML != memorySet[_i]) {
            setTimeout(function(): void {
                _card.innerHTML = "";
                firstCard.position.innerHTML = "";
            },         2000);
            } else {
                setTimeout(function(): void {
                    _card.style.visibility = "hidden";
                    firstCard.position.style.visibility = "hidden";
                    endCondition--;
                },         2000);                
            }
        }
        if (!isFirstCard && _card != firstCard.position) {
        _card.innerHTML = memorySet[_i];
        endTurn();
        isFirstCard = true;
        } else if (isFirstCard) {
        _card.innerHTML = memorySet[_i];
        firstCard.value = memorySet[_i];
        firstCard.position = _card;
        isFirstCard = false;
        }
    }
    }
