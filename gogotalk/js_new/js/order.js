/**
 * Created by Administrator on 2016/4/25.
 */
$(function(){
    $(".rel_nav_0425 li").hover(function () {
        $(this).addClass("current_0426").siblings().removeClass("current_0426");
    }, function () {
        $(this).removeClass("current_0426");
    });
    if ((navigator.userAgent.indexOf('MSIE') >= 0)
        && (navigator.userAgent.indexOf('Opera') < 0)){
        $(".btu2_0426").hover(function(){
            $(this).addClass("btu_0426_hover2");
        },function(){
            $(this).removeClass("btu_0426_hover2");
        });
		$(".btu3_0426").hover(function(){
            $(this).addClass("btu_0426_hover2");
        },function(){
            $(this).removeClass("btu_0426_hover2");
        });

        $(".btu4_0426").hover(function(){
            $(this).addClass("btu_0426_hover2");
        },function(){
            $(this).removeClass("btu_0426_hover2");
        });
    }else if (navigator.userAgent.indexOf('Firefox') >= 0){
        $(".btu2_0426").hover(function(){
            $(this).addClass("btu2_0426_hover");
        },function(){
            $(this).removeClass("btu2_0426_hover");
        });
		$(".btu3_0426").hover(function(){
            $(this).addClass("btu3_0426_hover");
        },function(){
            $(this).removeClass("btu3_0426_hover");
        });
        $(".btu4_0426").hover(function(){
            $(this).addClass("btu4_0426_hover");
        },function(){
            $(this).removeClass("btu4_0426_hover");
        })
    }else if (navigator.userAgent.indexOf('Opera') >= 0){
        $(".btu2_0426").hover(function(){
            $(this).addClass("btu2_0426_hover");
        },function(){
            $(this).removeClass("btu2_0426_hover");
        });
		$(".btu3_0426").hover(function(){
            $(this).addClass("btu3_0426_hover");
        },function(){
            $(this).removeClass("btu3_0426_hover");
        });
        $(".btu4_0426").hover(function(){
            $(this).addClass("btu4_0426_hover");
        },function(){
            $(this).removeClass("btu4_0426_hover");
        })
    }else if (navigator.userAgent.indexOf('Chrome') >= 0){
        $(".btu2_0426").hover(function(){
            $(this).addClass("btu2_0426_hover");
        },function(){
            $(this).removeClass("btu2_0426_hover");
        });
		$(".btu3_0426").hover(function(){
            $(this).addClass("btu3_0426_hover");
        },function(){
            $(this).removeClass("btu3_0426_hover");
        });
        $(".btu4_0426").hover(function(){
            $(this).addClass("btu4_0426_hover");
        },function(){
            $(this).removeClass("btu4_0426_hover");
        })
    }else if (navigator.userAgent.indexOf('Safari') >= 0){
        $(".btu2_0426").hover(function(){
            $(this).addClass("btu2_0426_hover");
        },function(){
            $(this).removeClass("btu2_0426_hover");
        });
		$(".btu3_0426").hover(function(){
            $(this).addClass("btu3_0426_hover");
        },function(){
            $(this).removeClass("btu3_0426_hover");
        });
        $(".btu4_0426").hover(function(){
            $(this).addClass("btu4_0426_hover");
        },function(){
            $(this).removeClass("btu4_0426_hover");
        })
    }else{
        $(".btu2_0426").hover(function(){
            $(this).addClass("btu_0426_hover2");
        },function(){
            $(this).removeClass("btu_0426_hover2");
        });
		$(".btu3_0426").hover(function(){
            $(this).addClass("btu_0426_hover2");
        },function(){
            $(this).removeClass("btu_0426_hover2");
        });

        $(".btu4_0426").hover(function(){
            $(this).addClass("btu_0426_hover2");
        },function(){
            $(this).removeClass("btu_0426_hover2");
        })
    }
});