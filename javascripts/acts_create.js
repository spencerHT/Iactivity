$(function(){
    function all(node){
        var type = $(node).parent().parent(".block").attr("data-type");
        if (type) {
            if (parseInt($(node).attr("data-role")) % 1000 == 0) {
                $(node).parent().parent(".block").find("p").removeClass("z-select");
                $(node).addClass("z-select");
            }
            else {
                $(node).parent().parent(".block").find("p").eq(0).removeClass("z-select");
            }
           
        };
    }
    $("#sort_part").find("p").click(function(){
        console.log(this);
        if(!$(this).hasClass("z-select")) {
            $(this).addClass("z-select");
            all(this);      
        }
        else {
            $(this).removeClass("z-select");
        }
        var d=[],i=0,j=0;
        $(".block").each(function(){
            d[i] = [];
            $(this).find(".z-select").each(function(){
                d[i][j] = $(this).attr("data-role");
                j++;
            })
            j=0;
            i++;
        })
        // console.log(d);
    })


    function img_init(main,main_x,main_y) {
        var par = main.parent();
        var x = main_x || main.width();
        var y = main_y || main.height();
        var par_x = par[0].offsetWidth;
        var par_y = par[0].offsetHeight;
        var left_,top_;
        par.children(".main").width(x).height(y);
        par.children(".top").width(x).height(0);
        par.children(".right").width(par_x - x).height(par_y);
        par.children(".bottom").width(x).height(par_y - y);
        par.children(".left").width(0).height(par_y);
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
                if (left_ >= 0 && left_ <= par_x - x) {
                    $(this).css("left", left_);
                    par.children(".right").width(par_x - x - left_);
                    par.children(".left").width(left_);
                    par.children(".top").css("left", left_);
                    par.children(".bottom").css("left", left_);
                    par.children(".main").css("left", left_);
                }
                if (top_ >= 0 && top_ <=  par_y - y) {
                    par.children(".main").css("top", top_);
                    par.children(".top").height(top_);
                    par.children(".bottom").height(par_y - y - top_);
                }
            };
        }).on("mouseup",function(){
            start = false;
            // console.log(left_);
            // console.log(top_);
        })
    }
    $("#act_pic").on("change",function(){
        var data = "images/default_header.jpg";
        $(".img_manage").show();
        $("#big_img").attr("src",data);
        $("#big_img")[0].onload = function(){
            img_init($(this),200,150);
        }
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
        //     var data = new FormData($("#pic")[0])
        //     $.ajax({
        //         url: '' ,
        //         type: 'POST',
        //         data: data,
        //         dataType: "text",
        //         async: false,
        //         success: function (data) {
        //             if (data){
        //             }
        //         },
        //         error: function (data) {
        //             alert(data);
        //         }
        //     });
        // }
    })
    $(".add").click(function(){
        var num = $(this).parent().find("input").length;
        $("<input type='text' placeholder='问题' name='q"+(num+1)+"'>").insertBefore($(this))
    });
    $(".lines_right").each(function(){
        $(this).find("a").click(function(){
            if ($(this).hasClass("up")) {
                $(this).parent().parent(".lines").find(".lines_mid").animate({"height":0},200);
                $(this).removeClass("up");
                $(this).addClass("down");
            }
            else if($(this).hasClass("down")) {
                $(this).parent().parent(".lines").find(".lines_mid").css("height","auto");
                $(this).removeClass("down");
                $(this).addClass("up");

            }
        })
    })
})