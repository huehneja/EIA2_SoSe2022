"use strict";
var imageLoad;
(function (imageLoad) {
    window.addEventListener("load", hndLoad);
    let scrolled = false;
    function hndLoad() {
        document.querySelector("#circle")?.addEventListener("mouseover", hndClick);
        document.onscroll = function () { if (scrolled == false) {
            requestAnimationFrame(animate);
        } };
    }
    function animate() {
        console.log("test");
        let circle = document.getElementById("circle");
        let blazon = document.querySelector(".blazon");
        circle.style.top = `-650px`;
        blazon.style.height = `70px`;
        blazon.style.margin = `8% 8% 0px 20% `;
        scrolled = true;
    }
    function hndClick() {
        console.log("click");
        let circle = document.getElementById("circle");
        let blazon = document.querySelector(".blazon");
        circle.style.top = `-390px`;
        blazon.style.height = `140px`;
        blazon.style.margin = `0px 6% 0px 13%`;
        scrolled = false;
    }
})(imageLoad || (imageLoad = {}));
//# sourceMappingURL=script.js.map