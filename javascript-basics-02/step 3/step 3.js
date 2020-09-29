var body = document.querySelector("body");
var div = document.createElement("div");
var inp = document.querySelector("#name");
body.appendChild(div);
inp.onchange = ()=>{
    div.textContent = inp.value;

}
