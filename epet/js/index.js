// 这是轮播图的触发与运行规则
$("#banner .ad").banner({
    aimg:$("#banner .ad").find("img"),
    islist:false,
    autoPlay:true,
    delayTime:2000,
    moveTime:800,
    photoWidth:770,
    index:0,
})
$().banner

// 这是banner三级菜单中二级菜单移入移出效果
var mtab = document.getElementById("menuTab");
var mbox = document.querySelector("#menuTab .menubox");
mtab.onmouseout = function(){
    mbox.style.display = "none";    
}
mtab.onmouseover = function(){
    mbox.style.display = "block";    
}