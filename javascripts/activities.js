$(function(){
    var acts_state = 0;
    $(".user_acts").find("li").on('click',function(){
        if (!$(this).hasClass("selected")) {
            $(this).parent().children(".selected").removeClass("selected");
            $(this).addClass("selected");
            $("#activity_main").children(".show").removeClass("show");
            $("#activity_main").find(".acts_main").eq($(this).index()).addClass("show");
        };
    })
})