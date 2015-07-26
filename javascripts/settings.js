$(function(){
    $(".upload").click(function(){
        $("label[for='user_head']").click();
    });
    function show_false(main,word) {
        main.parent().find("p.false").html(word);
        main.parent().find("p.false").show();
    };

    function hide_return(main) {
        main.parent().find("p.false").hide();
    };

    function img_init(main,delta,preview_out) {
        var par = main.parent();
        var x = main.width();
        var y = main.height();
        var left_,top_;
        var preview = preview_out.width();
        if (x >= y) {
            var main = y - delta;
            par.children(".main").width(y-delta).height(y-delta);
            par.children(".top").width(y-delta).height(0);
            par.children(".right").width(x-y+delta).height(y);
            par.children(".bottom").width(y-delta).height(delta);
            par.children(".left").width(0).height(y);
        }
        else {
            var main = x - delta;
            par.children(".main").width(x-delta).height(x-delta);
            par.children(".top").width(x-delta).height(0);
            par.children(".right").width(delta).height(y);
            par.children(".bottom").width(x-delta).height(y-x+delta);
            par.children(".left").width(0).height(y);
        }
        var px = main / preview;
        preview_out.children("img").width(x / px);
        preview_out.children("img").height(y / px);        
        var move_x,move_y,move_x_,move_y_,start = false,left,top;
        par.children(".main").on("mousedown",function(e){
            start = true;
            var e = e || window.event;
            move_x = e.clientX;
            move_y = e.clientY;
            left = parseInt($(this).css("left").slice(0,-2));
            top = parseInt($(this).css("top").slice(0,-2));
        })
        $(document).on("mousemove",function(e){
            if (start) {
                var e = e || window.event;
                move_x_ = e.clientX;
                move_y_ = e.clientY;
                left_ = left + move_x_ - move_x;
                top_ = top + move_y_ - move_y;
                if (left_ >= 0 && left_ <= x-main) {
                    $(this).css("left", left_);
                    par.children(".right").width(delta - left_);
                    par.children(".left").width(left_);
                    par.children(".top").css("left", left_);
                    par.children(".bottom").css("left", left_);
                    preview_out.children("img").css("left", - left_ / px);
                }
                if (top_ >= 0 && top_ <= y-main) {
                    $(this).css("top", top_);
                    par.children(".top").height(top_);
                    par.children(".bottom").height(delta - top_);
                    preview_out.children("img").css("top", - top_ / px);
                }
            };
        }).on("mouseup",function(){
            start = false;
            // console.log(left_);
            // console.log(top_);
        })
    }
    $("#user_head").on("change",function(){
        var data = "images/default_header.jpg";
        $(".img_manage").show();
        $("#big_img").attr("src",data);
        $(".preview").children("img").attr("src",data);
        $("#big_img")[0].onload = function(){
            var delta = 30;
            img_init($(this),delta,$(".preview"));
        }
        // hide_return($(this));
        // var text = $(this).val();
        // var parts = text.split(".");
        // var suffix = parts[parts.length-1];
        // var max_size = 2*1024*1024;
        // var ua = window.navigator.userAgent;
        // if (ua.indexOf("MSIE")>=1) {
        //     var obj_img = document.getElementById('tempimg');
        //     obj_img.src=$(this)[0].value;  
        //     var filesize = obj_img.fileSize;
        // }
        // else {
        //     var filesize = $(this)[0].files[0].size;
        // }
        // if (suffix != "png" && suffix != "jpg" && suffix != "jpqg") {
        //     show_false($(this),"请上传正确的图片（png，jpg，jpeg）！");
        // }
        // else if (filesize > max_size){
        //     show_false($(this),"您提交的图片过大！");
        // }
        // else {
        //     var data = new FormData($("#head_pic")[0])
        //     $.ajax({
        //         url: '' ,
        //         type: 'POST',
        //         data: data,
        //         dataType: "text",
        //         async: false,
        //         success: function (data) {
        //             if (data){
        //                 $("#big_img").show();
        //                 $("#big_img").attr("src",data);
        //             }
        //         },
        //         error: function (data) {
        //             alert(data);
        //         }
        //     });
        // }
    })
})