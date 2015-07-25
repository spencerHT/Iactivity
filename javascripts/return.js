$(function(){
    $("#return_main").submit(function(){
        var text_return = $(this).find("textarea").val();
        if (!text_return) return false;
        $.ajax({
            type:"POST",
            url:"",
            async:false,
            data:{"text_return":text_return},
            dataType:"json",
            success:function(data){
                if (data) {
                    $(".box_bg").show();
                    setTimeout(function(){
                        location.href = "";
                    },3000);
                    return false;
                };
            }
        })
    }) 
})