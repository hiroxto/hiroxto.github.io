(function() {
  $(function() {
    return $(".to-top").click(function() {
      $("body, html").animate({
        scrollTop: 0
      }, 400);
      return false;
    });
  });

}).call(this);

//# sourceMappingURL=.map/to-top.js.map
