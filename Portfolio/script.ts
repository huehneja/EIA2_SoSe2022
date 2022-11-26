namespace imageLoad {
window.addEventListener("load", hndLoad )
let scrolled: boolean = false 
function hndLoad(): void {
    document.querySelector("#circle")?.addEventListener("mouseenter", hndClick)
    document.querySelector("#circle")?.addEventListener("mouseleave", function():void {if (menuOpen == true){requestAnimationFrame (animate)}})
    document.getElementById("codeButton")?.addEventListener("click", function(){expandMenu("code")})
    document.getElementById("designButton")?.addEventListener("click", function(){expandMenu("design")})
    document.getElementById("avButton")?.addEventListener("click", function(){expandMenu("av")})
    document.onscroll = function(){if(scrolled == false){requestAnimationFrame (animate)}}
}   
function animate(): void {
    let circle: HTMLDivElement = <HTMLDivElement> document.getElementById("circle")
    let blazon: HTMLImageElement = <HTMLImageElement> document.querySelector(".blazon")
    let subSubtitle: HTMLHeadingElement = <HTMLHeadingElement> document.querySelector("h3")
    circle.style.top = `-650px`
    blazon.style.height = `70px`
    blazon.style.margin =  `8% 8% 0px 20% `
    subSubtitle.style.opacity = "0%"
    scrolled = true;
}
function hndClick(): void {
    
    console.log("click")
    let circle: HTMLDivElement = <HTMLDivElement> document.getElementById("circle")
    let blazon: HTMLImageElement = <HTMLImageElement> document.querySelector(".blazon")
    let subSubtitle: HTMLHeadingElement = <HTMLHeadingElement> document.querySelector("h3")
    circle.style.top = `-390px`;
    blazon.style.height = `140px`;
    blazon.style.margin = `0px 6% 0px 13%`;
    subSubtitle.style.opacity = "100%"
    scrolled = false;
    }
}
let menuOpen: boolean = false
let containerDiv: HTMLDivElement = document.createElement("div");
function expandMenu(_type: string): void {
    if (menuOpen == false){
containerDiv.classList.add("containerDiv");
document.body.appendChild(containerDiv);window.scroll({
    top: window.innerHeight,
    behavior: 'smooth'
  })
  menuOpen = true
}
  switch (_type) {
    case "code": containerDiv.innerHTML = "code"; break;
    case "design": containerDiv.innerHTML = "design"; break;
    case "av": containerDiv.innerHTML = "av"; break;
  }
}