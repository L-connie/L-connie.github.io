
$(function(){
      $('#jt').click(function(){
        $('html,body').animate({scrollTop:0},700);
      });
    $(window).scroll(function(){
        if( $(this).scrollTop() >= 300){
            $('#jt').animate({bottom:80 })
        }else{
            $('#jt').stop(true,false).animate({bottom:-44},100)
        }
    })
});

window.onload=function(){
   
    function getStyle(obj,attr){
        if(obj.currentStyle){
            return obj.currentStyle[attr];
        }else{
            return getComputedStyle(obj,null)[attr];
        }
    }
    function mySport(obj,agrm){
        clearInterval(obj.time);

        obj.time=setInterval(function(){
            var flag =true;
            for(var i in agrm){
                var cur;
                if(i=='opacity'){
                    cur = getStyle(obj,i)*100;
                }else{
                    cur =parseInt(getStyle(obj,i))
                }
                var speed = (agrm[i]-cur)/6;
                speed=speed>0? Math.ceil(speed):Math.floor(speed);
                if(cur != agrm[i]){
                    if(i=='opacity'){
                        obj.style.opacity=(speed+cur)/100;
                        obj.style.filter = 'alpha(opacity='+(speed + cur)+')';
                    }else{
                        obj.style[i]= speed +cur+'px';
                    }
                     flag =false;
                }
            }
            if(flag==true){
                clearInterval(obj.time);
                !!fn&& fn();
            }
        },30)

    }
//返回顶部
    var top_div = document.getElementById('jt');
    window.onscroll=function(){
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        if(t >= 300){
            top_div.style.bottom = '80px';
        }else{
            top_div.style.bottom = '-44px';
        }
    };
    top_div.onclick=function(){
        var i =1;
        var time = setInterval(function(){
            var t = document.documentElement.scrollTop || document.body.scrollTop;
            window.scrollBy(0,-i);
            i*=2;
            if(t == 0){
                clearInterval(time);
                i=1;
            }
        },30)
    }


};