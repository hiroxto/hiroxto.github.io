"use strict";

$(() => {
    $(".to-top").click(() => {
        $("body, html").animate({scrollTop: 0}, 400);
        return false;
    });
});
