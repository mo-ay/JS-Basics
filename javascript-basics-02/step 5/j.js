var imgs = document.querySelectorAll("img");
imgs.forEach(element => {
    element.onmouseover = ()=>{
        element.src = element.currentSrc.substring(0,44) + "_2.jpg"
    }
});