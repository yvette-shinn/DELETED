var page = document.getElementById("page");

page.addEventListener("mouseleave" , function(){
    page.style.opacity = 0;
})
page.addEventListener("mouseenter" , function(){
    page.style.opacity = 1;
})
