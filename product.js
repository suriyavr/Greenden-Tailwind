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

// Product search
var productContainer = document.getElementById("product-container");
var search = document.getElementById("search");

var productList = productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase();

    for(count=0;count<productList.length;count++){
        var productName = productList[count].querySelector("h1").textContent;

        if(productName.toUpperCase().indexOf(enteredValue)<0){
            productList[count].style.display = "none";
        } else {
            productList[count].style.display = "block";
        }
    }
})