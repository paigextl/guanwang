/**
 * Created by Xzp on 2018/7/13.
 */
//案例页签切换
$("#tab2").click(function() {
    $(this).addClass("currentSelect");
    $(".tab2-case_bd").css("display", "block");
    $("#tab1").removeClass("currentSelect");
    $(".tab1-case_bd").css("display", "none");
    $("#tab3").removeClass("currentSelect");
    $(".tab3-case_bd").css("display", "none");
    $("#tab4").removeClass("currentSelect");
    $(".tab4-case_bd").css("display", "none");
});
$("#tab3").click(function() {
    $(this).addClass("currentSelect");
    $(".tab3-case_bd").css("display", "block");
    $("#tab1").removeClass("currentSelect");
    $(".tab1-case_bd").css("display", "none");
    $("#tab2").removeClass("currentSelect");
    $(".tab2-case_bd").css("display", "none");
    $("#tab4").removeClass("currentSelect");
    $(".tab4-case_bd").css("display", "none");
});
$("#tab4").click(function() {
    $(this).addClass("currentSelect");
    $(".tab4-case_bd").css("display", "block");
    $("#tab1").removeClass("currentSelect");
    $(".tab1-case_bd").css("display", "none");
    $("#tab2").removeClass("currentSelect");
    $(".tab2-case_bd").css("display", "none");
    $("#tab3").removeClass("currentSelect");
    $(".tab3-case_bd").css("display", "none");
});
$("#tab1").click(function() {
    $(this).addClass("currentSelect");
    $(".tab1-case_bd").css("display", "block");
    $("#tab4").removeClass("currentSelect");
    $(".tab4-case_bd").css("display", "none");
    $("#tab2").removeClass("currentSelect");
    $(".tab2-case_bd").css("display", "none");
    $("#tab3").removeClass("currentSelect");
    $(".tab3-case_bd").css("display", "none");
});

//动画
$(function(){
    $(".main-container").css("transform","translate(0,0)")
});