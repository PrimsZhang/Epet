$().ready(function(){
    $(".tab-menu li").click(function(){
         $(this).css({
        "background":"#ccc"
    }).siblings().css({
        "background":"#fff"
    })
        $(".tab-box>div").eq($(this).index()).show().siblings().hide();
    $(this).addClass("change").siblings().removeClass("change");
    });
});
