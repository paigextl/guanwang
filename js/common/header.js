/**
 * Created by Xzp on 2018/7/10.
 */
//导航栏子菜单显示
$(".navigationBar li a").mouseover(function () {
    $(this).css("color", "#fff");
}).mouseout(function () {
    $(this).css("color", "#c0c0c0");
});

$("#core").mouseover(function () {
        $(this).css("background-color", "#2a2b2c");
        $("#coreDropdown").show();
        $("#coreDropdown").css("background-color", "#2a2b2c");
        $("#coreDropdown a").css("color", "#fff");
    })
    .mouseout(function (e) {
        $(this).css("background-color", "#000103");
        $("#coreDropdown").hide();
    });

$("#coreDropdown li").mouseover(function () {
    $(this).css({"border": "1px solid #2a2b2c", "background-color": "#000103"});
}).mouseout(function () {
    $(this).css({"border": "1px solid #2a2b2c", "background-color": "#2a2b2c"});
});

$("#join").mouseover(function () {
        $(this).css("background-color", "#2a2b2c");
        $("#joinUsDropdown").show();
        $("#joinUsDropdown").css("background-color", "#2a2b2c");
        $("#joinUsDropdown a").css("color", "#fff");
    })
    .mouseout(function () {
        $(this).css("background-color", "#000103");
        $("#joinUsDropdown").hide();
    });

$("#join li").mouseover(function () {
    $(this).css({"border": "1px solid #2a2b2c", "background-color": "#000103"});
}).mouseout(function () {
    $(this).css({"border": "1px solid #2a2b2c", "background-color": "#2a2b2c"});
});
