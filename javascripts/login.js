$(function(){
    var change_state = 0;
    $(".change").click(function(){
        if (change_state == 0) {
            change_state++;
            $(".login_main").eq(0).hide();
            $(".login_main").eq(1).show();
        }
        else {
            change_state--;
            $(".login_main").eq(0).show();
            $(".login_main").eq(1).hide();
        }
    })
})