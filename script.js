var page = document.getElementById("page");
var thr = document.getElementById("thr");
var body = document.getElementById("body");

thr.addEventListener("mouseover", function(){
    page.style.left = 0;
})
body.addEventListener("mouseover", function(){
    page.style.position = this.remove;
})


