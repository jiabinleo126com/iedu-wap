import './index.less';

declare const Swiper: any;

if ($(".menu-6166d557").length) {
    var index = new Swiper('.menu-6166d557', {
        loop: false,
        autoplay: false,
        slidesPerView: 3.5,
        spaceBetween: 12,
        on: {
            click: function (e) {
                $('html, body').animate({
                    scrollTop: $('#' + $(e.target.parentElement).attr("href").slice(1)).offset().top
                }, 500)
            }
        }
    });
}