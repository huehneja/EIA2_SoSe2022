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

let menuOpen: boolean = false
let containerDiv: HTMLDivElement = document.createElement("div");
let lastOpen: string = "";
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
    case "code": displayPreview(data.Code); lastOpen = "code"; break;
    case "design": displayPreview(data.Design); lastOpen = "design"; break;
    case "av": displayPreview(data.AV); lastOpen = "av"; break;
  }
}

function displayPreview(_data: Item[]){
  containerDiv.innerHTML = ""
for (let i= 0; i < _data.length; i++){
  let previewImg = document.createElement("img")
  previewImg.src = _data[i].imgFile
  previewImg.alt = _data[i].name
  previewImg.classList.add("pointer")
  containerDiv.appendChild(previewImg)
  previewImg.addEventListener("click", function() { display(_data[i])})
}
function display(_item: Item){
  containerDiv.innerHTML = ""
  let backButton = document.createElement("button")
  backButton.addEventListener("click", function() { expandMenu(lastOpen)})
  backButton.innerHTML = "Zurück"
  containerDiv.appendChild(backButton)
  let previewImg = document.createElement("img")
  previewImg.src = _item.imgFile
  previewImg.alt = _item.name
  containerDiv.appendChild(previewImg)
  let headline = document.createElement("h4")
  headline.innerHTML = _item.name
  containerDiv.appendChild(headline)
  let about = document.createElement("p")
  about.innerHTML = _item.about
  containerDiv.appendChild(about)
  if (_item.programs != "undefined"){
  let programs = document.createElement("p")
  programs.innerHTML = "Software: " + _item.programs
  containerDiv.appendChild(programs)
  }
  if (_item.webLink != "undefined"){
  let button = document.createElement("button")
  button.addEventListener("click", function(): void {window.open(_item.webLink);})
  button.innerHTML = "Link"
  containerDiv.appendChild(button)
  }
  
}
}
}