"use strict";
var zufallsGedicht;
(function (zufallsGedicht) {
    let subjects = ["Drachenlord", "Snoop Dog", "Ein überdurchschnittlich großer Mann", "Ein Zeuge", "Die Gesellschaft", "Mein linker Zeh", "Eine böse Schattengestalt"];
    let verbs = ["löscht", "programmiert", "massiert", "übersteht", "überfährt", "googlet", "gewinnt gegen"];
    let objects = ["geile Giraffen", "geisteskranke Kranfahrer", "sich selbst", "große Probleme", "den räudigen Rest", "Thomas Anders", "Shrek"];
    //   console.log(subjects, verbs, objects);
    for (let index = 7; index >= 1; index--) {
        //   console.log(index);
        console.log(getVerse(subjects, verbs, objects));
    }
    function getVerse(_subjects, _verbs, _objects) {
        //    console.log("Test");
        let verse = "";
        let subjectsNumber = Math.floor(Math.random() * _subjects.length);
        let verbsNumber = Math.floor(Math.random() * _verbs.length);
        let objectsNumber = Math.floor(Math.random() * _objects.length);
        //console.log(subjectsNumber, verbsNumber, objectsNumber);
        verse = _subjects[subjectsNumber] + " " + _verbs[verbsNumber] + " " + _objects[objectsNumber];
        _subjects.splice(subjectsNumber, 1);
        _objects.splice(objectsNumber, 1);
        _verbs.splice(verbsNumber, 1);
        return (verse);
    }
})(zufallsGedicht || (zufallsGedicht = {}));
//# sourceMappingURL=script.js.map