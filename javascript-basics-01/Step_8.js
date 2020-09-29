
var but = document.getElementById("validate");
but.addEventListener('click',()=>{
    var age = document.getElementById("age").value;
    if (age >= 18) {
        alert("you over 18")
    } else {
        alert("you are under 18")
    }

});