$ ->
  $.getJSON "https://api.github.com/users/Hiroto-K/repos", {per_page: "100"}, (data, status, xhr) ->
    if status is "success"
      $(".repo-count").html(data.length)
      data.forEach (obj) ->
        $(".repo-list").append("<a href=\"#{obj.html_url}\" class=\"list-group-item\">#{obj.full_name}</a>")
        $(".pages-list").append("<a href=\"https://hiroto-k.github.io/#{obj.name}/\" class=\"list-group-item\">#{obj.full_name}</a>") if obj.has_pages
    else
      console.log(status)
      $(".github-main").hide
      $(".github-error").show