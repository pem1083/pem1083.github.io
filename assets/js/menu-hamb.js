

var menu = document.querySelector(".menu-ul").classList;
var txtbtn = document.querySelector(".menuBurger").classList;
var head = document.querySelector(".header").classList

function mostrarMenu(){

    menu.toggle("show");
    txtbtn.toggle("cerrar");
    head.toggle("headerCmenu");
}
