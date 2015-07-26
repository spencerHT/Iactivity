$(function(){
    $(".file").click(function(){
        $("#for_pic").click();
    })
    var special = new RegExp(/[`~!@#$%^&*()_\-——+<>?:"{},.\/;'[\]]/im);
    var pwd = new RegExp(/^[A-Za-z0-9]+$/);
    var chinese = new RegExp("[\u4e00-\u9fa5]");
    var email = new RegExp(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    var ID = new RegExp(/^\d{18}$/);
    function show_false(main,word) {
        main.parent().find("p.false").html(word);
        main.parent().find("p.false").show();
    }

    function show_true(main) {
        main.parent().find("p.true").show();
    }

    function hide_return(main) {
        main.parent().find("p.false").hide();
        main.parent().find("p.true").hide();
    }

    $("#org_name").blur(function(){
        var text = $(this).val();
        if (!text) {
            show_false($(this),"请填写用户名！");
        }
        else if (special.test(text)) {
            show_false($(this),"请不要在用户名内添加特殊字符！");
        }
        else if (text.length >= 10) {
            show_false($(this),"请减少用户名长度至10个字符！");
        }
        else {
            show_true($(this));
        }
    }).focus(function(){
        hide_return($(this));
    });

    $("#org_pwd").blur(function(){
        var text = $(this).val();
        var pwd_after = $("#org_pwd_").val();
        if (!text) {
            show_false($(this),"请填写密码！");
        }
        else if (!pwd.test(text)) {
            show_false($(this),"密码内只能包含数字和字母！");
        }
        else if (text.length < 6) {
            show_false($(this),"密码至少为6位！");
        }
        else {
            show_true($(this));
        }
        if (text == pwd_after) {
            hide_return($("#org_pwd_"));
            show_true($("#org_pwd_"))
        };
    }).focus(function(){
        hide_return($(this));
    });

    $("#org_pwd_").blur(function(){
        var text = $(this).val();
        var pwd_before = $("#org_pwd").val();
        if (!text) {
            show_false($(this),"请填写密码！");
        }
        else if (!pwd.test(text)) {
            show_false($(this),"密码内只能包含数字和字母！");
        }
        else if (text.length < 6) {
            show_false($(this),"密码至少为6位！");
        }
        else if (text != pwd_before) {
            show_false($(this),"密码不一致！");
        }
        else {
            show_true($(this));
        }
    }).focus(function(){
        hide_return($(this));
    });

    $("#org_header").blur(function(){
        var text = $(this).val();
        if (!text) {
            show_false($(this),"请填写负责人姓名！");
        }
        else if (!chinese.test(text) || special.test(text) || !pwd.test(text)) {
            show_false($(this),"请填写中文名！");
        }
        else if (text.length > 4 || text.length < 2 ) {
            show_false($(this),"请填写正确长度的姓名！");
        }
        else {
            show_true($(this));
        }
    }).focus(function(){
        hide_return($(this));
    });

    $("#org_email").blur(function(){
        var text = $(this).val();
        if (!text) {
            show_false($(this),"请填写常用邮箱！");
        }
        else if (!email.test(text)) {
            show_false($(this),"请填写正确的邮箱！");
        }
        else {
            show_true($(this));
        }
    }).focus(function(){
        hide_return($(this));
    });

    $("#org_ID").blur(function(){
        var text = $(this).val();
        if (!text) {
            show_false($(this),"请填写身份证号！");
        }
        else if (!ID.test(text)) {
            show_false($(this),"请填写正确的身份证号！");
        }
        else {
            show_true($(this));
        }
    }).focus(function(){
        hide_return($(this));
    });

    $("#org_pic").on("change",function(){
        hide_return($(this));
        var text = $(this).val();
        var parts = text.split(".");
        var suffix = parts[parts.length-1];
        var max_size = 2*1024*1024;
        var ua = window.navigator.userAgent;
        if (ua.indexOf("MSIE")>=1) {
            var obj_img = document.getElementById('tempimg');
            obj_img.src=$(this)[0].value;  
            var filesize = obj_img.fileSize;
        }
        else {
            var filesize = $(this)[0].files[0].size;
        }
        if (!text) {
            show_false($(this),"请提交身份证明图片！");
        }
        else if (suffix != "png" && suffix != "jpg" && suffix != "jpqg") {
            show_false($(this),"请提交正确的身份证明图片（png，jpg，jpeg）！");
        }
        else if (filesize > max_size){
            show_false($(this),"您提交的图片过大！");
        }
        else {
            show_true($(this));
        }
    });

    $("#org_register").submit(function(){
        var false_n = 0;

        for (var i = 0; i < $(".true").length; i++){
            if ($(".true").eq(i).css("display") != "block") {
                false_n++;
                show_false($(".true").eq(i),"请填写！");
            }
        }
        if (!false_n) {
            var formData = new FormData($("#org_register")[0]);
            $.ajax({
                url: '' ,
                type: 'POST',
                data: formData,
                async: false,
                success: function (data) {
                    if (data){
                        $(".box_bg").show();
                    }
                },
                error: function (data) {
                    alert(data);
                }
            });
        }
        else {
            return false;
        }
        
    })
})