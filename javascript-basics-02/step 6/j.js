var imgs = document.querySelectorAll("img");

imgs.forEach((img, i) => {
    img.addEventListener('mouseover', function () {
        img.src = "images/image" + (i + 1) + "_2.jpg";
    });
});

imgs.forEach((img, i) => {
    img.addEventListener('mouseout', function () {
        img.src = "images/image" + (i + 1) + ".jpg";
    });
});