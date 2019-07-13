class Clitab{
    constructor(box){

        this.menu = box.children("div").children("ul").children("li");
        this.list = box.children("div").children("div");
        this.event();
    }
    event(){
        var that = this;
        this.menu.click(function(){
                $(this).css({
            "background":"#ccc"
        }).siblings().css({
            "background":"#fff"
        });
        that.list.eq($(this).index()).show().siblings().hide();
        $(this).addClass("change").siblings().removeClass("change");
        });

    }
}

new Clitab($("#product .picBox"));
new Clitab($("#detail .tab"));