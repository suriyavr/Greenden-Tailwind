// selecting side nav bar

var sideNav =  document.getElementById("sidenav");
var menuIcon = document.getElementById("menuicon");
var closeNav = document.getElementById("close-nav");

menuIcon.addEventListener("click",function(){
    sideNav.style.right = 0;
})

closeNav.addEventListener("click",function(){
     sideNav.style.right = "-50%";
})