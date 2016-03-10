(function() {
  $(function() {
    return $.getJSON("https://api.github.com/users/Hiroto-K/repos", {
      per_page: "100"
    }, function(data, status, xhr) {
      if (status === "success") {
        $(".repo-count").html(data.length);
        return data.forEach(function(obj) {
          $(".repo-list").append("<a href=\"" + obj.html_url + "\" class=\"list-group-item\">" + obj.full_name + "</a>");
          if (obj.has_pages) {
            return $(".pages-list").append("<a href=\"https://hiroto-k.github.io/" + obj.name + "/\" class=\"list-group-item\">" + obj.full_name + "</a>");
          }
        });
      } else {
        console.log(status);
        $(".github-main").hide;
        return $(".github-error").show;
      }
    });
  });

}).call(this);

//# sourceMappingURL=.map/get-repo.js.map
