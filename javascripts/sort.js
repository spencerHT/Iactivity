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
})