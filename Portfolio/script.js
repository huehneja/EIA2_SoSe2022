"use strict";
var imageLoad;
(function (imageLoad) {
    window.addEventListener("load", hndLoad);
    let scrolled = false;
    function hndLoad() {
        document.querySelector("#circle")?.addEventListener("mouseenter", hndClick);
        document.querySelector("#circle")?.addEventListener("mouseleave", function () { if (menuOpen == true) {
            requestAnimationFrame(animate);
        } });
        document.getElementById("codeButton")?.addEventListener("click", function () { expandMenu("code"); });
        document.getElementById("designButton")?.addEventListener("click", function () { expandMenu("design"); });
        document.getElementById("avButton")?.addEventListener("click", function () { expandMenu("av"); });
        document.onscroll = function () { if (scrolled == false) {
            requestAnimationFrame(animate);
        } };
    }
    function animate() {
        let circle = document.getElementById("circle");
        let blazon = document.querySelector(".blazon");
        let subSubtitle = document.querySelector("h3");
        circle.style.top = `-650px`;
        blazon.style.height = `70px`;
        blazon.style.margin = `8% 8% 0px 20% `;
        subSubtitle.style.opacity = "0%";
        scrolled = true;
    }
    function hndClick() {
        console.log("click");
        let circle = document.getElementById("circle");
        let blazon = document.querySelector(".blazon");
        let subSubtitle = document.querySelector("h3");
        circle.style.top = `-390px`;
        blazon.style.height = `140px`;
        blazon.style.margin = `0px 6% 0px 13%`;
        subSubtitle.style.opacity = "100%";
        scrolled = false;
    }
})(imageLoad || (imageLoad = {}));
let menuOpen = false;
let containerDiv = document.createElement("div");
function expandMenu(_type) {
    if (menuOpen == false) {
        containerDiv.classList.add("containerDiv");
        document.body.appendChild(containerDiv);
        window.scroll({
            top: window.innerHeight,
            behavior: 'smooth'
        });
        menuOpen = true;
    }
    switch (_type) {
        case "code":
            containerDiv.innerHTML = "code";
            break;
        case "design":
            containerDiv.innerHTML = "design";
            break;
        case "av":
            containerDiv.innerHTML = "av";
            break;
    }
}
//# sourceMappingURL=script.js.map