/**
 * Created by Xzp on 2018/7/10.
 */
jQuery(".slideBox").slide({
    mainCell: ".bd ul", titCell: ".hd ul", effect: "fold", autoPage: "<li></li>", autoPlay: true, interTime: 5000,
    endFun: function (i, c, s) {
        var curItem = $(".bd li", s).eq(i);
        curItem.find("dd").each(function (j) {
            // j*250，每行文字延迟执行时间，按需修改；同时这里会把playIn的值写入animate动画函数
            $(this).stop(1, 1).delay(j * 250).animate(eval('(' + $(this).attr("palyIn") + ')'));
        });
        $(".bd li", s).not(curItem).find("dd").each(function (j) {
            $(this).stop(1, 1).animate(eval('(' + $(this).attr("palyOut") + ')'))
        });
    }
});