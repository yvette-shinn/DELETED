var page = document.getElementById("page");
function page(){
    page.style.opacity = 0;
}
page.addEventListener("mouseleave" , function(){
    page.style.opacity = 0;
})
page.addEventListener("mouseenter" , function(){
    page.style.opacity = 1;
})
