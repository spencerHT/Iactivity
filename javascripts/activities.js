$(function(){
    // 关注活动
    $(".share").find(".interest_left").click(function(){
        var item = $(this).parent();

        // 点击为亮时点击change为false;
        if ($(this).find(".heart").hasClass("light")) {
            var change = false;
        }
        else {
            var change = true;
        }
        $.ajax({
            type:"POST",
            url:"",
            async:false,
            data:{"change":change},
            dataType:"json",
            success:function(data){
                if (data) {
                    if (change) {
                        item.find(".heart").addClass("light");
                        var lights = Number(item.find(".interest_right").text());
                        item.find(".interest_right").text(++lights);
                        item.find("p.word").text("已关注");
                    }
                    else {
                        item.find(".heart").removeClass("light");
                        var lights = Number(item.find(".interest_right").text());
                        item.find(".interest_right").text(--lights);
                        item.find("p.word").text("关注");
                    }
                };
            }
        })
    });
    
    // 关注发布者
    $(".act_right").find(".interest_left").click(function(){
        var item = $(this).parent();
        // 点击为亮时点击change为false;
        if ($(this).find(".heart").hasClass("light")) {
            var change = false;
        }
        else {
            var change = true;
        }
        $.ajax({
            type:"POST",
            url:"",
            async:false,
            data:{"change":change},
            dataType:"json",
            success:function(data){
                if (data) {
                    if (change) {
                        item.find(".heart").addClass("light");
                        var lights = Number(item.find(".interest_right").text());
                        item.find(".interest_right").text(++lights);
                        item.find("p.word").text("已关注");
                    }
                    else {
                        item.find(".heart").removeClass("light");
                        var lights = Number(item.find(".interest_right").text());
                        item.find(".interest_right").text(--lights);
                        item.find("p.word").text("关注");
                    }
                };
            }
        })
    });

    // 活动介绍，已参加人员切换
    $(".tabs").find("li").click(function(){
        if (!$(this).hasClass("selected")) {
            $(this).parent().find(".selected").removeClass("selected");
            $(this).addClass("selected");
            var index = $(this).index();
            console.log(index);
            $(".introduce").find(".show").removeClass("show");
            $(".introduce").find(".tabs_main").eq(index).addClass("show");
        };
    })

    $("#enroll").click(function(){
        $(".entry_form_bg").show();
        $("html,body").animate({"scrollTop":"234px"},200);
    })

    $(".return").click(function(){
        $(this).next(".sub_form").show();
        $(this).hide();
    });
    $(".sub_form").submit(function(){
        var text = $(this).find("textarea").val();
        if (!text) {
            var list = $(this).parent().attr("data-list");
            $.ajax({
                type:"POST",
                url:"",
                async:false,
                data:{"text":text,"list":list},
                dataType:"json",
                success:function(data){
                    if (data) {
                    };
                }
            })
        }
        else {
            return false;
        }
    })
})