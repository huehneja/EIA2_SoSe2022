namespace zufallsGedicht {
let subjects: string [] = ["Drachenlord", "Snoop Dog", "Ein überdurchschnittlich großer Mann", "Ein Zeuge", "Die Gesellschaft", "Mein linker Zeh", "Eine böse Schattengestalt"];
let verbs: string [] = ["löscht", "programmiert", "massiert", "übersteht", "überfährt", "googlet", "gewinnt gegen"];
let objects: string [] = ["geile Giraffen", "geisteskranke Kranfahrer", "sich selbst", "große Probleme", "den räudigen Rest", "Thomas Anders", "Shrek"];
//   console.log(subjects, verbs, objects);
for (let index: number = 7; index >= 1; index--) {
//   console.log(index);
    console.log(getVerse(subjects, verbs, objects));
}
function getVerse(_subjects: string [] , _verbs: string [] , _objects: string[]): string {
//    console.log("Test");
let verse: string = "";
let subjectsNumber: number = Math.floor(Math.random() * _subjects.length);
let verbsNumber: number = Math.floor(Math.random() * _verbs.length);
let objectsNumber: number = Math.floor(Math.random() * _objects.length);
//console.log(subjectsNumber, verbsNumber, objectsNumber);
verse = _subjects[subjectsNumber] + " " + _verbs[verbsNumber] + " " + _objects[objectsNumber];
_subjects.splice(subjectsNumber, 1);
_objects.splice(objectsNumber, 1);
_verbs.splice(verbsNumber, 1);
return(verse);
}
}
