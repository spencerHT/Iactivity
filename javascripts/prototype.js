$(function(){
    $(".g-entered").mouseenter(function(){
        $(".g-right_list").animate({"height":"156px"},500);
    }).mouseleave(function(){
        $(".g-right_list").animate({"height":0},500);
    })
    var g_block4 = false; // true为显示状态，false为非显示状态。 
    var hide;
    $(".g-block4").click(function(){
        if(g_block4) {
            $("ul.dots_ul").hide();
            $(".triangle_top").hide();
        }
        else {
            $("ul.dots_ul").show();
            $(".triangle_top").show();
            hide = setTimeout(function(){$("ul.dots_ul").hide();$(".triangle_top").hide();},3000);
        }
    });
    $("ul.dots_ul").mouseover(function(){
        window.clearTimeout(hide);
    }).mouseleave(function(){
        hide = setTimeout(function(){$("ul.dots_ul").hide();$(".triangle_top").hide();},3000);
    })

    // index
    $(".act_summry").mouseenter(function(){
        $(".g-mid").find(".down_").hide();
        $(".g-mid").find(".summry_more").css("top","349px")
        $(this).parent().parent().find(".down_").show();
        $(this).parent().find(".summry_more").show().animate({"top":0},200);
    })
    $(".summry_more").mouseleave(function(){
        $(this).parent().parent().find(".down_").hide();
        $(this).parent().find(".summry_more").animate({"top":"349px"},500);
        // $(this).parent().find(".summry_more").delay(1000).hide();
    })

    $(".m-act").mouseenter(function(){
        $(this).addClass("z-select");
    }).mouseleave(function(){
        $(this).removeClass("z-select");
    })

    $(".g-right_list").children("li").eq(1).click(function(){
        $(".g-letter_bg").show();
    })
    $(".done").click(function(){
        $(".g-letter_bg").hide();
    })
    $(".enter").click(function(){
        
    })
})