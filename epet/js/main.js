// 这是滑动切换选项卡的商品列表功能
class Tab{
    constructor(box){
        this.li = box.find("ul:first").children("li");
        this.child = box.find("div:first").children("div");
        this.init();
    }
    init(){
        var that = this;
        this.li.on("mouseover",function(){
            $(this).css({
                "background":"#ddd",
            }).addClass("active").siblings().removeClass("active");
            that.child.eq($(this).index()).show().siblings().hide();
            $(this).find("a").css({
                "color":"#fff",
            })
        })
        this.li.on("mouseout",function(){
            $(this).css({
                "background":"#fff",
            })
            $(this).find("a").css({
                "color":"#999",
            })
        })
    }
}

onload = function(){
    new Tab($("#tabBox"));
    new Tab($("#tabBox2"));
    new Tab($("#tabBox3"));
    new Tab($("#tabBox4"));
    new Tab($("#loginBox"));
    new Tab($("#menuTab"));
    new Tab($("#brandTab"));
}
new Tab($("#picBox"));