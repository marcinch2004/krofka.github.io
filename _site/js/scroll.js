! function (o) {
    "use strict";
    o(".page-scroll").bind("click", function (t) {
        var l = o(this);
        o("html, body").stop().animate({
            scrollTop: o(l.attr("href")).offset().top
        }, 1250, "easeInOutExpo"), t.preventDefault()
    })
}(jQuery);