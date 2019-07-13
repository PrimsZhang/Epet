$(function(){
    class Lis{
        constructor(){
            this.ul = $("#data .goods");
            this.init();
            this.add();
        }
        init(){
            var that =this;
            $.ajax({
                url:"http://localhost/zzr/epet/date/date.json",
                success:function(res){
                    that.res = res;
                    that.display();
                }
            })
        }
        display(){
            var str="";
            for(var i=0;i<this.res.length;i++){
                str+=
                `<li>
                <a href="detail.html">
                    <img src="${this.res[i].src}" index="${this.res[i].id}" class = "shop">
                    <p>${this.res[i].name}</p>
                    <span>$28.5</span>
                    <em>已售：256个</em>
                </a>
            </li>`;
            }
            this.ul.html(str);
            $(".intru").find("h3").text(str2)
            console.log(str)
        }
        add(){
            var that= this;
            this.ul.on("click",function(){
                if(event.target.className == "shop"){
                    that.id = event.target.getAttribute("index");
                    console.log(that.id)
                    localStorage.setItem("epet",that.id)
                }
            })
        }
    }
    new Lis();
})