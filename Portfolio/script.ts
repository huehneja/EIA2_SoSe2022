namespace imageLoad {
window.addEventListener("load", hndLoad )
let scrolled: boolean = false 
function hndLoad(): void {
    document.querySelector("#circle")?.addEventListener("mouseover", hndClick)
    document.onscroll = function(){if(scrolled == false){requestAnimationFrame (animate);}}
}   
function animate(): void {
    console.log("test")
    let circle: HTMLDivElement = <HTMLDivElement> document.getElementById("circle")
    let blazon: HTMLImageElement = <HTMLImageElement> document.querySelector(".blazon")
    circle.style.top= `-650px`
    blazon.style.height = `70px`
    blazon.style.margin =  `8% 8% 0px 20% `
    scrolled = true;
}
function hndClick(): void {
    
    console.log("click")
    let circle: HTMLDivElement = <HTMLDivElement> document.getElementById("circle")
    let blazon: HTMLImageElement = <HTMLImageElement> document.querySelector(".blazon")
    circle.style.top = `-390px`;
    blazon.style.height = `140px`;
    blazon.style.margin = `0px 6% 0px 13%`;
    scrolled = false;
    }
}