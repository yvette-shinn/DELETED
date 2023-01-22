var title = document.getElementById("title");
var content = document.getElementById("content");
var date = document.getElementById("date");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var list = document.getElementById("list");

btn1.addEventListener("click", function(){
    list.innerHTML = list.innerHTML + `
    <div class="article">
        <h2>${title.value}</h2>
        <p>${date.value}</p>
        <p>${content.value}</p>
        <p>—</p>
    </div>`;
})

btn2.addEventListener("click", function(){
    return;
})



