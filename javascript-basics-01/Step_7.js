var but = document.getElementById("validate");
but.addEventListener('click',()=>{
    var shoe_size = document.getElementById("shoe_size").value;
    var year = document.getElementById("year").value;
    shoe_size *=2;
    shoe_size +=5;
    shoe_size *=50;
    shoe_size -=year;
    shoe_size +=1766;
    window.alert(shoe_size);
});