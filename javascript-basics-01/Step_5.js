
var but = document.getElementById("validate");
but.addEventListener('click',()=>{
    var fnum = document.getElementById("first_number").value;
    var snum = document.getElementById("second_number").value;
    window.alert(fnum* snum);

});