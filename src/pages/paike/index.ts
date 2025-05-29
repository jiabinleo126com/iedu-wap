import './index.less';

$(".menu-4205a488").on("click", function (e) {
    console.log(e.target)
    if (e.target == this) {
        $(this).hide()
    }
})
$(".menu-btn").on("click", function (e) {
    e.stopPropagation();
    $(".menu-4205a488").toggle();
})