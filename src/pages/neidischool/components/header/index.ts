import './index.less';

$(".d0ed00cd .menu-btn").on("click", function () {
    if ($(".d0ed00cd .nav_list").height() == 0) {
        $(".d0ed00cd .nav_list").height($(".d0ed00cd .nav_list ul").height());
    } else {
        $(".d0ed00cd .nav_list").height(0);
    }
});
$("body").on("click", function (e) {
    if (!$(e.target).closest(".d0ed00cd .menu-btn").length && !$(e.target).closest(".d0ed00cd .nav_list").length) {
        $(".d0ed00cd .nav_list").height(0);
    }
})