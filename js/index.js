/**
 * Created by Xzp on 2018/7/12.
 */
//“客户与伙伴”页签切换
$("#tab2").click(function() {
    $(this).addClass("currentSelect");
    $(".tab2-caseDetail").css("display", "block");
    $("#tab1").removeClass("currentSelect");
    $(".tab1-caseDetail").css("display", "none");
    $("#tab3").removeClass("currentSelect");
    $(".tab3-caseDetail").css("display", "none");
    $("#tab4").removeClass("currentSelect");
    $(".tab4-caseDetail").css("display", "none");
});
$("#tab3").click(function() {
    $(this).addClass("currentSelect");
    $(".tab3-caseDetail").css("display", "block");
    $("#tab1").removeClass("currentSelect");
    $(".tab1-caseDetail").css("display", "none");
    $("#tab2").removeClass("currentSelect");
    $(".tab2-caseDetail").css("display", "none");
    $("#tab4").removeClass("currentSelect");
    $(".tab4-caseDetail").css("display", "none");
});
$("#tab4").click(function() {
    $(this).addClass("currentSelect");
    $(".tab4-caseDetail").css("display", "block");
    $("#tab1").removeClass("currentSelect");
    $(".tab1-caseDetail").css("display", "none");
    $("#tab2").removeClass("currentSelect");
    $(".tab2-caseDetail").css("display", "none");
    $("#tab3").removeClass("currentSelect");
    $(".tab3-caseDetail").css("display", "none");
});
$("#tab1").click(function() {
    $(this).addClass("currentSelect");
    $(".tab1-caseDetail").css("display", "block");
    $("#tab4").removeClass("currentSelect");
    $(".tab4-caseDetail").css("display", "none");
    $("#tab2").removeClass("currentSelect");
    $(".tab2-caseDetail").css("display", "none");
    $("#tab3").removeClass("currentSelect");
    $(".tab3-caseDetail").css("display", "none");
});

//“关于米弘”页签切换
$("#tab5").click(function() {
    $(this).addClass("currentSelect");
    $(".tab5-team-content").css("display", "block");
    $("#tab6").removeClass("currentSelect");
    $(".tab6-team-content").css("display", "none");
    $("#tab7").removeClass("currentSelect");
    $(".tab7-team-content").css("display", "none");
});
$("#tab6").click(function() {
    $(this).addClass("currentSelect");
    $(".tab6-team-content").css("display", "block");
    $("#tab5").removeClass("currentSelect");
    $(".tab5-team-content").css("display", "none");
    $("#tab7").removeClass("currentSelect");
    $(".tab7-team-content").css("display", "none");
});
$("#tab7").click(function() {
    $(this).addClass("currentSelect");
    $(".tab7-team-content").css("display", "block");
    $("#tab5").removeClass("currentSelect");
    $(".tab5-team-content").css("display", "none");
    $("#tab6").removeClass("currentSelect");
    $(".tab6-team-content").css("display", "none");
});

