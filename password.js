var password = 911122;
var input;
var count = 0;
var limit = 3;
var out = false;

while(password!=input && !limit) {
    count++;
    if(count <= limit){
        input = prompt("請輸入密碼。")  
    }
    else{
        out = true;
    }
}

if (out){   
    alert("輸入錯誤次數過多!")
}
else{
    alert("登入成功!")
}




