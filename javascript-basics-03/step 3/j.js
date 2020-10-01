var green = document.getElementsByClassName("green")[0];
var red = document.getElementsByClassName("red")[0];
var blue = document.getElementsByClassName("blue")[0];
var myText = document.getElementById("text");
function changeColor(params) {
    green.addEventListener("click",()=>{
        myText.style.color ="green"
    })
    red.addEventListener("click",()=>{
        myText.style.color ="red"
    })
    blue.addEventListener("click",()=>{
        myText.style.color ="blue"
    })
}
changeColor();