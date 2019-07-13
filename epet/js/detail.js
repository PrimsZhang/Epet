$(function(){
    class Dete{
        constructor(){
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
            this.id=localStorage.getItem("epet");
            var str ="";
            for(var i=0;i<this.res.length;i++){
                if(this.id == this.res[i].id){
                    str = 
                        `
                        <img src="${this.res[i].src}" index="${this.res[i].id}">
                        <span></span>
                        `
                }
                $(".smallPic").html(str)
            }
        }
    }
    new Dete();
})



