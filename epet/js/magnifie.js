class Magnifie{
	constructor(magfBox){
		this.sBox = magfBox[0].querySelector("div:first-child");
		this.bBox = magfBox[0].querySelector("div:nth-child(2)");
		this.span = magfBox[0].querySelector("div:first-child span");
		this.bImg = magfBox[0].querySelector("div:nth-child(2) img");
		this.init();
    }
    
    init(){
        var that = this;
        this.sBox.onmouseover = function(){
            that.show()
        }

        this.sBox.onmouseout = function(){
                that.hide()
        }

        this.sBox.onmousemove = function(eve){
            var e = eve || window.event
            that.move(e)
        }
    }


    move(e){
        var l = e.pageX - this.sBox.offsetLeft - this.span.offsetWidth/2;
        var t = e.pageY - this.sBox.offsetTop - this.span.offsetHeight/2;
        if(l<0) l=0;
        if(t<0) t=0;
        if(l > this.sBox.offsetWidth - this.span.offsetWidth){
            l = this.sBox.offsetWidth - this.span.offsetWidth;
        }
        if(t > this.sBox.offsetHeight - this.span.offsetHeight){
            t = this.sBox.offsetHeight - this.span.offsetHeight;
        }
        this.span.style.left = l + "px";
        this.span.style.top = t + "px";
        var x = l/(this.sBox.offsetWidth - this.span.offsetWidth);
        var y = t/(this.sBox.offsetHeight - this.span.offsetHeight);
        
        this.bImg.style.left = x * -(this.bImg.offsetWidth-this.bBox.offsetWidth) + "px";
        this.bImg.style.top = y * -(this.bImg.offsetHeight-this.bBox.offsetHeight) + "px";
    }

    show(){
        this.span.style.display = "block";
        this.bBox.style.display = "block";
    }

    hide(){
        this.span.style.display = "none";
        this.bBox.style.display = "none";
    }
}

onload = function(){
    new Magnifie($("#magfBox"));
    new Magnifie($("#magfBox2"));
}
