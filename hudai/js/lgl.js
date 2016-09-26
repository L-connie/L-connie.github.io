/**
 * Created by Administrator on 2016/9/21.
 */
$(function(){
    //顶部新浪等图片切换

    $('.out').hover(function(){

        $(this).stop().animate({backgroundPositionY:-25},200).siblings('.out').stop().animate({backgroundPositionY:5});
        var index =$(this).index();
        console.log(index);
        if(index == 2){
            $('#headEwm').css('display','block');
        }else{
            $('#headEwm').css('display','none')
        }
    },function(){
        $('.out').stop().animate({backgroundPositionY:5},200);
        $('#headEwm').css('display','none');
    });

    //大图片轮播
    var index =0;
    var time;
    Go();
    function Go(){
    time = setInterval(function(){
                index++;

        if(index == $('#bigImg li').size()){
                index = 0;
        }
        $('#bigImg li').eq(index).stop().fadeIn().siblings().stop().fadeOut();
        $('#circle li').eq(index).addClass('onFocus').siblings().removeClass('onFocus')
    },3000)
    }
    //小圆圈事件
    $('#circle li').hover(function(){
        clearInterval(time);
    },function(){
        Go();
    });
    $('#circle li').click(function(){
       index = $(this).index();
        console.log(index);
        $('#bigImg li').eq(index).stop().fadeIn().siblings().stop().fadeOut();
    });
    //大图片边上的info框
     setTimeout(function(){
        $('#imgInfo').stop().animate({top:0},500);
    },1000)

    //最后面的微信等图标事件
    $('dd.dl2-2').hover(function(){
        $(this).css('cursor','pointer');
        $(this).stop().animate({backgroundPositionY:-76},200).siblings('dd.dl2-2').stop().animate({backgroundPositionY:0},200);
        var index =$(this).index();
        if(index == 3){
            $('#footEwm').css('display','block');
        }else{
            $('#footEwm').css('display','none')
        }

    },function(){
            $('dd.dl2-2').stop().animate({backgroundPositionY:0},200);
        $('#footEwm').css('display','none');
    });


    $('#fixed li').hover(function(){
        var index = $(this).index();
        $(this).stop().animate({backgroundPositionY:-48},300).siblings().stop().animate({backgroundPositionY:0});

    },function(){
        $('#fixed li').stop().animate({backgroundPositionY:0});
    });

        //返回顶部
    $('#last3').click(function(){
        $('html,body').stop().animate({scrollTop:0},1000);
    })
});
