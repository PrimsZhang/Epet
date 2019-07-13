var user = document.querySelector(".card .user")
var pass = document.querySelector(".card .pass")
user.value = "请输入账户名";
pass.value = "请输入密码";
user.onfocus = function(){
    user.value = ""
}

user.onblur = function(){
    if(user.value == "请输入账户名" || user.value == ""){
        user.value ="请输入账户名"
    }
}

pass.onfocus = function(){
    pass.type = "password";
    pass.value = "";
}

pass.onblur = function(){
    if(pass.value == "请输入密码" || pass.value == ""){
        pass.type = "value";
        pass.value ="请输入密码"
    }
}



function setCookie(key,value,option){
    option = option ? option : {};
    var path = option.path ? `path=${option.path};`:"";
    if(option.expires){
        var d = new Date();
        d.setDate(d.getDate() +3);
        var day = `expires = ${d};`
    }else{
        var day = "";
    }
    document.cookie = `${key}=${value};${path}${day}`;
}

var rebtn = document.querySelector(".login .btn");
var reuse = document.querySelector(".login .user")
var repas = document.querySelector(".login .pass")
rebtn.onclick = function(){
    setCookie(
        reuse.value,
        repas.value,
        {
            path:"/",
            expires:4
        }
    )
    alert("注册成功");
}

var lobtn = document.querySelector(".load .btn");
var louse = document.querySelector(".load .user");
var lopas = document.querySelector(".load .pass");
function getCookie(key){
    var str = document.cookie;
    for(var i= 0;i<str.split(";").length;i++){
        if(str.split(";")[i].split("=")[0]== key){
            return str.split(";")[i].split("=")[1];
        }
    }
    alert("登录失败")
}
lobtn.onclick = function(){
    if(getCookie(louse.value) == lopas.value){
        window.open("http://localhost/zzr/epet/html/index.html");
    }
}
