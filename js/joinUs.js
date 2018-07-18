/**
 *
 * Created by Xzp on 2018/7/17.
 */
//职位切换
$(".col-job a").mouseover(function () {
        $(this).addClass("border-style")
    })
    .mouseout(function () {
        $(this).removeClass("border-style")
    });

//职位详情切换
$(function () {
    $(".job2, .job3").addClass("job-hide");
});
$("#job2").click(function () {
    $(".job1, .job3").addClass("job-hide");
    $(".job2").removeClass("job-hide");
});
$("#job3").click(function () {
    $(".job1, .job2").addClass("job-hide");
    $(".job3").removeClass("job-hide");
});
$("#job1").click(function () {
    $(".job2, .job3").addClass("job-hide");
    $(".job1").removeClass("job-hide");
});

//出厂动画
$(function () {
    $(".col-job, .col-jobDetail, .banner-container img").css("transform", "translate(0,0)");
});


