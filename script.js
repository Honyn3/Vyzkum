let colorPicker = document.getElementById("colorDiv");
let slider = document.getElementById("slider");
let rightButton = document.getElementById("colorButtonRight");
let leftButton = document.getElementById("colorButtonLeft");
let gradient = document.getElementById("gradient");
let middleButton = document.getElementById("slider");
let btnIndex;
let LeftColor = "#A1A1A1";
let RightColor = "#A1A1A1";
let MiddleColor = null;
let colorWidthHalf = colorPicker.offsetWidth/2;

function LeftButtonPressed(){
    colorPicker.style.marginLeft = leftButton.getBoundingClientRect().x -colorWidthHalf + "px";
    btnIndex = 0;
}
function MiddleButtonPressed(){
    let pos = slider.getBoundingClientRect().x + (slider.value/100 * slider.offsetWidth) - slider.value/2.8 -100;
    colorPicker.style.marginLeft = pos + "px";
    btnIndex = 1;
}
function RightButtonPressed(){
    colorPicker.style.marginLeft = rightButton.getBoundingClientRect().x -colorWidthHalf + "px";
    btnIndex = 2;
}
function Barvy(barva){
    switch(btnIndex){
        case 0:
            LeftColor = barva;
            leftButton.style.backgroundColor = barva;
        break;
        case 1:
            MiddleColor = barva;
            middleButton.style.setProperty('--sliderColor', barva);
        break;
        case 2:
            RightColor = barva;
            rightButton.style.backgroundColor = barva;
        break;
    }
    if(MiddleColor != null){
    let col = "linear-gradient(to right, "+LeftColor+", "+MiddleColor+", "+RightColor+" 100%)";
    gradient.style.background = col;
    }
    else{
        let col = "linear-gradient(to right, "+LeftColor+", "+RightColor+" 100%)";
    gradient.style.background = col;
    }
}

let pocetstranek=1;
let odpovedi = [];
let barvy = ["#A1A1A1","#A1A1A1","#A1A1A1"]; // zapisuje pouze 3 barvy
if(localStorage.getItem("odpovedi")){
  }
else {
    for (let i = 0; i < 10; i++) { // vytvori JSON
        odpovedi[i] = barvy;
      }
    localStorage.setItem("odpovedi", JSON.stringify(odpovedi));
}

function start()
{
    odpovedi = JSON.parse(localStorage.getItem("odpovedi"));
    if(MiddleColor==null){gradient.style.background = "linear-gradient(to right, "+odpovedi[0][0]+", "+odpovedi[0][2]+" 100%)";}
    else{gradient.style.background = "linear-gradient(to right, "+odpovedi[0][0]+","+odpovedi[0][1]+","+odpovedi[0][2]+" 100%)";}
    LeftColor = odpovedi[0][0];
    MiddleColor = odpovedi[0][1];
    RightColor = odpovedi[0][2]; 
    leftButton.style.backgroundColor = odpovedi[0][0];
    middleButton.style.setProperty('--sliderColor', odpovedi[0][1]);
    rightButton.style.backgroundColor = odpovedi[0][2];
    document.getElementById("buttonstart").style.display = "none";
    document.getElementById("stranka").style.display = "block";
     
}
function dalsi()
{
    odpovedi = JSON.parse(localStorage.getItem("odpovedi"));
    odpovedi[pocetstranek-1][0] = LeftColor;
    odpovedi[pocetstranek-1][1] = MiddleColor;
    odpovedi[pocetstranek-1][2] = RightColor;
    localStorage.setItem("odpovedi", JSON.stringify(odpovedi));
    LeftColor = odpovedi[pocetstranek][0];
    MiddleColor = odpovedi[pocetstranek][1];
    RightColor = odpovedi[pocetstranek][2]; 
    if(MiddleColor==null){gradient.style.background = "linear-gradient(to right, "+odpovedi[pocetstranek][0]+", "+odpovedi[pocetstranek][2]+" 100%)";}
    else{gradient.style.background = "linear-gradient(to right, "+odpovedi[pocetstranek][0]+","+odpovedi[pocetstranek][1]+","+odpovedi[pocetstranek][2]+" 100%)";}
    leftButton.style.backgroundColor = odpovedi[pocetstranek][0];
    middleButton.style.setProperty('--sliderColor', odpovedi[pocetstranek][1]);
    rightButton.style.backgroundColor = odpovedi[pocetstranek][2];
    pocetstranek = pocetstranek + 1;
    document.getElementById("cislostranky").innerHTML = pocetstranek+"/10";
}


function zpatky()
{
    odpovedi = JSON.parse(localStorage.getItem("odpovedi"));
    odpovedi[pocetstranek-1][0] = LeftColor;
    odpovedi[pocetstranek-1][1] = MiddleColor;
    odpovedi[pocetstranek-1][2] = RightColor;
    localStorage.setItem("odpovedi", JSON.stringify(odpovedi));
    pocetstranek = pocetstranek - 1;
    LeftColor = odpovedi[pocetstranek-1][0];
    MiddleColor = odpovedi[pocetstranek-1][1];
    RightColor = odpovedi[pocetstranek-1][2]; 
    if(MiddleColor==null){gradient.style.background = "linear-gradient(to right, "+odpovedi[pocetstranek-1][0]+", "+odpovedi[pocetstranek-1][2]+" 100%)";}
    else{gradient.style.background = "linear-gradient(to right, "+odpovedi[pocetstranek-1][0]+","+odpovedi[pocetstranek-1][1]+","+odpovedi[pocetstranek-1][2]+" 100%)";}
    leftButton.style.backgroundColor = odpovedi[pocetstranek-1][0];
    middleButton.style.setProperty('--sliderColor', odpovedi[pocetstranek-1][1]);
    rightButton.style.backgroundColor = odpovedi[pocetstranek-1][2];
    document.getElementById("cislostranky").innerHTML = pocetstranek+"/10";
}