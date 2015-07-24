$(function(){
    var change_state = 0;
    $(".change").click(function(){
        if (change_state == 0) {
            change_state++;
            $(".login_main").eq(0).addClass("hide");
            $(".login_main").eq(1).removeClass("hide");
        }
        else {
            change_state--;
            $(".login_main").eq(0).removeClass("hide");
            $(".login_main").eq(1).addClass("hide");
        }
    })
    $(".login_main").submit(function(){
        var name = $(this).find("input[type='text']").val();
        var pwd = $(this).find("input[type='password']").val();
        if (!name || !pwd) {
            return false;
        };
    })
})