namespace imageLoad {
    export interface Item {
        name: string;
        imgFile: string;
        about: string;
        programs: string;
        webLink: string;
    }
    export interface Data {
        [name: string]: Item[];
    }

    export let data: Data = {
        Code: [
            {name: "Vegan Heaven", imgFile: "img/veganheaven.png", about: "Vegan Heaven ist eine simple Farming Simulation, in der man seine angepflanzten Setzlinge vor Ungeziefer befreien muss.",programs: "HTML, CSS, Typescript", webLink: "https://huehneja.github.io/EIA2_SoSe2022/Endabgabe/index.html"},
            {name: "Mau Mau", imgFile: "img/maumau.png", about: "Mau Mau als Webapplikation. Man spielt gegen den Computer und muss seine Karten ablegen, bevor es der Computer schafft.", programs: "HTML, CSS, Typescript", webLink: "https://huehneja.github.io/EIA1_WiSe2021/Aufgabe11/index.html"},
            {name: "Drum Pad", imgFile: "img/drumpad.png", about: "Mit dem Drumpad kann man coole Beats aufnehmen und abspielen.", programs: "HTML, CSS, Typescript", webLink: "https://huehneja.github.io/EIA1_WiSe2021/Aufgabe8/index.html"},
            {name: "Memory", imgFile: "img/memory.png", about: "Anpassbares Memory als Webapplikation. Versuche so schnell wie möglich alle Paare zu finden.", programs: "HTML, CSS, Typescript", webLink: "https://huehneja.github.io/EIA2_SoSe2022/Aufgabe3/index.html"},
        ],
        Design: [
            {name: "Guided Clothes - Prototyp & Styleguide", imgFile: "img/gc.png", about:"In einem Projekt habe Ich gemeinsam mit einer Arbeitsgruppe eine VR-Shopping Anwendung konzipiert und in einem Prototyp umgesetzt.", programs: "Adobe XD, Adobe InDesign, Adobe Illustrator", webLink: "https://xd.adobe.com/view/67ebb1bc-bac6-46ed-9921-3430fdfa5a4e-32b8/?fullscreen"},
            {name: "Plakate für die Studentenkneipe Speicher", imgFile: "img/speicher.png", about:"Für ein Projekt habe ich für die Studentenkneipe \ Speicher \ in Furtwangen ein Event-Plakat erschaffen.", programs: "Gimp", webLink:"undefined"},
            {name: "Werbekonzept \ Vortix \ ", imgFile: "img/vortix.png", about: "Vortix ist ein Projekt, in dem ich ein Konzept für eine fiktive, energiegebende Uhr entwickelt habe. Neben einer Präsentation ist auch ein Werbevideo für den Pitch entstanden.", programs: "Adobe Premiere Pro, Adobe After Effects, Blender", webLink: "https://www.youtube.com/watch?v=DT7JfiMkJhM"}
        ],
        AV: [
            {name: "Fortuna", imgFile: "img/fortuna.png", about: "Ein Kurzfilm, der sich mit dem Thema Glück auseinandersetzt. Zusammen mit einer kleinen Gruppe habe ich das Drehbuch geschrieben und größtenteils die Regie am Set übernommen.", programs: "undefined", webLink: "undefined"}
        ]

    }
}