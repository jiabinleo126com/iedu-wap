import './index.less';

$(".c1332076-list").on("click", "ul>li>a", function () {
    const child = $(this).next();
    child.parent().siblings().find(".child").height(0)
    if (child.height() === 0) {
        child.height(child.find("ol").height());
    } else {
        child.height(0);
    }
})
$(".d81c7d65").on("click", ".left", function () {
    $(".c1332076").width("100%")
})
$(".c1332076").on("click", ".c1332076-mask", function (e) {
    if (e.target === this) {
        $(".c1332076").width(0)
    }
})
$(".c1332076").on("click", ".c1332076-close", function (e) {
    $(".c1332076").width(0)
})