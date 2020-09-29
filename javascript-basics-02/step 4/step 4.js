var reset = document.querySelector("button");
var inps = document.querySelectorAll("input");
reset.onclick = ()=>{
    let answer = confirm("are you sure?");
    if(answer){
        inps.forEach((element) => {
            element.value =" "
        });
    }
}