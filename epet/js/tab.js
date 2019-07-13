class Tab{
    constructor(options){
        $().ready(function(){
            options.find("").click(function(){
                 $(this).css({
                "background":"#ccc"
            }).siblings().css({
                "background":"#fff"
            })
                $(".tab-box>div").eq($(this).index()).show().siblings().hide();
            $(this).addClass("change").siblings().removeClass("change");
            });
        });
    }
}

