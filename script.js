var password = 12345;
var input;
var i = 1;

while(password != input){
    if( i <= 3 ){
        input = prompt("請輸入密碼");   
        i++;    
    } 
    else{
        alert("您已被BAN")
    }
}

alert("登入成功!");