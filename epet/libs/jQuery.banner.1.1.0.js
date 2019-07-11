;(function($){
    "use strict";
    $.fn.banner = function(options){
        var _this = this;
        class Banner{
            constructor(options){
                this.img = options.aimg;
                this.left = options.left;
                this.right = options.right;
                this.islist = options.islist === false ? options.list : true;
                this.autoPlay = options.autoPlay === false ? false : true;
                this.delayTime = options.delayTime || 2000;
                this.moveTime = options.moveTime || 200;
                this.index = options.index || 0;
                this.iprev = this.img.length-1;
                this.photoWidth = this.img[0].width,
                this.init(); 
                this.btnEvent();
                this.play();
            }
            init(){
                if(!this.islist) return;
                this.list = $("<div class = 'list'></div>")
                for(var i = 0;i < this.img.length;i++){
                    this.list.append($(`<span>${i+1}</span>`))  
                }
                _this.append(this.list);

                this.list.css({
                    width:"100%",
                    height:30,
                    display:"flex",
                    position:"absolute",
                    bottom:0,
                    background:"rgba(200,200,200,.6)"
                }).children("span").css({
                    flex:1,
                    textAlign:"center",
                    lineheight:"30px",
                    borderLeft:"1px solid #fff",
                    borderRight:"1px solid #fff",
                }).eq(this.index).css({
                    background:"red"
                })
                this.listEvent()
            }


            listEvent(){
                var that = this;
                this.list.children("span").click(function(){
                    if($(this).index() > that.index){
                        that.listMove($(this).index(),1);           
                    }
                    if($(this).index() < that.index){
                        that.listMove($(this).index(),-1);           
                    }
                    that.list.children("span").css({
                        background:""
                    }).eq($(this).index()).css({
                        background:"#ccc"
                    })
                    that.index = $(this).index()
                })
            }

            listMove(iNow,type){
                this.img.eq(this.index).css({
                    left:0
                }).stop().animate({
                    left:-this.photoWidth * type
                }).end().eq(iNow).css({
                    left:this.photoWidth * type
                }).stop().animate({
                    left:0
                })
            }

            btnEvent(){
                if(this.left == undefined || this.left.length < 1) return;
                var that = this;
                this.left.on("click",function(){
                    that.changeIndex(1)
                })
                this.right.on("click",function(){
                    that.changeIndex(-1)
                })
            }

            changeIndex(type){
                if(type == 1){
                    if(this.index == 0){
                        this.index = this.img.length - 1;
                        this.iprev = 0;
                    }else{
                        this.index--;
                        this.iprev = this.index + 1;
                    }
                    this.btnMove(1);
                }else{
                    if(this.index == this.img.length-1){
                        this.index = 0;
                        this.iprev = this.index - 1;
                    }else{
                        this.index++;
                        this.iprev = this.index - 1;
                    }
                    this.btnMove(-1);
                }
            }
            
            btnMove(type){
                this.img.eq(this.iprev).css({
                    left:0
                }).stop().animate({
                    left:this.photoWidth * type
                },this.moveTime).end().eq(this.index).css({
                    left:-this.photoWidth * type
                }).stop().animate({
                    left:0
                },this.moveTime)
                if(!this.islist) return;
                this.list.children("span").css({
                   background:""
                }).eq(this.index).css({
                    background:"red"
                })
            }

            play(){
                if(!this.autoPlay) return;
                this.t = setInterval(()=>{
                    this.changeIndex(-1)
                },this.delayTime)

                _this.hover(()=>{
                    clearInterval(this.t)
                },()=>{
                    this.t = setInterval(()=>{
                        this.changeIndex(-1)
                    },this.delayTime)
                })
            }
        }
        new Banner(options)
    }
})(jQuery);