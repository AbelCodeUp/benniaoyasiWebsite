    /*弹窗弹出*/
    function smy_popup(e1,e2,e3,num){
        $(e1).show();
        $(e2).eq(num).addClass(e3);
    }
    /*左按钮*/
    function smy_popup_pre(e1,e2,e3){
        var smy_popup_now=$(e2).index();
        //alert(smy_popup_now);
        if(smy_popup_now==0){
            smy_popup_now=$(e1).last().index()+1;
        }
        $(e1).removeClass(e3);
        $(e1).eq(smy_popup_now-1).addClass(e3);
    }
    /*右按钮*/
    function smy_popup_next(e1,e2,e3){
        var smy_popup_now=$(e2).index();
        //alert(smy_popup_now);
        if(smy_popup_now==$(e1).last().index()){
            smy_popup_now=-1
        }
        $(e1).removeClass(e3);
        $(e1).eq(smy_popup_now+1).addClass(e3);
    }
    /*关闭弹窗*/
    $(".smy_popup_close").click(function(){
        $(".smy_popup_1").hide();
        $(".smy_popup_2").hide();
        $(".smy_popup_0").hide();
        $(".smy_popup_item").removeClass("smy_popup_disp");
        $(".smy_popup_item2").removeClass("smy_popup_disp2");
        $(".smy_popup_item0").removeClass("smy_popup_disp0");
    });
    /*视频播放*/
    function video_what(id){
        $(".video_box").show();
        var videoid='http://mobile.gogo-talk.com/video/'+id+'.mp4';
        $("#video").attr("src",videoid);
    }
    /*关闭视频*/
    $(".video_box_close").click(function(){
        $(".video_box").hide();
        $("#video").attr("src",'');
    });